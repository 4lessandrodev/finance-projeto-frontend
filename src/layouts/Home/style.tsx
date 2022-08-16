import { IThemeProvider } from "@types";
import styled from "styled-components";

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.green };
	align-items:center ;
`;

export const Flex = styled.div<{ width: number }>`
	display: inline-flex;
	width: ${({ width }) => width}%;
	justify-content: center;
	align-items: center;
	margin-bottom: 3%;
	@media (max-width: 800px){ 
		margin-bottom: 5%;
	}
`;

export const HeaderWrapper = styled.div`
	display: inline-flex;
	width: 100%;
	max-width: 1480px;
	justify-content: center;
	align-items: center;
	height: 23vh;
	@media (max-width: 800px){ 
		display: flex;
		flex-direction: column;
		height: 30vh;
	}
	@media (min-width: 1960px){
		max-width: 1720px;
	}
`;

export const MenuContainer = styled.div`
	display: inline-flex;
	width: 30%;
	justify-content: center;
	align-items: center;
	@media (max-width: 1180px){ 
		width: 50%;
	}

	@media (max-width: 800px){ 
		width: 70%;
	}
`;

export const FilterContainer = styled.div`
	display: inline-flex;
	width: 50%;
	justify-content: center;
	align-items: center;
	@media (max-width: 1180px){ 
		width: 30%;
	}

	@media (max-width: 800px){ 
		display: none;
	}
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 100%;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.gray5 };
`;

export const ContainerData = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	width: 68%;
	margin-left: 2%;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.gray5 };
	max-width: 1480px;
	@media (max-width: 750px){
		width: 98%;
		margin-left: 0;
		align-items: center;
	}
`;

export const DataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 2%;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.gray4 };
	border-radius: 11px;
	margin-bottom: 2%;
	min-height: 40vh;
	position: relative;
`;

export const ContainerBox = styled.div`
	display: inline-flex;
	width: 70%;
	max-width: 70%;
	justify-content: flex-end;
	gap: 1%;
	position: relative;
	top: -15px;
	flex-wrap: wrap;
	max-width: 1480px;
	> div {
		margin-bottom: 1%;
	}

	@media (max-width: 750px){ 
		justify-content: unset;
		flex-wrap: nowrap;
		overflow: scroll;
		width: 97%;
		max-width: 97%;
	}
`;
