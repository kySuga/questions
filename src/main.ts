// using selectors inside element
const questions = document.querySelectorAll(".question");

questions.forEach(function(question: Element) {
  const btn = question.querySelector(".question__btn");
  const answer = question.querySelector(".question__answer");

  btn?.addEventListener("click", function() {
    // toggle current question
    const isExpanded = btn.getAttribute("aria-expanded") === "true";
    // isExpanded === true
    // !isExpanded === false
    question.classList.toggle("show-text", !isExpanded);
    btn.setAttribute("aria-expanded", String(!isExpanded));
    if (!isExpanded) {
      answer?.removeAttribute("hidden");
    } else {
      answer?.setAttribute("hidden", "");
    }

    // reset other questions
    questions.forEach(function(item: Element) {
      if (item !== question) {
        item.classList.remove("show-text");
        const inactiveBtn = item.querySelector(".question__btn");
        const closedAnswer = item.querySelector(".question__answer");
        inactiveBtn?.setAttribute("aria-expanded", "false");
        closedAnswer?.setAttribute("hidden", "");
      }
    });
  });
});

// traversing the DOM method
// const questionBtns = document.querySelectorAll(".question__btn");

// questionBtns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });