import { BudgetBoxType } from "@types";
import { ReactComponentElement, useMemo, useState } from "react";
import BudgetBoxContext, { MyBudgetBoxesInterface } from "./my-budget-boxes.context";

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function BudgetBoxProvider ({ children }: Props) {
	const [myBudgetBoxes, setMyBudgetBoxes] = useState<BudgetBoxType[]>([]);
	const [totalAllocated, setTotalAllocated] = useState<number>(0);
	const [totalAvailable, setTotalAvailable] = useState<number>(100);

	const context = useMemo((): MyBudgetBoxesInterface => ({
		totalAllocated,
		totalAvailable,
		myBudgetBoxes,
		setMyBudgetBoxes: (myBudgetBoxes) => {
			if (myBudgetBoxes.length > 0) {
				setMyBudgetBoxes(myBudgetBoxes);
				const calcTotalAllocated = myBudgetBoxes
					.reduce((totalValue, box) => totalValue + box.budgetPercentage, 0);
				setTotalAllocated(calcTotalAllocated);
				setTotalAvailable(100 - calcTotalAllocated);
			}
		},
		setTotalAllocated,
		setTotalAvailable,
	}), [totalAllocated,totalAvailable,myBudgetBoxes])

	return (
		<BudgetBoxContext.Provider value={context}>
			{children}
		</BudgetBoxContext.Provider>
	)
}
