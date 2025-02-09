document.addEventListener("DOMContentLoaded", function () {
    const notes = [
        "You have the most beautiful eyes babe fr❤️.",
        "You're the best thing that’s happened to me in forever ❤️.",
        "You're the best girlfriend ever fr.",
        "I LOVE YOU DIEEEE!!!",
        "writing this code is boring... the only fun thing about it is that you're the reason i'm doing it tbh",
        "You light up my world like no one else 🌟.",
        "You make even the toughest days feel brighter and I can't thank you enough for that💕.",
        "I'm still waiting for the crazy laugh you said will make me run away sha.",
        "You're really my favourite person.",
        "Send me picturessss",
        "You are amazing bae.",
        "My forehead princess",
        "Heyyyy Annieeeee ❤️",
        "I know you're hungry smh😂",
        "I love you mama❤️",
        "I love how dramatic you are😂❤️",
        "You brought my spark back so i'll do everything i can to keep you forever",
        "You are everything I actually want",
        "You're someone that no one could ever forget",
        "You're beautiful in so many ways that words can't even explain..",
        "The feelings I have for you are more than just love... love isn't enough to describe it fr",
        "You're one of a kind",
        "I've just been informed that my gifts won't make it to you... I'm so so sorry babe",
        "You're my bestfriend and I love how much of a positive effect you have on me",
        "I hope you stay in my life for good tbh",
        "You're actually the strongest person I know",
        "We need to take more pictures together ngl",
        "You're so pretty like oh my Godddd",
        "Keep praying my love❤️",
        "I love you❤️.. idc how many times I have to say it",
        "It's strange...I thought people like you only exist in movies. I still don't know how i got so lucky",
        "Did I tell you that I love you? I love youuuu",
        "Gen Z love💕",
        "You're incredible",
        "My superwoman❤️",
        "ItohanIsVintage💕",
        "Who eats pineapple with salt gfb",
        "Your texts make my dayyy. Tell me anything and everything..I can't even get tired😂",
        "Anytime you feel down, sad, or lost even.. I'm always going to be here for you.. during the good and the bad💕",
        "I miss you so fucking much",
        "Why's your forehead so big tho?😂😂😂... I love youuu😂",
        "I don't tell you how precious you are enough fr",
        "I think about you everyday, yes, I'm obsessed",
        "Don't stop believeing in yourself, because I'll always back you up",
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