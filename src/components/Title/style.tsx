import { IColors, IThemeProvider, IWeights, ISizes } from "@types";
import styled from "styled-components";

export interface StyleProps {
	color: keyof IColors;
	weight: keyof IWeights;
	size: keyof ISizes;
	textTransform: 'lowercase' | 'capitalize' | 'uppercase'
}

export const H1 = styled.h1<StyleProps>`
	color: ${({ theme, color }: IThemeProvider & StyleProps) => theme.colors[color]};
	font-weight: ${({ theme, weight }: IThemeProvider & StyleProps) => theme.font.weights[weight]};
	font-size: ${({ theme, size }: IThemeProvider & StyleProps) => theme.sizes[size]};
	text-transform: ${({textTransform }: StyleProps) => textTransform};
`;

export default H1;
