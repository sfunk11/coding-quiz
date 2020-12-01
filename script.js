
// Define the functions.

function countdownTime(){
    var secondsLeft = 200;
    var timerInterval = setInterval(function(){
        secondsLeft-- ; 
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0){
            clearInterval(timerInterval);
            alert("Time's up!");
        }

    },1000);
}

function renderQuestion(){
    if(quizEnded){

    }else{
        QuestionEl.innerHTML = myQuestions[questionIndex].question;
        answerA.innerHTML = myQuestions[questionIndex].answers.a;
        answerB.innerHTML = myQuestions[questionIndex].answers.b;
        answerC.innerHTML = myQuestions[questionIndex].answers.c;
        answerD.innerHTML = myQuestions[questionIndex].answers.d;
        answerButtons.classList.remove("d-none");
       
    }
}

function gradeQuestion(event){
    var useranswer= "";
    
    if(event.target == answerA){
       useranswer = "a";
    }else if(event.target == answerB){
        useranswer = "b";
    }else if (event.target == answerC){
        useranswer = "c";
    }else if (event.target == answerD){
        useranswer = "d";
    }

    if (useranswer === myQuestions[questionIndex].correctAnswer) {
        score++;
        resultsContainer.innerHTML = "<h3><em>Correct!</em></h3>";
    } else{
        resultsContainer.innerHTML = "<h3><em>Wrong!</em></h3>";
    }
    progressContainer.textContent = "Current Score: " + score + " of " + myQuestions.length;
    questionIndex++;
    renderQuestion();
}
function startQuiz(){
    renderQuestion();
    countdownTime();
}

// Define Variables
var quizContainer = document.getElementById('quiz');
var progressContainer = document.getElementById("progress");
var QuestionEl = document.getElementById("question");
var answerA = document.getElementById("btn-a");
var answerB = document.getElementById("btn-b");
var answerC = document.getElementById("btn-c");
var answerD = document.getElementById("btn-d");
var resultsContainer = document.getElementById('results');
var startButton = document.getElementById("start");
var timerEl = document.getElementById("seconds");
var answerButtons = document.getElementById("answers");
var quizEnded = false;
var questionIndex = 0;
var score = 0;

// Define Quiz Questions
var myQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "Alan Turing"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "BootStrap"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
        question: "Arrays in Javascript can be used to store _____.",
        answers: {
          a: "numbers and strings",
          b: "other arrays",
          c: "booleans",
          d: "all of the above"
        },
        correctAnswer: "d"
      },
      {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
          a: "commas",
          b: "quotes",
          c: "curly brackets",
          d: "parentheses"
        },
        correctAnswer: "b"
      },
      {
        question: "A very useful tool used during development and debugging for printing content to the content debugger is:",
        answers: {
          a: "JavaScript",
          b: "terminal / bash",
          c: "for loops",
          d: "console.log"
        },
        correctAnswer: "d"
      },
      {
        question: "Commonly used data types DO NOT include:",
        answers: {
          a: "alerts",
          b: "booleans",
          c: "strings",
          d: "numbers"
        },
        correctAnswer: "a"
      },
      {
        question: "The condition in an if/else statement is enclosed within ______.",
        answers: {
          a: "quotes",
          b: "curly brackets",
          c: "parentheses",
          d: "square brackets"
        },
        correctAnswer: "c"
      },
      {
        question: "What is the HTML tag used to contain the JavaScript code?",
        answers: {
          a: "javascript",
          b: "script",
          c: "js",
          d: "jscript"
        },
        correctAnswer: "b"
      },
      {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
          a: "Both the <head> section and the <body> section are correct",
          b: "Neither the <head> nor <body> section",
          c: "The <head> section",
          d: "The <body> section"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the correct attribute to use inside your script tag to point to your JavaScript file?",
        answers: {
          a: "src",
          b: "href",
          c: "name",
          d: "type"
        },
        correctAnswer: "a"
      }
  ];
  startButton.addEventListener("click", startQuiz);
  answerButtons.addEventListener("click", gradeQuestion);
