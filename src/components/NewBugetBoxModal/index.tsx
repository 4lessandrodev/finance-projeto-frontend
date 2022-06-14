import Title from '../../components/Title';
import Modal from 'react-modal';
import { Container, Form, Group, TopLine } from './style';
import Input from '../../components/Input';
import InputOptions from '../../components/InputOption';
import BoxAllocationStatus from '../../components/BoxAllocationStatus';
import InputRange from '../../components/InputRange';
import InputButton from '../../components/InputButton';
import CloseButton from '../../components/BtnClose';
import { useState } from 'react';
import NewBudgetBoxModel from '../../domain/models/NewBudgetBoxModel';

export interface Props {
	isOpen: boolean;
}

export default function NewBudgetBoxModal({ isOpen }: Props) {

	const [model, setModel] = useState<NewBudgetBoxModel>(NewBudgetBoxModel.create({
		budgetPercentage: 0.5,
		description: ' ',
		isPercentage: true,
		totalAvailable: 90
	}));

	const handleBudgetBoxType = (type: string) => {
		if (type === 'Percentual') return setModel(model.setAsPercentage());
		if (type !== 'Percentual') return setModel(model.setAsNotPercentage());
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
				<Form action='/create-budget-box' autoComplete='false' method='POST'>
					<Group>
						<Input
							type='text' value={model.description}
							id="budget-box-description"
							name='budget-box-description'
							onChange={(e) => setModel(model.changeDescription(e.target.value))}
							label="descrição"
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
						<BoxAllocationStatus data={[{
							title: 'box 1',
							value: 10
						}]} />
					</Group>)}
				</Form>
				<Group top={2}>
					<InputButton value='confirmar'
						backgroundColor='green'
						height={'large4'}
						type={'submit'} onClick={() => alert(JSON.stringify({
							descricao: model.description,
							ehPercentual: model.isPercentage,
							percentual: model.budgetPercentage
						}))}
					/>
				</Group>
			</Container>
		</Modal>
	)
}
