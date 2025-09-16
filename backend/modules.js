const mongoose = require('mongoose');

// User
const UserSchema = new mongoose.Schema({
  name: String, email: { type: String, unique: true }, password: String
});

// Question
const QuestionSchema = new mongoose.Schema({
  quizId: String, questionText: String, options: [String], correctAnswer: Number
});

// Result
const ResultSchema = new mongoose.Schema({
  userId: String, quizId: String, score: Number, passed: Boolean, date: { type: Date, default: Date.now }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Question: mongoose.model('Question', QuestionSchema),
  Result: mongoose.model('Result', ResultSchema)
};
