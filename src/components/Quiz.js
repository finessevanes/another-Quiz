
import React from 'react';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';



function Quiz(props) {

	function renderAnswerOptions(key) {
		return (
			<AnswerOption
				key={key.content}
				answerContent={key.content}
        answerImage= {key.image}
				answerType={key.type}
				answer={props.answer}
				questionId={props.questionId}
				onAnswerSelected={props.onAnswerSelected}
			/>

		);
	}


	return (
			<div className="centercontent"key={props.questionId}>
			 	<QuestionCount
			 		counter={props.questionId}
			 		total={props.questionTotal}
			  	/>
		  	<Question
          content={props.question}
          images= {props.image}
         />
			  	<ul className="answerOptions">
			  		{props.answerOptions.map(renderAnswerOptions)}
			  	</ul>
			 </div>

	);


	return(
		<div className="quiz">
			<QuestionCount
				counter={props.questionId}
				total={props.questionTotal}
			/>
			<Question content={props.question} />
			<ul className="answerOptions">
				{props.answerOptions.map(renderAnswerOptions)}
			</ul>
		</div>
	);
}

export default Quiz;
