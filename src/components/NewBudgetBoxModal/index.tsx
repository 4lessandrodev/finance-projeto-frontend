import Title from '../Title';
import Modal from 'react-modal';
import { Container, Form, FormContent, Group, TopLine } from './style';
import Input from '../Input';
import InputOptions from '../InputOption';
import BoxAllocationStatus from '../BoxAllocationStatus';
import InputRange from '../InputRange';
import InputButton from '../InputButton';
import CloseButton from '../BtnClose';
import { FormEvent, useEffect, useState } from 'react';
import NewBudgetBoxModel from '../../domain/models/NewBudgetBoxModel';
import { useBudgetBoxes } from '../../contexts/my-budget-boxes/my-budget-boxes.context';
import ToastMessage from '../ToastMessage';
import { ApolloError } from '@apollo/client';

export interface SubmitNewBudgetBoxProps {
	description: string;
	isPercentage: boolean;
	budgetPercentage: number;
}

export interface Props {
	isOpen: boolean;
	onSubmit: (props: SubmitNewBudgetBoxProps) => Promise<ApolloError | void>;
	closeModal: (isOpened: boolean) => void;
}

export default function NewBudgetBoxModal({ isOpen, onSubmit, closeModal }: Props) {

	const { myBudgetBoxes, totalAvailable, totalAllocated } = useBudgetBoxes();
	const [model, setModel] = useState<NewBudgetBoxModel>(NewBudgetBoxModel.create({
		budgetPercentage: 0,
		description: '',
		isPercentage: true,
		totalAvailable
	}));
	
	const [isToastVisible, setToastVisible] = useState<boolean>(false);
	const [toastMessage, setToastMessage] = useState<string>('');
	const [toastType, setToastType] = useState<'error' | 'info'>('info');

	const handleBudgetBoxType = (type: string) => {
		if (type === 'Percentual') return setModel(model.setAsPercentage());
		if (type !== 'Percentual') return setModel(model.setAsNotPercentage());
	}

	const handleDescription = (description: string) => {
		if (totalAllocated - totalAvailable === 0 || totalAllocated === 100) {
			return;
		}
		setModel(model.changeDescription(description));
	}

	useEffect(() => {
		if (totalAllocated - totalAvailable === 0 || totalAllocated === 100) {
			setToastMessage('Não há percentual disponível!');
			setToastVisible(true);
		}
	}, [totalAllocated, totalAvailable]);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		
		e.preventDefault();

		if (totalAllocated - totalAvailable === 0 || totalAllocated === 100) {
			setToastMessage('Você já atingiu 100% de alocação');
			setToastType('error');
			setToastVisible(true);
			return;
		}
		
		const result = model.isValidProps();
		
		if (!result.isOk) {
			setToastType('error');
			setToastMessage(result.msg);
			setToastVisible(true);
			return null;
		}

		setToastType('info');
		const payload = await onSubmit({
			description: model.description,
			budgetPercentage: model.budgetPercentage,
			isPercentage: model.isPercentage
		});
		if (payload) {
			setToastMessage(payload.message);
			setToastVisible(true);
			return null;
		}

		setToastMessage(result.msg);
		setToastVisible(true);
		setModel(model.cleanModel());
		return null;
	}

	const handleCloseModal = () => {
		const isOpened = false;
		setModel(model.cleanModel());
		setToastVisible(false);
		closeModal(isOpened);
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
					backgroundColor: 'rgba(38, 38, 38, 0.75)',
				  overflow: 'hidden'
				},
				content: {
					top: '50%',
					left: '50%',
					right: 'auto',
					bottom: 'auto',
					marginRight: '-50%',
					transform: 'translate(-50%, -50%)',
					padding: 0,
					overflow: 'hidden'
				}
			  }
		}>
			<Container>
				<TopLine />
				<Group right={1.5} left={1.5} top={0.5}>
					<Title value='Novo Caixa' weight='bold' as='h2' color='gray2' size='regular3' />
					<CloseButton onClick={handleCloseModal}/>
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
								onChange={(e) => handleDescription(e.target.value)}
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
									max={totalAvailable}
								/>
							</Group>
						)}
						{model.isPercentage && (<Group top={1} right={0.5} left={0.5}>
							<BoxAllocationStatus data={
								myBudgetBoxes
									.filter((box) => box.isPercentage)
									.map((box) => (
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
