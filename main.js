/* Mixed Message Program */

/* array of messages */

const messages = ['chan', 'june', 'dk', 'me', 'her'];

/* function that return a random message */

const randMessage = () => {
    const random = Math.floor(Math.random() * messages.length);
    return messages[random];
}

console.log(randMessage());