const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle, Order } = require('../models');
const { signToken } = require('../utils/auth');

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
		user: async (_, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate('orders');
			}
			throw new AuthenticationError('You must be logged in!');
		},
		vehicle: async (_, { vin }) => {
			return await Vehicle.findOne({ vin });
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
			const vehicle = Vehicle.findOne({
				_id: parent.vehicle,
				vin: parent.vehicle,
			});
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

	Mutation: {
		addUser: async (_, { fullName, email, password }) => {
			const user = await User.create({ fullName, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('No user found with this email address');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);

			return { token, user };
		},
	},
};

module.exports = resolvers;
