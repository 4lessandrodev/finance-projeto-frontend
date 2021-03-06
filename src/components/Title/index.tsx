import { ReactElement } from "react";
import H1, { StyleProps } from './style';

export type Head = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export interface TitleProps extends Partial<StyleProps> {
	value: string;
	as?: Head;
}

export default function Title({
	value,
	color = 'black',
	size = 'regular1',
	weight = 'regular',
	textTransform = 'capitalize',
	as = 'h1'
}: TitleProps): ReactElement  {
	return (
			<H1
				size={size}
				color={color}
				weight={weight}
				textTransform={textTransform}
				as={as}
			>{value}</H1>
	)
}
