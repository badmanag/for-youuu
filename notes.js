document.addEventListener("DOMContentLoaded", function () {
    const notes = [
        "You have the most beautiful eyes babe fr❤️.",
        "You're the best thing that’s ever happened to me in forever ❤️.",
        "You're the best girlfriend ever fr.",
        "I LOVE YOU DIEEEE!!!",
        "writing this code is boring... the only fun thing about it is that you're the reason i'm doing it tbh",
        "You light up my world like no one else 🌟.",
        "You make even the toughest days feel brighter and I can't thank you enough for that💕.",
        "I'm still waiting for the crazy laugh you said will make me run away sha.",
        "You're really my favourite person.",
        "You are amazing bae.",
        "My forehead princess",
        "Heyyyy Annieeeee ❤️",
        "I know you're hungry smh😂",
        "I love you mama❤️",
        "Keep praying my love❤️",
        "I think about you everyday, yes, I'm obsessed",
        "Don't stop believeing in yourself",
        "It's amazing how much I think of you tbh...",
        "It sounds kind of cliche but when I'm bored or tired..even when I'm unhappy I can just look at your pictures and I'd feel a lot better",
        "You're more than enough. Never think you're not enough💕",
        "I'm so proud of how close you are to God. It motivates me to do more.",
        "You're perfect just the way you are 💕.",
        "I love your smile. It's the type of smile that makes me want to smile too😂",
        "I love you so much... literally everything about you. From your beautiful smile to your small but cute eyes.. even your insecurities..especially your insecurities.",
        "Believe it or not, you actually inspire me to become a much better person because you deserve only the best❤️🌟."
    ];

// Array to store used notes
let usedNotes = [];

// Function to generate a unique note
function generateUniqueNote() {
    if (usedNotes.length === notes.length) {
        usedNotes = []; // Reset when all notes have been used
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * notes.length);
    } while (usedNotes.includes(randomIndex));

    usedNotes.push(randomIndex);
    return notes[randomIndex];
}

// Event listener for generating notes
document.getElementById("generate notes").addEventListener("click", function () {
    const randomNote = generateUniqueNote();
    document.getElementById("notes-text").textContent = randomNote;
});}
)