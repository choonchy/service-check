const { User, Vehicle, Order } = require('../models');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find();
		},
		vehicles: async () => {
			return await Vehicle.find();
		},
		orders: async () => {
			return await Order.find();
		},
		user: async (_, { _id }) => {
			return await User.findOne({ _id });
		},
		vehicle: async (_, { _id }) => {
			return await Vehicle.findOne({ _id });
		},
		order: async (_, { _id }) => {
			return await Order.findOne({ _id });
		},
	},
	Order: {
		user(parent) {
			const user = User.findOne({ _id: parent.user });
			console.log(parent);
			return user;
		},
		vehicle(parent) {
			const vehicle = Vehicle.findOne({ _id: parent.vehicle });
			console.log(parent);
			return vehicle;
		},
	},
	User: {
		orders(parent) {
			const orders = Order.find({ user: parent._id });
			console.log(parent);
			return orders;
		},
	},
};

module.exports = resolvers;
