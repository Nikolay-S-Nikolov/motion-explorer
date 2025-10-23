import { Router } from "express";

const quizController = Router();

const movements = [
  { id: 1, type: 'Праволинейно', desc: 'Ракетата излита право нагоре.', examples: ['Ракета'], figure: 'fig1.jpg' },
  { id: 2, type: 'Криволинейно', desc: 'Футболистите тичат зигзаго.', examples: ['Футболна топка'], figure: 'fig2.jpg' },
  { id: 3, type: 'Въртене', desc: 'Перките описват кръг.', examples: ['Педали'], figure: 'fig3.jpg' },
  { id: 4, type: 'Трептене', desc: 'Махалото се люлее наляво-надясно.', examples: ['Махало'], figure: 'fig4.jpg' }
];

quizController.post('/', (req, res) => {
  const { questionId, answer } = req.body;
  const correct = movements[questionId - 1]?.type === answer;
  res.json({ correct, message: correct ? 'Браво!' : 'Опитай пак!' });
});

export default quizController