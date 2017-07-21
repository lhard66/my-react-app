import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		return (
			<form className="SearchBar">
				<input type="text" placeholder="Search..." />
				<p>
					<input type="checkbox" />
					<span>Only show products in stock</span>
				</p>
			</form>
		);
	}
}

export default SearchBar;
