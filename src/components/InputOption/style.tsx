import { IColors, IThemeProvider, ITheme } from "@types";
import styled from "styled-components";

export interface InputStyleProps {
	fontColor: keyof IColors;
	borderColor:'orange' | 'gray';
}

const GetBorder = (theme: ITheme) => ({
	orange: theme.colors.orange,
	gray: theme.colors.gray3
});

export const InputStyle = styled.select<InputStyleProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	cursor: pointer;
	font-size: 0.9rem;
	padding: 0.4rem;
	border-radius: 0.5rem;
	border: 2px solid ${({ theme, borderColor }: IThemeProvider & InputStyleProps) => GetBorder(theme)[borderColor]};
	background-color: white;
	color: ${({ theme, fontColor }: IThemeProvider & InputStyleProps) => theme.colors[fontColor]};
`;

export interface LabelStyleProps {
	fontColor: keyof IColors;
}

export const LabelStyle = styled.label<LabelStyleProps>`
	display: flex;
	position: relative;
	align-items: flex-start;
	width: 100%;
	padding-bottom: 0.8rem;
	font-size: ${({ theme }: IThemeProvider) => theme.font.sizes.regular4};
	font-weight: ${({ theme }: IThemeProvider) => theme.font.weights.medium};
	color: ${({ theme, fontColor }: IThemeProvider & LabelStyleProps) => theme.colors[fontColor]};
	text-transform: capitalize;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Option = styled.option`
	
`;