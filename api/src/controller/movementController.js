import { Router } from "express";

const movementController = Router();
const movements = [
  { id: 1, type: 'Праволинейно', desc: 'Ракетата излита право нагоре.', examples: ['Ракета'], figure: 'fig1.jpg' },
  { id: 2, type: 'Криволинейно', desc: 'Футболистите тичат зигзаго.', examples: ['Футболна топка'], figure: 'fig2.jpg' },
  { id: 3, type: 'Въртене', desc: 'Перките описват кръг.', examples: ['Педали'], figure: 'fig3.jpg' },
  { id: 4, type: 'Трептене', desc: 'Махалото се люлее наляво-надясно.', examples: ['Махало'], figure: 'fig4.jpg' }
];

movementController.get('/', (req, res) => {
    res.json(movements)
});
movementController.get('/:id', (req, res) => {
    const move = movements.find(m => m.id === parseInt(req.params.id));
    res.json(move || {});
});

export default movementController