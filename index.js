const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      correct: 0,
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "9", "7"],
      correct: 1,
    },
    {
      question: "Which is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correct: 2,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      correct: 0,
    },
    {
      question: "What year did World War II end?",
      options: ["1941", "1945", "1939", "1950"],
      correct: 1,
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
      correct: 0,
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
      correct: 0,
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Hydrogen", "Oxygen", "Carbon", "Helium"],
      correct: 0,
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
      correct: 1,
    },
    {
      question: "What is the square root of 64?",
      options: ["6", "7", "8", "9"],
      correct: 2,
    },
  ];
  
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const homeSection = document.getElementById("home");
  const quizSection = document.getElementById("quiz");
  const resultSection = document.getElementById("result");
  const startButton = document.getElementById("start-btn");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const scoreElement = document.getElementById("score");
  
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", loadNextQuestion);
  restartButton.addEventListener("click", restartQuiz);
  
  function startQuiz() {
    homeSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadQuestion();
  }
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
  
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => selectAnswer(index));
      optionsContainer.appendChild(button);
    });
  
    nextButton.classList.add("hidden");
  }
  
  function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = optionsContainer.querySelectorAll("button");
  
    buttons.forEach((button, index) => {
      button.disabled = true;
      if (index === currentQuestion.correct) {
        button.style.background = "#28a745"; // Green for correct
      } else if (index === selectedIndex) {
        button.style.background = "#dc3545"; // Red for incorrect
      }
    });
  
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
  
    nextButton.classList.remove("hidden");
  }
  
  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    quizSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
    scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultSection.classList.add("hidden");
    homeSection.classList.remove("hidden");
  }
  