import { gql } from "@apollo/client";

export const GET_AUTH_USER = gql`
	query whoAmI {
		whoAmI {
			id
			email
		}
	}
`;

export const BUDGET_CURRENCY_FRAGMENT = gql`
	fragment BudgetBoxCurrencyTypeFragment on BudgetBoxCurrencyType {
		value
		currency
	}
`;

export const REASON_FRAGMENT = gql`
	fragment ReasonTypeFragment on ReasonType {
		id
		description
	}
`;

export const GET_MY_BUDGET_BOXES = gql`
	query getBudgetBoxes {
		getBudgetBoxes {
			id
			description
			balanceAvailable {
			...BudgetBoxCurrencyTypeFragment
			}
			isPercentage
			budgetPercentage
			reasons {
			...ReasonTypeFragment
			}
			createdAt
			updatedAt
		}
	}
	${BUDGET_CURRENCY_FRAGMENT}
	${REASON_FRAGMENT}
`;
