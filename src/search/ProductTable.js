import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component {
	render() {
		let rows = [];
		let lastCategory = null;
		this.props.products.forEach(item => {
			if (item.category !== lastCategory) {
				rows.push(<ProductCategoryRow category={item.category} key={item.category} />);
			}
			rows.push(<ProductRow product={item} key={item.name} />);
			lastCategory = item.category;
		});

		return (
			// 此处的 ProductTableContent 未生效
			<div className="ProductTableContent">
				<table className="ProductTable">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		);
	}
}

export default ProductTable;
