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

export default function HomeLayout({children}: { children?: ReactElement }) {
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
					<BudgetBox label="Operacionais" value={200}/>
					<BudgetBox label="Suprimentos" value={200}/>
					<BudgetBox label="Poupança" value={200}/>
					<BudgetBox label="Investimento" value={200}/>
					<BudgetBox label="Testes" value={700}/>
					<BudgetBox label="Outros" value={150}/>
					<BudgetBox color="gray3" borderStyle="dashed"/>
					<BudgetBox label="total" icon="dollar" backgroundColor="green" color="white" value={20} valueColor="gray5" borderStyle="solid"/>
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
