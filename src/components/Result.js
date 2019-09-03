import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {
	return (
		<ReactCSSTransitionGroup
			className="container result"
			component ="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div>
				You prefer <strong>{props.quizResult}</strong>!
			</div>
		</ReactCSSTransitionGroup>
	);
}


export default Result;
