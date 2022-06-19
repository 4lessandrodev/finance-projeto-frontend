import { BudgetBoxType } from "@types";
import { createContext, useContext } from "react";

export interface MyBudgetBoxesInterface {
	totalAllocated: number;
	totalAvailable: number;
	amount: number;
	myBudgetBoxes: BudgetBoxType[];
	setMyBudgetBoxes: (budgetBox: BudgetBoxType[]) => void;
	setTotalAllocated: (total: number) => void;
	setTotalAvailable: (total: number) => void;
}

const MyBudgetBoxesContext = createContext<MyBudgetBoxesInterface>({
	totalAllocated: 0,
	totalAvailable: 100,
	myBudgetBoxes: [],
	amount: 0,
	setMyBudgetBoxes: (_budgetBox: BudgetBoxType[]) => { },
	setTotalAllocated: (_total: number) => { },
	setTotalAvailable: (_total: number) => { }
});

export function useBudgetBoxes(): MyBudgetBoxesInterface {
	return useContext(MyBudgetBoxesContext);
}

export default MyBudgetBoxesContext;
