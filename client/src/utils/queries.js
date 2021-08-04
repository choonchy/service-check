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
	query singleUser($ID: ID) {
		user(_id: $ID) {
			fullName
			orders {
				orderDate
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
	query singleVehicle($id: ID!, $vin: String) {
		vehicle(vin: $vin) {
			_id
			vin
		}
	}
`;

export const QUERY_ORDERS = gql`
	query allOrders {
		orders {
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
	query singleOrder($ID: ID) {
		order(_id: $ID) {
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
