import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
	return (

			<div>
				You prefer <strong>{props.quizResult}</strong>!
			</div>

	);
}


export default Result;
