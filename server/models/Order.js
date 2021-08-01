const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
	orderDate: {
		type: Date,
		default: Date.now,
		required: true,
	},
	// user: {
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'User',
	// },
});

const Order = model('Order', orderSchema);

module.exports = Order;
