// magic8.js

// Array of possible Magic 8-Ball responses
const responses = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

// Function to generate a random response
function getMagic8Response() {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

// Function to ask the Magic 8-Ball a question
function askMagic8Ball() {
    const questionInput = document.getElementById('questionInput').value;
    if (questionInput.trim() === "") {
        alert("Please ask a question!");
        return;
    }
    
    const answer = getMagic8Response();
    document.getElementById('answer').innerText = `Magic 8-Ball says: ${answer}`;
}
