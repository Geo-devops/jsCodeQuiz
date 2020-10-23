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
    var output= [];
    var answers;
  }
  for(var i=0; i<questions.length; i++){

      answers = [];

  for(letter in questions[i].answers){

    answers.click(
      '<label>'
      +'<input type="radio" name="question'+i+'" value="'+letter+'">'
      +letter + ': '
      +questions[i].answers[letter]
    + '</label>'

    );
  }
  
  output.push(
    '<div class="question">' + questions[i].question + '</div>'
    + '<div class="answers">' + answers.join('') + '</div>'
  );
}
quizContainer.innerHTML = output.join('');
}
	function showResults(questions, quizContainer, resultsContainer){
	
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}