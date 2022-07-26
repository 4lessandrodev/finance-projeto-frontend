import { IThemeProvider } from "@types";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.orange};
	gap: 0.5%;
	justify-content: flex-start;
	align-items: center;
	padding: 0.5% 1%;
	width: 100%;
	border-radius: 14px;
	overflow: hidden;
	@media (max-width: 700px){
		display: none;
	}
`;

export interface SizeProps {
	width: number;
	color: 'white' | 'black' | 'orange';
	backgroundColor: 'green' | 'gray4' | 'orange' | 'gray3' | 'gray5';
	isEndStep?: boolean;
}

export const Step = styled.div<SizeProps>`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: ${({ width }: SizeProps) => width}%;
	height: 42px;
	border-radius: 4px;
	align-items: flex-start;
	justify-content: center;
	color: ${({ color, theme }: SizeProps & IThemeProvider) => theme.colors[color]};
	background-color: ${({ backgroundColor, theme }: SizeProps & IThemeProvider) => theme.colors[backgroundColor]};
`;

interface PProps {
	weight?: boolean;
}

export const Text = styled.p<PProps>`
	display: flex;
	margin: 0 7%;
	font-size: 12px;
	font-weight: ${({ weight }: PProps) => `${weight ? 'bold' : ''}`};
	text-transform: capitalize;
`;
