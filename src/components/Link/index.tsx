import NextLink from 'next/link'
import { LinkStyle, LinkStyleProps } from './style'

export interface LinkProps extends Partial<LinkStyleProps> {
	url: string;
	value: string;
	target?: '_blank' | '_parent' | '_self' | '_top'
}

export default function Link({
	url,
	value,
	target,
	color = 'black',
	fontSize = 'regular3',
	hoverColor = 'white',
	textTransform = 'none'
}: LinkProps) {
	return (
		<LinkStyle
			color={color}
			fontSize={fontSize}
			hoverColor={hoverColor}
			textTransform={textTransform}
		>
			<NextLink href={url} passHref target={target}>
				{ value }
			</NextLink>
		</LinkStyle>
	)
}
