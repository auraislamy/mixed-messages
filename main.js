/* Mixed Message Program */

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

/* function that return a random message */

const randMessage = () => {
    const random = Math.floor(Math.random() * happyQuotes.length);
    // const quotes = [happyQuotes, sadQuotes, gratitudeQuotes];
    // const randQuotes = Math.floor(Math.random() * quotes.length);
    
    const happyMessage = "---Today's Quotes For You---\n😊 " + happyQuotes[random] + "\n"
    const sadMessage = `😔 ${sadQuotes[random]}\n`;
    const gratitudeMessage = `😇 ${gratitudeQuotes[random]}\n---We hope this quotes is useful for you!✨---`;
    return happyMessage + sadMessage + gratitudeMessage;
}

console.log(randMessage());