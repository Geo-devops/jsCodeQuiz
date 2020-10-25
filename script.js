// below are the variables
var question = document.getElementById("question");
var answers = document.getElementById("answers");
var decsion = document.getElementById("decsion");
var finalScore = document.getElementById("finalScore")

// questions for the quiz

var question1 = { 
    question: "What Statement is used to test for a specific condition?",
    choices: ["Number", "Boolean", "If"]
};

var question2 = {
    question: "What HTML element do we place the JavaScript?",
    choices: ["<script>", "<header>", "<js>"]
};

var question3 = { 
    question: "How do you write 'Hello World' in an alert box?",
    multipleChoice: ["msg('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
};
var question4 = { 
    question: "How do you call a function named 'myFunction'?",
    multipleChoice: ["call myFunction()", "myFunction()", "call function myFunction()"]
};

// listen to button click


function quiz(x) {

    answers.innerHTML = "";
    question.textContent = x.question;
    var choices = x.choices;


    for (var i = 0; i< choices.length; i++){
        var li = document.createElement("li");
        li.setAttribute("id", [i]);
        li.textContent = choices[i]; 
        var br = document.createElement("br");
        answers.appendChild(li);
        answers.appendChild(br);

    };
};
// Wrong answer decision
function right() {
    verdict.textContent = "Right Answer!";
};

function Wrong() {
    verdict.textContent = "Wrong Answer!";

};

// questions go to next question after clicked answer

function question1() {

    quiz(question1);
    answers.addEventListener("click", function(event) {
        var target = event.target;
        if (target.id === "3") {
            right();
            question2();
        }
        else {
            Wrong();
            question2();
        };
    };
};

function question2() {

    quiz(question);
    answers.addEventListener("click", function(event) {
        var target = event.target;
        if (target.id === "1") {
            right();
            question3();
        }
        else {
            Wrong();
            question3();
        };
    };
};

function question3() {

    quiz(question3);
    answers.addEventListener("click", function(event) {
        var target = event.target;
        if (target.id === "3") {
            right();
            question4();
        }
        else {
            Wrong();
            question4();
        };
    };
};
function question4() {

    quiz(question4);
    answers.addEventListener("click", function(event) {
        var target = event.target;
        if (target.id === "2") {
            right();
            gameOver();
        }
        else {
            Wrong();
            gameOver();       
         };
        };
    };

    function gameOver() {
        finalScore.textContent = "Your Final Score is :"
    };
    console.log(finalScore)