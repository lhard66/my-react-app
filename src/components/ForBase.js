/**
 * 循环的基本使用
 */
import React, { Component } from 'react';

function ListItem(props) {
	// key不是写在此处。在那里循环，写在那里。
	return <li>{props.value}</li>
}

class NumberList extends Component {
	// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
	// 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。
	
	/* constructor(props) {
		super(props);
	} */
	
	getListItems() {
		// 拿到props对象下面的值
		const numbers = this.props.numbers;
		return numbers.map(n => {
			return (
				<ListItem key={n.toString()} value={n}></ListItem>
			)
		});
	}
	render() {
		return (
			<ul>
				{this.getListItems()}
			</ul>
		)
	}
}

export default NumberList;