const FAQData = [
  {
    question: "¿Cómo ExpenseMaster te ayuda a controlar tus gastos?",
    answer: [
      "ExpenseMaster proporciona una interfaz fácil de usar para registrar y categorizar tus gastos. Con informes detallados y funciones de seguimiento, podrás entender mejor tus hábitos financieros.",
    ],
  },
  {
    question: "¿Tiene algún costo usar ExpenseMaster?",
    answer: [
      "No, ExpenseMaster es completamente gratuito. Puedes registrarte y comenzar a utilizar todas las funciones sin ningún cargo.",
    ],
  },
  {
    question: "¿Cómo abro una cuenta en ExpenseMaster?",
    answer: [
      "Para abrir una cuenta en ExpenseMaster simplemente tienes que registrarte y llenar el formulario con tus datos personales",
    ],
  },
];

const FAQContainer = document.querySelector(".faq-container");

const removeAllExpanded = () => {
  const questionContainers = document.querySelectorAll(
    ".faq-container .question-container"
  );

  questionContainers.forEach((q) => {
    q.classList.remove("expanded");
    const answerContainer = q.querySelector(".answer-container");
    answerContainer.style.maxHeight = "0";
  });
};

const displayFAQ = () => {
  FAQData.forEach((q) => {
    const answerHTML = q.answer
      .map(
        (a) => `<div class="answer">${a}</div>`
      )
      .join("");

    const html = `<div class="question">${q.question}</div>
        <div class="answer-container">${answerHTML}</div>`;

    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question-container");
    questionContainer.innerHTML = html;

    FAQContainer.appendChild(questionContainer);

    const question = questionContainer.querySelector(".question");

    question.addEventListener("click", () => {
      if (!questionContainer.classList.contains("expanded")) {
        removeAllExpanded();
      }

      questionContainer.classList.toggle("expanded");
      const isExpanded = questionContainer.classList.contains("expanded");

      const answerContainer =
        questionContainer.querySelector(".answer-container");
      const contentHeight = answerContainer.scrollHeight;
      answerContainer.style.maxHeight = isExpanded ? `${contentHeight}px` : "0";
    });
  });
};



displayFAQ();
