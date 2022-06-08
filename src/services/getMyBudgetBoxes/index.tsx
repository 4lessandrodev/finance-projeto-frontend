import { useQuery } from "@apollo/client";
import { GET_MY_BUDGET_BOXES } from "../../queries";
import { Query } from "@types";

type BudgetBoxResultType = Pick<Query, 'getBudgetBoxes'>;

export const GetMyBudgetBoxesService = () => {

	const {error, loading, data, refetch } = useQuery<BudgetBoxResultType>(GET_MY_BUDGET_BOXES);
	

	return { refetch, data, loading, error };
}

export default GetMyBudgetBoxesService;
