const { AuthenticationError } = require('apollo-server-express');
const { User, Vehicle, Order, Product, ServiceHistory } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return await User.find();
		},
		user: async (_, args) => {
			return await User.find();
		},
		currentUser: async (_, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id });
			}
			throw new AuthenticationError('You must be logged in!');
		},

		vehicles: async () => {
			return await Vehicle.find();
		},
		vehicle: async (_, { vin }) => {
			return await Vehicle.findOne({ vin });
		},

		orders: async () => {
			return await Order.find();
		},
		order: async (_, { _id }) => {
			return await Order.findById({ _id });
		},

		products: async () => {
			return await Product.find();
		},
		product: async (_, { name }) => {
			return await Product.findOne({ name });
		},

		serviceHistories: async () => {
			return await ServiceHistory.find().populate('vehicle');
		},
		serviceHistory: async (_, { _id }) => {
			return await ServiceHistory.findById({ _id });
		},
	},
	Order: {
		async vehicle(parent) {
			const vehicle = await Vehicle.findOne({
				_id: parent.vehicle,
			});
			return vehicle;
		},
		async product(parent) {
			const product = await Product.findOne({ _id: parent.product });
			return product;
		},
	},
	User: {
		async orders(parent) {
			const orders = await Order.find({ _id: { $in: parent.orders } });
			return orders;
		},
	},
	Vehicle: {
		serviceHistory(parent) {
			const serviceHistory = ServiceHistory.find({ vehicle: parent._id });
			return serviceHistory;
		},
	},

	Mutation: {
		addUser: async (_, { fullName, email, password }) => {
			const user = await User.create({ fullName, email, password });
			const token = signToken(user);
			return { token, user };
		},
		updateUser: async (_, { fullName, email }, context) => {
			if (context.user) {
				const user = await User.findByIdAndUpdate(
					context.user._id,
					{ fullName, email },
					{
						new: true,
					}
				);
				const token = signToken(user);
				return { token, user };
			}
			throw new AuthenticationError('Must be logged in!');
		},
		addOrder: async (_, { product, vehicle }, context) => {
			console.log(context);
			if (context.user) {
				const order = await Order.create({ product, vehicle });

				await User.findByIdAndUpdate(context.user._id, {
					$push: { orders: order._id },
				});

				return order;
			}
			throw new AuthenticationError('Must be logged in!');
		},
		login: async (_, { email, password }) => {
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
