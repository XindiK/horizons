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

// A story of two lives, two paths—one in the neon glow of a city that never sleeps, the other in the frozen silence of a land that never thaws. Each moment feels familiar, yet distant. As if planted there artificially.

// A: Hong Kong 
// B: Norway


// Scene 1: The Neon Playground

// You are six years old.

// The toy robot in your hands hums to life as you twist the tiny switch on its back. Its red eyes flicker, its stiff plastic limbs whir as it takes clumsy steps forward on the scuffed wooden floor. You giggle. The small shop is warm, the air thick with the scent of solder and dust. Your parents are at the front, chatting with a customer about a broken radio, their voices blending into the static hum of an old television in the corner.

// Outside, the streets of Kowloon are alive—hawkers call out their wares, neon signs buzz overhead, casting long, colored shadows on the pavement. You barely notice. The only thing that matters is your robot.

// Then—snap. A piece comes loose. The robot stutters, then collapses. Your chest tightens. Panic. You broke it.

// Your grandfather, perched on his usual stool, chuckles. He has seen this before. With slow, practiced hands, he picks up the tiny broken wire and holds it under the light. “Machines are like people,” he says in Cantonese, his voice gravelly yet kind. “They need care. You just have to know how to listen to them.”

// He hands you a screwdriver. The weight of it feels unfamiliar but exciting. As you pry open the toy’s casing, you don’t know it yet, but this moment—this smell, this dim shop, this lesson—will stay with you forever.

// Everything feels vaguely familiar yet distant, like a dream you’re just beginning to remember.

// ⸻

// Scene 2: The Coding Classroom

// You are fourteen.

// The classroom is stifling, the air thick with the smell of warm plastic and chalk dust. Your school uniform sticks uncomfortably to your back. There’s one working computer at the back of the room, an ancient machine that hums loudly as it struggles to boot up. You wait, fingers tapping impatiently against the desk.

// You found an old book on BASIC last week, its pages yellowed and filled with strange, cryptic lines of code. It felt like a puzzle, a secret language only machines understand. Now, you want to see if you can make the school’s aging computer listen to you.

// The screen flickers. You type a few lines. Run.

// Syntax error.

// Frustration bubbles up, but you push it down. Try again. Adjust a command. Run.

// This time, a tiny pixelated figure moves across the screen. Your heart skips. It works. It actually works.

// Then a shadow falls over you. Your teacher sighs, arms crossed. “What are you doing?”

// You mumble something about AI, about how machines can learn.

// “AI?” He shakes his head. “That’s not a real job. Stick to something practical.”

// The excitement fades. The small pixel figure on the screen suddenly looks insignificant. You shut the book, but deep down, you know—this won’t be the end.

// ⸻

// Scene 3: The Midnight Hackathon

// You are twenty-one.

// The dorm room smells like instant noodles and stale coffee. It’s past midnight, but you and your friends are wide awake, eyes glued to the glowing lines of code on your laptop screen. The desk is cluttered with energy drink cans, scribbled notes, and a tangle of charging cables.

// Your team has spent weeks working on this machine-learning model, training it, tweaking it, making it smarter. Tonight is the night. You hit enter.

// Nothing.

// Your stomach sinks. No output. No response. Your friend groans, rubbing his temples. “Maybe the dataset’s corrupted?” Someone else mutters about starting over.

// You exhale slowly, fingers hovering over the keyboard. You should be exhausted, frustrated—but instead, something else stirs inside you. Determination.

// An hour passes. Another. And then—something shifts. A small adjustment, a missing piece, and suddenly, the model works. The screen lights up with results.

// Laughter. Relief. You lean back, feeling the weight of your own exhaustion but also something deeper—pride.

// You are starting to understand. AI isn’t just about lines of code. It’s about patience, about failure, about finding answers where no one else has looked.

// ⸻

// Scene 4: The Scholar’s Dilemma

// You are twenty-five.

// The research lab is cold, almost sterile. Fluorescent lights hum overhead, casting a pale glow over rows of monitors displaying endless lines of neural network algorithms. Your desk is covered in academic papers, half-empty coffee cups, and sticky notes scribbled with ideas.

// You should be excited. This is what you’ve always wanted—cutting-edge AI research, a chance to push the boundaries of what machines can do. But there’s something else, something uneasy.

// A project proposal lands on your desk. Facial recognition technology. You read the details, your hands tightening around the pages. The implications hit you like a slow, creeping shadow.

// Could this be misused? Would it help people—or control them?

// Your colleagues discuss the technical challenges, but no one seems to ask the bigger question: Should we even be building this?

// You don’t have an answer. But for the first time, you realize that AI isn’t just about innovation. It’s about responsibility.

// ⸻

// Scene 5: The Lab and the Late Calls

// You are twenty-eight.

// Your phone buzzes. It’s a video call from home.

// You hesitate before answering. It’s late in Hong Kong, and your mother’s voice is tired but warm. “Are you eating enough?” she asks. “You look thinner.”

// You smile, reassuring her. The conversation shifts to work. She asks what you’re researching.

// You hesitate. How do you explain it? How do you make algorithms, data models, and ethical dilemmas feel real to someone who still writes grocery lists on paper?

// She listens, nodding, then asks, “Will all this research help people?”

// The question lingers. You don’t know how to answer.

// ⸻

// Scene 6: The Turning Point

// You are thirty-two.

// The auditorium is packed. The microphone in your hand feels heavier than it should.

// You’ve spent years working toward this—your research, your ideas, your passion for ethical AI. Now, you’re here, standing in front of an audience of experts, presenting your findings.

// Then, the question comes. A sharp voice from the back of the room:

// “But isn’t AI always biased? Can it ever truly be fair?”

// Silence.

// Your heart pounds. You glance at your slides, then at the audience.

// And then you realize: the answer isn’t in your presentation. It’s in everything you’ve been through.

// You take a breath. Speak.

// And for the first time, you don’t feel like a student. You feel like a researcher.

// ⸻

// Scene 7: The Future Calls

// You are home.

// Hong Kong hasn’t changed. The neon lights still flicker. The streets are still loud, alive. The scent of street food—roasted chestnuts, egg waffles—fills the air, carrying with it the echoes of your childhood.

// You walk through the old neighborhood, past the repair shop where your journey began. A younger cousin tugs at your sleeve, holding up a tablet. “I’m learning to code,” they say, eyes bright with curiosity. “Can you teach me?”

// You smile.

// The cycle begins again.

// ⸻



// ⸻

// Scene 1: The Winter Machine

// You are six years old.

// Snow falls silently outside the window, settling in thick layers over the narrow streets of Tromsø. The world is white, muted, frozen. Inside, the air smells of dust and metal, the tiny basement workshop lit only by a dim lamp flickering against the cold.

// You sit on the wooden floor, fingers stiff with the chill as you tinker with a small wind-up toy—your only toy. A metal bird with gears inside, a gift from a distant uncle you barely remember. You twist the key, and for a moment, it flutters. Then it stutters, hesitates, and falls still.

// Your father watches from his desk, hunched over a half-dismantled radio. He used to be an engineer, before things fell apart. Before the drinking.

// “You don’t have the hands for it,” he mutters, turning away. His voice is dull, a man who has long since stopped believing in much of anything.

// The cold seeps in through the cracks in the walls. You curl your fingers around the bird, holding it tight. You don’t know it yet, but this feeling—the weight of something broken, something that should have worked—will follow you for the rest of your life.

// ⸻

// Scene 2: The Frozen Classroom

// You are fourteen.

// The school is old, the walls lined with faded posters of mathematicians and dead philosophers. Outside, darkness settles over the town at 3 PM, the winter sun already slipping beneath the horizon.

// You sit in the back of the classroom, staring at the glowing screen of a computer. The others don’t care much for it, but for you, it’s a lifeline—lines of code, logical, structured, free from the mess of the real world.

// You type. A simple loop, a calculation. The numbers obey you. The machine listens.

// Behind you, a voice sneers.

// “Still playing with that crap?” One of the older boys, taller, heavier. You flinch as he slams a hand onto the desk, making the screen shake. “Not gonna help you when you end up like your dad.”

// Laughter. A shove to the shoulder. You don’t look up.

// The teacher does nothing. The cold outside presses against the window, and for a moment, you wonder if it would be better to just disappear into it.

// ⸻

// Scene 3: The Lonely Algorithm

// You are twenty-one.

// The university library is silent, except for the tapping of keyboards and the occasional whisper of turning pages. Outside, the fjord is frozen solid, the sky a deep, endless black. You haven’t spoken to anyone in days, haven’t left this chair for hours.

// The screen in front of you glows—a research paper on machine learning, something you barely understand but feel drawn to, obsessively. Your fingers hover over the keyboard. This is what you have.

// You had friends once. But they stopped calling. Or maybe you stopped answering. Either way, it doesn’t matter now.

// You try to focus. You try not to think about the last message from your mother, asking when you’re coming home. You try not to think about the last time you saw your father, slumped over in his chair, surrounded by empty bottles.

// You just keep coding.

// ⸻

// Scene 4: The Drowning Dream

// You are twenty-five.

// The research lab is a sterile, windowless box. The hum of servers fills the air, artificial and constant. You live here now, more or less.

// Your project—an AI model meant to predict human behavior—is on the verge of a breakthrough. You should feel excited. Instead, you feel nothing.

// At night, when you manage to sleep, you dream of the ice breaking under your feet. You dream of sinking, cold water filling your lungs. You wake up gasping, but no one is there to hear it.

// Your emails to your mother go unanswered. You tell yourself it doesn’t matter.

// The AI on the screen blinks at you, waiting. You type another line of code.

// ⸻

// Scene 5: The Silent Homecoming

// You are twenty-eight.

// The old house is smaller than you remember, but the cold is the same. The wind cuts through your coat as you step inside.

// It smells of dust and stale air. Your father’s chair is empty, the bottles still there, untouched. You know before you even ask. He’s gone.

// Your mother stands in the kitchen, looking older than she should. She doesn’t cry when she sees you. Just nods.

// “You missed the funeral.”

// You don’t answer.

// ⸻

// Scene 6: The Algorithm’s Question

// You are thirty-two.

// The conference hall is bright, filled with voices. They call you a genius. A pioneer in AI ethics. Your research on machine decision-making is being cited everywhere.

// And yet—

// A question from the audience cuts through the noise. A woman with tired eyes, her voice steady:

// “Do you really believe AI can understand us? Or is it just mimicking what we want to hear?”

// The room waits. You think of the machines, the data, the algorithms. The cold logic, the perfection of it. You think of your father’s broken radio. The frozen fjord. The wind-up bird.

// You open your mouth to answer. But for the first time, you have nothing to say.

// ⸻

// Scene 7: The Empty Street

// You are home.

// The streets of Tromsø are quiet, the snow falling in thick, heavy flakes. You walk alone, the world reduced to silence. The lights of the city glow dimly, blurred by the frost.

// You pass the old repair shop, long abandoned. The windows are dark. The dust has settled.

// For a moment, you imagine yourself as a child again, sitting on the cold floor, holding the broken wind-up bird in your hands. You imagine fixing it. You imagine your father watching, saying nothing.

// But there is no going back.

// The snow keeps falling. The wind howls through the empty streets.

// And you walk on, disappearing into the night.

// ⸻
