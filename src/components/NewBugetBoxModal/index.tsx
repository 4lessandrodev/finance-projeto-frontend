import Title from '../../components/Title';
import Modal from 'react-modal';
import { Container, Form, FormContent, Group, TopLine } from './style';
import Input from '../../components/Input';
import InputOptions from '../../components/InputOption';
import BoxAllocationStatus from '../../components/BoxAllocationStatus';
import InputRange from '../../components/InputRange';
import InputButton from '../../components/InputButton';
import CloseButton from '../../components/BtnClose';
import { FormEvent, useState } from 'react';
import NewBudgetBoxModel from '../../domain/models/NewBudgetBoxModel';
import { useBudgetBoxes } from '../../contexts/my-budget-boxes/my-budget-boxes.context';
import ToastMessage from '../../components/ToastMessage';

export interface SubmitProps {
	description: string;
	isPercentage: boolean;
	budgetPercentage: number;
}

export interface Props {
	isOpen: boolean;
	onSubmit: <T>(props: SubmitProps) => Promise<T|void>;
}

export default function NewBudgetBoxModal({ isOpen, onSubmit }: Props) {

	const { myBudgetBoxes, totalAvailable } = useBudgetBoxes();
	const [model, setModel] = useState<NewBudgetBoxModel>(NewBudgetBoxModel.create({
		budgetPercentage: 0,
		description: '',
		isPercentage: true,
		totalAvailable: totalAvailable
	}));

	const [isToastVisible, setToastVisible] = useState<boolean>(false);
	const [toastMessage, setToastMessage] = useState<string>('');
	const [toastType, setToastType] = useState<'error' | 'info'>('info');

	const handleBudgetBoxType = (type: string) => {
		if (type === 'Percentual') return setModel(model.setAsPercentage());
		if (type !== 'Percentual') return setModel(model.setAsNotPercentage());
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		
		e.preventDefault();
		
		const result = model.isValidProps();
		setToastMessage(result.msg);
		setToastVisible(true);
		
		if (!result.isOk) {
			setToastType('error');
			return null;
		}

		setToastType('info');
		const payload = await onSubmit({
			description: model.description,
			budgetPercentage: model.budgetPercentage,
			isPercentage: model.isPercentage
		});
		
		setModel(model.cleanModel());

		return payload;
	}

	return (
		<Modal isOpen={isOpen} style={
			{
				overlay: {
				  position: 'fixed',
				  top: 0,
				  left: 0,
				  right: 0,
				  bottom: 0,
				  backgroundColor: 'rgba(38, 38, 38, 0.75)'
				},
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
					padding: 0
				}
			  }
		}>
			<Container>
				<TopLine />
				<Group right={1.5} left={1.5} top={0.5}>
					<Title value='Novo Caixa' weight='bold' as='h2'/>
					<CloseButton />
				</Group>
				<Form action='/create-budget-box'
					autoComplete='false'
					method='POST'
					onSubmit={(e)=> handleSubmit(e)}>
					<FormContent>
						{
							isToastVisible && (<Group bottom={1.5} right={0.5} left={0.5}>
								<ToastMessage
									isVisible={isToastVisible}
									message={toastMessage}
									type={toastType}
									closeToast={() => setToastVisible(false)}
								/>
							</Group>)
						}
						<Group>
							<Input
								type='text' value={model.description}
								id="budget-box-description"
								name='budget-box-description'
								onChange={(e) => setModel(model.changeDescription(e.target.value))}
								label="descrição"
								textTransform='capitalize'
							/>
						</Group>
						<Group top={1} right={0.5} left={0.5}>
							<InputOptions
								multiple={false}
								label="Tipo de Caixa"
								name='budget-box-type'
								defaultValue={'Percentual'}
								onChange={(e) => handleBudgetBoxType(e.target.value)}
								options={[
									{
										value: 'Benefício',
									},
									{
										value: 'Percentual',
									}
								]}
							/>
						</Group>
						{model.isPercentage && (
							<Group top={1} right={0.5} left={0.5}>
								<InputRange
									value={model.budgetPercentage}
									label="Alocar"
									name='budget-box-percentage'
									onChange={(e) => setModel(model.setPercentage(e.target.value))}
								/>
							</Group>
						)}
						{model.isPercentage && (<Group top={1} right={0.5} left={0.5}>
							<BoxAllocationStatus data={
								myBudgetBoxes.map((box) => (
									{
										title: box.description,
										value: box.budgetPercentage
									}
								)).concat([
									{
										title: model.description,
										value: model.budgetPercentage
									}
								])
							} />
						</Group>)}
					</FormContent>
					<Group top={2}>
					<InputButton value='confirmar'
						backgroundColor='green'
						height={'large4'}
						type={'submit'}
					/>
					</Group>
				</Form>
			</Container>
		</Modal>
	)
}
