import Title from '../../components/Title';
import Modal from 'react-modal';
import { Container, Content, Group, TopLine } from './style';
import Input from '../../components/Input';
import InputOptions from '../../components/InputOption';
import BoxAllocationStatus from '../../components/BoxAllocationStatus';
import InputRange from '../../components/InputRange';
import InputButton from '../../components/InputButton';

export interface Props {
	children?: any;
	isOpen: boolean;
}

export default function NewBudgetBoxModal({ children, isOpen }: Props) {
	return (
		<Modal isOpen={isOpen} style={
			{
				overlay: {
				  position: 'fixed',
				  top: 0,
				  left: 0,
				  right: 0,
				  bottom: 0,
				  backgroundColor: 'rgba(255, 255, 255, 0.75)'
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
				<Content>
					<Title value='Novo Caixa' weight='bold' as='h2'/>
					<Group top={1}>
						<Input
							type='text' value={''}
							id="description" name=''
							onChange={() => alert('')}
							label="descrição"
						/>
					</Group>
					<Group top={1} right={0.5} left={0.5}>
						<InputOptions
							multiple={false}
							label="Tipo de Caixa"
							name='tipo-de-caixa'
							onChange={() => alert('changed')}
							options={[
								{
									value: 'Benefício'
								},
								{
									value: 'Percentual'
								}
							]}
						/>
					</Group>
					<Group top={1} right={0.5} left={0.5}>
						<InputRange value={0} label="Alocar" />
					</Group>
					<Group top={1} right={0.5} left={0.5}>
						<BoxAllocationStatus data={[{
							title: 'box 1',
							value: 10
						}]} />
					</Group>
				</Content>
				<Group top={2}>
					<InputButton value='confirmar' backgroundColor='green' height={'large4'} />
				</Group>
			</Container>
		</Modal>
	)
}
