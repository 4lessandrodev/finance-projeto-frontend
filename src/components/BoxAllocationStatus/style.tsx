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
`;

export interface SizeProps {
	width: number;
	color: 'white' | 'black';
	backgroundColor: 'green' | 'gray4';
}

export const Step = styled.div<SizeProps>`
	display: flex;
	flex-direction: column;
	cursor: pointer;
	width: ${({ width }: SizeProps) => width}%;
	height: 42px;
	align-items: flex-start;
	justify-content: center;
	color: ${({ color, theme }: SizeProps & IThemeProvider) => theme.colors[color]};
	overflow: hidden;
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
`;
