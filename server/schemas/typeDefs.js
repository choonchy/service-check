const { gql } = require('apollo-server-express');

const typeDefs = gql`
	type User {
		_id: ID
		fullName: String!
		email: String!
		password: String!
	}

	type Order {
		orderDate: Int
	}

	type Query {
		users: [User]
		orders: [Order]
	}
`;

module.exports = typeDefs;
