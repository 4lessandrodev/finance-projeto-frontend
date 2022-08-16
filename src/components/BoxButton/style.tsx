import { IColors, ITheme, IThemeProvider } from "@types";
import styled from "styled-components";

export type BorderStyle = 'dotted' | 'solid' | 'dashed';

export interface WrapperProps {
	backgroundColor: keyof IColors;
	borderStyle?: BorderStyle;
	color: keyof IColors;
	isHandleInfo: boolean;
}

const GetBorderStyle = (theme: ITheme, borderStyle?: BorderStyle, color?: keyof IColors): string => {
	if (borderStyle && color) {
		const colorValue = theme.colors[color];
		const style = `${'2px ' + borderStyle + ' ' + colorValue}`;
		return style;
	}
	return 'none';
}

export const Wrapper = styled.div<WrapperProps>`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme, backgroundColor }: IThemeProvider & WrapperProps ) => `${theme.colors[backgroundColor]}`};
	height: 170px;
	min-height: 170px;
	width: 250px;
	min-width: 250px;
	border: ${({ theme, borderStyle, color })=> GetBorderStyle(theme, borderStyle, color )};
	border-radius: 15px;
	padding: 1rem 1.7rem;
	transition: all 0.2s ease-in-out;
	${({ isHandleInfo }) => `${!isHandleInfo ? `
		justify-content: center;
		align-items: center;
		position: relative;
	`: ''}`}
	&:hover{
		cursor: pointer;
		box-shadow: 0px 3px 10px -3px #00000079;
		filter: brightness(0.98);
	}
`;

export const DownSide = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	height: 40%;
	>* {
		margin: 0;
		padding: 0;
		padding-bottom: 0.5rem;
	}
`

export const UpSide = styled.div`
	display: inline-flex;
	align-items: flex-end;
	height: 50%;
	>* {
		margin: 0;
		padding: 0;
		padding-bottom: 0.5rem;
	}
`

export const Group = styled.div`
	display: inline-flex;
	justify-content: space-between;
	align-items: flex-end;
	height: 100%;
	width: 100%;
	>* {
		margin: 0;
		padding: 0;
	}
`;

interface ContainerProps {
	color: keyof IColors;
}

export const Container = styled.div<ContainerProps>`
	display: flex;
	width: 1.1rem;
	height: 1.5rem;
	margin-bottom: 0.1rem;
	>:first-child path {
		fill:  ${({ theme, color }: IThemeProvider & ContainerProps ) => `${theme.colors[color]}`};
	}
`

export const CrossHorizontalIcon = styled.div<ContainerProps>`
	position: absolute;
	display: flex;
	width: 70%;
	border-bottom: 2.7px dashed ${({ theme, color }: IThemeProvider & ContainerProps ) => `${theme.colors[color]}`};
`;

export const CrossVerticalIcon = styled.div<ContainerProps>`
	position: absolute;
	display: flex;
	height: 70%;
	border-left: 2.7px dashed ${({ theme, color }: IThemeProvider & ContainerProps) => `${theme.colors[color]}`};
	
	&>::before {
		justify-content: center;
		align-items: center;
		position: relative; 
	}
`;