import { useMutation } from "@apollo/client";
import { CREATE_NEW_BUDGET_BOX } from "../../mutations";
import { Mutation, MutationCreateBudgetBoxArgs } from "@types";

type NewBoxResultType = Pick<Mutation, 'createBudgetBox'>;

export const NewBoxService = () => {

	const [createBudgetBox, { data, loading, error }] = useMutation<NewBoxResultType, MutationCreateBudgetBoxArgs>(CREATE_NEW_BUDGET_BOX);

	return { createBudgetBox, data, loading, error };
}

export default NewBoxService;
