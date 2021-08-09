const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	description: {
		type: String,
	},
	price: {
		type: Number,
		required: true,
		min: 0.99,
	},
});

const Product = model('Product', productSchema);

module.exports = Product;
