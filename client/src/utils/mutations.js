import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				fullName
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser($fullName: String!, $email: String!, $password: String!) {
		addUser(fullName: $fullName, email: $email, password: $password) {
			token
			user {
				_id
				email
			}
		}
	}
`;

export const UPDATE_USER = gql`
	mutation updateUser($fullName: String!, $email: String!) {
		updateUser(fullName: $fullName, email: $email) {
			token
			user {
				_id
				email
				fullName
			}
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($product: ID!, $vehicle: ID!) {
		addOrder(product: $product, vehicle: $vehicle) {
			orderDate
			product {
				_id
			}
			vehicle {
				_id
			}
		}
	}
`;
