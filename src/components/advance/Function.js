/**
 * JSX javascript 表达式：函数
 */
import React, { Component } from 'react';

function Repeat(props) {
	let items = [];
	for(let i = 0;i < props.numTimes; i++) {
		items.push(props.children(i));
	}
	return <div>{items}</div>;
}

class Func extends Component {
	render() {
		return (
			<Repeat numTimes={3}>
				{(index) => <div>This is item {index} in the list</div>}
			</Repeat>
		)
	}
}

export default Func;