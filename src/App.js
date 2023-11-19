import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'New Delhi', isCorrect: true },
				{ answerText: 'Dehradun', isCorrect: false },
				{ answerText: 'Kolkata', isCorrect: false },
			],
		},
		{
			questionText: 'Which programming language is used to built this quiz?',
			answerOptions: [
				{ answerText: 'Java', isCorrect: false },
				{ answerText: 'Python', isCorrect: false},
				{ answerText: 'Javascript', isCorrect: true },
			
			],
		},
		{
			questionText: 'In which state Kedarnath is located?',
			answerOptions: [
				{ answerText: 'Tamil Nadu', isCorrect: false},
				{ answerText: 'Uttarakhand', isCorrect: true },
				{ answerText: 'Himachal Pradesh', isCorrect: false },
			],
		},
		{
			questionText: 'Who is basketball player among this?',
			answerOptions: [
				{ answerText: 'Virat Kohli', isCorrect: false },
				{ answerText: 'Stephen Curry', isCorrect: true },
				{ answerText: 'Messi', isCorrect: false },
			],
		},
	];
   
	const [CurrentQuestion,setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const handleAnswerButtonClick = (isCorrect)=>{
 if(isCorrect == true){
	alert("This is a correct answer!");
	setScore(score + 1);
 }
		const nextQuestion = CurrentQuestion + 1;
		if(nextQuestion< questions.length){
			setCurrentQuestion(nextQuestion);
		}
		else{
         setShowScore(true);
		}
	}
	return (
		<div className='app'>
			{/* HINT: replace "false" with logic to display the 
      score when the user has answered all the questions */}
			{showScore ? (
				<div className='score-section'>Congrats🥳 You have completed quiz and scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {CurrentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[CurrentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[CurrentQuestion].answerOptions.map((answerOptions)=>(
						<button onClick = {() => handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
