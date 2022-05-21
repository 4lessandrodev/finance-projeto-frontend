import { IColors, ISizes, IWeights, IThemeProvider } from "@types";
import styled from "styled-components";

export interface InputStyleProps {
	color: keyof IColors;
}

export const InputStyle = styled.input<InputStyleProps>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 18px;
	width: 18px;
	cursor: pointer;
	&:checked::after {
		content: '✓';
		padding: 0 0.25rem 0.1rem;
		background: ${({ color, theme }: IThemeProvider & InputStyleProps) => theme.colors[color]};
		justify-content: center;
    	color: white;
		border-radius: 20%;
		height: 18px;
		width: 10px;
	}
`;

export interface LabelStyleProps {
	size: keyof ISizes;
	color: keyof IColors;
	weight: keyof IWeights;
	colorHover: keyof IColors;
}

export const LabelStyle = styled.label<LabelStyleProps>`
	font-size: ${({ theme, size }: IThemeProvider & LabelStyleProps) => theme.font.sizes[size]};
	color: ${({ theme, color }: IThemeProvider & LabelStyleProps) => theme.colors[color]};
	font-weight: ${({ theme, weight }: IThemeProvider & LabelStyleProps) => theme.font.weights[weight]};
	&:hover{
		cursor: pointer;
		font-weight: ${({ theme }: IThemeProvider) => theme.font.weights.bold};
		color: ${({ colorHover, theme }: IThemeProvider & LabelStyleProps) => theme.colors[colorHover]};
	}
`

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	> :first-child {
		margin-right: 0.5rem;
	}
`;
