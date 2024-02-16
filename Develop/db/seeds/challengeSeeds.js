// Sam use the template below

//The functions will work so you can just uncomment them and make sure the data is correct





















































/*
// Import Modules 
const { Challenge } = require('../../Models/challenge');
const sequelize = require('../../config/connection');

const seedChallenges = async () => {
    try{ 
        await sequelize.sync({force: true }); // Change to false in production to avoid losing data
        // Call challengeData to seed tables
        await Challenge.bulkCreate(challengeData);
        console.log('Challenges Seeded');
    } catch (error) {
        console.error('Failed to seed challenges:', error);
    }
};

seedChallenges().then(() => {
    process.exit(0); // Exit process when done
});

const challengeData = [
    {
        province_id: 1, // Adjust based on your cities table
        type: 'quiz',
        title: 'JavaScript Syntax',
        description: 'Understanding the basics of JavaScript syntax.',
        content: 'Which symbol is used to end statements in JavaScript?',
        solution: 'A semicolon (;)',
    },
    {
        city_id: 1,
        type: 'quiz',
        title: 'Variable Declaration',
        description: 'Learn how to declare variables in JavaScript.',
        content: 'Which keyword is used to declare a variable in JavaScript?',
        solution: 'The var, let, or const keyword',
    },
    // Add more quiz questions and coding challenges here...
    {
        city_id: 1,
        type: 'coding',
        title: 'Simple JavaScript Alert',
        description: 'Write a JavaScript function that displays an alert.',
        content: 'Write a JavaScript function named "showAlert" that displays an alert with the message "Hello, World!" when invoked.',
        solution: `function showAlert() {
  alert("Hello, World!");
}`,
    }
];
*/