import { IColors, IThemeProvider } from "@types";
import styled from "styled-components";

export interface RowType {
	border: 'dashed' | 'solid' | 'none'
}

export const RowStyle = styled.div<RowType>`
	display: flex;
	align-items: center;
	border-radius: 7px;
	border: 2px ${(data: RowType) => data.border} gray;
	justify-content: center;
	padding: 1.5rem;
	max-width: 100%;
	height: 72px;
	cursor: pointer;
	background-color: #f1f1f1;
	margin: 1px;
	&:hover{
		background-color: ${({ theme }: IThemeProvider) => theme.colors.lightBackGreen};
		color: white;
	}
`;

export const Data = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	min-width: 100%;
	min-height: 100%;
	gap: 1rem;
	@media (max-width: 600px){
		display: flex;
		flex-direction: row;
		width: 100%;
		gap: 0;
	}
`;

export const CrossHorizontalIcon = styled.div`
	position: absolute;
	display: flex;
	width: 7%;
	border-bottom: 2px dashed gray;
`;

export const CrossVerticalIcon = styled.div`
	position: absolute;
	display: flex;
	height: 7%;
	border-left: 2px dashed gray;
	
	&>::before {
		justify-content: center;
		align-items: center;
		position: relative; 
	}
`;

type Params = IThemeProvider;
interface Color {
	color: keyof IColors;
}

export const Icon = styled.div`
	alt: "icon";
	min-width: 20px;
	>:first-child path {
		fill: ${({ theme, color }: Params & Color ) => theme.colors[color]};
	}
	>:first-child path:first-child {
		fill: ${({ theme, color }: Params & Color ) => theme.colors[color]};
	}
	&:hover {
		cursor: pointer;
	}
`

interface FlexPosition {
	position?: 'flex-end' | 'flex-start';
	viewOnMobile?: boolean;
}

export const Column = styled.div<FlexPosition>`
	display: flex;
	width: 15%;
	justify-content: ${({ position }: FlexPosition) => position ?? "flex-start"};
	align-items: center;
	@media (max-width: 600px){
		display: ${({ viewOnMobile = false }: FlexPosition) => viewOnMobile ? 'flex' : 'none' };
		flex-direction: row;
		align-items: flex-start;
		width: 100%;
	}
`;
