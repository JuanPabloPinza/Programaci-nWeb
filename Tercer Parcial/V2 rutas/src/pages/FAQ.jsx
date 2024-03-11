import React, { useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/faq.css';


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
  {
    question: "¿Cómo puedo categorizar mis gastos en ExpenseMaster?",
    answer: [
      "Puedes categorizar tus gastos durante el proceso de registro. ExpenseMaster también proporciona opciones para editar y actualizar las categorías más tarde.",
    ],
  },
  {
    question: "¿Puedo exportar mis datos de gastos en ExpenseMaster?",
    answer: [
      "Sí, ExpenseMaster ofrece la funcionalidad de exportar tus datos de gastos en formatos comunes como CSV o Excel.",
    ],
  },
  {
    question: "¿ExpenseMaster tiene una aplicación móvil?",
    answer: [
      "Sí, ese es plan a futuro. Por ahora, ExpenseMaster es una aplicación web que puedes utilizar en tu navegador de preferencia.",
    ],
  },

];

function PreguntasFrecuentes() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-container-wrapper">
    <Header/>
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
   <Footer/>
    </div>
  );  
}


export default PreguntasFrecuentes;
