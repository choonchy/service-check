import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';

const ProductList = () => {
	const [products, setProducts] = useState('');

	const { loading, data } = useQuery(QUERY_PRODUCT);

	useEffect(() => {
		setProducts(data?.products);
	}, [data, setProducts]);

	const renderProducts = () => {
		if (products) {
			return products.map((product) => {
				return (
					<div className="flex flex-col justify-center items-center m-4 shadow-md border-t-2 border-purple-100 mb-20">
						<p className="p-1 text-xl text-purple-600">{product.name}</p>
						<p className="p-2 text-center">{product.description}</p>
						<div className="text-center m-1 text-purple-600 bold text-xl flex items-center justify-center flex-row mb-4">
							<p className="p-3 bg-purple-100 rounded-l-2xl">
								${product.price}
							</p>
							<button className="p-3 bg-purple-600 text-white rounded-r-2xl">
								Add to cart
							</button>
						</div>
					</div>
				);
			});
		}
	};

	return <div>{!loading ? renderProducts() : <p>loading products</p>}</div>;
};

export default ProductList;
