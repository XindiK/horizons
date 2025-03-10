// Constants for common images
const IMAGES = {
    DARK: {
        DOOR: "images/dark/door.jpg",
        HOTEL: "images/dark/hotel.jpg",
        MARKET: "images/dark/market.jpg",
        DINER: "images/dark/diner.jpg",
        CLUB: "images/dark/abandoned_club.jpg",
        HONGKONG: "images/dark/hongkkong.jpg",
        STAIRS: "images/dark/stairs.png"
    },
    LIGHT: {
        SNOW: "images/light/snow.jpg",
        TRAIN: "images/light/train_station.jpg",
        HOUSE: "images/light/colorful_house.jpg"
    },
    MISC: {
        AWARD: "images/award.jpeg",
        DEBATE: "images/debate.png",
        WOMAN: "images/woman.jpg",
        CORRIDOR: "images/corridor.png",
        DENTIST: "images/dentist.png",
        BLUE_WALL: "images/blue_wall.png"
    }
};

// Gate hints organized by dream layers
// sides: top = 1,
export const gateHints = {
    // First layer - The Call to Adventure
    "0,1": {
        layer: 1,
        side: 4,
        text: "The call beckons. A familiar world fades as sleep approaches...",
        image: IMAGES.MISC.AWARD
    },

    // Second layer - Crossing the Threshold
    "13,2": {
        layer: 2,
        side: 1,
        text: "The call beckons. A familiar world fades as sleep approaches...",
        image: IMAGES.MISC.AWARD
    },
    "21,28": {
        layer: 2,
        side: 3,
        text: "Whispers of doubt echo through the corridors of your mind...",
        image: IMAGES.MISC.DEBATE
    },
    "2,18": {
        layer: 2,
        side: 4,
        text: "Each step toward waking brings new understanding...",
        image: IMAGES.DARK.STAIRS
    },

    // Third layer - The Road of Trials
    "9,26": {
        layer: 3,
        side: 3,
        text: "A surge of determination breaks through the uncertainty...",
        image: IMAGES.MISC.BLUE_WALL
    },
    "20,4": {
        layer: 3,
        side: 1,
        text: "Deep within, memories blend with dreams...",
        image: IMAGES.MISC.CORRIDOR
    },

    // Fourth layer - The Approach
    "6,19": {
        layer: 4,
        side: 4,
        text: "Reality bends. Which path leads to truth?",
        image: IMAGES.DARK.CLUB
    },
    "24,16": {
        layer: 4,
        side: 2,
        text: "Time loses meaning in this shifting landscape...",
        image: IMAGES.DARK.MARKET
    },

    // Fifth layer - The Inner Sanctum
    "15,8": {
        layer: 5,
        side: 1,
        text: "Echoes of your waking self grow distant...",
        image: IMAGES.DARK.HOTEL
    },
    "15,22": {
        layer: 5,
        side: 3,
        text: "At the heart of the dream, a revelation awaits...",
        image: IMAGES.LIGHT.TRAIN
    },

    // Sixth layer - The Return
    "20,18": {
        layer: 6,
        side: 2,
        text: "The way back begins to reveal itself...",
        image: IMAGES.LIGHT.SNOW
    },
    "10,13": {
        layer: 6,
        side: 4,
        text: "Don't fall asleep...",
        image: IMAGES.MISC.WOMAN
    },

    // Seventh layer - Transformation
    "14,18": {  
        layer: 7,
        side: 3,
        text: "The deepest truth lies within the final dream...",
        image: IMAGES.DARK.DOOR
    },
    "16,12": {
        layer: 7,
        side: 1,
        text: "The boundary between dreams and reality thins...",
        image: IMAGES.MISC.DENTIST
    },

    // Center gates - The Resolution
    "15,16": {
        layer: 8,
        side: 3,
        text: "Fragments of the dream begin to fade...",
        image: IMAGES.DARK.HONGKONG
    },
    "15,14": {
        layer: 8,
        side: 1,
        text: "The final threshold between sleep and waking...",
        image: IMAGES.DARK.DINER
    }
}; 