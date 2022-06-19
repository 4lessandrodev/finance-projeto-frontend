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
import { useBudgetBoxes } from "@contexts/my-budget-boxes/my-budget-boxes.context";

interface HomeLayoutProps {
	children?: ReactElement | ReactElement[];
	openOrCloseNewBudgetBoxModal: (isOpen: boolean) => void;
}

export default function HomeLayout({ children, openOrCloseNewBudgetBoxModal }: HomeLayoutProps) {
	const { myBudgetBoxes, amount, totalAllocated } = useBudgetBoxes();
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
			<Container>
				<ContainerData>
					<Title value="Lançamentos" weight="bold" as="h2" size="regular3" />
					<DataWrapper>
						data...
					</DataWrapper>
				</ContainerData>
			</Container>
		</MainContainer>
	)
}
