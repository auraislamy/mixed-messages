/* Mixed Message Program */

const generateButton = document.getElementById('generate');
const quotesDisplay = document.getElementById('quotes');



generateButton.addEventListener('click', () => {
    const random = Math.floor(Math.random() * 3);
    const happyMessage = "---Today's Quotes For You---\n\nš " + happyQuotes[random] + "\n\n"
    const sadMessage = `š ${sadQuotes[random]}\n\n`;
    const gratitudeMessage = `š ${gratitudeQuotes[random]}\n\n---We hope this quotes is useful for you!āØ---`;
    
    quotesDisplay.innerText = happyMessage + sadMessage + gratitudeMessage;
});

/* array of messages */

const happyQuotes = ["You're never too old to chase your dreams.", 
"Be happy, be bright, Be you.", 
"Happiness is a direction, not a place"];
const sadQuotes = ["Tears are words the heart can't express.",
"Sometimes we create our own heartbreaks through expectation.",
"Your sadness is a gift. Don't reject it. Don't rush it. Live it fully and use it as fuel to change and grow."];
const gratitudeQuotes = ["Learn to let go. That is the key to happiness.", 
"Be happy for this moment. This moment is your life.",
"It is not joy that makes us grateful; it is gratitude that makes us joyful."];



