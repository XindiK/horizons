//TODO: add C hints


// Constants for common images
const IMAGES = {
    A: {
        A_1: "gen_images/A/A_1.webp",
        A_2: "gen_images/A/A_2.webp",
        A_3: "gen_images/A/A_3.webp",
        A_4: "gen_images/A/A_4.webp",
        A_5: "gen_images/A/A_5.webp",
        A_6: "gen_images/A/A_6.webp",
        A_7: "gen_images/A/A_7.webp",    
    },
    B: {
        B_1: "gen_images/B/B_1.webp",
        B_2: "gen_images/B/B_2.webp",
        B_3: "gen_images/B/B_3.webp",
        B_4: "gen_images/B/B_4.webp",
        B_5: "gen_images/B/B_5.webp",
        B_6: "gen_images/B/B_6.webp",
        B_7: "gen_images/B/B_7.webp",
    },
    C: {
        C_1: "gen_images/C/C_1.webp",
        C_2: "gen_images/C/C_2.webp",
        C_3: "gen_images/C/C_3.webp",
        C_4: "gen_images/C/C_4.webp",
        C_5: "gen_images/C/C_5.webp",
        C_6: "gen_images/C/C_6.webp",
        C_7: "gen_images/C/C_7.webp",
    },
};

// Gate hints organized by dream layers
// sides: top = 1,
export const gateHints = {
    // First layer - The Call to Adventure
    "0,1": {
        layer: 1,
        side: 4,
        title: "The call beckons. A familiar world fades as sleep approaches...",
    },

    // Second layer - Crossing the Threshold
    "13,2": {
        layer: 2,
        side: 1,
        title: "The Neon Playground",
        type: "A",
        text:"You are six years old.\n\n The toy robot in your hands hums to life as you twist the tiny switch on its back. Its red eyes flicker, its stiff plastic limbs whir as it takes clumsy steps forward on the scuffed wooden floor. You giggle. The small shop is warm, the air thick with the scent of [A1]. Your parents are at the front, chatting with a customer about a broken radio, their voices blending into the static hum of an old television in the corner. \n\n Outside, the streets of Kowloon are alive—hawkers call out their wares, neon signs buzz overhead, casting long, colored shadows on the pavement. You barely notice. The only thing that matters is your robot.\n\n Then—snap. A piece comes loose. The robot stutters, then collapses. Your chest tightens. Panic. You broke it. \n\n Your grandfather, perched on his usual stool, chuckles. He has seen this before. With slow, practiced hands, he picks up the tiny broken wire and holds it under the light. “Machines are like people,” he says in Cantonese, his voice gravelly yet kind. “They need care. You just have to know how to listen to them. \n\n He hands you a [A2]. The weight of it feels unfamiliar but exciting. As you pry open the toy's casing, you don't know it yet, but this moment—this smell, this dim shop, this lesson—will stay with you forever. \n\n Everything feels vaguely familiar yet distant, like a dream you're just beginning to remember.",
        image: IMAGES.A.A_1,
        choices:{
            A1: ["solder and dust", "dried mushroom", "dampness"],
            A2: ["pair of pliers", "screwdriver", "multi-tool"]   
        }  
    },
    "2,18": {
        layer: 2,
        side: 4,
        title: "The Winter Machine",
        type: "B",
        text:"You are six years old.\n\n Snow falls silently outside the window, settling in thick layers over the narrow streets of Tromsø. The world is white, muted, frozen. Inside, the air smells of dust and metal, the tiny basement workshop lit only by a dim lamp flickering against the cold. \n\n You sit on the wooden floor, fingers stiff with the chill as you tinker with a small wind-up toy—your only toy. A [B1] with gears inside, a gift from a distant uncle you barely remember. You twist the key, and for a moment, it flutters. Then it stutters, hesitates, and falls still. \n\n Your father watches from his desk, hunched over a half-dismantled [B2]. He used to be an engineer, before things fell apart. Before the drinking. \n\n “You don’t have the hands for it,” he mutters, turning away. His voice is dull, a man who has long since stopped believing in much of anything. \n\n The cold seeps in through the cracks in the walls. You curl your fingers around the bird, holding it tight. You don't know it yet, but this feeling, the weight of something broken, something that should have worked, will follow you for the rest of your life.",
        image: IMAGES.B.B_1,
        choices:{
            B1: ["toy car", "plastic frog", "metal bird"],
            B2: ["radio", "CD player", "hard drive"]
        }
    },
    "21,28"   : {
        layer: 2,
        side: 3,
        type: "C",
        title: "Each step toward waking brings new understanding...",
        text:"Wake up! You are not supposed to be here. Don't be fooled by the light. It's a trick. \nThe light is a trick. \nThe warmth is a trick. \nThe laughter is a trick. \n\n The music is a trick. \nThe people are a trick. \nThe city is a trick. \nThe dream is a trick. \nWake up.",
        image: IMAGES.C.C_1,
    },

    // Third layer - The Road of Trials
    "9,26": {
        layer: 3,
        side: 3,
        title: " The Coding Classroom",
        type: "A",
        text:"\n\n You are fourteen.\n\n The classroom is stifling, the air thick with the smell of warm plastic and chalk dust. Your school uniform sticks uncomfortably to your back. There's one working computer at the back of the room, an ancient machine that hums loudly as it struggles to boot up. You wait, fingers tapping impatiently against the desk.\n\n You found an old book on [A1] last week, its pages yellowed and filled with strange, cryptic lines of code. It felt like a puzzle, a secret language only machines understand. Now, you want to see if you can make the school's aging computer listen to you.\n\n The screen flickers. You type a few lines. Run.\n\n Syntax error.\n\n Frustration bubbles up, but you push it down. Try again. Adjust a command. Run.\n\n This time, a tiny pixelated [A2] moves across the screen. Your heart skips. It works. It actually works.\n\n Then a shadow falls over you. Your teacher sighs, arms crossed. “What are you doing?”\n\n You mumble something about AI, about how machines can learn.\n\n “AI?” He shakes his head. \“That's not a real thing. Stick to something practical.” \n\n The excitement fades. Your creation on the screen suddenly looks insignificant. You shut the book, but deep down, you know - this won't be the end.",
        image: IMAGES.A.A_2,
        choices:{
            A1: ["R", "BASIC", "Fortran"],
            A2: ["fish", "figure", "plane"]
        }
    },
    "20,4": {
        layer: 3,
        side: 1,
        title: "The Frozen Classroom",
        type: "B",
        text:"You are fourteen.\n\n The school is old, the walls lined with faded posters of [B1]. Outside, darkness settles over the town at 3 PM, the winter sun already slipping beneath the horizon. \n\n You sit in the back of the classroom, staring at the glowing screen of a computer. The others don't care much for it, but for you, it's a lifeline, lines of code, logical, structured, free from the mess of the real world. \n\n You type. A simple loop, a calculation. The numbers obey you. The machine listens. \n\n Behind you, a voice sneers. \n\n “Still playing with that crap?” One of the older boys, taller, heavier. You flinch as he slams a hand onto the desk, making the screen shake. “Not gonna help you when you end up [B2].” \n\n Laughter. A shove to the shoulder. You don't look up. \n\n Laughter. A shove to the shoulder. You don't look up. \n\n The teacher does nothing. The cold outside presses against the window, and for a moment, you wonder if it would be better to just disappear into it.",
        image: IMAGES.B.B_2,
        choices:{
            B1: ["science projects and experiments", "glaciers and dark forests", "mathematicians and dead philosophers"],
            B2: ["on the streets", "like your uncle", "like your dad"]
        }
    },

    // Fourth layer - The Approach
    "6,19": {
        layer: 4,
        side: 4,
        title: "The Midnight Hackathon",
        type: "A",
        text:"\n\n You are twenty-one.\n\n The dorm room smells like instant noodles and stale coffee. It's past midnight, but you and your friends are wide awake, eyes glued to the glowing lines of code on your laptop screen. The desk is cluttered with energy drink cans, scribbled notes, and a tangle of charging cables. \n\n You hear drones buzz outside celebrating the Chinese New Year, but you have no intentions to join them. \n\n Your team has spent weeks working on [A1],[A2]. Tonight is the night. You hit enter.\n\n Nothing.\n\n Your stomach sinks. No output. No response. Your friend groans, rubbing his temples. “Maybe the dataset's corrupted?” Someone else mutters about starting over.\n\n You exhale slowly, fingers hovering over the keyboard. You should be exhausted, frustrated—but instead, something else stirs inside you. Determination.\n\n An hour passes. Another. And then—something shifts. A small adjustment, a missing piece, and suddenly, the model works. The screen lights up with results.\n\n Laughter. Relief. You lean back, feeling the weight of your own exhaustion but also something deeper, pride.\n\n You are starting to understand. AI isn't just about lines of code. It's about patience, about failure, about finding answers where no one else has looked.",
        image: IMAGES.A.A_3,
        choices:{
            A1: ["PREFRONT", "SENTISCOPE", "NEUROSCAPE"],
            A2: ["acommand core module that integrates logic, memory, and goal-directed behavior", "a neural interface that stores and replays emotionally charged memories", "a memory-mapping system that reconstructs episodic memories in virtual environments"]
        }
    },
    "24,16": {
        layer: 4,
        side: 2,
        title: "The Lonely Algorithm",
        type: "B",
        text:"You are twenty-one.\n\n The university library is silent, except for the tapping of keyboards and the occasional whisper of turning pages. Outside, the fjord is frozen solid, the sky a deep, endless black. You haven't spoken to anyone in days, haven't left this chair for hours. \n\n The screen in front of you glows — [B1], something you barely understand but feel drawn to, obsessively. Your fingers hover over the keyboard. This is what you have. \n\n You had friends once. But they stopped calling. Or maybe you stopped answering. Either way, it doesn't matter now. \n\n You try to focus. You try not to think about the last message from your mother, asking when you're coming home. You try not to think about the last time you saw [B2], slumped over in that chair, surrounded by empty bottles. \n\n You just keep coding.",
        image: IMAGES.B.B_3,
        choices:{
            B1: ["an article about quantum computing", "a research paper on machine learning", "a handbook on AI ethics"],
            B2: ["her", "your uncle", "your father"]
        }
    },

    // Fifth layer - The Inner Sanctum
    "15,8": {
        layer: 5,
        side: 1,
        title: "The Scholar’s Dilemma",
        type: "A",
        text:"You are twenty-five. \n\n The research lab is cold, almost sterile. Fluorescent lights hum overhead, casting a pale glow over rows of monitors displaying endless lines of neural network algorithms. Your desk is covered in academic papers, half-empty coffee cups, and sticky notes scribbled with ideas. \n\n You should be excited. This is what you’ve always wanted—cutting-edge AI research, a chance to push the boundaries of what machines can do. But there’s something else, something uneasy. \n\n A project proposal lands on your desk. [A1] technology. You read the details, your hands tightening around the pages. The implications hit you like a slow, creeping shadow. \n\n Could this be misused? Would it help people—or control them? \n\n Your colleagues discuss the technical challenges, but no one seems to ask the bigger question: Should we even be building this? \n\n You don’t have an answer. But for the first time, you realize that AI isn’t just about innovation. It’s about [A2].",        
        image: IMAGES.A.A_4,
        choices:{
            A1: ["Facial recognition", "memory augmentation", "amygdala simulation"],
            A2: ["responsibility and ethics", "agency and control", "decisions and consequences"]
        }
    },
    "15,22": {
        layer: 5,
        side: 3,
        title: "The Drowning Dream",
        type: "B",
        text:"You are twenty-five.\n\n The research lab is a sterile, windowless box. The hum of [B1] fills the air, artificial and constant. You live here now, more or less. \n\n Your project, an AI model meant to predict human behavior, is on the verge of a breakthrough. You should feel excited. Instead, you feel nothing. \n\n At night, when you manage to sleep, you dream of [B2]. You dream of sinking, cold water filling your lungs. You wake up gasping, but no one is there to hear it. \n\n Your emails to your mother go unanswered. You tell yourself it doesn't matter. \n\n The AI on the screen blinks at you, waiting. You type another line of code.",
        image: IMAGES.B.B_4,
        choices:{
            B1: ["servers", "fluorescent lights", "air conditioning"],
            B2: ["falling into the arctic ocean", "the ice breaking under your feet", "a large iceberg in the distance"]
        }
    },

    // Sixth layer - The Return
    "20,18": {
        layer: 6,
        side: 2,
        title: "The Lab and the Late Calls",
        type: "A",
        text:"You are twenty-five.\n\n Your phone buzzes. It’s a video call from home.\n\n You hesitate before answering. It’s late in [A1], and your mother’s voice is tired but warm. “Are you eating enough?” she asks. “You look thinner.”\n\n You smile, reassuring her. The conversation shifts to work. She asks what you’re researching.\n\n You hesitate. How do you explain it? How do you make algorithms, data models, and ethical dilemmas feel real to someone who still [A2]?\n\n She listens, nodding, then asks, “Will all this research help people?”\n\n The question lingers. You don’t know how to answer.", 
        image: IMAGES.A.A_5,
        choices:{
            A1: ["Hong Kong", "Tromsø", "London"],
            A2: ["gets numbers from the yellow pages", "writes grocery lists on paper", "prays to the Buddha every morning"]
        }
    },
    "10,13": {
        layer: 6,
        side: 4,
        title: "The Silent Homecoming",
        type: "B",
        text:"You are twenty-eight.\n\n The old house is smaller than you remember, but the cold is the same. The wind cuts through your coat as you step inside. \n\n It smells of dust and stale air. Your father’s chair is empty, the bottles still there, untouched. You know before you even ask. He’s gone. \n\n Your mother stands in the kitchen, looking older than she should. She doesn’t cry when she sees you. Just nods. \n\n “You missed the funeral.” \n\n You don’t answer.",
        image: IMAGES.B.B_5
    },

    // Seventh layer - Transformation
    "14,18": {  
        layer: 7,
        side: 3,
        title: "The Turning Point",
        type: "A",
        text:"You are thirty-two.\n\n The auditorium is packed. The microphone in your hand feels heavier than it should. \n\n You\’ve spent years working toward this—your research, your ideas, your passion for ethical AI. Now, you\’re here, standing in front of an audience of [A1], presenting your findings. \n\n Then, the question comes. A sharp voice from the back of the room: \n\n “But isn\’t AI always biased? Can it ever truly be fair?” \n\n Silence. \n\n Your heart pounds. You glance at your slides, then at the audience. \n\n And then you realize: the answer isn\’t in your presentation. It\’s in everything you\’ve been through.\n\n You take a breath. Speak.\n\n And for the first time, you don\’t feel like a student. You feel like a [A2].",
        image: IMAGES.A.A_6,
        choices:{
            A1: ["politicians", "experts", "professors"],
            A2: ["a machine", "a fool", "a researcher"]
        }
    },
    "16,12": {
        layer: 7,
        side: 1,
        title: "The Algorithm’s Question",
        type: "B",
        text:"You are thirty-two.\n\n The conference hall is bright, filled with voices. They call you a genius. A pioneer in AI ethics. Your research on machine decision-making is being cited everywhere. \n\n And yet— \n\n A question from the audience cuts through the noise. A [B1], her voice steady: \n\n “Do you really believe AI can understand us? Or is it just mimicking what we want to hear?” \n\n The room waits. You think of the machines, the data, the algorithms. The cold logic, the perfection of it. You think of your father’s broken radio. The frozen fjord. The wind-up bird. \n\n You open your mouth to answer. But for the first time, you have nothing to say.",
        image: IMAGES.B.B_6,
        choices:{
            B1: ["woman with tired eyes", "scholar with a worried look", "journalist with a chilling stare"]
        }
    },

    // Center gates - The Resolution
    "15,16": {
        layer: 8,
        side: 3,
        title: "The Future Calls",
        type: "A",
        text:"You are home. Hong Kong hasn't changed. The neon lights still flicker. The streets are still loud, alive. The scent of street food, roasted chestnuts, egg waffles—fills the air, carrying with it the echoes of your childhood.\n\n You walk through the old neighborhood, past the [A1] where your journey began. A younger cousin tugs at your sleeve, holding up a tablet. “[A2],” they say, eyes bright with curiosity. “Can you teach me?”\n\n You smile. The cycle begins again.",
        image: IMAGES.A.A_7,
        choices:{
            A1: ["toy store", "bakery", "repair shop"],
            A2: ["I want to make a robot", "I'm learning to code", "I'd like to talk to aliens"]
        }
    },
    "15,14": {
        layer: 8,
        side: 1,
        title: "The Empty Street",
        type: "B",
        text:"You are home. \n\n The streets of Tromsø are quiet, the snow falling in thick, heavy flakes. You walk alone, the world reduced to silence. The lights of the city glow dimly, blurred by the frost. \n\n You pass the old [B1], long abandoned. The windows are dark. The dust has settled. \n\n For a moment, you imagine yourself as a child again, sitting on the cold floor, holding the broken [B2] in your hands. You imagine fixing it. You imagine your father watching, saying nothing. \n\n But there is no going back. \n\n The snow keeps falling. The wind howls through the empty streets. \n\n And you walk on, disappearing into the night.",
        image: IMAGES.B.B_7,
        choices:{
            B1: ["repair shop", "toy store", "bakery"],
            B2: ["wind-up bird", "broken radio", "toy robot"]
        }
    }
}; 

