import { ReactElement } from "react";
import {
	Container,
	Header,
	Flex,
	ContainerBox,
	MenuContainer,
	FilterContainer,
	HeaderWrapper,
	MainContainer,
	ContainerData,
	DataWrapper
} from "./style";
import Logo from '../../components/Logo'
import Nav from "../../components/Nav";
import BudgetBox from '../../components/BoxButton'
import Title from "../../components/Title";
import EntryRow, { EntryRowData } from "../../components/EntryRow";
import { useBudgetBoxes } from "@contexts/my-budget-boxes/my-budget-boxes.context";

interface HomeLayoutProps {
	children?: ReactElement | ReactElement[];
	openOrCloseNewBudgetBoxModal: (isOpen: boolean) => void;
}

export default function HomeLayout({ children, openOrCloseNewBudgetBoxModal }: HomeLayoutProps) {
	const { myBudgetBoxes, amount, totalAllocated } = useBudgetBoxes();

	const data: EntryRowData[] = [{
		type: "Saida",
		box: "Suprimentos",
		reason: "Padaria",
		date: "13/03/22",
		amount: "R$ 15,80",
		status: "Pendente"
	},{
		type: "Entrada",
		box: "Percentual",
		reason: "Salário",
		date: "10/02/22",
		amount: "R$ 7200,00",
		status: "Concluido"
	},{
		type: "Entrada",
		box: "Percentual",
		reason: "Adiantamento",
		date: "15/02/22",
		amount: "R$ 2200,00",
		status: "Concluido"
	},{
		type: "Saida",
		box: "Suprimentos",
		reason: "Padaria",
		date: "13/03/22",
		amount: "R$ 15,80",
		status: "Pendente"
	},{
		type: "Saida",
		box: "Suprimentos",
		reason: "Supermercado",
		date: "18/03/22",
		amount: "R$ 150,20",
		status: "Pendente"
	}];

	return (
		<MainContainer>
			<Header>
				<HeaderWrapper>
					<Flex width={15}>
						<Logo color="default" />
					</Flex>
					<MenuContainer>
						<Nav linkProps={[
						{
							url: '/home',
							value: 'Caixas'
						},
						{
							url: '/dashboard',
							value: 'Dashboard'
						},
						{
							url: '/profile',
							value: 'Perfil'
						}
						]} />
					</MenuContainer>
					<FilterContainer>
						filtro
					</FilterContainer>
				</HeaderWrapper>
			</Header>
			<Container>
				<ContainerBox>
					{myBudgetBoxes.map((box) => (
						<BudgetBox label={box.description}
							value={box.balanceAvailable.value}
							key={box.id}
							percentage={box.budgetPercentage}
						/>
					))}
					<BudgetBox color="gray3"
						borderStyle="dashed"
						onClick={() => openOrCloseNewBudgetBoxModal(true)}
					/>
					<BudgetBox
						label="total"
						icon="dollar"
						backgroundColor="green"
						color="white"
						value={amount}
						valueColor="gray5"
						borderStyle="solid"
						percentage={totalAllocated}
					/>
				</ContainerBox>
			</Container>
			<Container style={{height: '100%'}}>
				<ContainerData>
					<Title value="Lançamentos" weight="bold" as="h2" size="regular3" />
					<DataWrapper>
						<EntryRow />
						{
							data.map((d, i) => (
								<EntryRow key={`${d.date}-${d.box}-${d.amount}-${i}`} data={d}></EntryRow>)
							)
						}
					</DataWrapper>
				</ContainerData>
			</Container>
		</MainContainer>
	)
}
