import { ReactElement } from "react";
import H1, { StyleProps } from './style';

export interface TitleProps extends Partial<StyleProps> {
	value: string;
}

export default function Title({
	value,
	color = 'black',
	size = 'regular1',
	weight = 'regular',
	textTransform = 'capitalize'
}: TitleProps): ReactElement  {
	return (
			<H1
				size={size}
				color={color}
				weight={weight}
				textTransform={textTransform}
			>{value}</H1>
	)
}
