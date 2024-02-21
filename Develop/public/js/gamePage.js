document.addEventListener('DOMContentLoaded', function () {

    const startButton = document.getElementById('startButton');
    const quizModal = document.getElementById('quizModal');
    const submitButton = document.getElementById('submit');



    // Quiz questions
    const questions = [
        "Semantic HTML is only important for visual aesthetics, not for SEO or accessibility. (Yay/Nay)",
        "The <main> element should be used to wrap the main content of a webpage, excluding headers, footers, and sidebars. (Yay/Nay)",
        "The <nav> element is used for navigation links, and it's semantically correct to place a list of footer links within it. (Yay/Nay)",
        "The <time> element is used to represent a specific period in time and can include date and time information. (Yay/Nay)",
        "Using <div> elements for everything is considered good practice, as it provides more flexibility in styling. (Yay/Nay)"
    ];

    // Answers to the questions
    const answers = ["Nay", "Yay", "Nay", "Yay", "Nay"];

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
        const correctnessDisplay = document.getElementById('correctness');
    
        if (selectedAnswer) {
            const userAnswer = selectedAnswer.value;
            if (userAnswer === answers[currentQuestion]) {
                correctnessDisplay.textContent = "Correct!";
            } else {
                correctnessDisplay.textContent = "Incorrect. The correct answer is: " + answers[currentQuestion];
            }
    
            // Move to the next question
            currentQuestion++;
    
            // Check if the quiz is completed
            if (currentQuestion < questions.length) {
                updateQuiz();
            } else {
                correctnessDisplay.textContent = "Quiz completed!";
            }
        } else {
            correctnessDisplay.textContent = "Please select an answer.";
        }
    }

    quizModal.addEventListener('click', function(event) {
        // Check if the click happened directly on the quizModal (the backdrop),
        // not on its children (modal content)
        if (event.target === quizModal) {
            quizModal.style.display = 'none'; // Hide the modal
        }
    });

    // Event listener to start the quiz
    startButton.addEventListener('click', function() {
        quizModal.style.display = 'block';
        updateQuiz(); // Initialize or update the quiz when the modal is shown
    });

    // Event listener for the "Submit" button inside the modal
    submitButton.addEventListener('click', checkAnswer);
    
    // Initial call to setup the quiz, can be removed or kept based on whether you want to display the first question immediately or only after the modal is shown
    updateQuiz();

    // Initial setup
    updateQuiz();

    // Add event listener for the "Submit" button
        startButton.addEventListener('click', function() {
            quizModal.style.display = 'block'; 
            updateQuiz();
        });

        submitButton.addEventListener('click', checkAnswer);
});
