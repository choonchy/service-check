import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
	query allUsers {
		users {
			_id
			fullName
			email
		}
	}
`;

export const QUERY_SINGLE_USER = gql`
	query singleUser {
		currentUser {
			fullName
			email
			_id
			orders {
				_id
				orderDate
				product {
					name
				}
				vehicle {
					vin
					regoNumber
				}
			}
		}
	}
`;

export const QUERY_VEHICLES = gql`
	query allVehicles {
		vehicles {
			_id
			vin
			regoNumber
		}
	}
`;

export const QUERY_SINGLE_VEHICLE = gql`
	query singleVehicle($vin: String) {
		vehicle(vin: $vin) {
			_id
			vin
			make
			model
			colour
		}
	}
`;

export const QUERY_ORDERS = gql`
	query allOrders($ID: ID!) {
		orders(_id: $ID) {
			_id
			orderDate
			user {
				_id
				fullName
				email
			}
			vehicle {
				_id
				regoNumber
				vin
			}
		}
	}
`;

export const QUERY_SINGLE_ORDER = gql`
	query singleOrder($_id: ID!) {
		order(_id: $_id) {
			_id
			orderDate
			vehicle {
				_id
				regoNumber
				vin
				make
				model
				colour
				serviceHistory {
					serviceDate
					odometer
					notes
					submittedBy
				}
			}
		}
	}
`;

export const QUERY_CHECKOUT = gql`
	query getCheckout($product: [ID]!) {
		checkout(product: $product) {
			session
		}
	}
`;

export const QUERY_PRODUCT = gql`
	query product {
		products {
			name
			_id
			description
			price
		}
	}
`;
