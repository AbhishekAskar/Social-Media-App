const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');

router.use(express.static("public"));

// Get all expenses
router.get('/', socialMediaController.getHomePage);
router.get('/posts', socialMediaController.getPosts);
// // router.get('/addExpense', expenseController.getExpenses);

// // Add a new expense
router.post('/addPost', socialMediaController.addPost);
router.post('/addComment', socialMediaController.addComment);

router.get('/getComment/:id', socialMediaController.getComments);
// // Delete an expense by ID
// router.get('/deleteExpense/:id', socialMediaController.deleteExpense);

module.exports = router;