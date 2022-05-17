import { IColors, ISizes, IThemeProvider, ITransform, IWeights } from "@types";
import styled from "styled-components";

export interface InputStyle {
	backgroundColor: keyof IColors;
	color: keyof IColors;
	weight: keyof IWeights;
	textTransform: keyof ITransform;
	fontSize: keyof ISizes;
	height: keyof ISizes;
}

type Params = InputStyle & IThemeProvider;

export const InputButtonStyle = styled.input<InputStyle>`
	width: 100%;
	background-color: ${({ theme, backgroundColor }: Params) => theme.colors[backgroundColor]};
	color: ${({ theme, color }: Params) => theme.colors[color]};
	font-weight:${({ theme, weight }: Params) => theme.font.weights[weight]};
	text-transform:${({ theme, textTransform }: Params) => theme.font.textTransform[textTransform]};
	border: none;
	cursor: pointer;
	font-size: ${({ theme, fontSize }: Params) => theme.font.sizes[fontSize]};
	height: ${({ theme, height }: Params) => theme.sizes[height]};
	&:hover {
		filter: brightness(0.85)
	}
`;
