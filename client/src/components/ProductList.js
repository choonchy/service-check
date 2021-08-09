import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_PRODUCT, QUERY_SINGLE_USER } from '../utils/queries';
import { ADD_ORDER } from '../utils/mutations';
import { useVehicleContext } from '../utils/vehicleContext';
import Auth from '../utils/Auth';

const ProductList = () => {
	const [products, setProducts] = useState('');

	const { vehicle } = useVehicleContext();

	const { data: user } = useQuery(QUERY_SINGLE_USER);

	const { loading, data } = useQuery(QUERY_PRODUCT);

	const [addOrder] = useMutation(ADD_ORDER);

	useEffect(() => {
		setProducts(data?.products);
	}, [data, setProducts]);

	const renderProducts = () => {
		if (products) {
			return products.map((product) => {
				return (
					<div
						key={product._id}
						className="flex flex-col justify-center items-center m-4 shadow-md border-t-2 border-purple-100 mb-20"
					>
						<p className="p-1 text-xl text-purple-600">{product.name}</p>
						<p className="p-2 text-center">{product.description}</p>
						<div className="text-center m-1 text-purple-600 bold text-xl flex items-center justify-center flex-row mb-4">
							<p className="p-3 bg-purple-100 rounded-l-2xl">No Fee</p>
							<button
								onClick={async (e) => {
									console.log(product._id);
									console.log(vehicle._id);
									console.log(user);
									e.preventDefault();
									if (!Auth.loggedIn()) {
										return;
									}
									try {
										await addOrder({
											variables: {
												product: product._id,
												vehicle: vehicle._id,
											},
										});
									} catch (e) {
										console.error(e);
									}
								}}
								className="p-3 bg-purple-600 text-white rounded-r-2xl hover:bg-purple-400 cursor-pointer"
							>
								Add to profile
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
