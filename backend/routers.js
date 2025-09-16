const express = require('express');
const { Question, Result } = require('./models');
const router = express.Router();

// Get questions
router.get('/quiz/:quizId', async (req, res) => {
  const questions = await Question.find({ quizId: req.params.quizId }).select('-correctAnswer');
  res.json(questions);
});

// Submit answers
router.post('/quiz/:quizId/submit', async (req, res) => {
  const { answers } = req.body; // [{questionId, selected}]
  const questions = await Question.find({ quizId: req.params.quizId });
  let correct = 0;
  questions.forEach(q => {
    const ans = answers.find(a => a.questionId === q._id.toString());
    if(ans && ans.selected === q.correctAnswer) correct++;
  });
  const score = Math.round((correct/questions.length) * 100);
  const passed = score >= 50;
  const result = await Result.create({ quizId: req.params.quizId, score, passed });
  res.json({ score, passed, resultId: result._id });
});

module.exports = router;
