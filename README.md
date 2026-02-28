# Sheet Up - Digital Sheet Music Library

A static web-based sheet music library designed for church choir members and worship musicians.

## Features

- 📚 **Organized Categories**: Hymns and Lyrics with easy navigation
- 🔍 **Real-time Search**: Find songs instantly by title or category
- ⭐ **Favorites System**: Mark and access favorite songs quickly
- 📄 **PDF Viewer**: Multi-page PDF viewing with zoom and navigation
- 🌙 **Multiple Themes**: Light and dark modes
- 📱 **Responsive Design**: Works on desktop and mobile devices
- ⚡ **Offline Ready**: Works offline after initial load

## Quick Start

1. **Open the Application**
   Simply open `index.html` in your web browser.

2. **Add Your Sheet Music**
   - Place PDF files in the appropriate folders:
     - `pdfs/hymns/` - Hymn sheet music
     - `pdfs/lyrics/` - Contemporary worship lyrics
   - Update the song data in `app.js` to include your files

3. **Deploy to GitHub Pages**
   - Push the repository to GitHub
   - Enable GitHub Pages in repository settings
   - Select the main branch as source

## File Structure

```
Sheet Up/
├── index.html          # Main application file
├── styles.css          # Styling and themes
├── app.js             # Application logic
├── README.md          # This file
└── pdfs/
    ├── hymns/         # Hymn PDFs
    └── lyrics/        # Lyrics PDFs
```

## Adding Songs

To add new songs to your library:

1. Place the PDF file in the appropriate category folder
2. Update the `songs` array in `app.js`:

```javascript
{
    id: 7,
    title: "Your Song Title",
    subtitle: "Key: G Major",
    category: "hymns", // or "lyrics"
    pdfPath: "pdfs/hymns/your-song.pdf",
    isFavorite: false
}
```

## Usage

### Navigation
- **Categories**: Click on categories in the sidebar to filter songs
- **Search**: Use the search bar (press `/` to toggle) to find songs
- **Favorites**: Click the heart icon to mark songs as favorites

### PDF Viewer
- **Open**: Click "Open Sheet Music" on any song
- **Navigation**: Use arrow buttons or keyboard arrows to navigate pages
- **Zoom**: Use zoom buttons or `Ctrl/Cmd + +/-`
- **Fullscreen**: Click the fullscreen button for distraction-free viewing
- **Close**: Press `Escape` or click the X button

### Keyboard Shortcuts
- `/` - Toggle search
- `Escape` - Close modal or search
- `Arrow Left/Right` - Navigate PDF pages (when viewer is open)
- `Ctrl/Cmd + +/-` - Zoom in/out (when viewer is open)

### Themes
- **Light Mode**: Default bright theme
- **Dark Mode**: Easy on the eyes for extended use

## Customization

### Adding New Categories
1. Create new folder in `pdfs/` directory
2. Add category to the HTML in `index.html`:
```html
<li class="category-item" data-category="your-category">
    <a href="#" class="category-link">
        <span class="category-icon">🎵</span>
        <span class="category-name">Your Category</span>
        <span class="category-count" id="yourCategoryCount">0</span>
    </a>
</li>
```
3. Update the JavaScript to handle the new category

### Styling
- Modify `styles.css` to customize colors, fonts, and layout
- CSS variables are defined at the top for easy theme customization

## Browser Support

- Chrome/Chromium 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **PDF Rendering**: PDF.js library
- **Storage**: LocalStorage for favorites and preferences
- **Hosting**: Static files - works on any web server
- **Offline**: Service Worker ready (can be added for PWA functionality)

## Performance

- Optimized for fast loading
- Lazy loading of PDFs
- Efficient search and filtering
- Minimal memory usage

## Security

- No user data collection
- All data stored locally
- No external dependencies except PDF.js CDN

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source. Feel free to use, modify, and distribute according to your needs.

## Support

For issues and questions:
1. Check this README for common solutions
2. Test in different browsers
3. Verify PDF file paths and formats
4. Check browser console for errors

---

**Sheet Up** - Simplifying digital sheet music for worship teams.
