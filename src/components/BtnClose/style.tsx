import { IThemeProvider } from "@types";
import styled from "styled-components";

export const Icon = styled.div`
	color: ${({ theme }: IThemeProvider) => theme.colors.white};
	font-size: 12px;
	display: flex;
	width: ${({ theme }: IThemeProvider) => theme.sizes.small5};
	height: ${({ theme }: IThemeProvider) => theme.sizes.small5};
	border-radius: 50%;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.orange};
	&:hover::after {
		content: 'x';
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	flex-grow: 1;
`;
