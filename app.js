class SheetUpApp {
    constructor() {
        this.songs = [];
        this.currentCategory = 'all';
        this.currentSearch = '';
        this.favorites = this.loadFavorites();
        this.currentPdf = null;
        this.currentPage = 1;
        this.totalPages = 1;
        this.zoomLevel = 1;
        this.isStageMode = false;
        this.currentTheme = this.loadTheme();
        
        this.init();
    }

    init() {
        this.loadSongs();
        this.setupEventListeners();
        this.applyTheme();
        this.updateUI();
    }

    // Load songs from external data file
    loadSongs() {
        this.songs = getSongsData();

        // Apply favorite status
        this.songs.forEach(song => {
            song.isFavorite = this.favorites.includes(song.id);
        });
    }

    setupEventListeners() {
        // Theme toggle
        document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());
        
        // Header search functionality
        document.querySelectorAll('.category-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.selectCategory(item.dataset.category);
            });
        });
        
        // PDF modal controls
        document.getElementById('closePdf').addEventListener('click', () => this.closePdfModal());
        document.getElementById('zoomIn').addEventListener('click', () => this.zoomIn());
        document.getElementById('zoomOut').addEventListener('click', () => this.zoomOut());
        document.getElementById('fullscreenToggle').addEventListener('click', () => this.toggleFullscreen());
        document.getElementById('openFullscreen').addEventListener('click', () => this.openInNewTab());
        document.getElementById('favoriteToggle').addEventListener('click', () => this.toggleCurrentFavorite());
        document.getElementById('prevPage').addEventListener('click', () => this.previousPage());
        document.getElementById('nextPage').addEventListener('click', () => this.nextPage());
        
        // Header search functionality
        const headerSearchInput = document.getElementById('headerSearchInput');
        
        headerSearchInput.addEventListener('input', (e) => {
            this.performSearch(e.target.value);
        });
        
        headerSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                headerSearchInput.value = '';
                this.performSearch('');
            }
        });
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Close modal on escape
        document.getElementById('pdfModal').addEventListener('click', (e) => {
            if (e.target.id === 'pdfModal') {
                this.closePdfModal();
            }
        });
    }

    // Theme Management
    loadTheme() {
        const saved = localStorage.getItem('sheetup-theme');
        return saved || 'light';
    }

    saveTheme(theme) {
        localStorage.setItem('sheetup-theme', theme);
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        this.updateThemeIcon();
    }

    toggleTheme() {
        const themes = ['light', 'dark'];
        const currentIndex = themes.indexOf(this.currentTheme);
        this.currentTheme = themes[(currentIndex + 1) % themes.length];
        
        this.applyTheme();
        this.saveTheme(this.currentTheme);
    }

    updateThemeIcon() {
        const icon = document.querySelector('#themeToggle svg');
        const themeIcons = {
            light: '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
            dark: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>'
        };
        icon.innerHTML = themeIcons[this.currentTheme];
    }

    // Search Functionality
    performSearch(query) {
        this.currentSearch = query.toLowerCase();
        this.updateSongList();
    }

    clearSearch() {
        document.getElementById('searchInput').value = '';
        this.currentSearch = '';
        this.updateSongList();
    }

    // Enhanced search with song number priority
    getFilteredSongs() {
        let filtered = this.songs;
        
        // Filter by category
        if (this.currentCategory === 'favorites') {
            filtered = filtered.filter(song => song.isFavorite);
        } else if (this.currentCategory !== 'all') {
            filtered = filtered.filter(song => song.category === this.currentCategory);
        }
        
        // Filter by search with enhanced logic
        if (this.currentSearch) {
            const searchTerm = this.currentSearch.trim();
            
            // Check if search is a number (song number)
            const songNumberMatch = searchTerm.match(/^#?(\d+)$/);
            if (songNumberMatch) {
                const songNumber = parseInt(songNumberMatch[1]);
                filtered = filtered.filter(song => song.id === songNumber);
            } else {
                // Regular text search
                filtered = filtered.filter(song => 
                    song.title.toLowerCase().includes(searchTerm) ||
                    song.subtitle.toLowerCase().includes(searchTerm) ||
                    song.category.toLowerCase().includes(searchTerm) ||
                    song.id.toString().includes(searchTerm)
                );
            }
        }
        
        return filtered;
    }

    // Category Management
    selectCategory(category) {
        this.currentCategory = category;
        
        // Update active state
        document.querySelectorAll('.category-item').forEach(item => {
            item.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');
        
        // Update title
        const titles = {
            all: 'All Songs',
            hymns: 'Hymns',
            lyrics: 'Lyrics',
            favorites: 'Favorites'
        };
        document.getElementById('currentCategoryTitle').textContent = titles[category];
        
        this.updateSongList();
    }

    // Favorites Management
    loadFavorites() {
        const saved = localStorage.getItem('sheetup-favorites');
        return saved ? JSON.parse(saved) : [];
    }

    saveFavorites() {
        localStorage.setItem('sheetup-favorites', JSON.stringify(this.favorites));
        this.updateFavoritesCount();
    }

    toggleFavorite(songId) {
        const song = this.songs.find(s => s.id === songId);
        if (!song) return;
        
        song.isFavorite = !song.isFavorite;
        
        if (song.isFavorite) {
            this.favorites.push(songId);
        } else {
            const index = this.favorites.indexOf(songId);
            if (index > -1) {
                this.favorites.splice(index, 1);
            }
        }
        
        this.saveFavorites();
        this.updateSongList();
        this.updateCategoryCounts();
    }

    toggleCurrentFavorite() {
        if (this.currentPdf) {
            this.toggleFavorite(this.currentPdf.id);
            this.updateFavoriteButton();
        }
    }

    updateFavoritesCount() {
        const count = this.favorites.length;
        const countElements = document.querySelectorAll('#favoritesCount');
        countElements.forEach(el => {
            el.textContent = count;
            if (count > 0) {
                el.classList.remove('hidden');
            } else {
                el.classList.add('hidden');
            }
        });
    }

    updateFavoriteButton() {
        const btn = document.getElementById('favoriteToggle');
        if (this.currentPdf && this.currentPdf.isFavorite) {
            btn.classList.add('active');
            btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
        } else {
            btn.classList.remove('active');
            btn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
        }
    }

    toggleFavorite(songId) {
        const song = this.songs.find(s => s.id === songId);
        if (!song) return;
        
        song.isFavorite = !song.isFavorite;
        
        if (song.isFavorite) {
            this.favorites.push(songId);
        } else {
            const index = this.favorites.indexOf(songId);
            if (index > -1) {
                this.favorites.splice(index, 1);
            }
        }
        
        this.saveFavorites();
        this.updateSongList();
        this.updateCategoryCounts();
    }

    toggleCurrentFavorite() {
        if (this.currentPdf) {
            this.toggleFavorite(this.currentPdf.id);
            this.updateFavoriteButton();
        }
    }

    // PDF Viewer
    async openPdfModal(song) {
        // Open PDF in new tab instead of modal
        window.open(song.pdfPath, '_blank');
    }

    closePdfModal() {
        document.getElementById('pdfModal').classList.add('hidden');
        this.currentPdf = null;
        this.currentPage = 1;
        this.zoomLevel = 1;
        document.getElementById('pdfViewer').innerHTML = '';
        
        // Restore controls visibility
        document.querySelector('.pdf-navigation').style.display = 'flex';
        document.getElementById('zoomIn').parentElement.style.display = 'flex';
    }

    async loadPdf(pdfPath) {
        try {
            console.log('Attempting to load PDF:', pdfPath);
            
            // First try iframe method (works better for local files)
            if (await this.tryIframePdf(pdfPath)) {
                return;
            }
            
            // Fallback to PDF.js
            const loadingTask = pdfjsLib.getDocument(pdfPath);
            const pdf = await loadingTask.promise;
            
            console.log('PDF loaded successfully with PDF.js, pages:', pdf.numPages);
            this.totalPages = pdf.numPages;
            this.currentPage = 1;
            this.zoomLevel = 1;
            
            await this.renderPage(pdf, this.currentPage);
            this.updatePageInfo();
            this.updateNavigationButtons();
            this.updateZoomDisplay();
            
        } catch (error) {
            console.error('Error loading PDF:', error);
            console.error('PDF path:', pdfPath);
            // For demo purposes, show a placeholder when PDF doesn't exist
            this.showPdfPlaceholder();
        }
    }

    async tryIframePdf(pdfPath) {
        try {
            const viewer = document.getElementById('pdfViewer');
            viewer.innerHTML = `
                <iframe 
                    src="${pdfPath}" 
                    style="width: 100%; height: 100%; border: none; min-height: 600px;"
                    onload="console.log('PDF loaded via iframe');"
                    onerror="console.error('Failed to load PDF via iframe');"
                ></iframe>
            `;
            
            // Set page info for iframe (we can't get actual page count easily)
            this.totalPages = 1;
            this.currentPage = 1;
            this.updatePageInfo();
            this.updateNavigationButtons();
            
            // Hide PDF-specific controls since iframe has its own
            document.querySelector('.pdf-navigation').style.display = 'none';
            document.getElementById('zoomIn').parentElement.style.display = 'none';
            
            console.log('PDF loaded via iframe successfully');
            return true;
        } catch (error) {
            console.error('Iframe method failed:', error);
            // Show navigation controls again
            document.querySelector('.pdf-navigation').style.display = 'flex';
            document.getElementById('zoomIn').parentElement.style.display = 'flex';
            return false;
        }
    }

    async renderPage(pdf, pageNumber) {
        const page = await pdf.getPage(pageNumber);
        const viewport = page.getViewport({ scale: this.zoomLevel });
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        
        const renderContext = {
            canvasContext: context,
            viewport: viewport
        };
        
        await page.render(renderContext).promise;
        
        const viewer = document.getElementById('pdfViewer');
        viewer.innerHTML = '';
        viewer.appendChild(canvas);
    }

    showPdfPlaceholder() {
        const viewer = document.getElementById('pdfViewer');
        viewer.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: var(--text-secondary);">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 1rem;">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <h3>PDF Preview</h3>
                <p>${this.currentPdf.title}</p>
                <p style="font-size: 0.875rem; margin-top: 0.5rem;">PDF file would be displayed here</p>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 1rem;">Path: ${this.currentPdf.pdfPath}</p>
                <p style="font-size: 0.75rem; color: var(--text-muted); margin-top: 0.5rem;">
                    Note: Due to browser security restrictions, local PDF files may not load directly. 
                    For testing, try running this on a local web server.
                </p>
                <div style="margin-top: 1rem; display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap;">
                    <button onclick="app.testPdfDirectly()" style="padding: 0.5rem 1rem; background: var(--primary-color); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
                        Test PDF.js Loading
                    </button>
                    <button onclick="app.testIframePdf()" style="padding: 0.5rem 1rem; background: var(--secondary-color); color: white; border: none; border-radius: 0.25rem; cursor: pointer;">
                        Test Iframe Loading
                    </button>
                </div>
            </div>
        `;
        
        this.totalPages = 1;
        this.currentPage = 1;
        this.updatePageInfo();
        this.updateNavigationButtons();
    }

    // PDF Navigation
    async nextPage() {
        if (this.currentPage < this.totalPages && this.currentPdf) {
            this.currentPage++;
            try {
                const loadingTask = pdfjsLib.getDocument(this.currentPdf.pdfPath);
                const pdf = await loadingTask.promise;
                await this.renderPage(pdf, this.currentPage);
                this.updatePageInfo();
                this.updateNavigationButtons();
            } catch (error) {
                console.error('Error loading next page:', error);
            }
        }
    }

    async previousPage() {
        if (this.currentPage > 1 && this.currentPdf) {
            this.currentPage--;
            try {
                const loadingTask = pdfjsLib.getDocument(this.currentPdf.pdfPath);
                const pdf = await loadingTask.promise;
                await this.renderPage(pdf, this.currentPage);
                this.updatePageInfo();
                this.updateNavigationButtons();
            } catch (error) {
                console.error('Error loading previous page:', error);
            }
        }
    }

    // Zoom Controls
    zoomIn() {
        if (this.zoomLevel < 3) {
            this.zoomLevel += 0.25;
            this.reloadCurrentPage();
            this.updateZoomDisplay();
        }
    }

    zoomOut() {
        if (this.zoomLevel > 0.5) {
            this.zoomLevel -= 0.25;
            this.reloadCurrentPage();
            this.updateZoomDisplay();
        }
    }

    async reloadCurrentPage() {
        if (this.currentPdf) {
            try {
                const loadingTask = pdfjsLib.getDocument(this.currentPdf.pdfPath);
                const pdf = await loadingTask.promise;
                await this.renderPage(pdf, this.currentPage);
            } catch (error) {
                console.error('Error reloading page:', error);
            }
        }
    }

    // UI Updates
    updatePageInfo() {
        document.getElementById('pageInfo').textContent = `Page ${this.currentPage} of ${this.totalPages}`;
    }

    updateNavigationButtons() {
        document.getElementById('prevPage').disabled = this.currentPage <= 1;
        document.getElementById('nextPage').disabled = this.currentPage >= this.totalPages;
    }

    updateZoomDisplay() {
        document.getElementById('zoomLevel').textContent = `${Math.round(this.zoomLevel * 100)}%`;
    }

    // Fullscreen
    toggleFullscreen() {
        const modal = document.getElementById('pdfModal');
        
        if (!document.fullscreenElement) {
            modal.requestFullscreen().catch(err => {
                console.error('Error attempting to enable fullscreen:', err);
            });
        } else {
            document.exitFullscreen();
        }
    }

    // Open PDF in new tab (clean fullscreen view)
    openInNewTab() {
        if (!this.currentPdf) return;
        
        // Open the PDF in a new tab with clean URL
        const pdfUrl = this.currentPdf.pdfPath;
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    }

    // Keyboard Shortcuts
    handleKeyboard(e) {
        if (e.key === 'Escape') {
            if (!document.getElementById('pdfModal').classList.contains('hidden')) {
                this.closePdfModal();
            }
        }
        
        if (!document.getElementById('pdfModal').classList.contains('hidden')) {
            switch(e.key) {
                case 'ArrowLeft':
                    this.previousPage();
                    break;
                case 'ArrowRight':
                    this.nextPage();
                    break;
                case '+':
                case '=':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.zoomIn();
                    }
                    break;
                case '-':
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault();
                        this.zoomOut();
                    }
                    break;
                case 'f':
                    if (!e.ctrlKey && !e.metaKey) {
                        e.preventDefault();
                        this.openInNewTab();
                    }
                    break;
            }
        }
        
        if (e.key === '/' && !e.target.matches('input')) {
            e.preventDefault();
            this.toggleSearch();
        }
    }

    // UI Rendering
    updateUI() {
        this.updateSongList();
        this.updateCategoryCounts();
        this.updateFavoritesCount();
    }

    updateSongList() {
        const songList = document.getElementById('songList');
        const filteredSongs = this.getFilteredSongs();
        
        document.getElementById('songCount').textContent = `${filteredSongs.length} song${filteredSongs.length !== 1 ? 's' : ''}`;
        
        if (filteredSongs.length === 0) {
            songList.innerHTML = `
                <div class="text-center" style="padding: 3rem; color: var(--text-secondary);">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-bottom: 1rem;">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <h3>No songs found</h3>
                    <p>Try adjusting your search or category filter</p>
                </div>
            `;
            return;
        }
        
        songList.innerHTML = filteredSongs.map(song => `
            <div class="song-item" data-song-id="${song.id}">
                <div class="song-header">
                    <div>
                        <div class="song-title">${song.title}</div>
                        <div class="song-subtitle">${song.subtitle}</div>
                    </div>
                    <span class="song-category">${song.category}</span>
                </div>
                <div class="song-actions">
                    <button class="btn" onclick="app.openPdfModal(${JSON.stringify(song).replace(/"/g, '&quot;')})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                        </svg>
                        Open
                    </button>
                    <button class="btn btn-icon btn-secondary" onclick="app.toggleFavorite(${song.id})" title="${song.isFavorite ? 'Remove from favorites' : 'Add to favorites'}">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="${song.isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        `).join('');
    }

    updateCategoryCounts() {
        const counts = {
            all: this.songs.length,
            hymns: this.songs.filter(s => s.category === 'hymns').length,
            lyrics: this.songs.filter(s => s.category === 'lyrics').length,
            favorites: this.favorites.length
        };
        
        Object.keys(counts).forEach(category => {
            const element = document.getElementById(`${category}Count`);
            if (element) {
                element.textContent = counts[category];
            }
        });
    }

    // Loading States
    showLoading() {
        document.getElementById('loadingOverlay').classList.remove('hidden');
    }

    hideLoading() {
        document.getElementById('loadingOverlay').classList.add('hidden');
    }

    showError(message) {
        alert(message); // In a real app, use a proper toast notification
    }

    // Test PDF loading directly
    async testPdfDirectly() {
        if (!this.currentPdf) return;
        
        try {
            console.log('Testing PDF loading...');
            const response = await fetch(this.currentPdf.pdfPath);
            console.log('Fetch response:', response.status, response.statusText);
            
            if (response.ok) {
                const blob = await response.blob();
                console.log('PDF blob size:', blob.size, 'bytes');
                
                const arrayBuffer = await blob.arrayBuffer();
                const loadingTask = pdfjsLib.getDocument({data: arrayBuffer});
                const pdf = await loadingTask.promise;
                
                console.log('PDF loaded via blob, pages:', pdf.numPages);
                
                // Clear placeholder and render the PDF
                const viewer = document.getElementById('pdfViewer');
                viewer.innerHTML = '';
                
                this.totalPages = pdf.numPages;
                this.currentPage = 1;
                this.zoomLevel = 1;
                
                await this.renderPage(pdf, this.currentPage);
                this.updatePageInfo();
                this.updateNavigationButtons();
                this.updateZoomDisplay();
                
            } else {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            console.error('Test failed:', error);
            alert(`PDF loading test failed: ${error.message}\n\nTry running a local server:\n1. Python: python -m http.server 8000\n2. Node: npx serve .\n3. Live Server extension in VS Code`);
        }
    }

    // Test iframe PDF loading
    async testIframePdf() {
        if (!this.currentPdf) return;
        
        try {
            console.log('Testing iframe PDF loading...');
            const success = await this.tryIframePdf(this.currentPdf.pdfPath);
            
            if (success) {
                console.log('Iframe PDF loading successful!');
                alert('PDF loaded successfully using iframe method!');
            } else {
                alert('Iframe method failed. Try running a local server for better results.');
            }
        } catch (error) {
            console.error('Iframe test failed:', error);
            alert(`Iframe test failed: ${error.message}`);
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new SheetUpApp();
});
