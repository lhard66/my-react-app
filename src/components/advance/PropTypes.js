/**
 * PropTypes 检查类型 基础用法
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {
	render() {
		return (
			<h1>Hello, {this.props.name}</h1>
		)
	}
}
// 当你给属性传递了无效值时，JavsScript 控制台将会打印警告。
// 出于性能原因，propTypes 只在开发模式下进行检查。
Greeting.propTypes = {
	name: PropTypes.string
}

export default Greeting;
