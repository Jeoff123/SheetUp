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
        title: "Ravile Ezhunettu Nee",
        subtitle: "4",
        category: "hymns",
        pdfPath: "pdfs/hymns/h4.pdf",
        isFavorite: false
    },
    {
        id: 5,
        title: "Athmave Nee Unarane",
        subtitle: "5",
        category: "hymns",
        pdfPath: "pdfs/hymns/h5.pdf",
        isFavorite: false
    },
    {
        id: 6,
        title: "En Athmave Unaruka",
        subtitle: "6",
        category: "hymns",
        pdfPath: "pdfs/hymns/h6.pdf",
        isFavorite: false
    },
    {
        id: 7,
        title: "Vannam Bhoomiyin",
        subtitle: "7",
        category: "hymns",
        pdfPath: "pdfs/hymns/h7.pdf",
        isFavorite: false
    },
    {
        id: 8,
        title: "Swarsimhasana Mun Nilkum",
        subtitle: "8",
        category: "hymns",
        pdfPath: "pdfs/hymns/h8.pdf",
        isFavorite: false
    },
    {
        id: 9,
        title: "Kshemmam Ra Nidrashesam",
        subtitle: "9",
        category: "hymns",
        pdfPath: "pdfs/hymns/h9.pdf",
        isFavorite: false
    }
    ,{
        id: 10,
        title: "Mahathwamulla Daivame",
        subtitle: "10",
        category: "hymns",
        pdfPath: "pdfs/hymns/h10.pdf",
        isFavorite: false
    }
    ,{
        id: 11,
        title: "En Athmavin Adithyane",
        subtitle: "11",
        category: "hymns",
        pdfPath: "pdfs/hymns/h11.pdf",
        isFavorite: false
    }
    ,{
        id: 12,
        title: "Ee Pakalil Yenne",
        subtitle: "12",
        category: "hymns",
        pdfPath: "pdfs/hymns/h12.pdf",
        isFavorite: false
    }
    ,{
        id: 13,
        title: "Koode Parka ",
        subtitle: "13",
        category: "hymns",
        pdfPath: "pdfs/hymns/h13.pdf",
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
