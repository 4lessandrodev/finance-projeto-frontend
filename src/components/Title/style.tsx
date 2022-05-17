import { IColors, IThemeProvider, IWeights, ISizes, ITransform } from "@types";
import styled from "styled-components";

export interface StyleProps {
	color: keyof IColors;
	weight: keyof IWeights;
	size: keyof ISizes;
	textTransform: keyof ITransform
}

type Params = IThemeProvider & StyleProps;

export const H1 = styled.h1<StyleProps>`
	color: ${({ theme, color }: Params) => theme.colors[color]};
	font-weight: ${({ theme, weight }: Params) => theme.font.weights[weight]};
	font-size: ${({ theme, size }: Params) => theme.sizes[size]};
	text-transform:${({ theme, textTransform }: Params) => theme.font.textTransform[textTransform]};
`;

export default H1;
