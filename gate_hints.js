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
        title: "The call beckons. A familiar world fades as sleep approaches...",
        image: IMAGES.MISC.AWARD
    },

    // Second layer - Crossing the Threshold
    "13,2": {
        layer: 2,
        side: 1,
        title: "The call beckons. A familiar world fades as sleep approaches...",
        type: "A",
        text:"The streets are the same. The neon signs still flicker, the air still carries the scent of roasting chestnuts and diesel. Your footsteps echo against pavement that has seen too many lifetimes. \n\n A child tugs at your sleeve, holding up a tablet saying: Can you teach me? \n\nYou smile. The cycle begins again.",
        image: IMAGES.MISC.AWARD
    },
    "21,28": {
        layer: 2,
        side: 3,
        title: "Whispers of doubt echo through the corridors of your mind...",
        type: "B",
        text:"The streets are silent, buried under thick snow. The windows of the old repair shop are dark. You stand there for a long time, your breath curling in the frozen air.\n\n Somewhere in your pocket, your phone buzzes. You don’t check it. \n\n The wind howls through the empty street. \n\n You turn and walk away, disappearing into the night.",
        image: IMAGES.MISC.DEBATE
    },
    "2,18": {
        layer: 2,
        side: 4,
        type: "C",
        title: "Each step toward waking brings new understanding...",
        text:"wake up",
        image: IMAGES.DARK.STAIRS
    },

    // Third layer - The Road of Trials
    "9,26": {
        layer: 3,
        side: 3,
        title: "A surge of determination breaks through the uncertainty...",
        type: "A",
        text:"The auditorium is packed. The microphone feels heavier than it should. You\’re supposed to be proud—this research is making waves, they say.\n\n A voice from the back of the room. “Do you think AI can ever be truly neutral?” \n\n Your mind races. You have an answer. You\’ve rehearsed it. But the words don\’t come. \n\n For the first time, you wonder if you believe in the thing you\’ve built.",
        image: IMAGES.MISC.BLUE_WALL
    },
    "20,4": {
        layer: 3,
        side: 1,
        title: "Deep within, memories blend with dreams...",
        type: "B",
        text:"The conference lights are too bright, the air too stale. You\’ve done this before. You know how to deflect, how to give the answer they want to hear.\n\n And yet. \n\n A woman stands, her voice cutting through the static hum of the room. “Do you believe AI understands us, or is it just reflecting our own emptiness back at us?” \n\n You blink. You grip the edges of the podium. \n\n The answer sits on your tongue, but it tastes like iron.",
        image: IMAGES.MISC.CORRIDOR
    },

    // Fourth layer - The Approach
    "6,19": {
        layer: 4,
        side: 4,
        title: "Reality bends. Which path leads to truth?",
        type: "A",
        text:"The phone vibrates against the desk, its screen flashing a familiar number. You hesitate before answering. \n\n The voice on the other end is soft, tired. “Are you taking care of yourself?” \n\n You say yes. It isn\’t a lie, exactly. \n\n Outside the window, the city pulses with life. Here, in this room, you feel as if you exist just outside of it.",
        image: IMAGES.DARK.CLUB
    },
    "24,16": {
        layer: 4,
        side: 2,
        title: "Time loses meaning in this shifting landscape...",
        type: "B",
        text:"The voicemail notification blinks at you. The message is old. You know what it says before pressing play. \n\n “…you missed the funeral.” \n\n Your breath fogs against the cold windowpane. The snow outside has swallowed everything. \n\n You let the message play out. You don\’t delete it.",
        image: IMAGES.DARK.MARKET
    },

    // Fifth layer - The Inner Sanctum
    "15,8": {
        layer: 5,
        side: 1,
        title: "Echoes of your waking self grow distant...",
        type: "A",
        text:"The document on the screen is full of technical jargon, neatly formatted into research proposals and projected applications. You stare at one line in particular. Facial recognition systems. \n\n Your reflection ghosts over the monitor\’s glassy surface. There is something in the way your stomach knots, the way your fingers twitch over the mouse. \n\n A question forms in the back of your mind, but you don\’t let it reach your lips.",
        image: IMAGES.DARK.HOTEL
    },
    "15,22": {
        layer: 5,
        side: 3,
        type: "B",
        text:"The lab is sterile, a world of glass and white light. You\’ve spent weeks on this—data sets, training models, refining parameters. It should feel like progress. It doesn\’t. \n\n The report in front of you details the project\’s scope: predictive behavior analysis. You know what that really means. \n\n Somewhere in the back of your mind, an old memory stirs. A broken toy. A voice saying, “You don\’t have the hands for it.” \n\n You close the report and tell yourself it doesn\’t matter.",
        title: "At the heart of the dream, a revelation awaits...",
        image: IMAGES.LIGHT.TRAIN
    },

    // Sixth layer - The Return
    "20,18": {
        layer: 6,
        side: 2,
        type: "A",
        text:"The desk is covered in empty cans, tangled wires, and hastily scribbled notes. The air is thick with the scent of coffee gone cold. Your fingers hover over the keyboard, hesitating. The code is wrong. Somewhere, buried in the lines, something doesn\’t add up.\n\nSomeone sighs beside you. “We should just start over.” \n\n No. Not after this long. You exhale, adjust a single command, and press enter. \n\n The screen changes. Your heart lifts. It works.",
        title: "The way back begins to reveal itself...",
        image: IMAGES.LIGHT.SNOW
    },
    "10,13": {
        layer: 6,
        side: 4,
        type: "B",
        text:"The library is empty at this hour, save for the low hum of the radiator and the faint buzz of overhead lights. You should have gone home by now, but the thought of that cold, silent house keeps you here, staring at the screen.\n\n A page flickers open—an article on neural networks. You read the words, but they slip past you like ice over stone.\n\n You check your phone. No messages. No missed calls.\n\n You return to the screen. It\’s the only thing that responds.",
        title: "Don\'t fall asleep...",
        image: IMAGES.MISC.WOMAN
    },

    // Seventh layer - Transformation
    "14,18": {  
        layer: 7,
        side: 3,
        type: "A",
        text:"The monitor hums as the cursor blinks on the screen, waiting. You type. A simple loop. A figure appears—a blocky shape sliding across the black void. Your chest tightens. It works.\n\n Then a sharp noise. A laugh. Someone shoves your shoulder, making the desk rattle. “Still playing with that crap?”\n\n The teacher doesn\’t look up. Outside, the city is loud, endless. Inside, the screen flickers, the pixels suddenly too dim to see.",
        title: "The deepest truth lies within the final dream...",
        image: IMAGES.DARK.DOOR
    },
    "16,12": {
        layer: 7,
        side: 1,
        type: "B",
        text:"The classroom is silent except for the scratching of pencils and the occasional cough. Outside, darkness presses against the windows, though the clock insists it is still early.\n\n The school computer struggles to keep up as you type, its fans whirring like an old engine. Lines of code scroll past. A small process runs.\n\n A voice behind you—mocking, amused. “Not gonna help you when you end up like him.”\n\n You don\’t turn. The monitor\’s glow is the only warmth in the room.",
        title: "The boundary between dreams and reality thins...",
        image: IMAGES.MISC.DENTIST
    },

    // Center gates - The Resolution
    "15,16": {
        layer: 8,
        side: 3,
        type: "A",
        text:"The light flickers in the small repair shop. Neon reflections ripple across the linoleum floor, warped and shifting as passing cars hum outside. The tiny robot in your hands stirs, then stutters, gears clicking in protest. You shake it, but it slumps forward, lifeless.\n\n From the counter, a voice sighs—low, distracted, not meant for you. “Another thing broken.”\n\n Your fingers tighten around the screwdriver, the cool metal pressing into your palm. A vague thought lingers: If something breaks, it can be fixed. Right?",
        title: "Fragments of the dream begin to fade...",
        image: IMAGES.DARK.HONGKONG
    },
    "15,14": {
        layer: 8,
        side: 1,
        type: "B",
        text:"Snow presses against the basement window, muffling the outside world. The small mechanical bird in your hands flutters once, then collapses. You twist the key again, but its gears lock, unresponsive.\n\n A chair creaks behind you. A shadow, watching. “You don\’t have the hands for it.”\n\n The words settle like frost on glass. The wind outside howls. You grip the toy tighter, staring at its motionless wings.",
        image: IMAGES.DARK.DINER
    }
}; 

// Title: Fragments of Memory

// A story of two lives, two paths—one in the neon glow of a city that never sleeps, the other in the frozen silence of a land that never thaws. Each moment feels familiar, yet distant. As if planted there artificially.

// ⸻

// layer 1: The Machine

// A
// The light flickers in the small repair shop. Neon reflections ripple across the linoleum floor, warped and shifting as passing cars hum outside. The tiny robot in your hands stirs, then stutters, gears clicking in protest. You shake it, but it slumps forward, lifeless.

// From the counter, a voice sighs—low, distracted, not meant for you. “Another thing broken.”

// Your fingers tighten around the screwdriver, the cool metal pressing into your palm. A vague thought lingers: If something breaks, it can be fixed. Right?

// B
// Snow presses against the basement window, muffling the outside world. The small mechanical bird in your hands flutters once, then collapses. You twist the key again, but its gears lock, unresponsive.

// A chair creaks behind you. A shadow, watching. “You don’t have the hands for it.”

// The words settle like frost on glass. The wind outside howls. You grip the toy tighter, staring at its motionless wings.

// ⸻

// layer 2: The Silent Screen

// A
// The monitor hums as the cursor blinks on the screen, waiting. You type. A simple loop. A figure appears—a blocky shape sliding across the black void. Your chest tightens. It works.

// Then a sharp noise. A laugh. Someone shoves your shoulder, making the desk rattle. “Still playing with that crap?”

// The teacher doesn’t look up. Outside, the city is loud, endless. Inside, the screen flickers, the pixels suddenly too dim to see.

// B
// The classroom is silent except for the scratching of pencils and the occasional cough. Outside, darkness presses against the windows, though the clock insists it is still early.

// The school computer struggles to keep up as you type, its fans whirring like an old engine. Lines of code scroll past. A small process runs.

// A voice behind you—mocking, amused. “Not gonna help you when you end up like him.”

// You don’t turn. The monitor’s glow is the only warmth in the room.

// ⸻

// layer 3: The Machine Remembers

// A
// The desk is covered in empty cans, tangled wires, and hastily scribbled notes. The air is thick with the scent of coffee gone cold. Your fingers hover over the keyboard, hesitating. The code is wrong. Somewhere, buried in the lines, something doesn’t add up.

// Someone sighs beside you. “We should just start over.”

// No. Not after this long. You exhale, adjust a single command, and press enter.

// The screen changes. Your heart lifts. It works.

// B
// The library is empty at this hour, save for the low hum of the radiator and the faint buzz of overhead lights. You should have gone home by now, but the thought of that cold, silent house keeps you here, staring at the screen.

// A page flickers open—an article on neural networks. You read the words, but they slip past you like ice over stone.

// You check your phone. No messages. No missed calls.

// You return to the screen. It’s the only thing that responds.

// ⸻

// layer 4: The Dilemma

// A
// The document on the screen is full of technical jargon, neatly formatted into research proposals and projected applications. You stare at one line in particular. Facial recognition systems.

// Your reflection ghosts over the monitor’s glassy surface. There is something in the way your stomach knots, the way your fingers twitch over the mouse.

// A question forms in the back of your mind, but you don’t let it reach your lips.

// B
// The lab is sterile, a world of glass and white light. You’ve spent weeks on this—data sets, training models, refining parameters. It should feel like progress. It doesn’t.

// The report in front of you details the project’s scope: predictive behavior analysis. You know what that really means.

// Somewhere in the back of your mind, an old memory stirs. A broken toy. A voice saying, “You don’t have the hands for it.”

// You close the report and tell yourself it doesn’t matter.

// ⸻

// layer 5: The Unanswered Call

// A
// The phone vibrates against the desk, its screen flashing a familiar number. You hesitate before answering.

// The voice on the other end is soft, tired. “Are you taking care of yourself?”

// You say yes. It isn’t a lie, exactly.

// Outside the window, the city pulses with life. Here, in this room, you feel as if you exist just outside of it.

// B
// The voicemail notification blinks at you. The message is old. You know what it says before pressing play.

// “…you missed the funeral.”

// Your breath fogs against the cold windowpane. The snow outside has swallowed everything.

// You let the message play out. You don’t delete it.

// ⸻

// layer 6: The Question

// A
// The auditorium is packed. The microphone feels heavier than it should. You’re supposed to be proud—this research is making waves, they say.

// A voice from the back of the room. “Do you think AI can ever be truly neutral?”

// Your mind races. You have an answer. You’ve rehearsed it. But the words don’t come.

// For the first time, you wonder if you believe in the thing you’ve built.

// B
// The conference lights are too bright, the air too stale. You’ve done this before. You know how to deflect, how to give the answer they want to hear.

// And yet.

// A woman stands, her voice cutting through the static hum of the room. “Do you believe AI understands us, or is it just reflecting our own emptiness back at us?”

// You blink. You grip the edges of the podium.

// The answer sits on your tongue, but it tastes like iron.

// ⸻

// layer 7: The End of the Road

// A
// The streets are the same. The neon signs still flicker, the air still carries the scent of roasting chestnuts and diesel. Your footsteps echo against pavement that has seen too many lifetimes.

// A child tugs at your sleeve, holding up a tablet. “Can you teach me?”

// You smile. The cycle begins again.

// B
// The streets are silent, buried under thick snow. The windows of the old repair shop are dark. You stand there for a long time, your breath curling in the frozen air.

// Somewhere in your pocket, your phone buzzes. You don’t check it.

// The wind howls through the empty street.

// You turn and walk away, disappearing into the night.

// ⸻
