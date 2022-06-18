import { IColors, ISizes, ITheme, IThemeProvider } from "@types";
import styled from "styled-components";

export interface WrapperProps {
	BackgroundColor: keyof IColors;
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	align-items: center;
	width: 100%;
	height: 3rem;
	background-color: ${({ theme, BackgroundColor }: IThemeProvider & WrapperProps) => theme.colors[BackgroundColor]};
	color: white;
	justify-content: space-between;
	padding-left: 1rem;
	padding-right: 1rem;
`;


export interface ImgProps {
	size: keyof ISizes;
	color: keyof IColors;
}

export const IMG = styled.div<ImgProps>`
	min-width: 7px;
	width: ${({ size, theme }: IThemeProvider & ImgProps) => theme.sizes[size]};
	height: ${({ size, theme }: IThemeProvider & ImgProps) => theme.sizes[size]};
	>:first-child path {
		fill: ${({ theme, color }: IThemeProvider & ImgProps) => theme.colors[color]}
	}
	>:first-child path:first-child {
		fill: ${({ theme, color }: IThemeProvider & ImgProps) => theme.colors[color]}
	}
	&:hover {
		cursor: pointer;
	}
`;

export const Container = styled.div`
	display: flex; 
	width: 100%;
	padding-left: 10px;
`;
