var quizQuestions = [ 
  {
    question: "lorem ispusm text?",
    answers: {
        a: '1',
        b: '2',
        c: '3',
    },
    correctAnswer: 'a'
  },
  {
  question: "lorem ispusm text?",
  answers: {
      a: '1',
      b: '2',
      c: '3',
  },
  correctAnswer: 'b'
},

{
  question: "lorem ispusm text?",
    answers: {
        a: '1',
        b: '2',
        c: '3',
    },
    correctAnswer: 'c'
  },
]








function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}