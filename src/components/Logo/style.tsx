import { ITheme } from "@types";
import styled from "styled-components";

export type LogoSize = 'small' | 'xsmall' | 'medium' | 'regular' | 'large' | 'xlarge';
export type LogoColor = 'default' | 'dark' | 'light';

export interface LogoProps {
	size: LogoSize;
	color: LogoColor;
}

const GetLogoColor = (theme: ITheme) => ({
	default: { color1: theme.colors.orange, color2: theme.colors.green },
	dark: { color1: theme.colors.gray1, color2: theme.colors.black },
	light: { color1: theme.colors.white, color2: theme.colors.gray5 },
})

const GetLogoSize = (theme: ITheme) =>( {
	small: theme.logoSizes.small,
	xsmall: theme.logoSizes.xsmall,
	medium: theme.logoSizes.medium,
	regular: theme.logoSizes.regular,
	large: theme.logoSizes.large,
	xlarge: theme.logoSizes.xlarge
})

export const IMG = styled.div<LogoProps>`
	alt: "logo";
	width: ${({ size, theme }) => `${GetLogoSize(theme)[size]}`};
	height: ${({ size, theme }) => `${GetLogoSize(theme)[size]}`};;
	>:first-child path {
		fill: ${({ theme, color }) => `${GetLogoColor(theme)[color].color2}`}
	}
	>:first-child path:first-child {
		fill: ${({ theme, color }) => `${GetLogoColor(theme)[color].color1}`}
	}
`

export default IMG;
