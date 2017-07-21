import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';

class FilterableProductTable extends Component {
	render() {
		return (
			<div className="FilterableProductTable">
				<SearchBar />
				<ProductTable />
			</div>
		);
	}
}

export default FilterableProductTable;
