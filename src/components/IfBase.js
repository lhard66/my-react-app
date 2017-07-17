/**
 * 条件语句
 */
import React, { Component } from 'react';

/* 函数定义组件，也可类定义组件。见：https://discountry.github.io/react/docs/components-and-props.html */
function WarningBanner(props) {
	if (!props.warn) {
		return null;
	}
	return (
		<div className="warning">
			warning!
		</div>
	)
}
class EleToggle extends Component {
	constructor(props) {
		super(props);
		this.state = {showWaring: true};
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}
	handleToggleClick() {
		this.setState(prevState => ({
			showWaring: !prevState.showWaring
		}));
	}
	render() {
		return (
			<div>
				<button onClick={this.handleToggleClick}>
					{this.state.showWaring ? 'Hide' : 'Show'}
				</button>
				<WarningBanner warn={this.state.showWaring} />
			</div>
		)
	}
}

export default EleToggle;
