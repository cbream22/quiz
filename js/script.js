console.log("script.js connected!");

// Object to store user answers
const userAnswers = {};

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Loop through each question block
questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove "selected" class from all buttons in this block
      buttons.forEach(b => b.classList.remove("selected"));

      // Add "selected" class to the clicked button
      btn.classList.add("selected");

      // Store the user's selected answer
      userAnswers[index] = btn.getAttribute("data-answer");
    });
  });
});

// Handle the "Show Results" button click
document.getElementById("show-result").addEventListener("click", () => {
  const answers = Object.values(userAnswers);

  // Check if all questions are answered
  if (answers.length < questionBlocks.length) {
    document.getElementById("result-text").textContent =
      "Please answer all the questions before seeing your result!";
    document.getElementById("result-container").style.display = "block";
    return;
  }

  // Initialize scores
  const score = { pop: 0, rock: 0, hiphop: 0 };

  // Tally user answers
  answers.forEach(answer => {
    score[answer]++;
  });

  // Determine which genre has the highest score
  const finalGenre = Object.keys(score).reduce((a, b) =>
    score[a] > score[b] ? a : b
  );

  // Generate result text
  let resultMessage = "";
  if (finalGenre === "pop") {
    resultMessage = "🎤 You're Pop! Fun, outgoing, and full of energy!";
  } else if (finalGenre === "rock") {
    resultMessage = "🎸 You're Rock! Bold, strong, and independent!";
  } else {
    resultMessage = "🎧 You're Hip-Hop! Creative, confident, and expressive!";
  }

  // Display result
  document.getElementById("result-text").textContent = resultMessage;
  document.getElementById("result-container").style.display = "block";