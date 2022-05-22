import { useMutation } from "@apollo/client";
import { SIGNUP_MUTATION } from "@mutations";
import { Mutation, MutationSignupArgs } from "@types";

type SignUpResultType = Pick<Mutation, 'signup'>;

export const SignUpService = () => {

	const [signUp, { data, loading, error }] = useMutation<SignUpResultType, MutationSignupArgs>(SIGNUP_MUTATION);
	

	return { signUp, data, loading, error };
}

export default SignUpService;
