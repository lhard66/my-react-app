/**
 * 非受控组件
 */
import React, { Component } from 'react';

class NameForm extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		alert('A name was submitted' + this.input.value);
		event.preventDefault();
	}

	render() {
		// 使用 defaultValue 来设置初始默认值。
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					<input type="text" defaultValue="Bob" ref={input => this.input = input} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default NameForm;