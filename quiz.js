document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const resultContainer = document.getElementById("result");
    let currentQuestionIndex = 0;
    let score = 0;

    const questions = [
        {
            question: "What is my favourite colour?",
            options: ["Red", "Dark Blue", "Black", "Dark purple"],
            answer: "Dark Blue",
        },
        {
            question: "What is my favourite series?",
            options: ["Euphoria", "How I Met Your Mother", "Jack Reacher", "You"],
            answer: "How I Met Your Mother",
        },
        {
            question: "What is my favourite snack?",
            options: ["Chips", "Meatpie", "Chocolate", "Biscuits"],
            answer: "Biscuits",
        },
        {
            question: "What do I love to do with my free time at home?",
            options: ["Play football", "Play video games", "Watch TV", "Sleep"],
            answer: "Play Video Games",
        },
        {
            question: "When did we become official?",
            options: ["September 21", "August 21", "October 5", "April 30"],
            answer: "September 21",
        },
        {
            question: "When is my birthday?",
            options: ["April 20th", "April 22nd", "May 10th", "March 25th"],
            answer: "April 22nd",
        },
        {
            question: "What is my favourite anime character?",
            options: ["Yagami Light", "Escanor", "Goku", "Levi"],
            answer: "Escanor",
        },
        {
            question: "Who is my favourite footballer?",
            options: ["Bellingham", "Lionel Messi", "Rodri", "Kevin De Bruyne"],
            answer: ["Lionel Messi", "Rodri"], // Accepts two correct answers
        },
        {
            question: "What letter does my other name start with?",
            options: ["A", "K", "O", "M"],
            answer: "O",
        },
        {
            question: "What is my favourite drink?",
            options: ["Pepsi", "Coca-Cola", "Lacasera", "Sprite"],
            answer: "Lacasera",
        },
        {
            question: "What football club do I support?",
            options: ["Manchester City", "Real Madrid", "Barcelona", "Arsenal"],
            answer: "Manchester City",
        },
        {
            question: "What is my favourite city/country?",
            options: ["France", "Italy", "England", "Japan"],
            answer: "France",
        },
        {
            question: "Favourite video game.",
            options: ["Call of Duty", "God of War", "FIFA", "GTA"],
            answer: "God of War",
        },
        {
            question: "What position do I play?",
            options: ["Defender, Number 5", "Forward, Number 9", "Midfielder, Number 10", "Goalkeeper"],
            answer: "Midfielder, Number 10",
        },
        {
            question: "TikTok or Instagram?",
            options: ["TikTok", "Instagram"],
            answer: "Instagram",
        },
    ];

    function loadQuestion() {
        if (currentQuestionIndex < questions.length) {
            const currentQuestion = questions[currentQuestionIndex];
            questionElement.textContent = currentQuestion.question;

            optionsContainer.innerHTML = currentQuestion.options
                .map(
                    (option, index) => `
                    <button class="option" data-value="${option}">
                        ${index + 1}. ${option}
                    </button>`
                )
                .join("");

            nextButton.style.display = "none";
        } else {
            showFinalScore();
        }
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        const correctAnswer = currentQuestion.answer;

        if (
            Array.isArray(correctAnswer)
                ? correctAnswer.includes(selectedOption)
                : selectedOption === correctAnswer
        ) {
            score++;
        }

        currentQuestionIndex++;
        loadQuestion();
    }

    function showFinalScore() {
        quizContainer.style.display = "none";
        resultContainer.style.display = "block";
        resultContainer.innerHTML = `
            <h2>Quiz Complete!</h2>
            <p>Your Final Score: ${score} / ${questions.length}</p>
        `;
    }

    // Event Listeners
    optionsContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("option")) {
            const selectedOption = e.target.getAttribute("data-value");
            checkAnswer(selectedOption);
            nextButton.style.display = "inline-block";
        }
    });

    nextButton.addEventListener("click", () => {
        loadQuestion();
    });

    // Initialize quiz
    loadQuestion();
});



// Initialize the first question
displayQuestion();

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Back button for quiz page
const quizBackButton = document.getElementById("quiz-back-home");
if (quizBackButton) {
    quizBackButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Path to home
    });
}

// Back button for song page
const songBackButton = document.getElementById("song-back-home");
if (songBackButton) {
    songBackButton.addEventListener("click", () => {
        window.location.href = "index.html"; // Path to home
    });
}

if (quizBackButton) {
    quizBackButton.addEventListener("click", () => {
        console.log("Quiz Back Button Clicked");
        window.location.href = "index.html";
    });
}