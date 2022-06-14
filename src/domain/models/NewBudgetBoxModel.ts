interface NewBudgetBoxModelProps {
	description: string;
	isPercentage: boolean;
	budgetPercentage: number;
	totalAvailable: number;
}

interface CheckResult {
	isOk: boolean;
	msg: string
}

export class NewBudgetBoxModel {
	private _description: string;
	private _isPercentage: boolean;
	private _budgetPercentage: number;
	private _totalAvailable: number;
	private invalidDescriptionMessage = 'A descrição deve ser maior que 1 e menor que 30 caractéres';
	private invalidPercentageMessage = 'O percentual deve ser maior que 0 e menor ou igual a ';
	private invalidTotalAvailableMessage = 'O total disponível deve ser um valor entre 0 e 100';

	private constructor(props: NewBudgetBoxModelProps) {
		this._budgetPercentage = props.budgetPercentage;
		this._description = props.description;
		this._isPercentage = props.isPercentage;
		this._totalAvailable = props.totalAvailable;
		this.invalidPercentageMessage = this.invalidPercentageMessage + props.totalAvailable;
	}

	private clone(props?: Partial<NewBudgetBoxModelProps>): NewBudgetBoxModel {
		return new NewBudgetBoxModel({
			budgetPercentage: props?.budgetPercentage ?? this.budgetPercentage,
			description: props?.description ?? this.description,
			isPercentage: props?.isPercentage !== undefined ? props.isPercentage: this.isPercentage,
			totalAvailable: props?.totalAvailable ?? this.totalAvailable,
		})
	}

	get description(): string {
		return this._description;
	};

	get isPercentage(): boolean{
		return this._isPercentage;
	};

	get budgetPercentage(): number{
		return this._budgetPercentage;
	};

	get totalAvailable(): number{
		return this._totalAvailable;
	};

	setTotalAvailable(totalAvailable: number): NewBudgetBoxModel {
		const model = this.clone({ totalAvailable });
		return this.handleError(model);
	}

	setPercentage(budgetPercentage: number): NewBudgetBoxModel {
		const model = this.clone({ isPercentage: true, budgetPercentage });
		return this.handleError(model);
	}

	setAsNotPercentage(): NewBudgetBoxModel {
		const model = this.clone({ isPercentage: false, budgetPercentage: 100 });
		return this.handleError(model);
	}

	setAsPercentage(): NewBudgetBoxModel {
		const model = this.clone({ isPercentage: true, budgetPercentage: 0.5 });
		return this.handleError(model);
	}

	changeDescription(newDescription: string): NewBudgetBoxModel {
		const description = newDescription.length === 0 ? ' ' : newDescription;
		const model = this.clone({ description });
		return this.handleError(model);
	}

	handleError(model: NewBudgetBoxModel): NewBudgetBoxModel {
		const result = model.isValidProps();
		if(!result.isOk) throw new Error(result.msg);
		return model;
	}

	isValidProps(): CheckResult {
		
		const descriptionLength = this._description.length;
		const isValidPercentage = this._isPercentage && this._budgetPercentage <= this._totalAvailable;
		const isValidDescription = descriptionLength <= 30 && descriptionLength > 0;
		const isValidTotalAvailable = this._totalAvailable >= 0 && this._totalAvailable <= 100;
		if (!isValidPercentage && this._isPercentage) return { msg: this.invalidPercentageMessage, isOk: false };
		if (!isValidDescription) return { msg: this.invalidDescriptionMessage, isOk: false };
		if (!isValidTotalAvailable) return { msg: this.invalidTotalAvailableMessage, isOk: false };

		return { isOk: true, msg: 'ok' };
	}

	public static createNotPercentageModel(description: string, totalAvailable: number): NewBudgetBoxModel {
		return this.create({ description, isPercentage: false, budgetPercentage: 100, totalAvailable });
	}

	public static create(props: NewBudgetBoxModelProps): NewBudgetBoxModel {
		const model = new NewBudgetBoxModel(props);
		return model.handleError(model);
	}
}

export default NewBudgetBoxModel;
