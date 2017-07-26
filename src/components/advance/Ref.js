/**
 * ref 的基础用法
 */

import React, { Component } from 'react';

class CustomTextInput extends Component {
	constructor(props) {
		super(props);
		this.focus = this.focus.bind(this);
	}

	focus() {
		// 直接使用原生API使text输入框获取焦点
		this.textInput.focus();
	}

	render() {
		// 使用 ref 的回调，将text输入框的DOM节点存储到React实例上（this.textInput）
		return (
			<div>
				<input type="text" ref={input => { this.textInput = input }}/>
				<input type="button" value="Focus the input" onClick={this.focus}/>
			</div>
		)
	}
}

export default CustomTextInput;