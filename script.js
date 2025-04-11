// Quiz data by category
const quizDataByCategory = {
    Thermodyanamics: [
      {
        question: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Energy"],
        answer: "Energy"
      },
      {
        question: " The unit of power is:",
        options:  ["Joule", "Watt", "Newton", "Pascal"],
        answer: "Watt"
      },
      {
        question: " In thermodynamics, the internal energy is a function of:",
        options: ["Pressure and volume", "Temperature", "Entropy", "Heat and work"],
        answer: "Temperature"
      },
      {
        question:"4. The efficiency of Carnot engine depends on:",
        options: ["Working substance", "Load on the engine", "Temperature of source and sink", "All of the above"],
        answer: "Temperature of source and sink"
      },
      {
        question: "5. Pascal is the unit of:",
        options: ["Force", "Pressure", "Work", "Heat"],
        answer: "Pressure"
      },
      {
        question: "6. Which law states that pressure applied to a fluid is transmitted equally in all directions?",
        options: ["Boyle’s Law", "Pascal’s Law", "Bernoulli’s Principle", "Archimedes’ Principle"],
        answer: "Pascal’s Law"
      },
      {
        question: "7. Which of the following has the highest thermal conductivity?",
        options: ["Glass", "Water", "Copper", "Air"],
        answer: "Copper"
      },
      {
        question: "8. A device that converts chemical energy into mechanical energy is:",
        options: ["Pump", "Engine", "Compressor", "Turbine"],
        answer: "Engine"
      },
      {
        question: "9. Bernoulli’s equation is applicable to:",
        options: ["Viscous fluids", "Compressible flow", "Incompressible flow", "All types of flow"],
        answer: "Incompressible flow"
      },
      {
        question: "10. In which process is the entropy constant?",
         options: ["Isobaric", "Isochoric", "Isentropic", "Isothermal"],
        answer: "Isentropic"
      }
    ],
    science: [
      {
        question: "11. The unit of viscosity is:",
        options: ["N/m²", "Pascal", "Pa·s", "m²/s"],
        answer: "Pa·s"
      },
      {
        question: "12. The second law of thermodynamics introduces the concept of:",
        options: ["Heat", "Work", "Internal energy", "Entropy"],
        answer: "Entropy"
      },
      {
        question: "13. The heat transfer by conduction occurs in:",
        options: ["Liquids only", "Solids only", "Gases only", "All states of matter"],
        answer: "All states of matter"
      },
      {
        question: "14. The refrigerant commonly used in domestic refrigerator is:",
        options: ["Ammonia", "CO2", "R-134a", "Freon-12"],
        answer: "R-134a"
      },
      {
        question: "15. A four-stroke engine completes a cycle in:",
        options: ["1 revolution", "2 revolutions", "3 revolutions", "4 revolutions"],
        answer: "2 revolutions"
      }
    ],
    Materials: [
      {
        question: "16. The mechanical advantage is the ratio of:",
        options: ["Effort/Load", "Load/Effort", "Work input/Work output", "Work output/Work input"],
        answer: "Load/Effort"
      },
      {
        question: "17. The flywheel is used to:",
        options: ["Reduce friction", "Increase torque", "Store energy", "Increase efficiency"],
        answer: "Store energy"
      },
      {
        question: "18. The hardness of a material is measured by:",
        options: ["Brinell test", "Charpy test", "Fatigue test", "Tensile test"],
        answer: "Brinell test"
      },
      {
        question: "19. In SI units, the modulus of elasticity is measured in:",
        options: ["Watt", "Pascal", "Newton", "Joule"],
        answer: "Pascal"
      },
      {
        question: "20. A beam is a structure subjected to:",
        options: ["Axial load", "Torsion", "Transverse load", "None of these"],
        answer: "Transverse load"
      }
    ],
    geography: [
      {
        question: "Which is the largest desert in the world?",
        options: ["Gobi Desert", "Antarctic Desert", "Sahara Desert", "Arabian Desert"],
        answer: "Antarctic Desert"
      },
      {
        question: "Which country has the longest coastline in the world?",
        options: ["Russia", "Indonesia", "Australia", "Canada"],
        answer: "Canada"
      },
      {
        question: "What is the highest mountain in Africa?",
        options: ["Mount Kenya", "Mount Kilimanjaro", "Atlas Mountains", "Mount Meru"],
        answer: "Mount Kilimanjaro"
      },
      {
        question: "Which river is the longest in the world?",
        options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
        answer: "Nile"
      },
      {
        question: "Which continent is the least populated?",
        options: ["Australia", "Europe", "North America", "Antarctica"],
        answer: "Antarctica"
      }
    ],
    books: [
      {
        question: "Who wrote 'Pride and Prejudice'?",
        options: ["Emily Brontë", "Charlotte Brontë", "Jane Austen", "Virginia Woolf"],
        answer: "Jane Austen"
      },
      {
        question: "What's the name of the first book in J.K. Rowling's Harry Potter series?",
        options: ["Harry Potter and the Chamber of Secrets", "Harry Potter and the Philosopher's Stone", "Harry Potter and the Goblet of Fire", "Harry Potter and the Prisoner of Azkaban"],
        answer: "Harry Potter and the Philosopher's Stone"
      },
      {
        question: "Who is the author of 'The Great Gatsby'?",
        options: ["F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck", "William Faulkner"],
        answer: "F. Scott Fitzgerald"
      },
      {
        question: "In George Orwell's '1984', what is the name of the totalitarian regime?",
        options: ["Big Brother", "The Party", "The Eye", "The Ministry"],
        answer: "The Party"
      },
      {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["J.D. Salinger", "Harper Lee", "Mark Twain", "John Steinbeck"],
        answer: "Harper Lee"
      }
    ]
  };
  
  // Add more questions to each category to make sure we have enough
  for (const category in quizDataByCategory) {
    // Extend arrays as needed
    while (quizDataByCategory[category].length < 20) {
      // Just duplicate existing questions if we don't have enough
      const existingQuestions = [...quizDataByCategory[category]];
      for (const q of existingQuestions) {
        if (quizDataByCategory[category].length >= 20) break;
        const newQuestion = {...q};
        // Slightly modify the question to avoid exact duplicates
        newQuestion.question = "Extra: " + newQuestion.question;
        quizDataByCategory[category].push(newQuestion);
      }
    }
  }
  
  // Variables
  let currentQuiz = {
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
    timePerQuestion: 30,
    timer: null,
    startTime: null,
    totalTime: 0,
    isAnswered: false
  };
  
  // DOM Elements - Setup Screen
  const setupScreen = document.getElementById("setup-screen");
  const questionCountSelect = document.getElementById("questionCount");
  const categorySelect = document.getElementById("category");
  const difficultySelect = document.getElementById("difficulty");
  const timeSelect = document.getElementById("time");
  const startBtn = document.getElementById("startBtn");
  
  // DOM Elements - Quiz Screen
  const quizScreen = document.getElementById("quiz-screen");
  const categoryDisplay = document.getElementById("category-display");
  const difficultyDisplay = document.getElementById("difficulty-display");
  const timerBar = document.getElementById("timer-bar");
  const currentQuestionSpan = document.getElementById("current-question");
  const totalQuestionsSpan = document.getElementById("total-questions");
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("nextBtn");
  
  // DOM Elements - Results Screen
  const resultsScreen = document.getElementById("results-screen");
  const scoreDisplay = document.getElementById("score-display");
  const timeTaken = document.getElementById("time-taken");
  const correctBar = document.getElementById("correct-bar");
  const incorrectBar = document.getElementById("incorrect-bar");
  const restartBtn = document.getElementById("restart-btn");
  
  // Start Button Event Listener
  startBtn.addEventListener("click", startQuiz);
  
  // Next Button Event Listener
  nextBtn.addEventListener("click", () => {
    if (currentQuiz.isAnswered) {
      loadNextQuestion();
    } else {
      // If user hasn't selected an answer, treat as incorrect
      handleAnswerSelection(null);
    }
  });
  
  // Restart Button Event Listener
  restartBtn.addEventListener("click", () => {
    resultsScreen.style.display = "none";
    setupScreen.style.display = "block";
  });
  
  // Start Quiz Function
  function startQuiz() {
    // Get quiz settings
    const questionCount = parseInt(questionCountSelect.value);
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    const timePerQuestion = parseInt(timeSelect.value);
    
    // Set up quiz data
    const allQuestions = [...quizDataByCategory[category]];
    // Shuffle questions
    shuffleArray(allQuestions);
    
    // Initialize quiz state
    currentQuiz = {
      questions: allQuestions.slice(0, questionCount),
      currentQuestionIndex: 0,
      score: 0,
      timePerQuestion: timePerQuestion,
      timer: null,
      startTime: new Date(),
      totalTime: 0,
      isAnswered: false
    };
    
    // Update UI
    setupScreen.style.display = "none";
    quizScreen.style.display = "block";
    
    // Set category and difficulty display
    categoryDisplay.textContent = `Category: ${categorySelect.options[categorySelect.selectedIndex].text}`;
    difficultyDisplay.textContent = `Difficulty: ${difficultySelect.options[difficultySelect.selectedIndex].text}`;
    
    // Set total questions
    totalQuestionsSpan.textContent = questionCount;
    
    // Load first question
    loadQuestion();
  }
  
  // Load Question Function
  function loadQuestion() {
    currentQuiz.isAnswered = false;
    const currentQ = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    
    // Update question number
    currentQuestionSpan.textContent = currentQuiz.currentQuestionIndex + 1;
    
    // Set question text
    questionEl.textContent = currentQ.question;
    
    // Clear previous options
    optionsEl.innerHTML = "";
    
    // Create option buttons
    currentQ.options.forEach(option => {
      const optionBtn = document.createElement("button");
      optionBtn.textContent = option;
      optionBtn.classList.add("option");
      optionBtn.addEventListener("click", () => handleAnswerSelection(option));
      optionsEl.appendChild(optionBtn);
    });
    
    // Start timer
    startTimer();
  }
  
  // Handle Answer Selection
  function handleAnswerSelection(selectedOption) {
    clearTimeout(currentQuiz.timer);
    currentQuiz.isAnswered = true;
    
    const currentQ = currentQuiz.questions[currentQuiz.currentQuestionIndex];
    const options = optionsEl.querySelectorAll(".option");
    
    // Mark correct answer and user selection
    options.forEach(option => {
      option.disabled = true;
      
      if (option.textContent === currentQ.answer) {
        option.classList.add("correct");
      } 
      
      if (selectedOption && option.textContent === selectedOption) {
        if (selectedOption === currentQ.answer) {
          currentQuiz.score++;
        } else {
          option.classList.add("incorrect");
        }
      }
    });
    
    // If time ran out or no selection was made
    if (!selectedOption) {
      options.forEach(option => {
        if (option.textContent === currentQ.answer) {
          option.classList.add("correct");
        }
      });
    }
  }
  
  // Load Next Question
  function loadNextQuestion() {
    currentQuiz.currentQuestionIndex++;
    
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  // Start Timer
  function startTimer() {
    // Reset timer bar
    timerBar.style.width = "100%";
    
    // Animate timer bar
    setTimeout(() => {
      timerBar.style.width = "0%";
    }, 50);
    
    // Set timeout for question
    currentQuiz.timer = setTimeout(() => {
      handleAnswerSelection(null);
    }, currentQuiz.timePerQuestion * 1000);
  }
  
  // Show Results
  function showResults() {
    // Calculate total time
    const endTime = new Date();
    currentQuiz.totalTime = Math.round((endTime - currentQuiz.startTime) / 1000);
    
    // Update quiz screen
    quizScreen.style.display = "none";
    resultsScreen.style.display = "block";
    
    // Display score
    scoreDisplay.textContent = `Your Score: ${currentQuiz.score} / ${currentQuiz.questions.length}`;
    
    // Display time taken
    const minutes = Math.floor(currentQuiz.totalTime / 60);
    const seconds = currentQuiz.totalTime % 60;
    timeTaken.textContent = `Time Taken: ${minutes}m ${seconds}s`;
    
    // Calculate percentages for bars
    const correctPercent = (currentQuiz.score / currentQuiz.questions.length) * 100;
    const incorrectPercent = 100 - correctPercent;
    
    // Update bars with a slight delay for animation
    setTimeout(() => {
      correctBar.style.width = `${correctPercent}%`;
      incorrectBar.style.width = `${incorrectPercent}%`;
    }, 50);
  }
  
  // Helper function to shuffle array
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  