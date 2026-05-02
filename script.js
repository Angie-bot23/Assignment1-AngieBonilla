//FAQ stuff
const buttons = document.querySelectorAll(".faq-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      
      document.querySelectorAll(".faq-answer").forEach(a => {
        a.style.display = "none";
      });

      answer.style.display = "block";
    }
  });
});
