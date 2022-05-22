import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
	mutation signup($SignupInput: SignupInput!) {
		signup(SignupInput: $SignupInput)
	}
`;

export const SIGNIN_MUTATION = gql`
	mutation signin($SigninInput: SigninInput!) {
		signin(SigninInput: $SigninInput){
			token
		}
	}
`;
