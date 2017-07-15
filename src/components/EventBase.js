/**
 * 事件处理 基础
 */
import React, { Component } from 'react';

class EventBase extends Component {
	constructor(props) {
		super(props);
		this.state = { isToggleOn: true };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// 使用函数要加()，是setState语法。否则会报错。
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}
	render() {
		return (
			<button onClick={this.handleClick}>
				开关切换{this.state.isToggleOn ? 'ON' : 'OF'}
			</button>
		)
	}
}

export default EventBase;