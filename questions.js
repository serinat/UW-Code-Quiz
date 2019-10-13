//track # of correct answers
var score = 0;
//keeping track of questions
var currentQuestion = 0;
//store questions in an array
var questions = [
    {
        title: "What is my middle name?",
        choices: ["Mei", "Williams", "China", "I don't offically have one!"],
        answer: 3
    },
    {
        title: "What is my nationality?",
        choices: ["Chinese", "Filipino", "Chinese-American", "Russian"],
        answer: 2
    },
    {
        title: "How many pets do I currently own?",
        choices: ["None", "2: doxiepoo and frenchie", "2: both guinea pigs", "4: doxiepoo, frenchie & 2 guinea pigs"],
        answer: 3
    },
    {
        title: "What is my favorite fast-food restaurant?",
        choices: ["Chick Fil A", "Burger King", "McDonalds", "I don't do fast-food"],
        answer: 2
    },
    {
        title: "Where is my favorite place to be, in order from most favorite to least favorite?",
        choices: ["Hawaii, LA, Home, Any place with good food", "Any place with good food, Home, Hawaii, LA", "LA, Hawaii, Any place with good food", "Home, Any place with good food, Hawaii, LA"],
        answer: 3
    },
];

//ensures code will run once the entire page & DOM are ready
$(document).ready(function () {

    //When the page loads, you want to hide quiz, results and scoreboard

    $(".quiz").hide();
    $(".results").hide();
    $(".final").hide();

    //add event listener on start quiz button
    $(".start button").on("click", function (event) {
        event.preventDefault();
        $(".start").hide();
        $(".quiz").show();
        displayQuestion();
    }
    );
});

//add event listener on user answer
$(".quiz ul").on("click", "li", function (event) {
    event.preventDefault();
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    if ($("li.selected").length) {
        var guess = parseInt($("li.selected").attr("id"));
        checkAnswer(guess);
    }
});

//add event listener on submit button to store users initials & score
$("#submit").on("click", function (event) {
    event.preventDefault();

    var initials = document.querySelector("#initial").value;

    if (initials === "") {
        displayMessage("error", "Initial cannot be blank");
    } else {
        localStorage.setItem("initial", initials);
    }

    $(".view-scores").append("<li>" + initials + " : " + score + "</li>");
    displayScore();
})

//add event listener to try again button to restart quiz
$("#restart").on("click", function (event) {
    event.preventDefault();
    restart();
});

//add event listener on clear scoreboard button
$("#clear").on("click", function (event) {
    $(".view-scores li").html("");
});

$(".view-scores").on("click", function (event) {
    displayScore();
})

//function to display one question at a time
function displayQuestion() {
    var question = questions[currentQuestion];
    $(".quiz h3").text(question.title);
    $(".quiz ul").html("");
    for (var i = 0; i < question.choices.length; i++) {
        $(".quiz ul").append("<li id = '" + i + "'> " + question.choices[i] + "</li>");
    };
}

//function to check users answers
function checkAnswer(guess) {
    var question = questions[currentQuestion];
    if (question.answer === guess) {
        score++;
        $("#alert").append("Correct!" + "<br>");

    } else {
        $("#alert").append("Wrong!" + "<br>");

    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showResults();
    } else {
        displayQuestion();
    };
}
//function to show results
function showResults() {
    $(".quiz").hide();
    $(".results").show();
    $(".results p").text("Yay! You scored " + score + " out of " + questions.length + " correct!")
}

//function to display scores
function displayScore() {
    $(".results").hide();
    $(".quiz").hide();
    $(".final").show();
    

}
//function to restart quiz
function restart() {
    $(".results").hide();
    $(".final").hide();
    $(".quiz").show();
    score = 0;
    currentQuestion = 0;
    $("#alert").html("");
    $("#initial").html("");
    displayQuestion();
}
