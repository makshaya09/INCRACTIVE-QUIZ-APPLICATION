const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Van Gogh",
        b: "Da Vinci",
        c: "Picasso",
        d: "Michelangelo",
        correct: "b"
    },
  {
    question: "What is 2 + 2?",
      a: "3",
      b: "4",
      c: "5",
      d: "22", 
      correct: "b"
    }, 
  {
    question: "Which is the largest planet?",
      a: "Earth",
      b: "Mars", 
      c: "Jupiter",
      d: "Venus", 
      correct: "c"
 }, 
 {
    question: "which company developed java script?",
      a: "Microsoft",
      b: "Netscape",
      c: "Goggle",
      d: "Oracle",
      Correct: "b"
  },
  {
    question:"which is the  smallest countryin the world?",
      a: "Srilanka",
      b: "Nepal", 
      c: "Bhutan", 
      d: "Vatican City", 
      correct: "d"
  },
  {
    question: "which is the biggest animal in the world?",
      a: "shrak", 
      b: "Blue whale", 
      c: "Elephant",
      d: "Giraffe", 
      correct: "b"
  }, 
  {
    question: "what will type of null return?",
      a: "object",
      b: "null",
      c: "undefined",
      d: "function", 
      correct: "a"
  },
  {
    question:"which language runs in a web browser?",
      a: "java",
      b: "C",
      c: "Python",
      d: "java script", 
      correct: "d"
  },
  {
    question: "what does NaN stand for?",
      a:  "Not a Number", 
      b:  "New and Null",
      c:  "Name as Number",
      d:  "Not a Null",
      Correct: "a"
  }
];
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const currentQuiz = quizData[currentQuestion];
  questionEl.textContent = currentQuiz.question;
  answerButtons.forEach(btn => {
    const option = btn.dataset.answer;
    btn.textContent = currentQuiz[option];
    btn.disabled = false;
  });
}

answerButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    answerButtons.forEach(b => b.disabled = true);
    if (btn.dataset.answer === quizData[currentQuestion].correct) {
      score++;
      btn.style.backgroundColor = "lightgreen";
    } else {
      btn.style.backgroundColor = "salmon";
    }
  });
});

nextBtn.addEventListener("click", () => {
  answerButtons.forEach(btn => btn.style.backgroundColor = "");
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

function showScore() {
  questionEl.style.display = "none";
  answerButtons.forEach(btn => btn.style.display = "none");
  nextBtn.style.display = "none";
  scoreEl.style.display = "block";
  scoreEl.textContent = `You scored ${score} out of ${quizData.length}!`;
}

loadQuestion();