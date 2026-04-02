// Song data for Sheet Up application
// In a production environment, this could be loaded from a JSON API or CMS

const SONGS_DATA = [
    {
        id: 1,
        title: "Adithyan Prabathakale",
        subtitle: "1",
        category: "hymns",
        pdfPath: "pdfs/hymns/h1.pdf#page=1",
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
    ,{
        id: 14,
        title: "Rapakal Thorum",
        subtitle: "14",
        category: "hymns",
        pdfPath: "pdfs/hymns/h14.pdf",
        isFavorite: false
    }
    ,{
        id: 15,
        title: "Nalloru Rakshaka Enne",
        subtitle: "15",
        category: "hymns",
        pdfPath: "pdfs/hymns/h15.pdf",
        isFavorite: false
    }
    ,{
        id: 16,
        title: "Karunayulla Yeshuve",
        subtitle: "16",
        category: "hymns",
        pdfPath: "pdfs/hymns/h16.pdf",
        isFavorite: false
    }
    ,{
        id: 17,
        title: "Sandhya Sooryasthamana",
        subtitle: "17",
        category: "hymns",
        pdfPath: "pdfs/hymns/h17.pdf",
        isFavorite: false
    }
    ,{
        id: 18,
        title: "Theernu Pakalkalam",
        subtitle: "18",
        category: "hymns",
        pdfPath: "pdfs/hymns/h18.pdf",
        isFavorite: false
    }
    ,{
        id: 19,
        title: "Ennathmave Vazhthuka Nee",
        subtitle: "19",
        category: "hymns",
        pdfPath: "pdfs/hymns/h19.pdf",
        isFavorite: false
    }
    ,{
        id: 20,
        title: "Elavarum Yeshu Namathe",
        subtitle: "20",
        category: "hymns",
        pdfPath: "pdfs/hymns/h20.pdf",
        isFavorite: false
    }
    ,{
        id: 21,
        title: "Yahova Alathe",
        subtitle: "21",
        category: "hymns",
        pdfPath: "pdfs/hymns/h21.pdf",
        isFavorite: false
    }
    ,{
        id: 22,
        title: "Shristipokheyume",
        subtitle: "22",
        category: "hymns",
        pdfPath: "pdfs/hymns/h22.pdf",
        isFavorite: false
    }
    ,{
        id: 23,
        title: "Yeshu Namam Ethra Embam",
        subtitle: "23",
        category: "hymns",
        pdfPath: "pdfs/hymns/h23.pdf",
        isFavorite: false
    }
    ,{
        id: 24,
        title: "Onnumillaykayil",
        subtitle: "24",
        category: "hymns",
        pdfPath: "pdfs/hymns/h24.pdf",
        isFavorite: false
    }
    ,{
        id: 25,
        title: "Sarvathin Rajanam",
        subtitle: "25",
        category: "hymns",
        pdfPath: "pdfs/hymns/h25.pdf",
        isFavorite: false
    }
    ,{
        id: 26,
        title: "Enne Veenda Rakshakante",
        subtitle: "26",
        category: "hymns",
        pdfPath: "pdfs/hymns/h26.pdf",
        isFavorite: false
    }
    ,{
        id: 27,
        title: "Yeshuve Dyanikumbol",
        subtitle: "27",
        category: "hymns",
        pdfPath: "pdfs/hymns/h27.pdf",
        isFavorite: false
    }
    ,{
        id: 28,
        title: "Raksha Raksha Embaswaram",
        subtitle: "28",
        category: "hymns",
        pdfPath: "pdfs/hymns/h28.pdf",
        isFavorite: false
    }
    ,{
        id: 29,
        title: "Ella Janagalum Vareen",
        subtitle: "29",
        category: "hymns",
        pdfPath: "pdfs/hymns/h29.pdf",
        isFavorite: false
    }
    ,{
        id: 30,
        title: "Papathin Vanvishathe",
        subtitle: "30",
        category: "hymns",
        pdfPath: "pdfs/hymns/h30.pdf",
        isFavorite: false
    }
    ,{
        id: 31,
        title: "Vazhtheen Vazhtheen",
        subtitle: "31",
        category: "hymns",
        pdfPath: "pdfs/hymns/h31.pdf",
        isFavorite: false
    }
    ,{
        id: 32,
        title: "Adtbutharajan Yeshuve",
        subtitle: "32",
        category: "hymns",
        pdfPath: "pdfs/hymns/h32.pdf",
        isFavorite: false
    }
    ,{
        id: 33,
        title: "Attidayer Kumbidum",
        subtitle: "33",
        category: "hymns",
        pdfPath: "pdfs/hymns/h33.pdf",
        isFavorite: false
    }
    ,{
        id: 34,
        title: "Vazhthen Dehi",
        subtitle: "34",
        category: "hymns",
        pdfPath: "pdfs/hymns/h34.pdf",
        isFavorite: false
    }
    ,{
        id: 35,
        title: "Dayvathe Sthudika",
        subtitle: "35",
        category: "hymns",
        pdfPath: "pdfs/hymns/h35.pdf",
        isFavorite: false
    } 
    ,{
        id: 36,
        title: "Merthyanami Njanyeshuve",
        subtitle: "36",
        category: "hymns",
        pdfPath: "pdfs/hymns/h36.pdf",
        isFavorite: false
    }
    ,{
        id: 37,
        title: "Karthavine Nam Sthutika",
        subtitle: "37",
        category: "hymns",
        pdfPath: "pdfs/hymns/h37.pdf",
        isFavorite: false
    } 
    ,{
        id: 38,
        title: "Karthavu Varum! Lokavum",
        subtitle: "38",
        category: "hymns",
        pdfPath: "pdfs/hymns/h38.pdf",
        isFavorite: false
    }
    ,{
        id: 39,
        title: "Kandalum Yeshu Varunu",
        subtitle: "39",
        category: "hymns",
        pdfPath: "pdfs/hymns/h39.pdf",
        isFavorite: false
    }
    ,{
        id: 40,
        title: "Kel! Agamanathin Arrpu",
        subtitle: "40",
        category: "hymns",
        pdfPath: "pdfs/hymns/h40.pdf",
        isFavorite: false
    }
    ,{
        id: 41,
        title: "Enne Veendedutha Nathan",
        subtitle: "41",
        category: "hymns",
        pdfPath: "pdfs/hymns/h41.pdf",
        isFavorite: false
    }
    ,{
        id: 42,
        title: "Kartherkahalam",
        subtitle: "42",
        category: "hymns",
        pdfPath: "pdfs/hymns/h42.pdf",
        isFavorite: false
    }
    ,{
        id:43,
        title: "Dvanikum Andyakahalam",
        subtitle: "43",
        category: "hymns",
        pdfPath: "pdfs/hymns/h43.pdf",
        isFavorite: false
    }
    ,{
        id:44,
        title: "Va, Varika Emmanuel",
        subtitle: "44",
        category: "hymns",
        pdfPath: "pdfs/hymns/h44.pdf",
        isFavorite: false
    }
    ,{
        id:45,
        title: "Kalvariyil Enperkaho",
        subtitle: "45",
        category: "hymns",
        pdfPath: "pdfs/hymns/h45.pdf",
        isFavorite: false
    }
    ,{
        id: 46,
        title: "Manavare Reskshichiduvanayi",
        subtitle: "46",
        category: "hymns",
        pdfPath: "pdfs/hymns/h46.pdf",
        isFavorite: false
    }
    ,{
        id: 47,
        title: "Yeshurajan Jenichu",
        subtitle: "47",
        category: "hymns",
        pdfPath: "pdfs/hymns/h47.pdf",
        isFavorite: false
    }
    ,{
        id: 48,
        title: "Yeshu Innu Jenichu",
        subtitle: "48",
        category: "hymns",
        pdfPath: "pdfs/hymns/h48.pdf",
        isFavorite: false
    }
    ,{
        id: 49,
        title: "Bethlehem Nalnagariyil",
        subtitle: "49",
        category: "hymns",
        pdfPath: "pdfs/hymns/h49.pdf",
        isFavorite: false
    }
    ,{
        id: 50,
        title: "Athunathen Kripal",
        subtitle: "50",
        category: "hymns",
        pdfPath: "pdfs/hymns/h50.pdf",
        isFavorite: false
    }   
    ,{
        id:51,
        title: "Viranjodi Vannidin",
        subtitle: "51",
        category: "hymns",
        pdfPath: "pdfs/hymns/h51.pdf",
        isFavorite: false
    }
    ,{
        id: 52,
        title: "Vishvasikale Vaa",
        subtitle: "52",
        category: "hymns",
        pdfPath: "pdfs/hymns/h52.pdf",
        isFavorite: false
    }
    ,{
        id: 53,
        title: "Kelkadoothasalswaram",
        subtitle: "53",
        category: "hymns",
        pdfPath: "pdfs/hymns/h53.pdf",
        isFavorite: false
    }
    ,
    {
        id: 54,
        title: "Rajan Davidooril pandu",
        subtitle: "54",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=1",
        isFavorite: false
    }
    ,
    {
        id: 55,
        title: "Goshale Jathanayone",
        subtitle: "55",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=2",
        isFavorite: false
    }
    ,
    {
        id: 56,
        title: "Padin Embageetham",
        subtitle: "56",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=3",
        isFavorite: false
    }
    ,
    {
        id: 57,
        title: "Christhavare Vandhanekunarin",
        subtitle: "57",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=6",
        isFavorite: false
    }
    ,
    {
        id: 58,
        title: "Adyandamillatha Nadhan",
        subtitle: "58",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=7",
        isFavorite: false
    }
    ,
    {
        id: 59,
        title: "Doorekanum Vellideepam",
        subtitle: "59",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=9",
        isFavorite: false
    }
    ,
    {
        id: 60,
        title: "Aatidayer Rathrikale",
        subtitle: "60",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=10",
        isFavorite: false
    }
    ,
    {
        id: 61,
        title: "Innum Theerum Varshathil",
        subtitle: "61",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=11",
        isFavorite: false
    }
    ,
    {
        id: 62,
        title: "Orandu Koode Kazhinju",
        subtitle: "62",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=12",
        isFavorite: false
    }
    ,
    {
        id: 63,
        title: "Anadyanam Daivame",
        subtitle: "63",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=13",
        isFavorite: false
    }
    ,
    {
        id: 64,
        title: "Puthuvalsharathin",
        subtitle: "64",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=16",
        isFavorite: false
    }
    ,
    {
        id: 65,
        title: "Daivame Ee Andine",
        subtitle: "65",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=17",
        isFavorite: false
    }
    ,
    {
        id: 66,
        title: "Rakshithavin Rakthamadyam",
        subtitle: "66",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=18",
        isFavorite: false
    }
    ,
    {
        id: 67,
        title: "Raksha Nalkum Namathinayi",
        subtitle: "67",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=19",
        isFavorite: false
    }
    ,
    {
        id: 68,
        title: "Yeshu Thante Ganagalku",
        subtitle: "68",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=21",
        isFavorite: false
    }
    ,
    {
        id: 69,
        title: "Unathathil Mahathyam",
        subtitle: "69",
        category: "hymns",
        pdfPath: "Hymns_54_69.pdf#page=23",
        isFavorite: false
    }
    ,
    {
        id: 70,
        title: "Param Andandathone",
        subtitle: "70",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=1",
        isFavorite: false
    }
    ,
    {
        id: 71,
        title: "Utharahimadrikal",
        subtitle: "71",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=2",
        isFavorite: false
    }
    ,
    {
        id: 72,
        title: "Boovil Engum",
        subtitle: "72",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=5",
        isFavorite: false
    }
    ,
    {
        id: 73,
        title: "Nashapapikale Rakshipan",
        subtitle: "73",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=6",
        isFavorite: false
    }
    ,
    {
        id: 74,
        title: "Nalkuka Daivame",
        subtitle: "74",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=9",
        isFavorite: false
    }
    ,
    {
        id: 75,
        title: "Adithyan Udicheedunnu",
        subtitle: "75",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=12",
        isFavorite: false
    }
    ,
    {
        id: 76,
        title: "Enn Nimitham Pokuka",
        subtitle: "76",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=15",
        isFavorite: false
    }
    ,
    {
        id: 77,
        title: "Lokare Rakshipathinu",
        subtitle: "77",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=16",
        isFavorite: false
    }
    ,
    {
        id: 78,
        title: "Nin Swanthanamathinu",
        subtitle: "78",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=18",
        isFavorite: false
    }
    ,
    {
        id: 79,
        title: "Agnjanam Lokathe",
        subtitle: "79",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=20",
        isFavorite: false
    }
    ,
    {
        id: 80,
        title: "Seeyon Rajan Geyaliyaye",
        subtitle: "80",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=21",
        isFavorite: false
    }
    ,
    {
        id: 81,
        title: "Karthave Enne Kopamayi",
        subtitle: "81",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=23",
        isFavorite: false
    }
    ,
    {
        id: 82,
        title: "Annyanaya Enne Yeshu",
        subtitle: "82",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=25",
        isFavorite: false
    }
    ,
    {
        id: 83,
        title: "Yenikayi Cheenthi Nin Raktham",
        subtitle: "83",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=27",
        isFavorite: false
    }
    ,
    {
        id: 84,
        title: "Pilarnoru Paraye",
        subtitle: "84",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=30",
        isFavorite: false
    }
    ,
    {
        id: 85,
        title: "Pisahcu Gadam Lokavum",
        subtitle: "85",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=33",
        isFavorite: false
    }
    ,
    {
        id: 86,
        title: "Yeshu Enn Athmasache",
        subtitle: "86",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=35",
        isFavorite: false
    }
    ,
    {
        id: 87,
        title: "Swargasthapithave",
        subtitle: "87",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=41",
        isFavorite: false
    }
    ,
    {
        id: 88,
        title: "Veshudadaivakalpana",
        subtitle: "88",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=43",
        isFavorite: false
    }
    ,
    {
        id: 89,
        title: "Nee Sheenicho Nee Valanjo",
        subtitle: "89",
        category: "hymns",
        pdfPath: "Hymns_70_89.pdf#page=44",
        isFavorite: false
    }
    ,
    {
        id: 90,
        title: "Daivame Mahapapiyam",
        subtitle: "90",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=1",
        isFavorite: false
    }
    ,
    {
        id: 91,
        title: "Takarna Hridayathingal",
        subtitle: "91",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=3",
        isFavorite: false
    }
    ,
    {
        id: 92,
        title: "Papapashathal Badhan",
        subtitle: "92",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=5",
        isFavorite: false
    }
    ,
    {
        id: 93,
        title: "Njan Varunu Krooshingal",
        subtitle: "93",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=7",
        isFavorite: false
    }
    ,
    {
        id: 94,
        title: "Kaderiyadu Njan",
        subtitle: "94",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=9",
        isFavorite: false
    }
    ,
    {
        id: 95,
        title: "Yeshu Kartha Karayunnen",
        subtitle: "95",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=13",
        isFavorite: false
    }
    ,
    {
        id: 96,
        title: "Enn Rakshaka Marakale",
        subtitle: "96",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=14",
        isFavorite: false
    }
    ,
    {
        id: 97,
        title: "Deenayalo Daivame",
        subtitle: "97",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=15",
        isFavorite: false
    }
    ,
    {
        id: 98,
        title: "Shamipan Nilathin Daham",
        subtitle: "98",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=16",
        isFavorite: false
    }
    ,
    {
        id: 99,
        title: "Lokarakshakaranakum",
        subtitle: "99",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=18",
        isFavorite: false
    }
    ,
    {
        id: 100,
        title: "Seeyonileku Yeshu",
        subtitle: "100",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=19",
        isFavorite: false
    }
    ,
    {
        id: 101,
        title: "Papikeka Ashayam",
        subtitle: "101",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=23",
        isFavorite: false
    }
    ,
    {
        id: 102,
        title: "Manam Mahathvam Sthothram",
        subtitle: "102",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=24",
        isFavorite: false
    }
    ,
    {
        id: 103,
        title: "Odikoodin Yeshuvodu",
        subtitle: "103",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=25",
        isFavorite: false
    }
    ,
    {
        id: 104,
        title: "Gathshamane Chennu",
        subtitle: "104",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=27",
        isFavorite: false
    }
    ,
    {
        id: 105,
        title: "Seeyonin Kumari Nee",
        subtitle: "105",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=30",
        isFavorite: false
    }
    ,
    {
        id: 106,
        title: "Namude Karthavam Yeshu",
        subtitle: "106",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=32",
        isFavorite: false
    }
    ,
    {
        id: 107,
        title: "Kalvarimel Maricheshu",
        subtitle: "107",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=33",
        isFavorite: false
    }
    ,
    {
        id: 108,
        title: "Mahathwaprabhu Maricha",
        subtitle: "108",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=35",
        isFavorite: false
    }
    ,
    {
        id: 109,
        title: "Kalvarimudi Muzhangum",
        subtitle: "109",
        category: "hymns",
        pdfPath: "Hymns_90_109.pdf#page=37",
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
