export const country_code = {
    values: [
        {
            code: 1,
            name: "Afghanistan",
        },
        {
            code: 8,
            name: "Argentina",
        },
        {
            code: 9,
            name: "Armenia (Republic of)",
        },
        {
            code: 11,
            name: "Australia",
        },
        {
            code: 13,
            name: "Azerbaijan",
        },
        {
            code: 15,
            name: "Bahrain",
        },
        {
            code: 16,
            name: "Bangladesh",
        },
        {
            code: 27,
            name: "Brazil",
        },
        {
            code: 33,
            name: "Cambodia",
        },
        {
            code: 35,
            name: "Canada",
        },
        {
            code: 42,
            name: "Chile",
        },
        {
            code: 44,
            name: "Colombia",
        },
        {
            code: 48,
            name: "Costa Rica",
        },
        {
            code: 51,
            name: "Cyprus",
        },
        {
            code: 57,
            name: "Dominican Republic",
        },
        {
            code: 58,
            name: "Ecuador",
        },
        {
            code: 59,
            name: "Egypt",
        },
        {
            code: 67,
            name: "Fiji",
        },
        {
            code: 69,
            name: "France",
        },
        {
            code: 75,
            name: "Germany",
        },
        {
            code: 78,
            name: "Greece",
        },
        {
            code: 83,
            name: "Guatemala",
        },
        {
            code: 90,
            name: "Hong Kong",
        },
        {
            code: 93,
            name: "India",
        },
        {
            code: 94,
            name: "Indonesia",
        },
        {
            code: 95,
            name: "Iran",
        },
        {
            code: 96,
            name: "Iraq",
        },
        {
            code: 97,
            name: "Ireland",
        },
        {
            code: 99,
            name: "Italy",
        },
        {
            code: 101,
            name: "Japan",
        },
        {
            code: 102,
            name: "Jordan",
        },
        {
            code: 103,
            name: "Kazakhstan",
        },
        {
            code: 104,
            name: "Kenya",
        },
        {
            code: 105,
            name: "Kiribati",
        },
        {
            code: 107,
            name: "Korea South",
        },
        {
            code: 108,
            name: "Kuwait",
        },
        {
            code: 109,
            name: "Kyrgyzstan",
        },
        {
            code: 110,
            name: "Laos",
        },
        {
            code: 112,
            name: "Lebanon",
        },
        {
            code: 122,
            name: "Malaysia",
        },
        {
            code: 126,
            name: "Marshall Islands",
        },
        {
            code: 129,
            name: "Mauritius",
        },
        {
            code: 131,
            name: "Mexico",
        },
        {
            code: 132,
            name: "Micronesia",
        },
        {
            code: 134,
            name: "Moldova (Republic of)",
        },
        {
            code: 137,
            name: "Montenegro",
        },
        {
            code: 141,
            name: "Myanmar",
        },
        {
            code: 143,
            name: "Nauru",
        },
        {
            code: 144,
            name: "Nepal",
        },
        {
            code: 145,
            name: "Netherlands",
        },
        {
            code: 147,
            name: "New Caledonia",
        },
        {
            code: 148,
            name: "New Zealand",
        },
        {
            code: 151,
            name: "Nigeria",
        },
        {
            code: 156,
            name: "Oman",
        },
        {
            code: 157,
            name: "Pakistan",
        },
        {
            code: 158,
            name: "Palau",
        },
        {
            code: 160,
            name: "Panama",
        },
        {
            code: 161,
            name: "Papua New Guinea",
        },
        {
            code: 163,
            name: "Peru",
        },
        {
            code: 164,
            name: "Philippines",
        },
        {
            code: 166,
            name: "Poland",
        },
        {
            code: 169,
            name: "Qatar",
        },
        {
            code: 171,
            name: "Romania",
        },
        {
            code: 172,
            name: "Russia",
        },
        {
            code: 230,
            name: "Samoa",
        },
        {
            code: 176,
            name: "Saudi Arabia",
        },
        {
            code: 178,
            name: "Serbia",
        },
        {
            code: 181,
            name: "Singapore",
        },
        {
            code: 184,
            name: "Solomon Islands",
        },
        {
            code: 187,
            name: "Spain",
        },
        {
            code: 188,
            name: "Sri Lanka",
        },
        {
            code: 199,
            name: "Switzerland",
        },
        {
            code: 200,
            name: "Syria",
        },
        {
            code: 202,
            name: "Taiwan China",
        },
        {
            code: 203,
            name: "Tajikistan",
        },
        {
            code: 205,
            name: "Thailand",
        },
        {
            code: 206,
            name: "Timor-Leste",
        },
        {
            code: 209,
            name: "Tonga",
        },
        {
            code: 212,
            name: "Turkey",
        },
        {
            code: 215,
            name: "Tuvalu",
        },
        {
            code: 219,
            name: "Ukraine",
        },
        {
            code: 220,
            name: "United Arab Emirates",
        },
        {
            code: 223,
            name: "Uruguay",
        },
        {
            code: 224,
            name: "Uzbekistan (Republic of)",
        },
        {
            code: 225,
            name: "Vanuatu",
        },
        {
            code: 227,
            name: "Vietnam",
        },
    ],
    getCountryName(code) {
        return this.values.find(country => country.code === code).name;
    },
    getCountryCode(name) {
        return this.values.find(country => country.name === name).code;
    },
    getData() {
        return this.values;
    },
    checkCountryCode(code) {
        return this.values.some(country => country.code === code);
    },
}

export const testCentreLocations = {
    values: [
        {
            testCentreLocationId: 2999,
            displayName: "Abakaliki",
            countryId: 151,
        },
        {
            testCentreLocationId: 1407,
            displayName: "Abbottabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 3106,
            displayName: "Abbottabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 2214,
            displayName: "Abeokuta",
            countryId: 151,
        },
        {
            testCentreLocationId: 2904,
            displayName: "Abha",
            countryId: 176,
        },
        {
            testCentreLocationId: 2903,
            displayName: "Abha",
            countryId: 176,
        },
        {
            testCentreLocationId: 2375,
            displayName: "Abia",
            countryId: 151,
        },
        {
            testCentreLocationId: 241,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 3822,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 3699,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 3036,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 3812,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 3062,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 2974,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 2876,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 2542,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 2384,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 1887,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 1806,
            displayName: "Abu Dhabi",
            countryId: 220,
        },
        {
            testCentreLocationId: 1702,
            displayName: "Abuja",
            countryId: 151,
        },
        {
            testCentreLocationId: 2688,
            displayName: "Abuja",
            countryId: 151,
        },
        {
            testCentreLocationId: 3223,
            displayName: "Acapulco de Juarez",
            countryId: 131,
        },
        {
            testCentreLocationId: 1014,
            displayName: "Aceh",
            countryId: 94,
        },
        {
            testCentreLocationId: 3044,
            displayName: "Adana",
            countryId: 212,
        },
        {
            testCentreLocationId: 1,
            displayName: "Adelaide",
            countryId: 11,
        },
        {
            testCentreLocationId: 3600,
            displayName: "Adelaide",
            countryId: 11,
        },
        {
            testCentreLocationId: 3326,
            displayName: "Aguascalientes",
            countryId: 131,
        },
        {
            testCentreLocationId: 3675,
            displayName: "Aguascalientes",
            countryId: 131,
        },
        {
            testCentreLocationId: 1569,
            displayName: "Aguascalientes",
            countryId: 131,
        },
        {
            testCentreLocationId: 3672,
            displayName: "Aguascalientes",
            countryId: 1,
        },
        {
            testCentreLocationId: 3273,
            displayName: "Aguascalientes",
            countryId: 131,
        },
        {
            testCentreLocationId: 3394,
            displayName: "Ahemabad",
            countryId: 93,
        },
        {
            testCentreLocationId: 3395,
            displayName: "Ahemabad East",
            countryId: 93,
        },
        {
            testCentreLocationId: 208,
            displayName: "Ahmedabad",
            countryId: 93,
        },
        {
            testCentreLocationId: 1153,
            displayName: "Ahvaz",
            countryId: 95,
        },
        {
            testCentreLocationId: 2939,
            displayName: "Ahvaz",
            countryId: 95,
        },
        {
            testCentreLocationId: 1168,
            displayName: "Ajman",
            countryId: 220,
        },
        {
            testCentreLocationId: 2063,
            displayName: "Ajman",
            countryId: 220,
        },
        {
            testCentreLocationId: 2488,
            displayName: "Ajman",
            countryId: 220,
        },
        {
            testCentreLocationId: 311,
            displayName: "Aktau",
            countryId: 103,
        },
        {
            testCentreLocationId: 3492,
            displayName: "Aktau",
            countryId: 103,
        },
        {
            testCentreLocationId: 2547,
            displayName: "Aktobe",
            countryId: 103,
        },
        {
            testCentreLocationId: 2211,
            displayName: "Akure",
            countryId: 151,
        },
        {
            testCentreLocationId: 3574,
            displayName: "Al Ahsa",
            countryId: 176,
        },
        {
            testCentreLocationId: 2506,
            displayName: "Al Ahsa",
            countryId: 176,
        },
        {
            testCentreLocationId: 3767,
            displayName: "Al Ahsa",
            countryId: 176,
        },
        {
            testCentreLocationId: 1066,
            displayName: "Al Ahsa",
            countryId: 176,
        },
        {
            testCentreLocationId: 2,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 1769,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 1930,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 2270,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 2184,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 3656,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 3010,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 1788,
            displayName: "Al Ain",
            countryId: 220,
        },
        {
            testCentreLocationId: 2249,
            displayName: "Al Jouf",
            countryId: 176,
        },
        {
            testCentreLocationId: 2248,
            displayName: "Al Jouf",
            countryId: 176,
        },
        {
            testCentreLocationId: 1933,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 3132,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 3131,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 142,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 2906,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 2921,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 2905,
            displayName: "Al Khobar",
            countryId: 176,
        },
        {
            testCentreLocationId: 1156,
            displayName: "Al Khoudh",
            countryId: 156,
        },
        {
            testCentreLocationId: 1757,
            displayName: "Al Khoudh",
            countryId: 156,
        },
        {
            testCentreLocationId: 3742,
            displayName: "AL ULA",
            countryId: 176,
        },
        {
            testCentreLocationId: 3722,
            displayName: "Albany",
            countryId: 11,
        },
        {
            testCentreLocationId: 1253,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 2992,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 3070,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 456,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 2317,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 3681,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 3652,
            displayName: "Alexandria",
            countryId: 59,
        },
        {
            testCentreLocationId: 2759,
            displayName: "Alice Springs",
            countryId: 11,
        },
        {
            testCentreLocationId: 3,
            displayName: "Almaty",
            countryId: 103,
        },
        {
            testCentreLocationId: 2073,
            displayName: "Almaty",
            countryId: 103,
        },
        {
            testCentreLocationId: 1756,
            displayName: "Alor Gajah",
            countryId: 122,
        },
        {
            testCentreLocationId: 2587,
            displayName: "Alor Setar",
            countryId: 122,
        },
        {
            testCentreLocationId: 3339,
            displayName: "Altdorf",
            countryId: 199,
        },
        {
            testCentreLocationId: 214,
            displayName: "Ambala",
            countryId: 93,
        },
        {
            testCentreLocationId: 84,
            displayName: "Amman",
            countryId: 102,
        },
        {
            testCentreLocationId: 2838,
            displayName: "Amman",
            countryId: 102,
        },
        {
            testCentreLocationId: 3065,
            displayName: "Amman",
            countryId: 102,
        },
        {
            testCentreLocationId: 2088,
            displayName: "Amman",
            countryId: 102,
        },
        {
            testCentreLocationId: 209,
            displayName: "Amritsar",
            countryId: 93,
        },
        {
            testCentreLocationId: 1536,
            displayName: "Anand",
            countryId: 93,
        },
        {
            testCentreLocationId: 3504,
            displayName: "Andijan",
            countryId: 224,
        },
        {
            testCentreLocationId: 127,
            displayName: "Ankara",
            countryId: 212,
        },
        {
            testCentreLocationId: 1873,
            displayName: "Ankara",
            countryId: 212,
        },
        {
            testCentreLocationId: 1654,
            displayName: "Ankara",
            countryId: 212,
        },
        {
            testCentreLocationId: 2738,
            displayName: "Antalya",
            countryId: 212,
        },
        {
            testCentreLocationId: 3127,
            displayName: "Antalya",
            countryId: 212,
        },
        {
            testCentreLocationId: 2743,
            displayName: "Antalya",
            countryId: 212,
        },
        {
            testCentreLocationId: 3674,
            displayName: "Antalya",
            countryId: 212,
        },
        {
            testCentreLocationId: 2481,
            displayName: "Antofagasta",
            countryId: 42,
        },
        {
            testCentreLocationId: 3436,
            displayName: "Apia",
            countryId: 230,
        },
        {
            testCentreLocationId: 2809,
            displayName: "Arad",
            countryId: 171,
        },
        {
            testCentreLocationId: 2834,
            displayName: "Arar",
            countryId: 176,
        },
        {
            testCentreLocationId: 2466,
            displayName: "Arequipa",
            countryId: 163,
        },
        {
            testCentreLocationId: 2898,
            displayName: "Asaba",
            countryId: 151,
        },
        {
            testCentreLocationId: 308,
            displayName: "Astana",
            countryId: 103,
        },
        {
            testCentreLocationId: 2085,
            displayName: "Astana",
            countryId: 103,
        },
        {
            testCentreLocationId: 366,
            displayName: "Astrakhan",
            countryId: 172,
        },
        {
            testCentreLocationId: 2540,
            displayName: "Athens",
            countryId: 78,
        },
        {
            testCentreLocationId: 2602,
            displayName: "Athens",
            countryId: 78,
        },
        {
            testCentreLocationId: 313,
            displayName: "Atyrau",
            countryId: 103,
        },
        {
            testCentreLocationId: 739,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 1143,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 1145,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 2084,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 1424,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 1783,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 2086,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 3214,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 3112,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 2706,
            displayName: "Auckland",
            countryId: 148,
        },
        {
            testCentreLocationId: 2734,
            displayName: "Awka",
            countryId: 151,
        },
        {
            testCentreLocationId: 3796,
            displayName: "Baabda",
            countryId: 112,
        },
        {
            testCentreLocationId: 2810,
            displayName: "Bacau",
            countryId: 171,
        },
        {
            testCentreLocationId: 3047,
            displayName: "Bacolod",
            countryId: 164,
        },
        {
            testCentreLocationId: 3466,
            displayName: "Bacolod",
            countryId: 164,
        },
        {
            testCentreLocationId: 108,
            displayName: "Baguio",
            countryId: 164,
        },
        {
            testCentreLocationId: 2510,
            displayName: "Baguio",
            countryId: 164,
        },
        {
            testCentreLocationId: 3170,
            displayName: "BAHAWALPUR",
            countryId: 157,
        },
        {
            testCentreLocationId: 3464,
            displayName: "Bahrain",
            countryId: 15,
        },
        {
            testCentreLocationId: 2147,
            displayName: "Bahrain",
            countryId: 15,
        },
        {
            testCentreLocationId: 989,
            displayName: "Bahrain",
            countryId: 15,
        },
        {
            testCentreLocationId: 2347,
            displayName: "Bahrain",
            countryId: 15,
        },
        {
            testCentreLocationId: 825,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 1552,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 1590,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 1791,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 1809,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 2258,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 1776,
            displayName: "Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 2079,
            displayName: "Baku",
            countryId: 13,
        },
        {
            testCentreLocationId: 988,
            displayName: "Baku",
            countryId: 13,
        },
        {
            testCentreLocationId: 1640,
            displayName: "Bali",
            countryId: 94,
        },
        {
            testCentreLocationId: 2207,
            displayName: "Bali",
            countryId: 94,
        },
        {
            testCentreLocationId: 7,
            displayName: "Bali",
            countryId: 94,
        },
        {
            testCentreLocationId: 92,
            displayName: "Balikpapan",
            countryId: 94,
        },
        {
            testCentreLocationId: 1015,
            displayName: "Bandar Lampung",
            countryId: 94,
        },
        {
            testCentreLocationId: 2422,
            displayName: "Bandung",
            countryId: 94,
        },
        {
            testCentreLocationId: 8,
            displayName: "Bandung",
            countryId: 94,
        },
        {
            testCentreLocationId: 2642,
            displayName: "Bandung",
            countryId: 94,
        },
        {
            testCentreLocationId: 190,
            displayName: "Bangalore",
            countryId: 93,
        },
        {
            testCentreLocationId: 1509,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 3797,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 9,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2328,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 266,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 128,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2558,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 129,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 137,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2329,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2330,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 1842,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2446,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2278,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2247,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 3511,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2431,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2224,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 1281,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2894,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2287,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 3431,
            displayName: "Bangkok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2620,
            displayName: "Banjarmasin",
            countryId: 94,
        },
        {
            testCentreLocationId: 1312,
            displayName: "Banting",
            countryId: 122,
        },
        {
            testCentreLocationId: 2931,
            displayName: "Barcelona",
            countryId: 187,
        },
        {
            testCentreLocationId: 2950,
            displayName: "Barcelona",
            countryId: 187,
        },
        {
            testCentreLocationId: 2251,
            displayName: "Barcelona",
            countryId: 187,
        },
        {
            testCentreLocationId: 2837,
            displayName: "Barcelona",
            countryId: 187,
        },
        {
            testCentreLocationId: 2910,
            displayName: "Barcelona",
            countryId: 187,
        },
        {
            testCentreLocationId: 2139,
            displayName: "Bari",
            countryId: 99,
        },
        {
            testCentreLocationId: 1236,
            displayName: "Bari",
            countryId: 99,
        },
        {
            testCentreLocationId: 2116,
            displayName: "Bari",
            countryId: 99,
        },
        {
            testCentreLocationId: 3641,
            displayName: "Barishal",
            countryId: 16,
        },
        {
            testCentreLocationId: 3265,
            displayName: "Barka",
            countryId: 156,
        },
        {
            testCentreLocationId: 2374,
            displayName: "Barka",
            countryId: 156,
        },
        {
            testCentreLocationId: 3374,
            displayName: "Barnala",
            countryId: 93,
        },
        {
            testCentreLocationId: 346,
            displayName: "Barnaul",
            countryId: 172,
        },
        {
            testCentreLocationId: 3836,
            displayName: "Barrancabermeja",
            countryId: 44,
        },
        {
            testCentreLocationId: 2303,
            displayName: "Barrancabermeja",
            countryId: 44,
        },
        {
            testCentreLocationId: 3449,
            displayName: "Barrancabermeja",
            countryId: 44,
        },
        {
            testCentreLocationId: 2671,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 2301,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 2484,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 2695,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 3467,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 3444,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 3834,
            displayName: "Barranquilla",
            countryId: 44,
        },
        {
            testCentreLocationId: 1434,
            displayName: "Bassano del Grappa",
            countryId: 99,
        },
        {
            testCentreLocationId: 1016,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 1653,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 405,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2797,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2509,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2383,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2535,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2507,
            displayName: "Batam",
            countryId: 94,
        },
        {
            testCentreLocationId: 2784,
            displayName: "Battaramulla",
            countryId: 188,
        },
        {
            testCentreLocationId: 3779,
            displayName: "Batticaloa",
            countryId: 188,
        },
        {
            testCentreLocationId: 2000,
            displayName: "Beirut",
            countryId: 112,
        },
        {
            testCentreLocationId: 2164,
            displayName: "Beirut",
            countryId: 112,
        },
        {
            testCentreLocationId: 3646,
            displayName: "Beirut",
            countryId: 112,
        },
        {
            testCentreLocationId: 2078,
            displayName: "Beirut",
            countryId: 112,
        },
        {
            testCentreLocationId: 882,
            displayName: "Beirut",
            countryId: 112,
        },
        {
            testCentreLocationId: 397,
            displayName: "Belleville",
            countryId: 35,
        },
        {
            testCentreLocationId: 3230,
            displayName: "Belo Horizonte",
            countryId: 27,
        },
        {
            testCentreLocationId: 3487,
            displayName: "Belo Horizonte",
            countryId: 27,
        },
        {
            testCentreLocationId: 1695,
            displayName: "Belo Horizonte",
            countryId: 27,
        },
        {
            testCentreLocationId: 177,
            displayName: "Bendigo",
            countryId: 11,
        },
        {
            testCentreLocationId: 2976,
            displayName: "Beni Suef Governorate",
            countryId: 59,
        },
        {
            testCentreLocationId: 2166,
            displayName: "Benin",
            countryId: 151,
        },
        {
            testCentreLocationId: 1881,
            displayName: "Bergamo",
            countryId: 99,
        },
        {
            testCentreLocationId: 2220,
            displayName: "Bern",
            countryId: 199,
        },
        {
            testCentreLocationId: 1701,
            displayName: "Bern",
            countryId: 199,
        },
        {
            testCentreLocationId: 223,
            displayName: "Bhatinda",
            countryId: 93,
        },
        {
            testCentreLocationId: 216,
            displayName: "Bhopal",
            countryId: 93,
        },
        {
            testCentreLocationId: 3389,
            displayName: "Bhubansewar",
            countryId: 93,
        },
        {
            testCentreLocationId: 2674,
            displayName: "Bidart",
            countryId: 69,
        },
        {
            testCentreLocationId: 1771,
            displayName: "Bien Hoa",
            countryId: 227,
        },
        {
            testCentreLocationId: 3148,
            displayName: "Bien Hoa",
            countryId: 227,
        },
        {
            testCentreLocationId: 1626,
            displayName: "Binh Duong",
            countryId: 227,
        },
        {
            testCentreLocationId: 2772,
            displayName: "Binh Thuan",
            countryId: 227,
        },
        {
            testCentreLocationId: 3591,
            displayName: "Binh Thuan",
            countryId: 227,
        },
        {
            testCentreLocationId: 1949,
            displayName: "Bintulu",
            countryId: 122,
        },
        {
            testCentreLocationId: 1677,
            displayName: "Biratnagar",
            countryId: 144,
        },
        {
            testCentreLocationId: 1254,
            displayName: "Birtamode",
            countryId: 144,
        },
        {
            testCentreLocationId: 3616,
            displayName: "Bishkek",
            countryId: 109,
        },
        {
            testCentreLocationId: 2880,
            displayName: "Bodrum",
            countryId: 212,
        },
        {
            testCentreLocationId: 2624,
            displayName: "Bogor",
            countryId: 94,
        },
        {
            testCentreLocationId: 3776,
            displayName: "Bogota",
            countryId: 44,
        },
        {
            testCentreLocationId: 298,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2286,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2318,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2036,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 1927,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 3228,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2899,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2011,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 3086,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 3041,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2321,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2101,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 1532,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 1743,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 1928,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2309,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2120,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2616,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2832,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 2940,
            displayName: "Bogotá",
            countryId: 44,
        },
        {
            testCentreLocationId: 3267,
            displayName: "Bogura",
            countryId: 16,
        },
        {
            testCentreLocationId: 2716,
            displayName: "Bohol",
            countryId: 164,
        },
        {
            testCentreLocationId: 3635,
            displayName: "Bologna",
            countryId: 99,
        },
        {
            testCentreLocationId: 2514,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3121,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3205,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3735,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3182,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1938,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3354,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2361,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3085,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3355,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3109,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2672,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3712,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3486,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3485,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1128,
            displayName: "Brampton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1733,
            displayName: "Brandon",
            countryId: 35,
        },
        {
            testCentreLocationId: 2727,
            displayName: "Brantford",
            countryId: 35,
        },
        {
            testCentreLocationId: 2223,
            displayName: "Brasilia",
            countryId: 27,
        },
        {
            testCentreLocationId: 3138,
            displayName: "Brasov",
            countryId: 171,
        },
        {
            testCentreLocationId: 2816,
            displayName: "Brasov",
            countryId: 171,
        },
        {
            testCentreLocationId: 2006,
            displayName: "Brescia",
            countryId: 99,
        },
        {
            testCentreLocationId: 3648,
            displayName: "Brescia",
            countryId: 99,
        },
        {
            testCentreLocationId: 11,
            displayName: "Brisbane",
            countryId: 11,
        },
        {
            testCentreLocationId: 708,
            displayName: "Brisbane",
            countryId: 11,
        },
        {
            testCentreLocationId: 2771,
            displayName: "Brisbane",
            countryId: 11,
        },
        {
            testCentreLocationId: 1482,
            displayName: "Brockville",
            countryId: 35,
        },
        {
            testCentreLocationId: 1635,
            displayName: "Brossard",
            countryId: 35,
        },
        {
            testCentreLocationId: 3426,
            displayName: "Bucaramanga",
            countryId: 44,
        },
        {
            testCentreLocationId: 3837,
            displayName: "Bucaramanga",
            countryId: 44,
        },
        {
            testCentreLocationId: 2530,
            displayName: "Bucuresti",
            countryId: 171,
        },
        {
            testCentreLocationId: 292,
            displayName: "Buenos Aires",
            countryId: 8,
        },
        {
            testCentreLocationId: 1961,
            displayName: "Buenos Aires",
            countryId: 8,
        },
        {
            testCentreLocationId: 1519,
            displayName: "Buenos Aires",
            countryId: 8,
        },
        {
            testCentreLocationId: 3525,
            displayName: "Bukhara",
            countryId: 224,
        },
        {
            testCentreLocationId: 3503,
            displayName: "Bukhara",
            countryId: 224,
        },
        {
            testCentreLocationId: 252,
            displayName: "Bulacan",
            countryId: 164,
        },
        {
            testCentreLocationId: 2037,
            displayName: "Buon Me Thuot",
            countryId: 227,
        },
        {
            testCentreLocationId: 3183,
            displayName: "Burewala",
            countryId: 157,
        },
        {
            testCentreLocationId: 2735,
            displayName: "Burlington",
            countryId: 35,
        },
        {
            testCentreLocationId: 1037,
            displayName: "Burnaby",
            countryId: 35,
        },
        {
            testCentreLocationId: 3002,
            displayName: "Burnaby",
            countryId: 35,
        },
        {
            testCentreLocationId: 3349,
            displayName: "Burnaby",
            countryId: 35,
        },
        {
            testCentreLocationId: 3670,
            displayName: "Burnaby",
            countryId: 35,
        },
        {
            testCentreLocationId: 3278,
            displayName: "Bursa",
            countryId: 212,
        },
        {
            testCentreLocationId: 2477,
            displayName: "Busan",
            countryId: 107,
        },
        {
            testCentreLocationId: 1426,
            displayName: "Butwal",
            countryId: 144,
        },
        {
            testCentreLocationId: 3815,
            displayName: "Byblos",
            countryId: 112,
        },
        {
            testCentreLocationId: 3253,
            displayName: "Bydgoszcz",
            countryId: 166,
        },
        {
            testCentreLocationId: 125,
            displayName: "Cabanatuan",
            countryId: 164,
        },
        {
            testCentreLocationId: 111,
            displayName: "Cagayan de Oro",
            countryId: 164,
        },
        {
            testCentreLocationId: 3805,
            displayName: "Cagayan de Oro",
            countryId: 164,
        },
        {
            testCentreLocationId: 12,
            displayName: "Cairns",
            countryId: 11,
        },
        {
            testCentreLocationId: 1819,
            displayName: "Cairns",
            countryId: 11,
        },
        {
            testCentreLocationId: 139,
            displayName: "Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 1822,
            displayName: "Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 2998,
            displayName: "Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 13,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 1902,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 2818,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 2868,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 2924,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 2594,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 2234,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 3157,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 1336,
            displayName: "Calgary",
            countryId: 35,
        },
        {
            testCentreLocationId: 3272,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 299,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 1148,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 2181,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 1937,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 3470,
            displayName: "Cali",
            countryId: 44,
        },
        {
            testCentreLocationId: 220,
            displayName: "Calicut",
            countryId: 93,
        },
        {
            testCentreLocationId: 938,
            displayName: "Campeche",
            countryId: 131,
        },
        {
            testCentreLocationId: 3738,
            displayName: "Campeche",
            countryId: 131,
        },
        {
            testCentreLocationId: 1332,
            displayName: "Campinas",
            countryId: 27,
        },
        {
            testCentreLocationId: 3362,
            displayName: "Can Tho",
            countryId: 227,
        },
        {
            testCentreLocationId: 1181,
            displayName: "Can Tho",
            countryId: 227,
        },
        {
            testCentreLocationId: 14,
            displayName: "Canberra",
            countryId: 11,
        },
        {
            testCentreLocationId: 2275,
            displayName: "Canberra",
            countryId: 11,
        },
        {
            testCentreLocationId: 1475,
            displayName: "Cancun",
            countryId: 131,
        },
        {
            testCentreLocationId: 2824,
            displayName: "Cancun",
            countryId: 131,
        },
        {
            testCentreLocationId: 2440,
            displayName: "Cancun",
            countryId: 131,
        },
        {
            testCentreLocationId: 3593,
            displayName: "Cancun",
            countryId: 131,
        },
        {
            testCentreLocationId: 3570,
            displayName: "Cancun",
            countryId: 131,
        },
        {
            testCentreLocationId: 1951,
            displayName: "Carleton Place",
            countryId: 35,
        },
        {
            testCentreLocationId: 3276,
            displayName: "Cartagena",
            countryId: 44,
        },
        {
            testCentreLocationId: 3045,
            displayName: "Cartagena",
            countryId: 44,
        },
        {
            testCentreLocationId: 2938,
            displayName: "Catania",
            countryId: 99,
        },
        {
            testCentreLocationId: 1337,
            displayName: "Cauayan",
            countryId: 164,
        },
        {
            testCentreLocationId: 3733,
            displayName: "Cavite",
            countryId: 164,
        },
        {
            testCentreLocationId: 2028,
            displayName: "Cebu",
            countryId: 164,
        },
        {
            testCentreLocationId: 2030,
            displayName: "Cebu",
            countryId: 164,
        },
        {
            testCentreLocationId: 2029,
            displayName: "Cebu",
            countryId: 164,
        },
        {
            testCentreLocationId: 3808,
            displayName: "Cebu",
            countryId: 164,
        },
        {
            testCentreLocationId: 191,
            displayName: "Chandigarh",
            countryId: 93,
        },
        {
            testCentreLocationId: 2001,
            displayName: "Charlottetown",
            countryId: 35,
        },
        {
            testCentreLocationId: 347,
            displayName: "Chelyabinsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3407,
            displayName: "Chengannur",
            countryId: 93,
        },
        {
            testCentreLocationId: 192,
            displayName: "Chennai",
            countryId: 93,
        },
        {
            testCentreLocationId: 1641,
            displayName: "Chernivtsi",
            countryId: 219,
        },
        {
            testCentreLocationId: 1781,
            displayName: "Chia",
            countryId: 44,
        },
        {
            testCentreLocationId: 133,
            displayName: "Chiang Mai",
            countryId: 205,
        },
        {
            testCentreLocationId: 2176,
            displayName: "Chiang Mai",
            countryId: 205,
        },
        {
            testCentreLocationId: 2534,
            displayName: "Chiang Mai",
            countryId: 205,
        },
        {
            testCentreLocationId: 2821,
            displayName: "Chiang Mai",
            countryId: 205,
        },
        {
            testCentreLocationId: 3022,
            displayName: "Chiang Rai",
            countryId: 205,
        },
        {
            testCentreLocationId: 3461,
            displayName: "Chiang Rai",
            countryId: 205,
        },
        {
            testCentreLocationId: 3730,
            displayName: "Chiang Rai",
            countryId: 205,
        },
        {
            testCentreLocationId: 762,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1651,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1784,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 3729,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1775,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1570,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 3594,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1764,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 3224,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 1765,
            displayName: "Chihuahua",
            countryId: 131,
        },
        {
            testCentreLocationId: 3429,
            displayName: "Chisinau",
            countryId: 134,
        },
        {
            testCentreLocationId: 2719,
            displayName: "Chisinau",
            countryId: 134,
        },
        {
            testCentreLocationId: 1437,
            displayName: "Chita",
            countryId: 172,
        },
        {
            testCentreLocationId: 270,
            displayName: "Chittagong",
            countryId: 16,
        },
        {
            testCentreLocationId: 3558,
            displayName: "Chittagong",
            countryId: 16,
        },
        {
            testCentreLocationId: 3774,
            displayName: "Chitwan",
            countryId: 144,
        },
        {
            testCentreLocationId: 1382,
            displayName: "Chitwan",
            countryId: 144,
        },
        {
            testCentreLocationId: 3655,
            displayName: "Chonburi",
            countryId: 205,
        },
        {
            testCentreLocationId: 2359,
            displayName: "Chong Hwa",
            countryId: 122,
        },
        {
            testCentreLocationId: 1792,
            displayName: "Chouf",
            countryId: 112,
        },
        {
            testCentreLocationId: 15,
            displayName: "Christchurch",
            countryId: 148,
        },
        {
            testCentreLocationId: 1360,
            displayName: "Christchurch",
            countryId: 148,
        },
        {
            testCentreLocationId: 2823,
            displayName: "Christchurch",
            countryId: 148,
        },
        {
            testCentreLocationId: 3665,
            displayName: "Ciudad Juarez",
            countryId: 131,
        },
        {
            testCentreLocationId: 3446,
            displayName: "Ciudad Madero",
            countryId: 131,
        },
        {
            testCentreLocationId: 3531,
            displayName: "Ciudad Obregon",
            countryId: 131,
        },
        {
            testCentreLocationId: 1867,
            displayName: "Civitavecchia",
            countryId: 99,
        },
        {
            testCentreLocationId: 2700,
            displayName: "Cluj",
            countryId: 171,
        },
        {
            testCentreLocationId: 217,
            displayName: "Coimbatore",
            countryId: 93,
        },
        {
            testCentreLocationId: 16,
            displayName: "Colombo",
            countryId: 188,
        },
        {
            testCentreLocationId: 3067,
            displayName: "Colombo",
            countryId: 188,
        },
        {
            testCentreLocationId: 1880,
            displayName: "Colombo",
            countryId: 188,
        },
        {
            testCentreLocationId: 2825,
            displayName: "Como",
            countryId: 99,
        },
        {
            testCentreLocationId: 2815,
            displayName: "Constanta",
            countryId: 171,
        },
        {
            testCentreLocationId: 2634,
            displayName: "Constanta",
            countryId: 171,
        },
        {
            testCentreLocationId: 1492,
            displayName: "Coquitlam",
            countryId: 35,
        },
        {
            testCentreLocationId: 2460,
            displayName: "Coquitlam",
            countryId: 35,
        },
        {
            testCentreLocationId: 294,
            displayName: "Cordoba",
            countryId: 8,
        },
        {
            testCentreLocationId: 3014,
            displayName: "Cordoba",
            countryId: 8,
        },
        {
            testCentreLocationId: 1481,
            displayName: "Cornwall",
            countryId: 35,
        },
        {
            testCentreLocationId: 1560,
            displayName: "Courtenay",
            countryId: 35,
        },
        {
            testCentreLocationId: 2780,
            displayName: "Craiova",
            countryId: 171,
        },
        {
            testCentreLocationId: 2055,
            displayName: "Crans Montana",
            countryId: 199,
        },
        {
            testCentreLocationId: 3032,
            displayName: "Cúcuta",
            countryId: 44,
        },
        {
            testCentreLocationId: 2410,
            displayName: "Cuernavaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 1731,
            displayName: "Cuernavaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 2892,
            displayName: "Cuernavaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 1572,
            displayName: "Cuernavaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 3211,
            displayName: "Cumilla",
            countryId: 16,
        },
        {
            testCentreLocationId: 3235,
            displayName: "Curitiba",
            countryId: 27,
        },
        {
            testCentreLocationId: 3365,
            displayName: "Curitiba",
            countryId: 27,
        },
        {
            testCentreLocationId: 2449,
            displayName: "Curno",
            countryId: 99,
        },
        {
            testCentreLocationId: 501,
            displayName: "Cyberjaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 3571,
            displayName: "Cyberjaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 2447,
            displayName: "Da Nang",
            countryId: 227,
        },
        {
            testCentreLocationId: 2183,
            displayName: "Da Nang",
            countryId: 227,
        },
        {
            testCentreLocationId: 2861,
            displayName: "Daegu",
            countryId: 107,
        },
        {
            testCentreLocationId: 3153,
            displayName: "Daegu",
            countryId: 107,
        },
        {
            testCentreLocationId: 3441,
            displayName: "Daejeon",
            countryId: 107,
        },
        {
            testCentreLocationId: 119,
            displayName: "Dagupan",
            countryId: 164,
        },
        {
            testCentreLocationId: 3741,
            displayName: "Damascus",
            countryId: 200,
        },
        {
            testCentreLocationId: 3417,
            displayName: "Damascus",
            countryId: 200,
        },
        {
            testCentreLocationId: 3178,
            displayName: "Dammam",
            countryId: 176,
        },
        {
            testCentreLocationId: 1909,
            displayName: "Dammam",
            countryId: 176,
        },
        {
            testCentreLocationId: 795,
            displayName: "Dammam",
            countryId: 176,
        },
        {
            testCentreLocationId: 796,
            displayName: "Dammam",
            countryId: 176,
        },
        {
            testCentreLocationId: 2751,
            displayName: "Darwin",
            countryId: 11,
        },
        {
            testCentreLocationId: 1687,
            displayName: "Dauphin",
            countryId: 35,
        },
        {
            testCentreLocationId: 3094,
            displayName: "Davao",
            countryId: 164,
        },
        {
            testCentreLocationId: 114,
            displayName: "Davao",
            countryId: 164,
        },
        {
            testCentreLocationId: 3345,
            displayName: "Dawson Creek",
            countryId: 35,
        },
        {
            testCentreLocationId: 218,
            displayName: "Dehradun",
            countryId: 93,
        },
        {
            testCentreLocationId: 2848,
            displayName: "Denpasar",
            countryId: 94,
        },
        {
            testCentreLocationId: 1043,
            displayName: "Dezfoul",
            countryId: 95,
        },
        {
            testCentreLocationId: 1255,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2279,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 3249,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 3497,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2579,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2580,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 3156,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 271,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 3747,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 1334,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2118,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 1736,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 1468,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 896,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2430,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 3187,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 273,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2269,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2268,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 2267,
            displayName: "Dhaka",
            countryId: 16,
        },
        {
            testCentreLocationId: 822,
            displayName: "Dibba",
            countryId: 220,
        },
        {
            testCentreLocationId: 1163,
            displayName: "Dibba",
            countryId: 220,
        },
        {
            testCentreLocationId: 2798,
            displayName: "Dibba",
            countryId: 220,
        },
        {
            testCentreLocationId: 1096,
            displayName: "Dili",
            countryId: 206,
        },
        {
            testCentreLocationId: 3545,
            displayName: "Dipolog City",
            countryId: 164,
        },
        {
            testCentreLocationId: 377,
            displayName: "Dnipro",
            countryId: 219,
        },
        {
            testCentreLocationId: 2115,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 675,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 345,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 3030,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 3031,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 1086,
            displayName: "Doha",
            countryId: 169,
        },
        {
            testCentreLocationId: 2846,
            displayName: "Dokki, Giza",
            countryId: 59,
        },
        {
            testCentreLocationId: 1872,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2352,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3034,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 816,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3491,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 758,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 753,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3443,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3711,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2333,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3707,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3620,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2569,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3184,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3247,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 1900,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2928,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2423,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2396,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 1811,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2975,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2808,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3181,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 3736,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2402,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2083,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2845,
            displayName: "Dubai",
            countryId: 220,
        },
        {
            testCentreLocationId: 2221,
            displayName: "Dublin",
            countryId: 97,
        },
        {
            testCentreLocationId: 2294,
            displayName: "Dublin",
            countryId: 97,
        },
        {
            testCentreLocationId: 2633,
            displayName: "Dumaguete",
            countryId: 164,
        },
        {
            testCentreLocationId: 21,
            displayName: "Dunedin",
            countryId: 148,
        },
        {
            testCentreLocationId: 2498,
            displayName: "Dushanbe",
            countryId: 203,
        },
        {
            testCentreLocationId: 22,
            displayName: "Edmonton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2188,
            displayName: "Edmonton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1242,
            displayName: "Edmonton",
            countryId: 35,
        },
        {
            testCentreLocationId: 348,
            displayName: "Ekaterinburg",
            countryId: 172,
        },
        {
            testCentreLocationId: 3208,
            displayName: "Eldoret",
            countryId: 104,
        },
        {
            testCentreLocationId: 3476,
            displayName: "Eldoret",
            countryId: 104,
        },
        {
            testCentreLocationId: 3609,
            displayName: "Eldoret",
            countryId: 104,
        },
        {
            testCentreLocationId: 3063,
            displayName: "Ensenada",
            countryId: 131,
        },
        {
            testCentreLocationId: 3368,
            displayName: "Ensenada",
            countryId: 131,
        },
        {
            testCentreLocationId: 2241,
            displayName: "Enugu",
            countryId: 151,
        },
        {
            testCentreLocationId: 3814,
            displayName: "Erbil",
            countryId: 96,
        },
        {
            testCentreLocationId: 3740,
            displayName: "Erbil",
            countryId: 96,
        },
        {
            testCentreLocationId: 3509,
            displayName: "Eskisehir",
            countryId: 212,
        },
        {
            testCentreLocationId: 1567,
            displayName: "Faisalabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 3684,
            displayName: "Faisalabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 3584,
            displayName: "Famagusta",
            countryId: 51,
        },
        {
            testCentreLocationId: 3495,
            displayName: "Fergana",
            countryId: 224,
        },
        {
            testCentreLocationId: 3375,
            displayName: "Ferozpur",
            countryId: 93,
        },
        {
            testCentreLocationId: 3637,
            displayName: "Florence",
            countryId: 99,
        },
        {
            testCentreLocationId: 2100,
            displayName: "Florianopolis",
            countryId: 27,
        },
        {
            testCentreLocationId: 2647,
            displayName: "Floridablanca",
            countryId: 44,
        },
        {
            testCentreLocationId: 383,
            displayName: "Fort Erie",
            countryId: 35,
        },
        {
            testCentreLocationId: 810,
            displayName: "Fort St John",
            countryId: 35,
        },
        {
            testCentreLocationId: 3344,
            displayName: "Foz do Iguaçu",
            countryId: 27,
        },
        {
            testCentreLocationId: 950,
            displayName: "Fredericton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3582,
            displayName: "Fukuoka",
            countryId: 101,
        },
        {
            testCentreLocationId: 3654,
            displayName: "Fukuoka",
            countryId: 101,
        },
        {
            testCentreLocationId: 3688,
            displayName: "Fukuoka",
            countryId: 101,
        },
        {
            testCentreLocationId: 1239,
            displayName: "Fukushima",
            countryId: 101,
        },
        {
            testCentreLocationId: 2889,
            displayName: "Galati",
            countryId: 171,
        },
        {
            testCentreLocationId: 2051,
            displayName: "Galle",
            countryId: 188,
        },
        {
            testCentreLocationId: 3295,
            displayName: "Galway",
            countryId: 97,
        },
        {
            testCentreLocationId: 3396,
            displayName: "Gandhinagar",
            countryId: 93,
        },
        {
            testCentreLocationId: 3038,
            displayName: "Gaziantep",
            countryId: 212,
        },
        {
            testCentreLocationId: 3341,
            displayName: "Gaziantep",
            countryId: 212,
        },
        {
            testCentreLocationId: 2009,
            displayName: "General Santos",
            countryId: 164,
        },
        {
            testCentreLocationId: 3422,
            displayName: "Geneva",
            countryId: 199,
        },
        {
            testCentreLocationId: 3721,
            displayName: "Geneva",
            countryId: 199,
        },
        {
            testCentreLocationId: 2913,
            displayName: "Geneva",
            countryId: 199,
        },
        {
            testCentreLocationId: 3423,
            displayName: "Geneva",
            countryId: 199,
        },
        {
            testCentreLocationId: 1232,
            displayName: "Genova",
            countryId: 99,
        },
        {
            testCentreLocationId: 3830,
            displayName: "Ghorahi",
            countryId: 144,
        },
        {
            testCentreLocationId: 3522,
            displayName: "Gia Lai",
            countryId: 227,
        },
        {
            testCentreLocationId: 2038,
            displayName: "Gia Lai",
            countryId: 227,
        },
        {
            testCentreLocationId: 3636,
            displayName: "Giza",
            countryId: 59,
        },
        {
            testCentreLocationId: 3397,
            displayName: "Goa",
            countryId: 93,
        },
        {
            testCentreLocationId: 2822,
            displayName: "Gold Coast",
            countryId: 11,
        },
        {
            testCentreLocationId: 2788,
            displayName: "Gold Coast",
            countryId: 11,
        },
        {
            testCentreLocationId: 254,
            displayName: "Gold Coast",
            countryId: 11,
        },
        {
            testCentreLocationId: 1715,
            displayName: "Gonzaga",
            countryId: 99,
        },
        {
            testCentreLocationId: 2844,
            displayName: "Gorontalo",
            countryId: 94,
        },
        {
            testCentreLocationId: 1131,
            displayName: "Guadalajara",
            countryId: 131,
        },
        {
            testCentreLocationId: 1940,
            displayName: "Guadalajara",
            countryId: 131,
        },
        {
            testCentreLocationId: 1573,
            displayName: "Guadalajara",
            countryId: 131,
        },
        {
            testCentreLocationId: 3737,
            displayName: "Guadalajara",
            countryId: 131,
        },
        {
            testCentreLocationId: 1798,
            displayName: "Guadalajara",
            countryId: 131,
        },
        {
            testCentreLocationId: 3233,
            displayName: "Guanajuato",
            countryId: 131,
        },
        {
            testCentreLocationId: 1727,
            displayName: "Guatemala",
            countryId: 83,
        },
        {
            testCentreLocationId: 3200,
            displayName: "Guatemala",
            countryId: 83,
        },
        {
            testCentreLocationId: 2250,
            displayName: "Guayaquil",
            countryId: 58,
        },
        {
            testCentreLocationId: 3162,
            displayName: "Guelph",
            countryId: 35,
        },
        {
            testCentreLocationId: 2982,
            displayName: "Gujranwala",
            countryId: 157,
        },
        {
            testCentreLocationId: 1692,
            displayName: "Gujrat",
            countryId: 157,
        },
        {
            testCentreLocationId: 3696,
            displayName: "Gujrat",
            countryId: 157,
        },
        {
            testCentreLocationId: 3390,
            displayName: "Guwahati",
            countryId: 93,
        },
        {
            testCentreLocationId: 2794,
            displayName: "Gyeonggi",
            countryId: 107,
        },
        {
            testCentreLocationId: 1864,
            displayName: "Ha Long",
            countryId: 227,
        },
        {
            testCentreLocationId: 3359,
            displayName: "Ha Long",
            countryId: 227,
        },
        {
            testCentreLocationId: 2753,
            displayName: "Hafr Al Batin",
            countryId: 176,
        },
        {
            testCentreLocationId: 1996,
            displayName: "Hafr Al Batin",
            countryId: 176,
        },
        {
            testCentreLocationId: 917,
            displayName: "Hai Phong",
            countryId: 227,
        },
        {
            testCentreLocationId: 3197,
            displayName: "Hai Phong",
            countryId: 227,
        },
        {
            testCentreLocationId: 1999,
            displayName: "Hail",
            countryId: 176,
        },
        {
            testCentreLocationId: 2589,
            displayName: "Hakodate",
            countryId: 101,
        },
        {
            testCentreLocationId: 2628,
            displayName: "Halban",
            countryId: 156,
        },
        {
            testCentreLocationId: 2046,
            displayName: "Halifax",
            countryId: 35,
        },
        {
            testCentreLocationId: 1493,
            displayName: "Halifax",
            countryId: 35,
        },
        {
            testCentreLocationId: 2714,
            displayName: "Halifax",
            countryId: 35,
        },
        {
            testCentreLocationId: 3245,
            displayName: "Hamamatsu",
            countryId: 101,
        },
        {
            testCentreLocationId: 3342,
            displayName: "Hamburg",
            countryId: 75,
        },
        {
            testCentreLocationId: 1038,
            displayName: "Hamedan",
            countryId: 95,
        },
        {
            testCentreLocationId: 2646,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 775,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 25,
            displayName: "Hamilton",
            countryId: 148,
        },
        {
            testCentreLocationId: 786,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1619,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2847,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 1629,
            displayName: "Hamilton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2356,
            displayName: "Hamilton",
            countryId: 148,
        },
        {
            testCentreLocationId: 3004,
            displayName: "Hamilton",
            countryId: 148,
        },
        {
            testCentreLocationId: 3783,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 26,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3514,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 1851,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3734,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3526,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3527,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3826,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3745,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3313,
            displayName: "Hanoi",
            countryId: 227,
        },
        {
            testCentreLocationId: 3557,
            displayName: "Hat Yai",
            countryId: 205,
        },
        {
            testCentreLocationId: 134,
            displayName: "Hat Yai",
            countryId: 205,
        },
        {
            testCentreLocationId: 3445,
            displayName: "Hat Yai",
            countryId: 205,
        },
        {
            testCentreLocationId: 857,
            displayName: "Heliopolis",
            countryId: 59,
        },
        {
            testCentreLocationId: 1976,
            displayName: "Heliopolis",
            countryId: 59,
        },
        {
            testCentreLocationId: 3828,
            displayName: "Hetauda",
            countryId: 144,
        },
        {
            testCentreLocationId: 1230,
            displayName: "Hin Hua",
            countryId: 122,
        },
        {
            testCentreLocationId: 2104,
            displayName: "Hiroshima",
            countryId: 101,
        },
        {
            testCentreLocationId: 1830,
            displayName: "Hiroshima",
            countryId: 101,
        },
        {
            testCentreLocationId: 1843,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 3817,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 3617,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 3708,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 3791,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 3748,
            displayName: "Ho Chi Minh City",
            countryId: 227,
        },
        {
            testCentreLocationId: 28,
            displayName: "Hobart",
            countryId: 11,
        },
        {
            testCentreLocationId: 3226,
            displayName: "Hobart",
            countryId: 11,
        },
        {
            testCentreLocationId: 29,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 1857,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 2472,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 3053,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 462,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 3090,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 3091,
            displayName: "Hong Kong",
            countryId: 90,
        },
        {
            testCentreLocationId: 964,
            displayName: "Honiara",
            countryId: 184,
        },
        {
            testCentreLocationId: 3314,
            displayName: "Hsinchu",
            countryId: 202,
        },
        {
            testCentreLocationId: 1338,
            displayName: "Hsinchu",
            countryId: 202,
        },
        {
            testCentreLocationId: 200,
            displayName: "Hyderabad",
            countryId: 93,
        },
        {
            testCentreLocationId: 2215,
            displayName: "Hyderabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 2146,
            displayName: "Ibadan",
            countryId: 151,
        },
        {
            testCentreLocationId: 2415,
            displayName: "Ibra",
            countryId: 156,
        },
        {
            testCentreLocationId: 2756,
            displayName: "Ibri",
            countryId: 156,
        },
        {
            testCentreLocationId: 2517,
            displayName: "Ife",
            countryId: 151,
        },
        {
            testCentreLocationId: 3543,
            displayName: "Iloilo",
            countryId: 164,
        },
        {
            testCentreLocationId: 109,
            displayName: "Iloilo",
            countryId: 164,
        },
        {
            testCentreLocationId: 2520,
            displayName: "Ilorin",
            countryId: 151,
        },
        {
            testCentreLocationId: 222,
            displayName: "Indore",
            countryId: 93,
        },
        {
            testCentreLocationId: 238,
            displayName: "Ipoh",
            countryId: 122,
        },
        {
            testCentreLocationId: 3629,
            displayName: "Ipoh",
            countryId: 122,
        },
        {
            testCentreLocationId: 3501,
            displayName: "Irbid",
            countryId: 102,
        },
        {
            testCentreLocationId: 3546,
            displayName: "Irbid",
            countryId: 102,
        },
        {
            testCentreLocationId: 3176,
            displayName: "Irbid",
            countryId: 102,
        },
        {
            testCentreLocationId: 3488,
            displayName: "Irbid",
            countryId: 102,
        },
        {
            testCentreLocationId: 840,
            displayName: "Irkutsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3168,
            displayName: "Isfahan",
            countryId: 95,
        },
        {
            testCentreLocationId: 721,
            displayName: "Isfahan",
            countryId: 95,
        },
        {
            testCentreLocationId: 2363,
            displayName: "Islamabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 30,
            displayName: "Islamabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 1856,
            displayName: "Islamabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 3795,
            displayName: "Islamabad",
            countryId: 157,
        },
        {
            testCentreLocationId: 3117,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 3119,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 2681,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 2190,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 1853,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 689,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 3068,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 3071,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 1621,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 686,
            displayName: "Istanbul",
            countryId: 212,
        },
        {
            testCentreLocationId: 3710,
            displayName: "Itabashi-ku",
            countryId: 101,
        },
        {
            testCentreLocationId: 267,
            displayName: "Izmir",
            countryId: 212,
        },
        {
            testCentreLocationId: 3136,
            displayName: "Izmir",
            countryId: 212,
        },
        {
            testCentreLocationId: 2643,
            displayName: "Izmir",
            countryId: 212,
        },
        {
            testCentreLocationId: 1274,
            displayName: "Jaffna",
            countryId: 188,
        },
        {
            testCentreLocationId: 201,
            displayName: "Jaipur",
            countryId: 93,
        },
        {
            testCentreLocationId: 3150,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3225,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 2420,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3540,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3500,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 2045,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 31,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3088,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3832,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 94,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 1018,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3751,
            displayName: "Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 193,
            displayName: "Jalandhar",
            countryId: 93,
        },
        {
            testCentreLocationId: 234,
            displayName: "Jambi",
            countryId: 94,
        },
        {
            testCentreLocationId: 3576,
            displayName: "Jambi",
            countryId: 94,
        },
        {
            testCentreLocationId: 2623,
            displayName: "Jambi",
            countryId: 94,
        },
        {
            testCentreLocationId: 194,
            displayName: "Jammu",
            countryId: 93,
        },
        {
            testCentreLocationId: 2795,
            displayName: "Jawa Timur",
            countryId: 94,
        },
        {
            testCentreLocationId: 1098,
            displayName: "Jayapura",
            countryId: 94,
        },
        {
            testCentreLocationId: 3532,
            displayName: "Jazan",
            countryId: 176,
        },
        {
            testCentreLocationId: 2177,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 1908,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 1932,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 3628,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 959,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 3567,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2437,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 3685,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2729,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2730,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2436,
            displayName: "Jeddah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2372,
            displayName: "Jinning",
            countryId: 202,
        },
        {
            testCentreLocationId: 3556,
            displayName: "Jizzakh",
            countryId: 224,
        },
        {
            testCentreLocationId: 1963,
            displayName: "João Pessoa",
            countryId: 27,
        },
        {
            testCentreLocationId: 2261,
            displayName: "Johor Bahru",
            countryId: 122,
        },
        {
            testCentreLocationId: 2474,
            displayName: "Johor Bahru",
            countryId: 122,
        },
        {
            testCentreLocationId: 33,
            displayName: "Johor Bahru",
            countryId: 122,
        },
        {
            testCentreLocationId: 3263,
            displayName: "Kalgoorlie",
            countryId: 11,
        },
        {
            testCentreLocationId: 555,
            displayName: "Kaliningrad",
            countryId: 172,
        },
        {
            testCentreLocationId: 371,
            displayName: "Kaliningrad",
            countryId: 172,
        },
        {
            testCentreLocationId: 1412,
            displayName: "Kalubowila",
            countryId: 188,
        },
        {
            testCentreLocationId: 324,
            displayName: "Kandy",
            countryId: 188,
        },
        {
            testCentreLocationId: 3820,
            displayName: "Kandy",
            countryId: 188,
        },
        {
            testCentreLocationId: 3408,
            displayName: "Kanjirappally-Amal Jyothi college",
            countryId: 93,
        },
        {
            testCentreLocationId: 3409,
            displayName: "Kannur",
            countryId: 93,
        },
        {
            testCentreLocationId: 1816,
            displayName: "Kano",
            countryId: 151,
        },
        {
            testCentreLocationId: 34,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 578,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 3316,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 1072,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 928,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 3577,
            displayName: "Kaohsiung",
            countryId: 202,
        },
        {
            testCentreLocationId: 3378,
            displayName: "Kapurthala",
            countryId: 93,
        },
        {
            testCentreLocationId: 1855,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 3612,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 3778,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 2724,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 2378,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 35,
            displayName: "Karachi",
            countryId: 157,
        },
        {
            testCentreLocationId: 309,
            displayName: "Karaganda",
            countryId: 103,
        },
        {
            testCentreLocationId: 2981,
            displayName: "Karaganda",
            countryId: 103,
        },
        {
            testCentreLocationId: 1420,
            displayName: "Karaj",
            countryId: 95,
        },
        {
            testCentreLocationId: 202,
            displayName: "Karnal",
            countryId: 93,
        },
        {
            testCentreLocationId: 3499,
            displayName: "Karratha",
            countryId: 11,
        },
        {
            testCentreLocationId: 3792,
            displayName: "Karshi",
            countryId: 224,
        },
        {
            testCentreLocationId: 2072,
            displayName: "Karshi",
            countryId: 224,
        },
        {
            testCentreLocationId: 2099,
            displayName: "Kathmandu",
            countryId: 144,
        },
        {
            testCentreLocationId: 36,
            displayName: "Kathmandu",
            countryId: 144,
        },
        {
            testCentreLocationId: 992,
            displayName: "Kathmandu",
            countryId: 144,
        },
        {
            testCentreLocationId: 971,
            displayName: "Kayseri",
            countryId: 212,
        },
        {
            testCentreLocationId: 353,
            displayName: "Kazan Tatarstan",
            countryId: 172,
        },
        {
            testCentreLocationId: 1101,
            displayName: "Kediri",
            countryId: 94,
        },
        {
            testCentreLocationId: 778,
            displayName: "Kelowna",
            countryId: 35,
        },
        {
            testCentreLocationId: 2843,
            displayName: "Kendari",
            countryId: 94,
        },
        {
            testCentreLocationId: 3761,
            displayName: "Kepong",
            countryId: 122,
        },
        {
            testCentreLocationId: 2334,
            displayName: "Kerman",
            countryId: 95,
        },
        {
            testCentreLocationId: 1042,
            displayName: "Kermanshah",
            countryId: 95,
        },
        {
            testCentreLocationId: 841,
            displayName: "Khabarovsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3155,
            displayName: "Khalde",
            countryId: 112,
        },
        {
            testCentreLocationId: 379,
            displayName: "Kharkiv",
            countryId: 219,
        },
        {
            testCentreLocationId: 2990,
            displayName: "Khon Kaen",
            countryId: 205,
        },
        {
            testCentreLocationId: 135,
            displayName: "Khon Kaen",
            countryId: 205,
        },
        {
            testCentreLocationId: 2175,
            displayName: "Khon Kaen",
            countryId: 205,
        },
        {
            testCentreLocationId: 1200,
            displayName: "Khulna",
            countryId: 16,
        },
        {
            testCentreLocationId: 398,
            displayName: "Kingston",
            countryId: 35,
        },
        {
            testCentreLocationId: 1627,
            displayName: "Kinmen",
            countryId: 202,
        },
        {
            testCentreLocationId: 965,
            displayName: "Kiribati",
            countryId: 105,
        },
        {
            testCentreLocationId: 372,
            displayName: "Kirov",
            countryId: 172,
        },
        {
            testCentreLocationId: 2035,
            displayName: "Kish island",
            countryId: 95,
        },
        {
            testCentreLocationId: 1898,
            displayName: "Kish Island",
            countryId: 95,
        },
        {
            testCentreLocationId: 3419,
            displayName: "Kisumu",
            countryId: 104,
        },
        {
            testCentreLocationId: 1047,
            displayName: "Kitchener",
            countryId: 35,
        },
        {
            testCentreLocationId: 1828,
            displayName: "Kobe",
            countryId: 101,
        },
        {
            testCentreLocationId: 203,
            displayName: "Kochi",
            countryId: 93,
        },
        {
            testCentreLocationId: 215,
            displayName: "Kochi Angamaly",
            countryId: 93,
        },
        {
            testCentreLocationId: 3804,
            displayName: "Kokand",
            countryId: 224,
        },
        {
            testCentreLocationId: 212,
            displayName: "Kolkata",
            countryId: 93,
        },
        {
            testCentreLocationId: 3720,
            displayName: "Koror",
            countryId: 158,
        },
        {
            testCentreLocationId: 3329,
            displayName: "Kostanay",
            countryId: 103,
        },
        {
            testCentreLocationId: 3130,
            displayName: "Kota Kinabalu",
            countryId: 122,
        },
        {
            testCentreLocationId: 240,
            displayName: "Kota Kinabalu",
            countryId: 122,
        },
        {
            testCentreLocationId: 3411,
            displayName: "Kothamangalam",
            countryId: 93,
        },
        {
            testCentreLocationId: 195,
            displayName: "Kottayam",
            countryId: 93,
        },
        {
            testCentreLocationId: 367,
            displayName: "Krasnodar",
            countryId: 172,
        },
        {
            testCentreLocationId: 838,
            displayName: "Krasnoyarsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 1310,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 1672,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 2189,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 37,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 2012,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 1392,
            displayName: "Kuala Lumpur",
            countryId: 122,
        },
        {
            testCentreLocationId: 1431,
            displayName: "Kuantan",
            countryId: 122,
        },
        {
            testCentreLocationId: 3236,
            displayName: "Kuching",
            countryId: 122,
        },
        {
            testCentreLocationId: 38,
            displayName: "Kuching",
            countryId: 122,
        },
        {
            testCentreLocationId: 1097,
            displayName: "Kupang",
            countryId: 94,
        },
        {
            testCentreLocationId: 3380,
            displayName: "Kurukshetra",
            countryId: 93,
        },
        {
            testCentreLocationId: 1327,
            displayName: "Kurunegala",
            countryId: 188,
        },
        {
            testCentreLocationId: 2022,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 2043,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 2613,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 39,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 3482,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 307,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 3575,
            displayName: "Kuwait",
            countryId: 108,
        },
        {
            testCentreLocationId: 375,
            displayName: "Kyiv",
            countryId: 219,
        },
        {
            testCentreLocationId: 2017,
            displayName: "Kyiv",
            countryId: 219,
        },
        {
            testCentreLocationId: 1827,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 2930,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1825,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 2159,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1826,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 3192,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1967,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1831,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1968,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1832,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 1954,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 2365,
            displayName: "Kyoto",
            countryId: 101,
        },
        {
            testCentreLocationId: 3668,
            displayName: "Kyzlorda",
            countryId: 103,
        },
        {
            testCentreLocationId: 2972,
            displayName: "Kyzylorda",
            countryId: 103,
        },
        {
            testCentreLocationId: 2439,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2813,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2240,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 3798,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 3799,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2056,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 1742,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 3440,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2553,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 1438,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 1703,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2651,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2057,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 3289,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 2366,
            displayName: "Lagos",
            countryId: 151,
        },
        {
            testCentreLocationId: 3589,
            displayName: "Laguna",
            countryId: 164,
        },
        {
            testCentreLocationId: 237,
            displayName: "Laguna",
            countryId: 164,
        },
        {
            testCentreLocationId: 1854,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 3743,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 2238,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 3809,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 40,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 3590,
            displayName: "Lahore",
            countryId: 157,
        },
        {
            testCentreLocationId: 3704,
            displayName: "Lamahi",
            countryId: 144,
        },
        {
            testCentreLocationId: 1688,
            displayName: "Lampung",
            countryId: 94,
        },
        {
            testCentreLocationId: 3752,
            displayName: "Lao Cai",
            countryId: 227,
        },
        {
            testCentreLocationId: 3772,
            displayName: "Laoag",
            countryId: 164,
        },
        {
            testCentreLocationId: 2708,
            displayName: "Laoag",
            countryId: 164,
        },
        {
            testCentreLocationId: 2987,
            displayName: "Larnaca",
            countryId: 51,
        },
        {
            testCentreLocationId: 2988,
            displayName: "Larnaca",
            countryId: 51,
        },
        {
            testCentreLocationId: 2698,
            displayName: "lasi",
            countryId: 171,
        },
        {
            testCentreLocationId: 2327,
            displayName: "Latina",
            countryId: 99,
        },
        {
            testCentreLocationId: 41,
            displayName: "Launceston",
            countryId: 11,
        },
        {
            testCentreLocationId: 3480,
            displayName: "Lausanne",
            countryId: 199,
        },
        {
            testCentreLocationId: 2077,
            displayName: "Lausanne",
            countryId: 199,
        },
        {
            testCentreLocationId: 402,
            displayName: "Lautoka",
            countryId: 67,
        },
        {
            testCentreLocationId: 3218,
            displayName: "Lautoka",
            countryId: 67,
        },
        {
            testCentreLocationId: 1147,
            displayName: "Legazpi",
            countryId: 164,
        },
        {
            testCentreLocationId: 2524,
            displayName: "Leon",
            countryId: 131,
        },
        {
            testCentreLocationId: 828,
            displayName: "Leon",
            countryId: 131,
        },
        {
            testCentreLocationId: 3057,
            displayName: "Lerma",
            countryId: 131,
        },
        {
            testCentreLocationId: 1707,
            displayName: "Leysin",
            countryId: 199,
        },
        {
            testCentreLocationId: 1924,
            displayName: "Leysin",
            countryId: 199,
        },
        {
            testCentreLocationId: 2717,
            displayName: "Leyte",
            countryId: 164,
        },
        {
            testCentreLocationId: 2119,
            displayName: "Lim Kok Wing",
            countryId: 122,
        },
        {
            testCentreLocationId: 3683,
            displayName: "Lima",
            countryId: 163,
        },
        {
            testCentreLocationId: 2094,
            displayName: "Lima",
            countryId: 163,
        },
        {
            testCentreLocationId: 2640,
            displayName: "Limassol",
            countryId: 51,
        },
        {
            testCentreLocationId: 2555,
            displayName: "Limassol",
            countryId: 51,
        },
        {
            testCentreLocationId: 126,
            displayName: "Lipa",
            countryId: 164,
        },
        {
            testCentreLocationId: 2060,
            displayName: "Locorotondo",
            countryId: 99,
        },
        {
            testCentreLocationId: 3664,
            displayName: "Lodi",
            countryId: 99,
        },
        {
            testCentreLocationId: 3305,
            displayName: "London",
            countryId: 35,
        },
        {
            testCentreLocationId: 1048,
            displayName: "London",
            countryId: 35,
        },
        {
            testCentreLocationId: 3324,
            displayName: "Londrina",
            countryId: 27,
        },
        {
            testCentreLocationId: 3367,
            displayName: "Londrina",
            countryId: 27,
        },
        {
            testCentreLocationId: 3381,
            displayName: "Lucknow",
            countryId: 93,
        },
        {
            testCentreLocationId: 210,
            displayName: "Ludhiana",
            countryId: 93,
        },
        {
            testCentreLocationId: 3533,
            displayName: "Lugano",
            countryId: 199,
        },
        {
            testCentreLocationId: 3534,
            displayName: "Lugano",
            countryId: 199,
        },
        {
            testCentreLocationId: 381,
            displayName: "Lviv",
            countryId: 219,
        },
        {
            testCentreLocationId: 3092,
            displayName: "Mabela",
            countryId: 156,
        },
        {
            testCentreLocationId: 3663,
            displayName: "Macau",
            countryId: 90,
        },
        {
            testCentreLocationId: 3125,
            displayName: "Mackay",
            countryId: 11,
        },
        {
            testCentreLocationId: 835,
            displayName: "Madrid",
            countryId: 187,
        },
        {
            testCentreLocationId: 2173,
            displayName: "Madrid",
            countryId: 187,
        },
        {
            testCentreLocationId: 3412,
            displayName: "Madurai",
            countryId: 93,
        },
        {
            testCentreLocationId: 842,
            displayName: "Magadan",
            countryId: 172,
        },
        {
            testCentreLocationId: 351,
            displayName: "Magnitogorsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 2817,
            displayName: "Mahasarakham",
            countryId: 205,
        },
        {
            testCentreLocationId: 3717,
            displayName: "Majuro Atoll",
            countryId: 126,
        },
        {
            testCentreLocationId: 91,
            displayName: "Makassar",
            countryId: 94,
        },
        {
            testCentreLocationId: 1630,
            displayName: "Makkah",
            countryId: 176,
        },
        {
            testCentreLocationId: 3103,
            displayName: "Makkah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2840,
            displayName: "Makurdi",
            countryId: 151,
        },
        {
            testCentreLocationId: 2863,
            displayName: "Malabe",
            countryId: 188,
        },
        {
            testCentreLocationId: 3513,
            displayName: "Malang",
            countryId: 94,
        },
        {
            testCentreLocationId: 2979,
            displayName: "Malang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1704,
            displayName: "Malang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1103,
            displayName: "Malang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1564,
            displayName: "Maluku",
            countryId: 94,
        },
        {
            testCentreLocationId: 93,
            displayName: "Manado",
            countryId: 94,
        },
        {
            testCentreLocationId: 3706,
            displayName: "Mandalay",
            countryId: 141,
        },
        {
            testCentreLocationId: 3005,
            displayName: "Mandi Bahauddin",
            countryId: 157,
        },
        {
            testCentreLocationId: 2781,
            displayName: "Mangalia",
            countryId: 171,
        },
        {
            testCentreLocationId: 199,
            displayName: "Mangalore",
            countryId: 93,
        },
        {
            testCentreLocationId: 3528,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 1844,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 1176,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 3714,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 1177,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 1178,
            displayName: "Manila",
            countryId: 164,
        },
        {
            testCentreLocationId: 2793,
            displayName: "Manizales",
            countryId: 44,
        },
        {
            testCentreLocationId: 3180,
            displayName: "Mansoura",
            countryId: 59,
        },
        {
            testCentreLocationId: 3129,
            displayName: "Markham",
            countryId: 35,
        },
        {
            testCentreLocationId: 3108,
            displayName: "Markham",
            countryId: 35,
        },
        {
            testCentreLocationId: 3008,
            displayName: "Markham",
            countryId: 35,
        },
        {
            testCentreLocationId: 1622,
            displayName: "Markham",
            countryId: 35,
        },
        {
            testCentreLocationId: 3541,
            displayName: "Martina Franca",
            countryId: 99,
        },
        {
            testCentreLocationId: 1790,
            displayName: "Mashhad",
            countryId: 95,
        },
        {
            testCentreLocationId: 2952,
            displayName: "Mashhad",
            countryId: 95,
        },
        {
            testCentreLocationId: 726,
            displayName: "Mashhad",
            countryId: 95,
        },
        {
            testCentreLocationId: 3128,
            displayName: "Mashhad",
            countryId: 95,
        },
        {
            testCentreLocationId: 1425,
            displayName: "Matara",
            countryId: 188,
        },
        {
            testCentreLocationId: 1100,
            displayName: "Mataram",
            countryId: 94,
        },
        {
            testCentreLocationId: 2850,
            displayName: "Mataram",
            countryId: 94,
        },
        {
            testCentreLocationId: 2849,
            displayName: "Mataram",
            countryId: 94,
        },
        {
            testCentreLocationId: 3312,
            displayName: "Mawaleh",
            countryId: 156,
        },
        {
            testCentreLocationId: 2722,
            displayName: "Mawaleh",
            countryId: 156,
        },
        {
            testCentreLocationId: 3659,
            displayName: "Mazatlan",
            countryId: 131,
        },
        {
            testCentreLocationId: 3773,
            displayName: "Mazatlán",
            countryId: 131,
        },
        {
            testCentreLocationId: 3599,
            displayName: "Medan",
            countryId: 94,
        },
        {
            testCentreLocationId: 105,
            displayName: "Medan",
            countryId: 94,
        },
        {
            testCentreLocationId: 2803,
            displayName: "Medan",
            countryId: 94,
        },
        {
            testCentreLocationId: 2621,
            displayName: "Medan",
            countryId: 94,
        },
        {
            testCentreLocationId: 2003,
            displayName: "Medellin",
            countryId: 44,
        },
        {
            testCentreLocationId: 2253,
            displayName: "Medellin",
            countryId: 44,
        },
        {
            testCentreLocationId: 2095,
            displayName: "Medellin",
            countryId: 44,
        },
        {
            testCentreLocationId: 300,
            displayName: "Medellin",
            countryId: 44,
        },
        {
            testCentreLocationId: 1245,
            displayName: "Medellin",
            countryId: 44,
        },
        {
            testCentreLocationId: 2470,
            displayName: "Medina",
            countryId: 176,
        },
        {
            testCentreLocationId: 3398,
            displayName: "Mehsana",
            countryId: 93,
        },
        {
            testCentreLocationId: 1429,
            displayName: "Melaka",
            countryId: 122,
        },
        {
            testCentreLocationId: 507,
            displayName: "Melaka",
            countryId: 122,
        },
        {
            testCentreLocationId: 3489,
            displayName: "Melaka",
            countryId: 122,
        },
        {
            testCentreLocationId: 2222,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2654,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2666,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 3701,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 46,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 3565,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2668,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 255,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 178,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2682,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2428,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2336,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2337,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2338,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 2341,
            displayName: "Melbourne",
            countryId: 11,
        },
        {
            testCentreLocationId: 295,
            displayName: "Mendoza",
            countryId: 8,
        },
        {
            testCentreLocationId: 3625,
            displayName: "Merida",
            countryId: 131,
        },
        {
            testCentreLocationId: 1546,
            displayName: "Merida",
            countryId: 131,
        },
        {
            testCentreLocationId: 3739,
            displayName: "Merida",
            countryId: 131,
        },
        {
            testCentreLocationId: 330,
            displayName: "Merida",
            countryId: 131,
        },
        {
            testCentreLocationId: 2325,
            displayName: "Messina",
            countryId: 99,
        },
        {
            testCentreLocationId: 3172,
            displayName: "Mexicali, Baja California",
            countryId: 131,
        },
        {
            testCentreLocationId: 3256,
            displayName: "Mexico",
            countryId: 131,
        },
        {
            testCentreLocationId: 3623,
            displayName: "Mexico",
            countryId: 131,
        },
        {
            testCentreLocationId: 2108,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1846,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2490,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3134,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1793,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2522,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2513,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3595,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2523,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3327,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1749,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3538,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1750,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3477,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1730,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1939,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1942,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1598,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2210,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2209,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1944,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2319,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1648,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1718,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 824,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2354,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 2499,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1738,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3507,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 3673,
            displayName: "Mexico City",
            countryId: 131,
        },
        {
            testCentreLocationId: 1399,
            displayName: "Milan",
            countryId: 99,
        },
        {
            testCentreLocationId: 3702,
            displayName: "Milan",
            countryId: 99,
        },
        {
            testCentreLocationId: 3213,
            displayName: "Milan",
            countryId: 99,
        },
        {
            testCentreLocationId: 2004,
            displayName: "Milan",
            countryId: 99,
        },
        {
            testCentreLocationId: 2349,
            displayName: "Milan",
            countryId: 99,
        },
        {
            testCentreLocationId: 3097,
            displayName: "Milton",
            countryId: 35,
        },
        {
            testCentreLocationId: 3050,
            displayName: "Milton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2960,
            displayName: "Minya",
            countryId: 59,
        },
        {
            testCentreLocationId: 3292,
            displayName: "Minya",
            countryId: 59,
        },
        {
            testCentreLocationId: 1980,
            displayName: "Mirpur",
            countryId: 157,
        },
        {
            testCentreLocationId: 2305,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3353,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 2187,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 2851,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3139,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3481,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 2047,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 1526,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3191,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3076,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 785,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3524,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3152,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 1296,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3821,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 2306,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 3046,
            displayName: "Mississauga",
            countryId: 35,
        },
        {
            testCentreLocationId: 204,
            displayName: "Moga",
            countryId: 93,
        },
        {
            testCentreLocationId: 3700,
            displayName: "Mombasa",
            countryId: 104,
        },
        {
            testCentreLocationId: 2332,
            displayName: "Moncton",
            countryId: 35,
        },
        {
            testCentreLocationId: 2914,
            displayName: "Montagnola, Lugano",
            countryId: 199,
        },
        {
            testCentreLocationId: 3775,
            displayName: "Montelíbano",
            countryId: 44,
        },
        {
            testCentreLocationId: 3427,
            displayName: "Monterrey",
            countryId: 131,
        },
        {
            testCentreLocationId: 1943,
            displayName: "Monterrey",
            countryId: 131,
        },
        {
            testCentreLocationId: 1249,
            displayName: "Monterrey",
            countryId: 131,
        },
        {
            testCentreLocationId: 2574,
            displayName: "Montevideo",
            countryId: 223,
        },
        {
            testCentreLocationId: 1518,
            displayName: "Montevideo",
            countryId: 223,
        },
        {
            testCentreLocationId: 1929,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 2819,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 2792,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 2852,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 1050,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 399,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 1490,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 3604,
            displayName: "Montreal",
            countryId: 35,
        },
        {
            testCentreLocationId: 2977,
            displayName: "Montreux",
            countryId: 199,
        },
        {
            testCentreLocationId: 2518,
            displayName: "Montreux",
            countryId: 199,
        },
        {
            testCentreLocationId: 1333,
            displayName: "Monza",
            countryId: 99,
        },
        {
            testCentreLocationId: 48,
            displayName: "Moscow",
            countryId: 172,
        },
        {
            testCentreLocationId: 1091,
            displayName: "Moscow",
            countryId: 172,
        },
        {
            testCentreLocationId: 3606,
            displayName: "Mugla",
            countryId: 212,
        },
        {
            testCentreLocationId: 2689,
            displayName: "Multan",
            countryId: 157,
        },
        {
            testCentreLocationId: 258,
            displayName: "Multan",
            countryId: 157,
        },
        {
            testCentreLocationId: 3816,
            displayName: "Multilingua - Chester Palmer",
            countryId: 44,
        },
        {
            testCentreLocationId: 196,
            displayName: "Mumbai",
            countryId: 93,
        },
        {
            testCentreLocationId: 3399,
            displayName: "Mumbai West",
            countryId: 93,
        },
        {
            testCentreLocationId: 373,
            displayName: "Murmansk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3066,
            displayName: "Musandam",
            countryId: 156,
        },
        {
            testCentreLocationId: 3703,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3607,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3657,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 2114,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 519,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 2087,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 2701,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3370,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3269,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 1034,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 2915,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 49,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3810,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3506,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3164,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3190,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 910,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 1838,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 2831,
            displayName: "Muscat",
            countryId: 156,
        },
        {
            testCentreLocationId: 3413,
            displayName: "Mysore",
            countryId: 93,
        },
        {
            testCentreLocationId: 3154,
            displayName: "Nabatieh",
            countryId: 112,
        },
        {
            testCentreLocationId: 403,
            displayName: "Nadi",
            countryId: 67,
        },
        {
            testCentreLocationId: 3400,
            displayName: "Nadiad",
            countryId: 93,
        },
        {
            testCentreLocationId: 3727,
            displayName: "Naga",
            countryId: 164,
        },
        {
            testCentreLocationId: 115,
            displayName: "Naga",
            countryId: 164,
        },
        {
            testCentreLocationId: 2311,
            displayName: "Nagoya",
            countryId: 101,
        },
        {
            testCentreLocationId: 2158,
            displayName: "Nagoya",
            countryId: 101,
        },
        {
            testCentreLocationId: 2969,
            displayName: "Nagoya",
            countryId: 101,
        },
        {
            testCentreLocationId: 3080,
            displayName: "Nagoya",
            countryId: 101,
        },
        {
            testCentreLocationId: 2157,
            displayName: "Nagoya",
            countryId: 101,
        },
        {
            testCentreLocationId: 3401,
            displayName: "Nagpur",
            countryId: 93,
        },
        {
            testCentreLocationId: 3244,
            displayName: "Naha",
            countryId: 101,
        },
        {
            testCentreLocationId: 3023,
            displayName: "Naha",
            countryId: 101,
        },
        {
            testCentreLocationId: 3133,
            displayName: "Nairobi",
            countryId: 104,
        },
        {
            testCentreLocationId: 3101,
            displayName: "Nairobi",
            countryId: 104,
        },
        {
            testCentreLocationId: 2565,
            displayName: "Nairobi",
            countryId: 104,
        },
        {
            testCentreLocationId: 3169,
            displayName: "Nakhon Ratchasima",
            countryId: 205,
        },
        {
            testCentreLocationId: 3519,
            displayName: "Namangan",
            countryId: 224,
        },
        {
            testCentreLocationId: 235,
            displayName: "Nanaimo",
            countryId: 35,
        },
        {
            testCentreLocationId: 3402,
            displayName: "Nasik",
            countryId: 93,
        },
        {
            testCentreLocationId: 3212,
            displayName: "Naucalpan de Juarez",
            countryId: 131,
        },
        {
            testCentreLocationId: 1144,
            displayName: "Nauru",
            countryId: 143,
        },
        {
            testCentreLocationId: 1537,
            displayName: "Navi Mumbai",
            countryId: 93,
        },
        {
            testCentreLocationId: 3493,
            displayName: "Navoi",
            countryId: 224,
        },
        {
            testCentreLocationId: 3403,
            displayName: "Navsari",
            countryId: 93,
        },
        {
            testCentreLocationId: 3382,
            displayName: "Nawanshashr",
            countryId: 93,
        },
        {
            testCentreLocationId: 2123,
            displayName: "Neepawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2444,
            displayName: "Negeri Sembilan",
            countryId: 122,
        },
        {
            testCentreLocationId: 1891,
            displayName: "Negeri Sembilan",
            countryId: 122,
        },
        {
            testCentreLocationId: 1258,
            displayName: "Negombo",
            countryId: 188,
        },
        {
            testCentreLocationId: 3454,
            displayName: "Neiva",
            countryId: 44,
        },
        {
            testCentreLocationId: 3838,
            displayName: "Neiva",
            countryId: 44,
        },
        {
            testCentreLocationId: 3468,
            displayName: "Neiva",
            countryId: 44,
        },
        {
            testCentreLocationId: 2500,
            displayName: "Nelson",
            countryId: 148,
        },
        {
            testCentreLocationId: 3829,
            displayName: "Nepalgunj",
            countryId: 144,
        },
        {
            testCentreLocationId: 1901,
            displayName: "Neuquen",
            countryId: 8,
        },
        {
            testCentreLocationId: 3105,
            displayName: "New Administrative Capital",
            countryId: 59,
        },
        {
            testCentreLocationId: 3458,
            displayName: "New Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 855,
            displayName: "New Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 1036,
            displayName: "New Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 3568,
            displayName: "New Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 3469,
            displayName: "New Cairo",
            countryId: 59,
        },
        {
            testCentreLocationId: 24,
            displayName: "New Delhi",
            countryId: 93,
        },
        {
            testCentreLocationId: 1538,
            displayName: "New Delhi",
            countryId: 93,
        },
        {
            testCentreLocationId: 1539,
            displayName: "New Delhi-South",
            countryId: 93,
        },
        {
            testCentreLocationId: 746,
            displayName: "New Plymouth",
            countryId: 148,
        },
        {
            testCentreLocationId: 3110,
            displayName: "New Plymouth",
            countryId: 148,
        },
        {
            testCentreLocationId: 3521,
            displayName: "New Westminster",
            countryId: 35,
        },
        {
            testCentreLocationId: 3095,
            displayName: "Newcastle",
            countryId: 11,
        },
        {
            testCentreLocationId: 1051,
            displayName: "Niagara",
            countryId: 35,
        },
        {
            testCentreLocationId: 1555,
            displayName: "Niagara",
            countryId: 35,
        },
        {
            testCentreLocationId: 2492,
            displayName: "Nicosia",
            countryId: 51,
        },
        {
            testCentreLocationId: 3198,
            displayName: "Nicosia",
            countryId: 51,
        },
        {
            testCentreLocationId: 3186,
            displayName: "Nicosia",
            countryId: 51,
        },
        {
            testCentreLocationId: 3583,
            displayName: "Nicosia",
            countryId: 51,
        },
        {
            testCentreLocationId: 2748,
            displayName: "Nicosia",
            countryId: 51,
        },
        {
            testCentreLocationId: 3026,
            displayName: "Nicosia - North",
            countryId: 51,
        },
        {
            testCentreLocationId: 3027,
            displayName: "Nicosia - North",
            countryId: 51,
        },
        {
            testCentreLocationId: 2494,
            displayName: "Nicosia - North",
            countryId: 51,
        },
        {
            testCentreLocationId: 2401,
            displayName: "Nisshin",
            countryId: 101,
        },
        {
            testCentreLocationId: 546,
            displayName: "Nizhnii Novgorod",
            countryId: 172,
        },
        {
            testCentreLocationId: 1865,
            displayName: "Nizwa",
            countryId: 156,
        },
        {
            testCentreLocationId: 3364,
            displayName: "Nizwa",
            countryId: 156,
        },
        {
            testCentreLocationId: 3384,
            displayName: "Noida",
            countryId: 93,
        },
        {
            testCentreLocationId: 1458,
            displayName: "North Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 873,
            displayName: "North Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2923,
            displayName: "North York",
            countryId: 35,
        },
        {
            testCentreLocationId: 3123,
            displayName: "North York",
            countryId: 35,
        },
        {
            testCentreLocationId: 2978,
            displayName: "North York",
            countryId: 35,
        },
        {
            testCentreLocationId: 3268,
            displayName: "North York",
            countryId: 35,
        },
        {
            testCentreLocationId: 2480,
            displayName: "Northland",
            countryId: 148,
        },
        {
            testCentreLocationId: 3435,
            displayName: "Noumea",
            countryId: 147,
        },
        {
            testCentreLocationId: 748,
            displayName: "Noumea",
            countryId: 147,
        },
        {
            testCentreLocationId: 3193,
            displayName: "Novi Sad",
            countryId: 178,
        },
        {
            testCentreLocationId: 356,
            displayName: "Novosibirsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3434,
            displayName: "Nuku'Alofa",
            countryId: 148,
        },
        {
            testCentreLocationId: 3494,
            displayName: "Nukus",
            countryId: 224,
        },
        {
            testCentreLocationId: 1763,
            displayName: "Oaxaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 3042,
            displayName: "Oaxaca",
            countryId: 131,
        },
        {
            testCentreLocationId: 382,
            displayName: "Odesa",
            countryId: 219,
        },
        {
            testCentreLocationId: 3682,
            displayName: "Ogbomosho",
            countryId: 151,
        },
        {
            testCentreLocationId: 3258,
            displayName: "Okayama",
            countryId: 101,
        },
        {
            testCentreLocationId: 1969,
            displayName: "Okayama",
            countryId: 101,
        },
        {
            testCentreLocationId: 1970,
            displayName: "Okayama",
            countryId: 101,
        },
        {
            testCentreLocationId: 2276,
            displayName: "Olsztyn",
            countryId: 166,
        },
        {
            testCentreLocationId: 357,
            displayName: "Omsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3650,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 2866,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 3621,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 1845,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 3622,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 3079,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 1840,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 2156,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 2606,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 2916,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 2058,
            displayName: "Osaka",
            countryId: 101,
        },
        {
            testCentreLocationId: 1918,
            displayName: "Oshawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2886,
            displayName: "OSOGBO",
            countryId: 151,
        },
        {
            testCentreLocationId: 2864,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2082,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2170,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 396,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 400,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2502,
            displayName: "Ottawa",
            countryId: 35,
        },
        {
            testCentreLocationId: 2707,
            displayName: "Owerri",
            countryId: 151,
        },
        {
            testCentreLocationId: 1019,
            displayName: "Padang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1720,
            displayName: "Padova",
            countryId: 99,
        },
        {
            testCentreLocationId: 2713,
            displayName: "Padova",
            countryId: 99,
        },
        {
            testCentreLocationId: 2182,
            displayName: "Palembang",
            countryId: 94,
        },
        {
            testCentreLocationId: 99,
            displayName: "Palembang",
            countryId: 94,
        },
        {
            testCentreLocationId: 417,
            displayName: "Palembang",
            countryId: 94,
        },
        {
            testCentreLocationId: 3450,
            displayName: "Palembang",
            countryId: 1,
        },
        {
            testCentreLocationId: 3724,
            displayName: "Palermo",
            countryId: 99,
        },
        {
            testCentreLocationId: 3718,
            displayName: "Palikir",
            countryId: 132,
        },
        {
            testCentreLocationId: 3113,
            displayName: "Palmerston north",
            countryId: 148,
        },
        {
            testCentreLocationId: 53,
            displayName: "Palmerston North",
            countryId: 148,
        },
        {
            testCentreLocationId: 3323,
            displayName: "Pampanga",
            countryId: 164,
        },
        {
            testCentreLocationId: 118,
            displayName: "Pampanga",
            countryId: 164,
        },
        {
            testCentreLocationId: 1527,
            displayName: "Panama",
            countryId: 160,
        },
        {
            testCentreLocationId: 2853,
            displayName: "Pangkal Pinang",
            countryId: 94,
        },
        {
            testCentreLocationId: 2493,
            displayName: "Paphos",
            countryId: 51,
        },
        {
            testCentreLocationId: 3146,
            displayName: "Paphos",
            countryId: 51,
        },
        {
            testCentreLocationId: 144,
            displayName: "Papua Jayapura",
            countryId: 94,
        },
        {
            testCentreLocationId: 3608,
            displayName: "Paris",
            countryId: 69,
        },
        {
            testCentreLocationId: 2266,
            displayName: "Passugg",
            countryId: 199,
        },
        {
            testCentreLocationId: 2891,
            displayName: "Pasto",
            countryId: 44,
        },
        {
            testCentreLocationId: 2827,
            displayName: "Pasto",
            countryId: 44,
        },
        {
            testCentreLocationId: 197,
            displayName: "Patiala",
            countryId: 93,
        },
        {
            testCentreLocationId: 1203,
            displayName: "Pavlodar",
            countryId: 103,
        },
        {
            testCentreLocationId: 2622,
            displayName: "Pekanbaru",
            countryId: 94,
        },
        {
            testCentreLocationId: 1088,
            displayName: "Pekanbaru",
            countryId: 94,
        },
        {
            testCentreLocationId: 100,
            displayName: "Pekanbaru",
            countryId: 94,
        },
        {
            testCentreLocationId: 1393,
            displayName: "Penang",
            countryId: 122,
        },
        {
            testCentreLocationId: 3363,
            displayName: "Penang",
            countryId: 122,
        },
        {
            testCentreLocationId: 54,
            displayName: "Penang",
            countryId: 122,
        },
        {
            testCentreLocationId: 2080,
            displayName: "Penza",
            countryId: 172,
        },
        {
            testCentreLocationId: 2180,
            displayName: "Pereira",
            countryId: 44,
        },
        {
            testCentreLocationId: 358,
            displayName: "Perm",
            countryId: 172,
        },
        {
            testCentreLocationId: 2747,
            displayName: "Perth",
            countryId: 11,
        },
        {
            testCentreLocationId: 3569,
            displayName: "Perth",
            countryId: 11,
        },
        {
            testCentreLocationId: 55,
            displayName: "Perth",
            countryId: 11,
        },
        {
            testCentreLocationId: 1910,
            displayName: "Perth",
            countryId: 11,
        },
        {
            testCentreLocationId: 1858,
            displayName: "Perugia",
            countryId: 99,
        },
        {
            testCentreLocationId: 2457,
            displayName: "Pescara",
            countryId: 99,
        },
        {
            testCentreLocationId: 1383,
            displayName: "Peshawar",
            countryId: 157,
        },
        {
            testCentreLocationId: 2529,
            displayName: "Peshawar",
            countryId: 157,
        },
        {
            testCentreLocationId: 1229,
            displayName: "Petaling Jaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 1318,
            displayName: "Petaling Jaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 843,
            displayName: "Petropavlovsk Kamchatskiy",
            countryId: 172,
        },
        {
            testCentreLocationId: 359,
            displayName: "Petrozavodsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 2895,
            displayName: "Phitsanulok",
            countryId: 205,
        },
        {
            testCentreLocationId: 3811,
            displayName: "Phitsanulok",
            countryId: 205,
        },
        {
            testCentreLocationId: 2262,
            displayName: "Phnom Penh",
            countryId: 33,
        },
        {
            testCentreLocationId: 2039,
            displayName: "Phnom Penh",
            countryId: 33,
        },
        {
            testCentreLocationId: 1815,
            displayName: "Phnom Penh",
            countryId: 33,
        },
        {
            testCentreLocationId: 56,
            displayName: "Phnom Penh",
            countryId: 33,
        },
        {
            testCentreLocationId: 3093,
            displayName: "Phnom Penh",
            countryId: 33,
        },
        {
            testCentreLocationId: 3433,
            displayName: "Phuket",
            countryId: 205,
        },
        {
            testCentreLocationId: 3371,
            displayName: "Phuket",
            countryId: 205,
        },
        {
            testCentreLocationId: 1533,
            displayName: "Pin Hwa",
            countryId: 122,
        },
        {
            testCentreLocationId: 3694,
            displayName: "Podgorica",
            countryId: 137,
        },
        {
            testCentreLocationId: 3726,
            displayName: "Pokhara",
            countryId: 144,
        },
        {
            testCentreLocationId: 1309,
            displayName: "Pokhara",
            countryId: 144,
        },
        {
            testCentreLocationId: 3343,
            displayName: "Ponta Grossa",
            countryId: 27,
        },
        {
            testCentreLocationId: 2125,
            displayName: "Pontianak",
            countryId: 94,
        },
        {
            testCentreLocationId: 2783,
            displayName: "Pontianak",
            countryId: 94,
        },
        {
            testCentreLocationId: 1020,
            displayName: "Pontianak",
            countryId: 94,
        },
        {
            testCentreLocationId: 3638,
            displayName: "Port Harcourt",
            countryId: 151,
        },
        {
            testCentreLocationId: 1785,
            displayName: "Port Harcourt",
            countryId: 151,
        },
        {
            testCentreLocationId: 1787,
            displayName: "Port Harcourt",
            countryId: 151,
        },
        {
            testCentreLocationId: 2758,
            displayName: "Port Louis",
            countryId: 129,
        },
        {
            testCentreLocationId: 652,
            displayName: "Port Louis",
            countryId: 129,
        },
        {
            testCentreLocationId: 57,
            displayName: "Port Louis",
            countryId: 129,
        },
        {
            testCentreLocationId: 3337,
            displayName: "Port Moresby",
            countryId: 161,
        },
        {
            testCentreLocationId: 2308,
            displayName: "Port Said",
            countryId: 59,
        },
        {
            testCentreLocationId: 3437,
            displayName: "Port Vila",
            countryId: 225,
        },
        {
            testCentreLocationId: 740,
            displayName: "Port Vila",
            countryId: 225,
        },
        {
            testCentreLocationId: 3239,
            displayName: "Porto Alegre",
            countryId: 27,
        },
        {
            testCentreLocationId: 1663,
            displayName: "Porto Alegre",
            countryId: 27,
        },
        {
            testCentreLocationId: 3279,
            displayName: "Poznan",
            countryId: 166,
        },
        {
            testCentreLocationId: 807,
            displayName: "Prince George",
            countryId: 35,
        },
        {
            testCentreLocationId: 3789,
            displayName: "Prince Rupert",
            countryId: 35,
        },
        {
            testCentreLocationId: 3114,
            displayName: "Puebla",
            countryId: 131,
        },
        {
            testCentreLocationId: 1577,
            displayName: "Puebla",
            countryId: 131,
        },
        {
            testCentreLocationId: 1576,
            displayName: "Puebla",
            countryId: 131,
        },
        {
            testCentreLocationId: 1834,
            displayName: "Puebla",
            countryId: 131,
        },
        {
            testCentreLocationId: 334,
            displayName: "Puebla",
            countryId: 131,
        },
        {
            testCentreLocationId: 3455,
            displayName: "Puerto Varas",
            countryId: 42,
        },
        {
            testCentreLocationId: 211,
            displayName: "Pune",
            countryId: 93,
        },
        {
            testCentreLocationId: 1502,
            displayName: "Quebec City",
            countryId: 35,
        },
        {
            testCentreLocationId: 736,
            displayName: "Queenstown",
            countryId: 148,
        },
        {
            testCentreLocationId: 1652,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 1941,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 1580,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 1579,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 1280,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 2608,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 2675,
            displayName: "Queretaro",
            countryId: 131,
        },
        {
            testCentreLocationId: 3275,
            displayName: "Quetta",
            countryId: 157,
        },
        {
            testCentreLocationId: 3232,
            displayName: "Quintana Roo",
            countryId: 131,
        },
        {
            testCentreLocationId: 3286,
            displayName: "Quintana Roo",
            countryId: 131,
        },
        {
            testCentreLocationId: 3453,
            displayName: "Quito",
            countryId: 58,
        },
        {
            testCentreLocationId: 3385,
            displayName: "Raikot Punjab",
            countryId: 93,
        },
        {
            testCentreLocationId: 3391,
            displayName: "Raipur",
            countryId: 93,
        },
        {
            testCentreLocationId: 213,
            displayName: "Rajkot",
            countryId: 93,
        },
        {
            testCentreLocationId: 3573,
            displayName: "Rajshahi",
            countryId: 16,
        },
        {
            testCentreLocationId: 3392,
            displayName: "Ranchi",
            countryId: 93,
        },
        {
            testCentreLocationId: 2485,
            displayName: "Ras Al Khaimah",
            countryId: 220,
        },
        {
            testCentreLocationId: 858,
            displayName: "Ras Al Khaimah",
            countryId: 220,
        },
        {
            testCentreLocationId: 1040,
            displayName: "Rasht",
            countryId: 95,
        },
        {
            testCentreLocationId: 2893,
            displayName: "Rawang",
            countryId: 122,
        },
        {
            testCentreLocationId: 3818,
            displayName: "Rayong",
            countryId: 205,
        },
        {
            testCentreLocationId: 2024,
            displayName: "Recife",
            countryId: 27,
        },
        {
            testCentreLocationId: 1604,
            displayName: "Reggio Calabria",
            countryId: 99,
        },
        {
            testCentreLocationId: 781,
            displayName: "Regina",
            countryId: 35,
        },
        {
            testCentreLocationId: 2302,
            displayName: "Regina",
            countryId: 35,
        },
        {
            testCentreLocationId: 2435,
            displayName: "RIAM",
            countryId: 122,
        },
        {
            testCentreLocationId: 3350,
            displayName: "Richmond",
            countryId: 35,
        },
        {
            testCentreLocationId: 3597,
            displayName: "Richmond",
            countryId: 35,
        },
        {
            testCentreLocationId: 3052,
            displayName: "Richmond",
            countryId: 35,
        },
        {
            testCentreLocationId: 1121,
            displayName: "Richmond Hill",
            countryId: 35,
        },
        {
            testCentreLocationId: 1150,
            displayName: "Richmond Hill",
            countryId: 35,
        },
        {
            testCentreLocationId: 2937,
            displayName: "Rimini",
            countryId: 99,
        },
        {
            testCentreLocationId: 2185,
            displayName: "Rio de Janeiro",
            countryId: 27,
        },
        {
            testCentreLocationId: 1953,
            displayName: "Rionegro",
            countryId: 44,
        },
        {
            testCentreLocationId: 1884,
            displayName: "Rivera",
            countryId: 44,
        },
        {
            testCentreLocationId: 2521,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 2560,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 1912,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 1926,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3631,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3658,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3372,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 2970,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3536,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 167,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3763,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3099,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3420,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 3764,
            displayName: "Riyadh",
            countryId: 176,
        },
        {
            testCentreLocationId: 59,
            displayName: "Rockhampton",
            countryId: 11,
        },
        {
            testCentreLocationId: 3111,
            displayName: "Rockhampton",
            countryId: 11,
        },
        {
            testCentreLocationId: 3479,
            displayName: "Rolle",
            countryId: 199,
        },
        {
            testCentreLocationId: 2796,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 2066,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 1768,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 941,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 3280,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 3025,
            displayName: "Rome",
            countryId: 99,
        },
        {
            testCentreLocationId: 365,
            displayName: "Rostov Don",
            countryId: 172,
        },
        {
            testCentreLocationId: 3340,
            displayName: "Rotorua",
            countryId: 148,
        },
        {
            testCentreLocationId: 3679,
            displayName: "Rotterdam",
            countryId: 145,
        },
        {
            testCentreLocationId: 2660,
            displayName: "Roxas",
            countryId: 164,
        },
        {
            testCentreLocationId: 1540,
            displayName: "Rudrapur",
            countryId: 93,
        },
        {
            testCentreLocationId: 1814,
            displayName: "Sabah",
            countryId: 122,
        },
        {
            testCentreLocationId: 3619,
            displayName: "Saida",
            countryId: 112,
        },
        {
            testCentreLocationId: 1500,
            displayName: "Saint John",
            countryId: 35,
        },
        {
            testCentreLocationId: 2160,
            displayName: "Saitama",
            countryId: 101,
        },
        {
            testCentreLocationId: 2161,
            displayName: "Saitama",
            countryId: 101,
        },
        {
            testCentreLocationId: 1897,
            displayName: "Salalah",
            countryId: 156,
        },
        {
            testCentreLocationId: 3270,
            displayName: "Salalah",
            countryId: 156,
        },
        {
            testCentreLocationId: 1444,
            displayName: "Salerno",
            countryId: 99,
        },
        {
            testCentreLocationId: 2121,
            displayName: "Salerno",
            countryId: 99,
        },
        {
            testCentreLocationId: 890,
            displayName: "Salerno",
            countryId: 99,
        },
        {
            testCentreLocationId: 851,
            displayName: "Salerno",
            countryId: 99,
        },
        {
            testCentreLocationId: 549,
            displayName: "Samara",
            countryId: 172,
        },
        {
            testCentreLocationId: 2726,
            displayName: "Samarkand",
            countryId: 224,
        },
        {
            testCentreLocationId: 966,
            displayName: "Samoa",
            countryId: 230,
        },
        {
            testCentreLocationId: 3605,
            displayName: "San Luis Potosi",
            countryId: 131,
        },
        {
            testCentreLocationId: 1534,
            displayName: "San Pedro",
            countryId: 48,
        },
        {
            testCentreLocationId: 2395,
            displayName: "Sango Ota",
            countryId: 151,
        },
        {
            testCentreLocationId: 3386,
            displayName: "Sangrur",
            countryId: 93,
        },
        {
            testCentreLocationId: 1525,
            displayName: "Santa Fe",
            countryId: 8,
        },
        {
            testCentreLocationId: 2126,
            displayName: "Santiago",
            countryId: 42,
        },
        {
            testCentreLocationId: 3143,
            displayName: "Santiago de Compostela",
            countryId: 187,
        },
        {
            testCentreLocationId: 2791,
            displayName: "Santo Domingo",
            countryId: 57,
        },
        {
            testCentreLocationId: 2357,
            displayName: "Sao Paulo",
            countryId: 27,
        },
        {
            testCentreLocationId: 444,
            displayName: "Sao Paulo",
            countryId: 27,
        },
        {
            testCentreLocationId: 3054,
            displayName: "Sao Paulo",
            countryId: 27,
        },
        {
            testCentreLocationId: 1899,
            displayName: "Sao Paulo",
            countryId: 27,
        },
        {
            testCentreLocationId: 2034,
            displayName: "Sao Paulo",
            countryId: 27,
        },
        {
            testCentreLocationId: 2413,
            displayName: "Sapporo",
            countryId: 101,
        },
        {
            testCentreLocationId: 543,
            displayName: "Saratov",
            countryId: 172,
        },
        {
            testCentreLocationId: 1462,
            displayName: "Sarawak",
            countryId: 122,
        },
        {
            testCentreLocationId: 2902,
            displayName: "Sargodha",
            countryId: 157,
        },
        {
            testCentreLocationId: 1981,
            displayName: "Sari",
            countryId: 95,
        },
        {
            testCentreLocationId: 1152,
            displayName: "Sari",
            countryId: 95,
        },
        {
            testCentreLocationId: 3262,
            displayName: "Saskatoon",
            countryId: 35,
        },
        {
            testCentreLocationId: 967,
            displayName: "Saskatoon",
            countryId: 35,
        },
        {
            testCentreLocationId: 3294,
            displayName: "Scarborough",
            countryId: 35,
        },
        {
            testCentreLocationId: 3598,
            displayName: "Scarborough",
            countryId: 35,
        },
        {
            testCentreLocationId: 3175,
            displayName: "Scarborough",
            countryId: 35,
        },
        {
            testCentreLocationId: 3202,
            displayName: "Scarborough",
            countryId: 35,
        },
        {
            testCentreLocationId: 3122,
            displayName: "Scarborough",
            countryId: 35,
        },
        {
            testCentreLocationId: 3448,
            displayName: "Seeb",
            countryId: 156,
        },
        {
            testCentreLocationId: 1945,
            displayName: "Seksyen",
            countryId: 122,
        },
        {
            testCentreLocationId: 1797,
            displayName: "Seksyen",
            countryId: 122,
        },
        {
            testCentreLocationId: 2135,
            displayName: "Selangor",
            countryId: 122,
        },
        {
            testCentreLocationId: 1430,
            displayName: "Selangor",
            countryId: 122,
        },
        {
            testCentreLocationId: 1684,
            displayName: "Selangor",
            countryId: 122,
        },
        {
            testCentreLocationId: 1972,
            displayName: "Selangor",
            countryId: 122,
        },
        {
            testCentreLocationId: 1779,
            displayName: "Selangor",
            countryId: 122,
        },
        {
            testCentreLocationId: 61,
            displayName: "Semarang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1680,
            displayName: "Semarang",
            countryId: 94,
        },
        {
            testCentreLocationId: 3544,
            displayName: "Semey",
            countryId: 103,
        },
        {
            testCentreLocationId: 3831,
            displayName: "Sendai",
            countryId: 101,
        },
        {
            testCentreLocationId: 3188,
            displayName: "Sendai",
            countryId: 101,
        },
        {
            testCentreLocationId: 2897,
            displayName: "Sendai",
            countryId: 101,
        },
        {
            testCentreLocationId: 2836,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 3614,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 2526,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 3220,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 3221,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 3248,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 3698,
            displayName: "Seoul",
            countryId: 107,
        },
        {
            testCentreLocationId: 1442,
            displayName: "Sepang",
            countryId: 122,
        },
        {
            testCentreLocationId: 2023,
            displayName: "Serdang",
            countryId: 122,
        },
        {
            testCentreLocationId: 1311,
            displayName: "Seremban",
            countryId: 122,
        },
        {
            testCentreLocationId: 1523,
            displayName: "Seremban",
            countryId: 122,
        },
        {
            testCentreLocationId: 1313,
            displayName: "Shah Alam",
            countryId: 122,
        },
        {
            testCentreLocationId: 3115,
            displayName: "Shakhrisabz",
            countryId: 224,
        },
        {
            testCentreLocationId: 2961,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 1724,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 2064,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 1722,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 2230,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 3217,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 2346,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 2611,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 274,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 820,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 1164,
            displayName: "Sharjah",
            countryId: 220,
        },
        {
            testCentreLocationId: 2265,
            displayName: "Sharqiyah",
            countryId: 156,
        },
        {
            testCentreLocationId: 1993,
            displayName: "Sheikh Zayed City",
            countryId: 59,
        },
        {
            testCentreLocationId: 1671,
            displayName: "Sherbrooke",
            countryId: 35,
        },
        {
            testCentreLocationId: 3780,
            displayName: "Shiraz",
            countryId: 95,
        },
        {
            testCentreLocationId: 3049,
            displayName: "Shiraz",
            countryId: 95,
        },
        {
            testCentreLocationId: 724,
            displayName: "Shiraz",
            countryId: 95,
        },
        {
            testCentreLocationId: 2371,
            displayName: "Shymkent",
            countryId: 103,
        },
        {
            testCentreLocationId: 319,
            displayName: "Shymkent",
            countryId: 103,
        },
        {
            testCentreLocationId: 1401,
            displayName: "Sialkot",
            countryId: 157,
        },
        {
            testCentreLocationId: 2811,
            displayName: "Sibiu",
            countryId: 171,
        },
        {
            testCentreLocationId: 1316,
            displayName: "Sibu",
            countryId: 122,
        },
        {
            testCentreLocationId: 2400,
            displayName: "Siem Reap",
            countryId: 33,
        },
        {
            testCentreLocationId: 3393,
            displayName: "Siliguri",
            countryId: 93,
        },
        {
            testCentreLocationId: 1585,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 1697,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 1584,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 1616,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 1583,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 1582,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 338,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 2128,
            displayName: "Sinaloa",
            countryId: 131,
        },
        {
            testCentreLocationId: 2920,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1180,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2419,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2246,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3473,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3474,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1118,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1119,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2260,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2601,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2417,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1990,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1989,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3016,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1365,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3360,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2434,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 63,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1732,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1320,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3559,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3563,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3790,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1453,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 3084,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 2673,
            displayName: "Singapore",
            countryId: 181,
        },
        {
            testCentreLocationId: 1483,
            displayName: "Smiths Falls",
            countryId: 35,
        },
        {
            testCentreLocationId: 3690,
            displayName: "Sohar",
            countryId: 156,
        },
        {
            testCentreLocationId: 1308,
            displayName: "Sohar",
            countryId: 156,
        },
        {
            testCentreLocationId: 3185,
            displayName: "Sohar",
            countryId: 156,
        },
        {
            testCentreLocationId: 3676,
            displayName: "Sohar",
            countryId: 156,
        },
        {
            testCentreLocationId: 104,
            displayName: "Solo",
            countryId: 94,
        },
        {
            testCentreLocationId: 3102,
            displayName: "Sonora",
            countryId: 131,
        },
        {
            testCentreLocationId: 1588,
            displayName: "Sonora",
            countryId: 131,
        },
        {
            testCentreLocationId: 1589,
            displayName: "Sonora",
            countryId: 131,
        },
        {
            testCentreLocationId: 1587,
            displayName: "Sonora",
            countryId: 131,
        },
        {
            testCentreLocationId: 1586,
            displayName: "Sonora",
            countryId: 131,
        },
        {
            testCentreLocationId: 102,
            displayName: "South Jakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3388,
            displayName: "Sri Muktsar Sahib",
            countryId: 93,
        },
        {
            testCentreLocationId: 3387,
            displayName: "Sriganganagar",
            countryId: 93,
        },
        {
            testCentreLocationId: 1554,
            displayName: "St Gallen",
            countryId: 199,
        },
        {
            testCentreLocationId: 2171,
            displayName: "St Gallen",
            countryId: 199,
        },
        {
            testCentreLocationId: 847,
            displayName: "St Petersburg",
            countryId: 172,
        },
        {
            testCentreLocationId: 370,
            displayName: "St Petersburg",
            countryId: 172,
        },
        {
            testCentreLocationId: 3835,
            displayName: "St. Gallen",
            countryId: 199,
        },
        {
            testCentreLocationId: 3206,
            displayName: "St. John's",
            countryId: 35,
        },
        {
            testCentreLocationId: 1495,
            displayName: "St. John's",
            countryId: 35,
        },
        {
            testCentreLocationId: 980,
            displayName: "Stavropol",
            countryId: 172,
        },
        {
            testCentreLocationId: 1994,
            displayName: "Subang Jaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 2900,
            displayName: "Subang Jaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 106,
            displayName: "Subang Jaya",
            countryId: 122,
        },
        {
            testCentreLocationId: 3813,
            displayName: "Sulaimaniyah",
            countryId: 96,
        },
        {
            testCentreLocationId: 65,
            displayName: "Sunshine Coast",
            countryId: 11,
        },
        {
            testCentreLocationId: 3447,
            displayName: "Sur",
            countryId: 156,
        },
        {
            testCentreLocationId: 2421,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 2984,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 2802,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 2208,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 66,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 1690,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 3250,
            displayName: "Surabaya",
            countryId: 94,
        },
        {
            testCentreLocationId: 198,
            displayName: "Surat",
            countryId: 93,
        },
        {
            testCentreLocationId: 2801,
            displayName: "Surin",
            countryId: 205,
        },
        {
            testCentreLocationId: 3459,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 3347,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 2592,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 3478,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 2922,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 2985,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 3003,
            displayName: "Surrey",
            countryId: 35,
        },
        {
            testCentreLocationId: 67,
            displayName: "Suva",
            countryId: 67,
        },
        {
            testCentreLocationId: 3424,
            displayName: "Swat",
            countryId: 157,
        },
        {
            testCentreLocationId: 875,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 1634,
            displayName: "Sydney",
            countryId: 35,
        },
        {
            testCentreLocationId: 2067,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 2776,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 68,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 1948,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 3463,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 3209,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 1247,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 1260,
            displayName: "Sydney",
            countryId: 11,
        },
        {
            testCentreLocationId: 374,
            displayName: "Syktyvkar",
            countryId: 172,
        },
        {
            testCentreLocationId: 3254,
            displayName: "Sylhet",
            countryId: 16,
        },
        {
            testCentreLocationId: 272,
            displayName: "Sylhet",
            countryId: 16,
        },
        {
            testCentreLocationId: 1849,
            displayName: "Tabasco",
            countryId: 131,
        },
        {
            testCentreLocationId: 3040,
            displayName: "Tabriz",
            countryId: 95,
        },
        {
            testCentreLocationId: 2953,
            displayName: "Tabriz",
            countryId: 95,
        },
        {
            testCentreLocationId: 1041,
            displayName: "Tabriz",
            countryId: 95,
        },
        {
            testCentreLocationId: 3642,
            displayName: "Tabuk",
            countryId: 176,
        },
        {
            testCentreLocationId: 3640,
            displayName: "Tabuk",
            countryId: 176,
        },
        {
            testCentreLocationId: 3643,
            displayName: "Tabuk",
            countryId: 176,
        },
        {
            testCentreLocationId: 117,
            displayName: "Tagaytay",
            countryId: 164,
        },
        {
            testCentreLocationId: 856,
            displayName: "Tahrir",
            countryId: 59,
        },
        {
            testCentreLocationId: 69,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 3315,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 2399,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 927,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 2219,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 929,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 2172,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 1226,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 2404,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 932,
            displayName: "Taichung",
            countryId: 202,
        },
        {
            testCentreLocationId: 2934,
            displayName: "Taif",
            countryId: 176,
        },
        {
            testCentreLocationId: 1633,
            displayName: "Taif",
            countryId: 176,
        },
        {
            testCentreLocationId: 926,
            displayName: "Tainan",
            countryId: 202,
        },
        {
            testCentreLocationId: 1931,
            displayName: "Tainan",
            countryId: 202,
        },
        {
            testCentreLocationId: 2541,
            displayName: "Tainan",
            countryId: 202,
        },
        {
            testCentreLocationId: 3757,
            displayName: "Tainan",
            countryId: 202,
        },
        {
            testCentreLocationId: 931,
            displayName: "Tainan",
            countryId: 202,
        },
        {
            testCentreLocationId: 3240,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 3579,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 3578,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 3321,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 3320,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 954,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 2627,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 1974,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 2179,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 145,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 1135,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 149,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 1543,
            displayName: "Taipei",
            countryId: 202,
        },
        {
            testCentreLocationId: 3819,
            displayName: "Takamatsu",
            countryId: 101,
        },
        {
            testCentreLocationId: 2983,
            displayName: "Takasaki",
            countryId: 101,
        },
        {
            testCentreLocationId: 321,
            displayName: "Taldykorgan",
            countryId: 103,
        },
        {
            testCentreLocationId: 2169,
            displayName: "Tamaulipas",
            countryId: 131,
        },
        {
            testCentreLocationId: 3627,
            displayName: "Tampico - Madero",
            countryId: 131,
        },
        {
            testCentreLocationId: 2538,
            displayName: "Tangerang",
            countryId: 94,
        },
        {
            testCentreLocationId: 2382,
            displayName: "Tangerang",
            countryId: 94,
        },
        {
            testCentreLocationId: 2683,
            displayName: "Tangerang",
            countryId: 94,
        },
        {
            testCentreLocationId: 1021,
            displayName: "Tangerang",
            countryId: 94,
        },
        {
            testCentreLocationId: 2805,
            displayName: "Tanta",
            countryId: 59,
        },
        {
            testCentreLocationId: 3322,
            displayName: "Taoyuan",
            countryId: 202,
        },
        {
            testCentreLocationId: 2405,
            displayName: "Taoyuan",
            countryId: 202,
        },
        {
            testCentreLocationId: 151,
            displayName: "Taoyuan",
            countryId: 202,
        },
        {
            testCentreLocationId: 3475,
            displayName: "TARAWA",
            countryId: 105,
        },
        {
            testCentreLocationId: 322,
            displayName: "Taraz",
            countryId: 103,
        },
        {
            testCentreLocationId: 3705,
            displayName: "Taraz",
            countryId: 103,
        },
        {
            testCentreLocationId: 2013,
            displayName: "Tarlac",
            countryId: 164,
        },
        {
            testCentreLocationId: 3803,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 2860,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 2581,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 2032,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 3290,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 1665,
            displayName: "Tashkent",
            countryId: 224,
        },
        {
            testCentreLocationId: 2409,
            displayName: "Tauranga",
            countryId: 148,
        },
        {
            testCentreLocationId: 3618,
            displayName: "Tawau",
            countryId: 122,
        },
        {
            testCentreLocationId: 1691,
            displayName: "Tawau",
            countryId: 122,
        },
        {
            testCentreLocationId: 717,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 2721,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 3771,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 2551,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 2564,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 3077,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 1521,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 1222,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 71,
            displayName: "Tehran",
            countryId: 95,
        },
        {
            testCentreLocationId: 2826,
            displayName: "Tekeli",
            countryId: 103,
        },
        {
            testCentreLocationId: 3572,
            displayName: "Temuco",
            countryId: 42,
        },
        {
            testCentreLocationId: 3457,
            displayName: "Tepic",
            countryId: 131,
        },
        {
            testCentreLocationId: 3241,
            displayName: "Tepic",
            countryId: 131,
        },
        {
            testCentreLocationId: 3762,
            displayName: "Termez",
            countryId: 224,
        },
        {
            testCentreLocationId: 3502,
            displayName: "Termez",
            countryId: 224,
        },
        {
            testCentreLocationId: 1767,
            displayName: "Ternopil",
            countryId: 219,
        },
        {
            testCentreLocationId: 2495,
            displayName: "Terrace",
            countryId: 35,
        },
        {
            testCentreLocationId: 2870,
            displayName: "Terrace",
            countryId: 35,
        },
        {
            testCentreLocationId: 3744,
            displayName: "Thai Binh",
            countryId: 227,
        },
        {
            testCentreLocationId: 3753,
            displayName: "Thai Nguyen",
            countryId: 227,
        },
        {
            testCentreLocationId: 3404,
            displayName: "Thane",
            countryId: 93,
        },
        {
            testCentreLocationId: 3807,
            displayName: "Thanh Hoa",
            countryId: 227,
        },
        {
            testCentreLocationId: 3754,
            displayName: "Thanh Hoa",
            countryId: 227,
        },
        {
            testCentreLocationId: 2599,
            displayName: "Thessaloniki",
            countryId: 78,
        },
        {
            testCentreLocationId: 3777,
            displayName: "Thessaloniki",
            countryId: 78,
        },
        {
            testCentreLocationId: 1541,
            displayName: "Thimphu Bhutan",
            countryId: 93,
        },
        {
            testCentreLocationId: 2195,
            displayName: "Thompson",
            countryId: 35,
        },
        {
            testCentreLocationId: 3252,
            displayName: "Tijuana",
            countryId: 131,
        },
        {
            testCentreLocationId: 2109,
            displayName: "Tijuana",
            countryId: 131,
        },
        {
            testCentreLocationId: 340,
            displayName: "Tijuana",
            countryId: 131,
        },
        {
            testCentreLocationId: 1906,
            displayName: "Tijuana",
            countryId: 131,
        },
        {
            testCentreLocationId: 3508,
            displayName: "Tijuana",
            countryId: 131,
        },
        {
            testCentreLocationId: 3219,
            displayName: "Timmins",
            countryId: 35,
        },
        {
            testCentreLocationId: 3415,
            displayName: "Tiruchirappalli",
            countryId: 93,
        },
        {
            testCentreLocationId: 3414,
            displayName: "Tirupati",
            countryId: 93,
        },
        {
            testCentreLocationId: 1381,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 3611,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 3013,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1505,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1504,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2549,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1985,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1955,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1172,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1299,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2710,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1358,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1869,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1357,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1734,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1823,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2381,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1073,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2257,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1735,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2026,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 2027,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1339,
            displayName: "Tokyo",
            countryId: 101,
        },
        {
            testCentreLocationId: 1637,
            displayName: "Toluca",
            countryId: 131,
        },
        {
            testCentreLocationId: 3287,
            displayName: "Toluca",
            countryId: 131,
        },
        {
            testCentreLocationId: 3759,
            displayName: "Toluca",
            countryId: 131,
        },
        {
            testCentreLocationId: 3325,
            displayName: "Toluca de Lerdo",
            countryId: 131,
        },
        {
            testCentreLocationId: 361,
            displayName: "Tomsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 741,
            displayName: "Tonga",
            countryId: 209,
        },
        {
            testCentreLocationId: 82,
            displayName: "Toowoomba",
            countryId: 11,
        },
        {
            testCentreLocationId: 1713,
            displayName: "Torino",
            countryId: 99,
        },
        {
            testCentreLocationId: 2731,
            displayName: "Torino",
            countryId: 99,
        },
        {
            testCentreLocationId: 2463,
            displayName: "Torino",
            countryId: 99,
        },
        {
            testCentreLocationId: 2005,
            displayName: "Torino",
            countryId: 99,
        },
        {
            testCentreLocationId: 2019,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2789,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3601,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3555,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1925,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 870,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3173,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 872,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2018,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2458,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2186,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1971,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 666,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3666,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 72,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2806,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2694,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 386,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1496,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 388,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 389,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3203,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 392,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2691,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 2807,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1390,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1530,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 920,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 1344,
            displayName: "Toronto",
            countryId: 35,
        },
        {
            testCentreLocationId: 3660,
            displayName: "Tottori",
            countryId: 101,
        },
        {
            testCentreLocationId: 3542,
            displayName: "Toulouse",
            countryId: 69,
        },
        {
            testCentreLocationId: 1642,
            displayName: "Townsville",
            countryId: 11,
        },
        {
            testCentreLocationId: 73,
            displayName: "Townsville",
            countryId: 11,
        },
        {
            testCentreLocationId: 3020,
            displayName: "Trabzon",
            countryId: 212,
        },
        {
            testCentreLocationId: 1433,
            displayName: "Treviso",
            countryId: 99,
        },
        {
            testCentreLocationId: 3624,
            displayName: "TREVISO",
            countryId: 99,
        },
        {
            testCentreLocationId: 205,
            displayName: "Trichur",
            countryId: 93,
        },
        {
            testCentreLocationId: 3566,
            displayName: "Trincomalee",
            countryId: 188,
        },
        {
            testCentreLocationId: 3647,
            displayName: "Tripoli",
            countryId: 112,
        },
        {
            testCentreLocationId: 221,
            displayName: "Trivandrum",
            countryId: 93,
        },
        {
            testCentreLocationId: 3610,
            displayName: "Trujillo",
            countryId: 163,
        },
        {
            testCentreLocationId: 1992,
            displayName: "Tsun Jin",
            countryId: 122,
        },
        {
            testCentreLocationId: 2433,
            displayName: "Tuguegarao",
            countryId: 164,
        },
        {
            testCentreLocationId: 3438,
            displayName: "Tunja",
            countryId: 44,
        },
        {
            testCentreLocationId: 1201,
            displayName: "Tuvalu",
            countryId: 215,
        },
        {
            testCentreLocationId: 1548,
            displayName: "Tuvalu",
            countryId: 67,
        },
        {
            testCentreLocationId: 3687,
            displayName: "Tyre",
            countryId: 112,
        },
        {
            testCentreLocationId: 362,
            displayName: "Tyumen",
            countryId: 172,
        },
        {
            testCentreLocationId: 3037,
            displayName: "Ubon Ratchathani",
            countryId: 205,
        },
        {
            testCentreLocationId: 3291,
            displayName: "Ubon Ratchathani",
            countryId: 205,
        },
        {
            testCentreLocationId: 363,
            displayName: "Ufa",
            countryId: 172,
        },
        {
            testCentreLocationId: 2256,
            displayName: "Uljin",
            countryId: 107,
        },
        {
            testCentreLocationId: 1329,
            displayName: "Unayzah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2600,
            displayName: "Unayzah",
            countryId: 176,
        },
        {
            testCentreLocationId: 2720,
            displayName: "Uralsk",
            countryId: 103,
        },
        {
            testCentreLocationId: 2418,
            displayName: "Uralsk",
            countryId: 103,
        },
        {
            testCentreLocationId: 3765,
            displayName: "Urgench",
            countryId: 224,
        },
        {
            testCentreLocationId: 3518,
            displayName: "Urgench",
            countryId: 224,
        },
        {
            testCentreLocationId: 323,
            displayName: "Ust Kamenogorsk",
            countryId: 103,
        },
        {
            testCentreLocationId: 3756,
            displayName: "Ust-Kamenogorsk",
            countryId: 103,
        },
        {
            testCentreLocationId: 3039,
            displayName: "UYO",
            countryId: 151,
        },
        {
            testCentreLocationId: 1522,
            displayName: "Uzhgorod",
            countryId: 219,
        },
        {
            testCentreLocationId: 206,
            displayName: "Vadodara",
            countryId: 93,
        },
        {
            testCentreLocationId: 2927,
            displayName: "Van",
            countryId: 212,
        },
        {
            testCentreLocationId: 3794,
            displayName: "VAN",
            countryId: 212,
        },
        {
            testCentreLocationId: 1904,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2242,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2676,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 3592,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2612,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2049,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2590,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2593,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 2591,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 75,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 395,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 979,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 3166,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 1497,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 1067,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 1319,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 808,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 1062,
            displayName: "Vancouver",
            countryId: 35,
        },
        {
            testCentreLocationId: 3405,
            displayName: "Vapi",
            countryId: 93,
        },
        {
            testCentreLocationId: 1711,
            displayName: "Varese",
            countryId: 99,
        },
        {
            testCentreLocationId: 3055,
            displayName: "Vaughan",
            countryId: 35,
        },
        {
            testCentreLocationId: 2890,
            displayName: "Vaughan",
            countryId: 35,
        },
        {
            testCentreLocationId: 1076,
            displayName: "Veliky Novgorod",
            countryId: 172,
        },
        {
            testCentreLocationId: 1594,
            displayName: "Veracruz",
            countryId: 131,
        },
        {
            testCentreLocationId: 1597,
            displayName: "Veracruz",
            countryId: 131,
        },
        {
            testCentreLocationId: 1595,
            displayName: "Veracruz",
            countryId: 131,
        },
        {
            testCentreLocationId: 1726,
            displayName: "Veracruz",
            countryId: 131,
        },
        {
            testCentreLocationId: 3087,
            displayName: "Verona",
            countryId: 99,
        },
        {
            testCentreLocationId: 2131,
            displayName: "Victoria",
            countryId: 35,
        },
        {
            testCentreLocationId: 83,
            displayName: "Victoria",
            countryId: 35,
        },
        {
            testCentreLocationId: 1501,
            displayName: "Victoria",
            countryId: 35,
        },
        {
            testCentreLocationId: 2205,
            displayName: "Vientiane",
            countryId: 110,
        },
        {
            testCentreLocationId: 76,
            displayName: "Vientiane",
            countryId: 110,
        },
        {
            testCentreLocationId: 2704,
            displayName: "Vigan",
            countryId: 164,
        },
        {
            testCentreLocationId: 3142,
            displayName: "Vigo",
            countryId: 187,
        },
        {
            testCentreLocationId: 207,
            displayName: "Vijayawada",
            countryId: 93,
        },
        {
            testCentreLocationId: 3346,
            displayName: "Villahermosa",
            countryId: 131,
        },
        {
            testCentreLocationId: 829,
            displayName: "Villahermosa",
            countryId: 131,
        },
        {
            testCentreLocationId: 2957,
            displayName: "Villars-sur-Ollion",
            countryId: 199,
        },
        {
            testCentreLocationId: 3462,
            displayName: "Villavicencio",
            countryId: 44,
        },
        {
            testCentreLocationId: 3697,
            displayName: "Vinh",
            countryId: 227,
        },
        {
            testCentreLocationId: 1862,
            displayName: "Vinh",
            countryId: 227,
        },
        {
            testCentreLocationId: 219,
            displayName: "Visakhapatnam",
            countryId: 93,
        },
        {
            testCentreLocationId: 3725,
            displayName: "Viterbo",
            countryId: 99,
        },
        {
            testCentreLocationId: 350,
            displayName: "Vladivostok",
            countryId: 172,
        },
        {
            testCentreLocationId: 369,
            displayName: "Volgograd",
            countryId: 172,
        },
        {
            testCentreLocationId: 3689,
            displayName: "Vung Tau",
            countryId: 227,
        },
        {
            testCentreLocationId: 1459,
            displayName: "Vung Tau",
            countryId: 227,
        },
        {
            testCentreLocationId: 906,
            displayName: "Wagga Wagga",
            countryId: 11,
        },
        {
            testCentreLocationId: 2154,
            displayName: "Warsaw",
            countryId: 166,
        },
        {
            testCentreLocationId: 2165,
            displayName: "Warsaw",
            countryId: 166,
        },
        {
            testCentreLocationId: 2504,
            displayName: "Waterloo",
            countryId: 35,
        },
        {
            testCentreLocationId: 3160,
            displayName: "Waterloo",
            countryId: 35,
        },
        {
            testCentreLocationId: 1479,
            displayName: "Wellington",
            countryId: 148,
        },
        {
            testCentreLocationId: 745,
            displayName: "Wellington",
            countryId: 148,
        },
        {
            testCentreLocationId: 986,
            displayName: "Whitehorse",
            countryId: 35,
        },
        {
            testCentreLocationId: 3667,
            displayName: "Windsor",
            countryId: 35,
        },
        {
            testCentreLocationId: 1063,
            displayName: "Windsor",
            countryId: 35,
        },
        {
            testCentreLocationId: 3793,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 2137,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 2471,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 1774,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 3529,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 863,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 792,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 1065,
            displayName: "Winnipeg",
            countryId: 35,
        },
        {
            testCentreLocationId: 3361,
            displayName: "Wollongong",
            countryId: 11,
        },
        {
            testCentreLocationId: 845,
            displayName: "Yakutsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 2578,
            displayName: "Yamaguchi",
            countryId: 101,
        },
        {
            testCentreLocationId: 2313,
            displayName: "Yamanashi",
            countryId: 101,
        },
        {
            testCentreLocationId: 2312,
            displayName: "Yamanashi",
            countryId: 101,
        },
        {
            testCentreLocationId: 3472,
            displayName: "Yangon",
            countryId: 141,
        },
        {
            testCentreLocationId: 2980,
            displayName: "Yangon",
            countryId: 141,
        },
        {
            testCentreLocationId: 3788,
            displayName: "Yeonsu-Gu",
            countryId: 107,
        },
        {
            testCentreLocationId: 3562,
            displayName: "Yerevan",
            countryId: 9,
        },
        {
            testCentreLocationId: 3581,
            displayName: "Yerevan",
            countryId: 9,
        },
        {
            testCentreLocationId: 3645,
            displayName: "Yogyakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 3147,
            displayName: "Yogyakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 2858,
            displayName: "Yogyakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 103,
            displayName: "Yogyakarta",
            countryId: 94,
        },
        {
            testCentreLocationId: 2885,
            displayName: "Yokohama",
            countryId: 101,
        },
        {
            testCentreLocationId: 1093,
            displayName: "Yokohama",
            countryId: 101,
        },
        {
            testCentreLocationId: 846,
            displayName: "Yuzhno Sakhalinsk",
            countryId: 172,
        },
        {
            testCentreLocationId: 3274,
            displayName: "Zacatecas",
            countryId: 131,
        },
        {
            testCentreLocationId: 2008,
            displayName: "Zacatecas",
            countryId: 131,
        },
        {
            testCentreLocationId: 2699,
            displayName: "Zalka",
            countryId: 112,
        },
        {
            testCentreLocationId: 3630,
            displayName: "Zamboanga",
            countryId: 164,
        },
        {
            testCentreLocationId: 2841,
            displayName: "Zanjan",
            countryId: 95,
        },
        {
            testCentreLocationId: 3001,
            displayName: "Zanjan",
            countryId: 95,
        },
        {
            testCentreLocationId: 2451,
            displayName: "Zapopan",
            countryId: 131,
        },
        {
            testCentreLocationId: 3632,
            displayName: "Zapopan",
            countryId: 131,
        },
        {
            testCentreLocationId: 3033,
            displayName: "Zapopan, Jalisco",
            countryId: 131,
        },
        {
            testCentreLocationId: 1883,
            displayName: "Zaporizhzhya",
            countryId: 219,
        },
        {
            testCentreLocationId: 2774,
            displayName: "Zuoz",
            countryId: 199,
        },
        {
            testCentreLocationId: 3580,
            displayName: "Zürich",
            countryId: 199,
        },
        {
            testCentreLocationId: 2519,
            displayName: "Zürich",
            countryId: 199,
        },
        {
            testCentreLocationId: 1922,
            displayName: "Zürich",
            countryId: 199,
        },
        {
            testCentreLocationId: 2299,
            displayName: "광주 (Gwangju)",
            countryId: 107,
        },
        {
            testCentreLocationId: 170,
            displayName: "대전 (Daejeon)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1449,
            displayName: "부산 (Busan)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1450,
            displayName: "부산 (Busan)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1878,
            displayName: "서울 강남 (Seoul Gangnam)",
            countryId: 107,
        },
        {
            testCentreLocationId: 62,
            displayName: "서울 강남 (Seoul Gangnam)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1271,
            displayName: "서울 강남 (Seoul Gangnam)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1209,
            displayName: "서울 강남 (Seoul Gangnam)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2042,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2364,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1956,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 1957,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2295,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2297,
            displayName: "서울 강북 (Seoul Gangbook)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2136,
            displayName: "인천 송도 (Incheon Songdo)",
            countryId: 107,
        },
        {
            testCentreLocationId: 2065,
            displayName: "제주 (Jeju)",
            countryId: 107,
        },
    ],
    getCountryVenues(code) {
        return this.values.filter(venue => venue.countryId === code);
    },
    getCountryVenuesCodeOnly(code) {
        const data = this.values.filter(venue => venue.countryId === code);
        return data.map(venue => venue.testCentreLocationId);
    },
    getData() {
        return this.values;
    },
    getDisplayNameLocationIDs(name) {
        return this.values
            .filter(venue => venue.displayName === name)
            .map(venue => venue.testCentreLocationId);
    },
    getUniqueDisplayNameOfCountry(code) {
        const values = this.values
            .filter(venue => venue.countryId === code)
            .map(venue => venue.displayName);
        return [...new Set(values)];
    },
    checkIfDisplayNameExists(name) {
        return this.values.some(venue => venue.displayName === name);
    },
};

export const testModules = {
    values: [
        {
            key: "academic",
            name: "Academic - IELTS",
            values: [1, 7],
        },
        {
            key: "general",
            name: "General Training - IELTS",
            values: [2, 7],
        },
    ],
    getValue(key) {
        return this.values.find(item => item.key === key);
    },
};

export const testFormatId = {
    values: [
        {
            key: "paper",
            name: "Paper",
            value: 1
        },
        {
            key: "cd",
            name: "Computer Based - CD",
            value: 2
        },
    ],
    getAllValues() {
        return this.values.map(item => item.value);
    },
    getValueOfKey(key) {
        return this.values.find(item => item.key === key).value;
    },
};
