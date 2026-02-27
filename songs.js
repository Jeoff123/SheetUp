// Song data for Sheet Up application
// In a production environment, this could be loaded from a JSON API or CMS

const SONGS_DATA = [
    {
        id: 1,
        title: "Adithyan Prabathakale",
        subtitle: "1",
        category: "hymns",
        pdfPath: "pdfs/hymns/h1.pdf",
        isFavorite: false
    },
    {
        id: 2,
        title: "Udichuyernipolitha",
        subtitle: "2",
        category: "hymns",
        pdfPath: "pdfs/hymns/h2.pdf",
        isFavorite: false
    },
    {
        id: 3,
        title: "Sthothram Ravin",
        subtitle: "3",
        category: "hymns",
        pdfPath: "pdfs/hymns/h3.pdf",
        isFavorite: false
    },
    {
        id: 4,
        title: "Here I Am to Worship",
        subtitle: "4",
        category: "lyrics",
        pdfPath: "pdfs/lyrics/here-i-am-to-worship.pdf",
        isFavorite: false
    },
    {
        id: 5,
        title: "Holy Holy Holy",
        subtitle: "5",
        category: "hymns",
        pdfPath: "pdfs/hymns/holy-holy-holy.pdf",
        isFavorite: false
    },
    {
        id: 6,
        title: "10,000 Reasons",
        subtitle: "6",
        category: "lyrics",
        pdfPath: "pdfs/lyrics/10000-reasons.pdf",
        isFavorite: false
    }
];

// Function to get songs data
function getSongsData() {
    return SONGS_DATA;
}

// Function to add new song (for future admin functionality)
function addSong(songData) {
    const newId = Math.max(...SONGS_DATA.map(s => s.id)) + 1;
    const newSong = {
        id: newId,
        ...songData,
        isFavorite: false
    };
    SONGS_DATA.push(newSong);
    return newSong;
}

// Function to update song (for future admin functionality)
function updateSong(id, updates) {
    const songIndex = SONGS_DATA.findIndex(s => s.id === id);
    if (songIndex !== -1) {
        SONGS_DATA[songIndex] = { ...SONGS_DATA[songIndex], ...updates };
        return SONGS_DATA[songIndex];
    }
    return null;
}

// Function to remove song (for future admin functionality)
function removeSong(id) {
    const songIndex = SONGS_DATA.findIndex(s => s.id === id);
    if (songIndex !== -1) {
        const removedSong = SONGS_DATA.splice(songIndex, 1)[0];
        return removedSong;
    }
    return null;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        getSongsData,
        addSong,
        updateSong,
        removeSong,
        SONGS_DATA
    };
}
