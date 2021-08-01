const { Schema, model } = require('mongoose');

const userSchema = new Schema({
	fullName: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		trim: true,
	},
	password: {
		type: String,
		required: true,
	},
	// orders: [
	// 	{
	// 		type: Schema.Types.ObjectId,
	// 		ref: 'Order',
	// 	},
	// ],
});

const User = model('User', userSchema);

module.exports = User;
