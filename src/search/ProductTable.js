import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
	render() {
		return (
			// 此处的 ProductTableContent 未生效
			<div className="ProductTableContent">
				<table className="ProductTable">
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
					<ProductCategoryRow/>
					<ProductRow/>
					<ProductRow/>
				</table>
			</div>
		);
	}
}

export default ProductTable;
