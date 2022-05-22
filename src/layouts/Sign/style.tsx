import { IThemeProvider } from "@types";
import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }: IThemeProvider) => theme.colors.gray5 };
	min-height: 100vh;
	justify-content: center;
	align-items: center;
	overflow: hidden;
`;

export const Container = styled.div`
box-shadow: 0px 5px 11px 2px rgba(0,0,0,0.1);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 40px;
	background-color: white;
	width: 550px;
	height: auto;
	@media (max-width: 600px){
		width: 90%;
		min-width: 420px;
	}
`;
