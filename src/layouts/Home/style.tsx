import { IThemeProvider } from "@types";
import styled from "styled-components";

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.green };
	height: 20vh;
	justify-content: space-around;
	align-content: space-around;
`;

export const Flex = styled.div<{ width: number }>`
	display: inline-flex;
	width: ${({ width }) => width}%;
	justify-content: center;
	align-items: center;
`;

export const Container = styled.div`
	display: flex;
	min-height: 80vh;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.gray5 };
`;

export const ContainerBox = styled.div`
	display: inline-flex;
	width: 70%;
	max-width: 70%;
	justify-content: flex-end;
	gap: 1%;
	position: absolute;
	top: 15%;
	flex-wrap: wrap;
	> div {
		margin-bottom: 1%;
	}
`;