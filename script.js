
//reasons why she's HER 

const reasons = [
    "First girl I ever show my true side to :3",
    "Prettiest girl I have ever seen, I've seen her with/without makeup, straight/curly hair, in her best fit/in her pyjamas, with good/bad lighting, outside/inside, sad/happy... I have seen it all and walllahi the prettiest girl EVER in all of her forms!!!!",
    "I don't feel weird around yasmina, I literally talk abt ANYTHING even stuff I never talk abt by myself, but what can I say I love her more than I love myself now ^_^",
    "Really tough and brave girl, went through a lot but came out of it all BY HERSELF and better than ever!",
    "I like the strand of white hair she has on the side of her head, makes it unique that only I can see those small beautiful details :)",
    "THE AMOUNT OF PATIENCE YASMINA HAS !!!!!! she waited for me even though let's face it I FUMBLED THE BAG LIKE A SHIT TON OF TIME LLOL :')",
    "Always thinks abt the future, our future ;) which is SUCH A GREEN FLAG :3",
    "Yasminti's love language is physical touch too <333333",
    "Stayed up at night just to listen to me yap abt something that bothers me, might look like nth but I'll never forget such nights ily<3",
    "FREAKY AF (just like me nihahahahaha) mwaaah",
    "Despite all the past she put her trust in me and I promise you I will take care of you, your heart is safe with me bb wlh '-^",
    "Takes full control of me sometimes with that magical touch of hers and I just AHHHHHHHH I FUCKING FEEL LIKE HEAVEN",
    "Laughs at 'my gf said no' excuse (not even an excuse SHE ACTUALLY SAYS NO :DDDD)",
    "Teached me how to love her right <3",
    "Got me to express ALL my feelings, I never did it and it feels so good :)))) (I'll only express to her for the rest of my life)",
    "9ALBHA ABYEDHHHHHHHH 7LIB",
    "The way your eyes sparkle when you laugh ♥‿♥",
    "How you always remember the little things",
    "Your soft voice when you say 'I love you' YARABII   (*´3｀)",
    "Your strength, even when you don’t feel strong",
    "The way you hold me like I’m home (ღ˘⌣˘ღ)",
    "Your adorable sleepy voice",
    "The way you say my name",
    "The comfort of just being near you ｡^‿^｡",
    "You. Simply, all of you. ♥(ˆ⌣ˆԅ)",
]

let currentReason = -1;

function showReason() {
    const reasonText = document.getElementById("reason-area");
    reasonText.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        reasonText.innerHTML = reasons[currentReason];
        reasonText.style.opacity = 1; // Fade in effect
    }, 300);
}

function nextReason() {
    currentReason = (currentReason + 1) % reasons.length;
    showReason();
}

const pages = [
    "Yup, it's me—the guy who once said he’d never fall in love. The one who always acted mysterious and nonchalant, never been in a relationship before... until I met her.",

    "Yassmin—she’s the definition of perfect. Now, you might think I’m just another guy in love with his girlfriend because she’s the only one who gave him attention and actually cared about him. (Okay, fine, that’s true too. Ngl. 😭) BUT, that’s not even half of it.",

    "She is one of the strongest, bravest, and most incredible people I know. Yass, you’ve been through so much since you were young, and look at you now—19 years old, standing tall, Alhamdulillah. That alone shows how powerful you are. You deserve the world, wlh, and I swear I want to give it to you.",

    "Remember, we’re in this together. I know you can achieve anything you set your mind to, and no matter what life throws at you, I know you’ll come out even stronger. But from now on, let’s do it together.",

    "Believe me, I know you can handle everything on your own, but let me be there for you. Let me help you, support you, and be your partner in everything.",

    "Today, we celebrate you—your birthday, your first one with me. And insha’Allah, this will go on TILL WE DIEEE NIHAHAHAHAHAHAHAH.",

    "I wish you the happiest birthday, and I ASSURE YOU that I will always try for us. No matter what happens, you will NOT escape me. (devious laugh intensifies)",

    "But seriously though, I promise I’ll always be here for you. I wish you nothing but the best, always.",

    "I’m so proud of you, Yass, and we WILL crush this 'bac' together. Just a matter of time, baby girl. ❤️"
];

let currentPage = 0;

function showPage() {
    const letterText = document.getElementById("letter-text");
    letterText.style.opacity = 0; // Fade out effect
    setTimeout(() => {
        letterText.innerHTML = pages[currentPage];
        letterText.style.opacity = 1; // Fade in effect
    }, 300);
}

function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        showPage();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        showPage();
    }
}

const questions = [
    ["If we could go anywhere in the world right now, where would you want us to go?","France","California","Your Room ;)","Japan"],
    ["Which of these songs makes you think of us?","Her","All of Me","Perfect","Ordinary"],
    ["How many kids do you want? 🫦","69","4","0","2"],
    ["Would you be my 'zawja mouwadhfa' and I stay at home :3","Yes","Sure","YEAHH","YYYLLYEEEEE"],
    ["Seriously, would you say I was a good impact on your life, not to be clingy but rate me so far pls :))))))))))","10/10","10/10","10/10","10/10"],
    "DID YOU JUST SAY I'M A 10 OMG <br> Fuck the quizz I want you and only you baby girl :3, I really don't care abt the result and didn't even count it I just wanted to showcase that I learned to do such presentations with js just for you 😭<br> All jokes aside though I never and will never want someone other than you, It's always you yasmin you changed my whole perspective abt rls and girls bc you are really one of a kind and that is why I promise to always be there with you <3 <br> I wish you a happy birthday and I hope nth but the best for you and your family <br> MWAAAH "
];

let currentQuestion = 0;

function showQuestion() {
    const question = document.getElementById("quiz-question");
    const answerA = document.getElementById("answerA");
    const answerB = document.getElementById("answerB");
    const answerC = document.getElementById("answerC");
    const answerD = document.getElementById("answerD");
    question.style.opacity = 0;
    answerA.style.opacity = 0;
    answerB.style.opacity = 0;
    answerC.style.opacity = 0;
    answerD.style.opacity = 0;
    element = questions[currentQuestion]
    setTimeout(() => {
        question.innerHTML = element[0];
        answerA.innerHTML = element[1];
        answerB.innerHTML = element[2];
        answerC.innerHTML = element[3];
        answerD.innerHTML = element[4];
        question.style.opacity = 1;
        answerA.style.opacity = 1;
        answerB.style.opacity = 1;
        answerC.style.opacity = 1;
        answerD.style.opacity = 1;
    }, 300);
}

function showResult(){
    const result = document.getElementById("quiz-question");
    result.opacity = 0;
    setTimeout(() => {
        result.innerHTML = questions[5];
        result.opacity = 1;
    }, 300);
}

function nextQuestion() {
    if (currentQuestion < 4) {
        currentQuestion ++;
        showQuestion();
        document.getElementById("prev").style.display = "";
    }
    else{
        showResult()
        document.getElementById("prev").style.display = "none";
        document.getElementById("repA").style.display = "none";
        document.getElementById("repB").style.display = "none";
        document.getElementById("repC").style.display = "none";
        document.getElementById("repD").style.display = "none";
        document.getElementById("ena").style.display = "none";
        document.getElementById("rights").style.display = "none";
        document.getElementById("prev").disabled = true;
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion --;
        showQuestion();
    }
}

//l8oneya
function playMusic(){
    let audio = document.getElementById("bg-music");
    audio.play();
}

function loadContent() {
    const loveReasons = [
        "eyes",
        "lips",
        "touch",
        "voice",
        "smile",
        "laugh",
        "gaze",
        "warmth",
        "scent",
        "hug",
        "fingers",
        "hands",
        "skin",
        "neck ahhhhh",
        "cheeks",
        "whispers",
        "breath",
        "giggle",
        "pout",
        "freckles",
        "soul",
        "eyelashes",
        "nose",
        "blush",
        "grip",
        "walk",
        "hair",
        "curves",
        "patience",
        "stare",
        "kindness",
        "softness",
        "stubbornness lol",
        "confidence",
        "chaos",
        "innocence",
        "magic",
        "honesty",
        "jealousy",
        "shyness",
        "comfort",
        "silence",
        "weirdness",
        "courage",
        "dreams",
        "habits",
        "cravings",
        "silliness",
        "moans yrbiii",
        "spark",
        "presence",
        "madness",
        "safety",
        "mess",
        "beauty",
        "flaws",
        "loyalty",
        "rage",
        "vibe",
        "mood",
        "energy",
        "groans",
        "reactions",
        "hums",
        "memories",
        "texts",
        "overthinking",
        "stubbornness",
        "overreactions",
        "clinginess",
        "affection",
        "obsession",
        "care",
        "glow",
        "light",
        "🍒 :3",
    ];

    const container = document.getElementById("reasons-list");

    loveReasons.forEach((reason, index) => {
        const div = document.createElement("div");
        div.classList.add("reason");
        div.style.animationDelay = `${index * 0.5}s`;
        div.style.fontSize = `${20 + index * 2}px`;
        div.textContent = reason;
        container.appendChild(div);
    });
}
