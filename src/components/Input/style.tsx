import { IColors, ISizes, ITheme, IThemeProvider } from "@types";
import styled from "styled-components";

export interface InputStyleProps {
	borderColor: 'orange' | 'gray';
	fontSize: keyof ISizes;
	fontColor: keyof IColors;
	isPassword: boolean;
}

const GetBorder = (theme: ITheme) => ({
	orange: theme.colors.orange,
	gray: theme.colors.gray3
});

export const InputStyle = styled.input<InputStyleProps>`
	padding: 0.5rem;
	border-radius: 0.3rem;
	border: 2px solid ${({ theme, borderColor }: IThemeProvider & InputStyleProps) => GetBorder(theme)[borderColor]};
	width: 100%;
	position: relative;
	left: ${({ isPassword }: InputStyleProps) => isPassword ? '0.5rem' : '0rem'};
	margin: ${({ isPassword }: InputStyleProps) => isPassword ? '0rem' : '0 0.5rem'};
	font-size:  ${({ theme, fontSize }: IThemeProvider & InputStyleProps) => theme.font.sizes[fontSize]};
	color:  ${({ theme, fontColor }: IThemeProvider & InputStyleProps) => theme.colors[fontColor]};
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: absolute;
	width: 100%;
	justify-content: center;
	align-items: center;
`;

export const ContainerIcon = styled.div`
	position: relative;
	width: 1rem;
	left: -1rem;
	cursor: pointer;
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
`

export const Group = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
`;
