import { useMutation } from "@apollo/client";
import { SIGNIN_MUTATION } from "@mutations";
import { Mutation, MutationSigninArgs } from "@types";

type SignInResultType = Pick<Mutation, 'signin'>;

export const SignInService = () => {

	const [signIn, { data, loading, error }] = useMutation<SignInResultType, MutationSigninArgs>(SIGNIN_MUTATION);
	

	return { signIn, data, loading, error };
}

export default SignInService;
