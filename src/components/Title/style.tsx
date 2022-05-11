import { IThemeProvider } from "@types";
import styled from "styled-components";

export const H1 = styled.h1`
	color: red;
	font-size: ${({ theme }: IThemeProvider) => theme.font.sizes.medium1};
`;

export default H1;
