console.log("script.js connected!");

// Store answers
let userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Loop through each question block
questionBlocks.forEach((block, index) => {
  const answerButtons = block.querySelectorAll(".answer-btn");

  answerButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove previous selection for this question
      answerButtons.forEach((b) => b.classList.remove("selected"));
      // Highlight clicked button
      btn.classList.add("selected");
      // Save answer
      userAnswers[index] = btn.dataset.answer;
      console.log("User Answers:", userAnswers);
    });
  });
});

// Show results button
document.getElementById("show-result").addEventListener("click", displayResult);

// Display result function
function displayResult() {
  let score = 0;

  // Simple scoring logic (customize for your quiz)
  for (let key in userAnswers) {
    if (userAnswers[key] === "A") score += 3;
    else if (userAnswers[key] === "B") score += 2;
    else if (userAnswers[key] === "C") score += 1;
    else if (userAnswers[key] === "D") score += 4;
  }

  let resultText = "";
  if (score <= 6) resultText = "You are Calm and Collected!";
  else if (score <= 9) resultText = "You are Energetic and Fun!";
  else resultText = "You are a Natural Leader!";

  // Show result
  const resultContainer = document.getElementById("result-container");
  const resultParagraph = document.getElementById("result-text");
  resultContainer.style.display = "block";
  resultParagraph.textContent = resultText;
}