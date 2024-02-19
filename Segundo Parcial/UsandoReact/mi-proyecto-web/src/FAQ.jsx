import React, { useState } from 'react';

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

function PreguntasFrecuentes() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <article className='articlePreguntas'>
      <h1 style={{ paddingTop: '20px' }} className="tituloSeccion">Preguntas <span className="palabraOtroColor">Frecuentes</span></h1>
      <div className="faq-container">
        {FAQData.map((item, index) => (
          <div key={index} className={`question-container ${expandedIndex === index ? 'expanded' : ''}`}>
            <div className="question" onClick={() => toggleExpand(index)}>
              {item.question}
            </div>
            <div className="answer-container" style={{ maxHeight: expandedIndex === index ? '100%' : '0' }}>
              {item.answer.map((ans, ansIndex) => (
                <div key={ansIndex} className="answer">{ans}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}


export default PreguntasFrecuentes;
