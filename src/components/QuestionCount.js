
import React from 'react';

function QuestionCount(props) {
	return (
		<div className="questionCount">
			<h1>Where to Visit</h1>
			<h3>Question <span>{props.counter}</span> of <span>{props.total}</span></h3>
		</div>

	);
}


export default QuestionCount;
