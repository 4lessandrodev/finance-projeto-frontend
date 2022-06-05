import { ReactElement } from "react";
import { Container, Header, Flex, ContainerBox } from "./style";
import Logo from '../../components/Logo'
import Nav from "@components/Nav";
import BudgetBox from '../../components/BoxButton'

export default function HomeLayout({children}: { children?: ReactElement }) {
	return (
		<>
			<Header>
				<Flex width={100}>
					<Flex width={15}>
						<Logo color="default" />
					</Flex>
					<Flex width={50}>
						<Nav linkProps={[
						{
							url: '/home',
							value: 'Caixas'
						},
						{
							url: '/accounts',
							value: 'Contas-a-pagar'
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
					</Flex>
					<Flex width={35}>
						filtro
					</Flex>
				</Flex>
			</Header>
			<Container>
				<ContainerBox>	
					<BudgetBox label="Operacionais" value={200}/>
					<BudgetBox label="Suprimentos" value={200}/>
					<BudgetBox label="Poupança" value={200}/>
					<BudgetBox label="Investimento" value={200}/>
					<BudgetBox label="Testes" value={700}/>
					<BudgetBox label="Outros" value={150}/>
					<BudgetBox color="gray4" borderStyle="dotted"/>
					<BudgetBox label="total" icon="dollar" backgroundColor="green" color="white" value={20} valueColor="gray5" borderStyle="solid"/>
				</ContainerBox>
				{ children }
			</Container>
		</>
	)
}
