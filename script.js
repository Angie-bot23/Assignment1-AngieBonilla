const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("show");
  });
});


const toggleBtn = document.getElementById("toggle-mode");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
  toggleBtn.textContent = document.body.classList.contains("night-mode")
    ? "Switch to Day Mode"
    : "Switch to Night Mode";
});

