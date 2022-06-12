import { IThemeProvider } from "@types";
import styled from "styled-components";

export const TopLine = styled.div`
	display: inline-flex;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.orange};
	height: 10px;
	width: 100%;
	position: absolute;
	top: 0px;
	left: 0px;
	overflow: hidden;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	min-width: 700px;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 700px;
	padding: 1rem 1rem 0 1rem;
`;

interface GroupProps {
	top?: number;
	left?: number;
	right?: number;
	bottom?: number;
}

export const Group = styled.div<GroupProps>`
	margin-left: ${({ left = 0 }: GroupProps) => left}rem;
	margin-top: ${({ top = 0 }: GroupProps) => top}rem;
	margin-bottom: ${({ bottom = 0 }: GroupProps) => bottom}rem;
	margin-right: ${({ right = 0 }: GroupProps) => right}rem;
`;
