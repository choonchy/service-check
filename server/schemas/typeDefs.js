const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		fullName: String!
		email: String!
		password: String!
		orders: [Order]
	}

	type Order {
		_id: ID
		orderDate: String
		vehicle: Vehicle
		user: User
	}

	type Vehicle {
		_id: ID
		vin: String
		regoNumber: String
		make: String
		model: String
		colour: String
	}

	type Query {
		users: [User]
		orders: [Order]
		vehicles: [Vehicle]
		user(_id: ID!): User
		vehicle(vin: String): Vehicle
		order(_id: ID!): Order
	}
`;

module.exports = typeDefs;
