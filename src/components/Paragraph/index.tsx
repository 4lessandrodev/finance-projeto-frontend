import { ReactElement } from "react";
import H1, { StyleProps } from './style';

export interface ParagraphProps extends Partial<StyleProps> {
	value: string;
}

export default function Paragraph({
	value,
	color = 'black',
	size = 'regular1',
	weight = 'regular',
	textTransform,
}: ParagraphProps): ReactElement  {
	return (
			<H1
				size={size}
				color={color}
				weight={weight}
				textTransform={textTransform}
			>{value}</H1>
	)
}
