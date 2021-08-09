import React, { useState, useContext } from 'react';

export const ProductContext = React.createContext();

export const useProductContext = () => useContext(ProductContext);

const ProductProvider = (props) => {
	const [products, setProducts] = useState('');

	return (
		<ProductContext.Provider
			value={{ products: products, setProducts }}
			{...props}
		/>
	);
};

export default ProductProvider;
