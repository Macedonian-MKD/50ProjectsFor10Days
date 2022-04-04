const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];
const quiz = document.getElementById("quiz");
const submit = document.querySelector("#submit");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const congrats = document.querySelector(".congrats");

let currentQuiz = 0;
let score = 0;
loadQuiz(currentQuiz);

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz].question;
  questionEl.innerText = currentQuizData;
  a_text.innerText = quizData[currentQuiz].a;
  b_text.innerText = quizData[currentQuiz].b;
  c_text.innerText = quizData[currentQuiz].c;
  d_text.innerText = quizData[currentQuiz].d;
}

function deselectAnswers() {
  answerEl.forEach((el) => (el.checked = false));
}

function getSelected() {
  let answer;
  answerEl.forEach((el) => {
    if (el.checked === true) {
      answer = el.id;
    }
  });

  return answer;
}
submit.addEventListener("click", function () {
  const [answer] = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }
  currentQuiz++;
  if (currentQuiz >= quizData.length) {
    quiz.innerHTML = `
     <h2 style="text-align:center"> You answered <span style="color:red">${score}</span>/${quizData.length} questions correctly.</h2>
     <button onclick="location.reload()">Try again </button>`;
    if (score === quizData.length) {
      congrats.classList.add("active");
    }
    return;
  }
  loadQuiz(currentQuiz);
});
