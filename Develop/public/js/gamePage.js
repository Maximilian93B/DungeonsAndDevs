document.addEventListener('DOMContentLoaded', function () {

    const startButton = document.getElementById('startButton');
    const quizModal = document.getElementById('quizModal');
    const submitButton = document.getElementById('submit');



    // Quiz questions
    const questions = [
        "Semantic HTML is only important for visual aesthetics, not for SEO or accessibility. (True/False)",
        "The <main> element should be used to wrap the main content of a webpage, excluding headers, footers, and sidebars. (Yay/Nay)",
        "The <nav> element is used for navigation links, and it's semantically correct to place a list of footer links within it. (Yay/Nay)",
        "The <time> element is used to represent a specific period in time and can include date and time information. (Yay/Nay)",
        "Using <div> elements for everything is considered good practice, as it provides more flexibility in styling. (Yay/Nay)"
    ];

    // Answers to the questions
    const answers = ["False", "Yay", "False", "Yay", "False"];

    // Counter to keep track of the current question
    let currentQuestion = 0;

    // Function to update the quiz content
    function updateQuiz() {
        // Display the current question
        const questionElement = document.getElementById('question');
        questionElement.textContent = questions[currentQuestion];

        // Display the options (True/False or Yay/Nay)
        const optionsElement = document.getElementById('options');
        optionsElement.innerHTML = `
            <label>
                <input type="radio" name="answer" value="True"> True
            </label>
            <label>
                <input type="radio" name="answer" value="False"> False
            </label>
            <label>
                <input type="radio" name="answer" value="Yay"> Yay
            </label>
            <label>
                <input type="radio" name="answer" value="Nay"> Nay
            </label>
        `;
    }

    // Function to check the user's answer
    function checkAnswer() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[currentQuestion]) {
                alert("Correct!");
            } else {
                alert("Incorrect. The correct answer is: " + answers[currentQuestion]);
            }

            // Move to the next question
            currentQuestion++;

            // Check if the quiz is completed
            if (currentQuestion < questions.length) {
                updateQuiz();
            } else {
                alert("Quiz completed!");
            }
        } else {
            alert("Please select an answer.");
        }
    }

    // Initial setup
    updateQuiz();

    // Add event listener for the "Submit" button
        startButton.addEventListener('click', function() {
            quizModal.style.display = 'block'; 
            updateQuiz();
        });

        submitButton.addEventListener('click', checkAnswer);
});
