import { gql } from "@apollo/client";

export const GET_AUTH_USER = gql`
	query whoAmI {
		whoAmI {
			id
			email
		}
	}
`;
