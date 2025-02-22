import { useState } from 'react';
import './Quiz.scss';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({result}) {


  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>`Вы отгадали {result} {result==0?'ответов':'ответа'} из {questions.length}`</h2>
      <a href='/'>
      <button >Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({question, step, nextQuestion}) {
  const percentage = Math.round(step / questions.length * 100); 
  return (
    <>
      <div className="progress">
        <div style={{ width:` ${percentage}% `}} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (<li key={item} onClick={()=> nextQuestion(index)} >{item}</li>))}
      </ul>
    </>
  );
}

function Quiz() {
  const [step, setStep] = useState(0);
  const question = questions[step];
  const [result, setResult] = useState (0);

  const nextQuestion = (index) => {
    if (index == question.correct) {
      setResult(result + 1);
    }
    setStep(step + 1);
  }

  return (
    <div className="AppQuiz">
      {step !== questions.length?<Game question={question} step={step} nextQuestion = {nextQuestion} />:<Result result={result} />}
      
    </div>
  );
}

export default Quiz;
