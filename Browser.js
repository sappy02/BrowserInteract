const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "Actions speak louder than words."
]

let startTime, endTime;
let currentSentence;

const startGame = () => {
    currentSentence = sentences[Math.floor(Math.random() * sentences.length)];
    document.getElementById('sentence').textContent = currentSentence;
    document.getElementById('input').value = currentSentence;
    document.getElementById('input').disabled = false;
    document.getElementById('input').focus();
    document.getElementById('result').textContent = '';
    startTime = new Date().getTime();
    document.getElementById('start-btn').disabled = true;

    document.getElementById('input').addEventListener('input', checkInput);
}

const checkInput = () => {
    const input = document.getElementById('input').value;
    if (input === currentSentence) {
        endTime = new Date().getTime();
        const timeTaken = (endTime - startTime) / 1000;
        const words = input.split(' ').length;
        const wpm = Math.round((words / timeTaken) * 60);
        document.getElementById('result').textContent = `You typed at ${wpm} words per minute.`;
        document.getElementById('input').disabled = true;
        document.getElementById('start-btn').disabled = false;
    }
}

// Ensure the input is cleared and disabled when the page loads
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('input').value = '';
    document.getElementById('input').disabled = true;
})
