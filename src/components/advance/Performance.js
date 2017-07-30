/**
 * 性能优化：让组件只在props.color或者state.count的值变化时重新渲染，你可以像下面这样设定shouldComponentUpdate
 */

import React, { Component } from 'react';

class CounterButton extends Component {
	constructor(props) {
		super(props);
		this.state = { count: 1 };
	}

	shouldComponentUpdate(nextProps, nextState) {
		if ( this.props.color !== nextProps.color) {
			return true; // 进行渲染
		}
		if ( this.state.count !== nextState.count) {
			return true;
		}
		return false; // 不进行渲染
	}

	render() {
		return (
			<button
				color={this.props.color}
				onClick={() => this.setState(state => ({ count: state.count + 1}))} >
				Count: { this.state.count }
			</button>
		)
	}
}

export default CounterButton;
