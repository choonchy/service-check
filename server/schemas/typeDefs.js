const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		fullName: String!
		email: String!
		password: String!
		orders: [Order]
	}

	type Product {
		_id: ID
		name: String
		description: String
		price: Float
	}

	type Order {
		_id: ID
		orderDate: String
		product: String
		vehicle: Vehicle
		user: User
	}

	type Auth {
		token: ID!
		user: User
	}

	type Checkout {
		session: ID
	}

	type Vehicle {
		_id: ID
		vin: String
		regoNumber: String
		make: String
		model: String
		colour: String
		serviceHistory: [ServiceHistory]
	}

	type ServiceHistory {
		_id: ID
		vehicle: Vehicle
		serviceDate: String
		submittedBy: String
		notes: String
		odometer: Int
	}

	type Query {
		users: [User]
		orders: [Order]
		vehicles: [Vehicle]
		products: [Product]
		serviceHistories: [ServiceHistory]
		user: User
		currentUser: User
		vehicle(vin: String): Vehicle
		order(_id: ID!): Order
		product(name: String!): Product
		serviceHistory(_id: ID): ServiceHistory
		checkout(products: [ID]!): Checkout
	}

	type Mutation {
		addUser(fullName: String!, email: String!, password: String!): Auth
		updateUser(fullName: String, email: String): User
		login(email: String!, password: String!): Auth
		addOrder(product: String!): Order
	}
`;

module.exports = typeDefs;
