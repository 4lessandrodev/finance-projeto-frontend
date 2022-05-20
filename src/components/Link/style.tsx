import { IColors, ISizes, IThemeProvider, ITransform } from "@types";
import styled from "styled-components";

export interface LinkStyleProps {
	color: keyof IColors;
	hoverColor: keyof IColors;
	fontSize: keyof ISizes;
	textTransform: keyof ITransform;
}

type Params = IThemeProvider & LinkStyleProps;

export const LinkStyle = styled.div<LinkStyleProps>`
	display: inline-flex;
	justify-content: center;
	cursor: pointer;
	color: ${({ theme, color }: Params ) => theme.colors[color] };
	font-weight: bold;
	font-size: ${({ theme, fontSize }: Params) => theme.font.sizes[fontSize]};
	width: 100%;
	background-color: transparent;
	transition: all 0.2s ease-in-out;
	text-transform: ${({ theme, textTransform }: Params) => theme.font.textTransform[textTransform]};
	&:hover {
		color: ${({ theme, hoverColor }: Params ) => theme.colors[hoverColor] };
	}
`;
