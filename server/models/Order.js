const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	orderDate: {
		type: Date,
		default: Date.now,
		required: true,
	},
	product: {
		type: Schema.Types.ObjectId,
		ref: 'Product',
	},
	vehicle: {
		type: Schema.Types.ObjectId,
		ref: 'Vehicle',
	},
});

const Order = model('Order', orderSchema);

module.exports = Order;
