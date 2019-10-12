//track # of correct answers
var score = 0;
//keeping track of questions
var currentQuestion = 0;
//store questions in an array
var questions = [
    {
        question: "What is my middle name?",
        choices: ["Mei", "Williams", "China", "I don't have one!"],
        answer: "I don't have one!"
    },
    {
        question: "What is my nationality?",
        choices: ["Chinese", "Filipino", "Chinese-American", "Russian"],
        answer: "Chinese-American"
    },
    {
        question: "How many pets do I currently own?",
        choices: ["None", "2, doxiepoo and frenchie", "2, both guinea pigs", "4, doxiepoo, frenchie & 2 guinea pigs"],
        answer: "4 doxiepoo, frenchie & 2 guinea pigs"
    },
    {
        question: "What is my favorite fast-food restaurant?",
        choices: ["Chick Fil A", "Burger King", "McDonalds", "I don't do fast-food"],
        answer: "McDonalds"
    },
    {
        question: "Where is my favorite place to be, in order from most favorite to least favorite?",
        choices: ["Hawaii, LA, Home, Any place with food", "Any place with food, Home, Hawaii, LA", "LA, Hawaii, Any place with food, Home", "Home, Any place with food, Hawaii, LA"],
        answer: "Home, Any place with food, Hawaii, LA"
    },
];

//ensures code will run once the entire page & DOM are ready
$(document).ready(function () {

});