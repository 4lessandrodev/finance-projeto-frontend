export interface Coin {
	value: number;
	currency: "BRL";
}

export interface Reason {
	reasonId: string;
	budgetBoxId: string;
}

export class BudgetBox {
	id!: string;
	description!: string;
	balanceAvailable!: Coin;
	isPercentage!: boolean;
	budgetPercentage!: number;
	reasons!: Reason[];
	createdAt!: Date;
	updatedAt!: Date;
 }

export default BudgetBox;
