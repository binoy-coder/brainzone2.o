import { db } from "./firebase-config.js";
import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

let questions = [
  { question: "Capital of France?", answer: "paris" },
  { question: "2 + 2?", answer: "4" },
  { question: "Planet with rings?", answer: "saturn" }
];

let score = 0;
let currentQuestion = 0;
let timer = 60;

const questionContainer = document.getElementById("questionContainer");
const answerInput = document.getElementById("answer");
const submitBtn = document.getElementById("submitBtn");
const timerDisplay = document.getElementById("timer");

function showQuestion() {
  if (currentQuestion < questions.length) {
    questionContainer.textContent = questions[currentQuestion].question;
  } else {
    endGame();
  }
}

function endGame() {
  const username = auth.currentUser?.email || "anonymous";

  addDoc(collection(db, "leaderboard"), {
    username,
    score
  });

  window.location.href = "leaderboard.html";
}

submitBtn.onclick = () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (userAnswer === questions[currentQuestion].answer) {
    score += 1;
  }
  currentQuestion++;
  answerInput.value = "";
  showQuestion();
};

function startTimer() {
  const interval = setInterval(() => {
    timer--;
    timerDisplay.textContent = timer;
    if (timer <= 0) {
      clearInterval(interval);
      endGame();
    }
  }, 1000);
}

showQuestion();
startTimer();
