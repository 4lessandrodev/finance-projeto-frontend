import { ILogo, ITheme } from "@types";
import styled from "styled-components";

export type LogoColor = 'default' | 'dark' | 'light' | 'orange';

export interface LogoProps {
	size: keyof ILogo;
	color: LogoColor;
}

const GetLogoColor = (theme: ITheme) => ({
	default: { color1: theme.colors.orange, color2: theme.colors.white },
	dark: { color1: theme.colors.gray1, color2: theme.colors.black },
	orange: { color2: theme.colors.gray3, color1: theme.colors.orange },
	light: { color1: theme.colors.white, color2: theme.colors.gray5 },
})

export const IMG = styled.div<LogoProps>`
	alt: "logo";
	min-width: 70px;
	width: ${({ size, theme }) => theme.logoSizes[size]};
	height: ${({ size, theme }) => theme.logoSizes[size]};
	>:first-child path {
		fill: ${({ theme, color }) => `${GetLogoColor(theme)[color].color2}`}
	}
	>:first-child path:first-child {
		fill: ${({ theme, color }) => `${GetLogoColor(theme)[color].color1}`}
	}
	&:hover {
		cursor: pointer;
	}
`

export default IMG;
