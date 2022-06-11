import { IColors, IThemeProvider } from "@types";
import styled from "styled-components";

export const Range = styled.input`
	width: 100%;
`;

export interface LabelProps {
	fontColor: keyof IColors;
}

export const LabelType = styled.label<LabelProps>`
	display: flex;
	position: relative;
	align-items: flex-start;
	width: 96%;
	padding-bottom: 0.8rem;
	font-size: ${({ theme }: IThemeProvider) => theme.font.sizes.regular4};
	font-weight: ${({ theme }: IThemeProvider) => theme.font.weights.medium};
	color: ${({ theme, fontColor }: IThemeProvider & LabelProps) => theme.colors[fontColor]};
	text-transform: capitalize;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
