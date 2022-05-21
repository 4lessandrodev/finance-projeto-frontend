import { InputStyle, LabelStyleProps, LabelStyle, Wrapper } from "./style";

export interface CheckBoxProps extends Partial<LabelStyleProps> {
	label: string;
	labelPosition: 'left' | 'right';
	isChecked: boolean;
	name: string;
	onChange: () => void;
	onLabelClick?: () => void; 
	required?: boolean
}

export default function CheckBox({
	label,
	labelPosition,
	isChecked,
	name,
	color = 'black',
	size = 'regular2',
	weight = 'regular',
	colorHover = 'orange',
	required = false,
	onChange,
	onLabelClick
}: CheckBoxProps) {
	
	const isLabelOnTheRight = labelPosition === 'right';
	const Label = <LabelStyle
	htmlFor={name}
	color={color}
		size={size}
		weight={weight}
		onClick={onLabelClick}
		colorHover={colorHover}
	>{label}</LabelStyle>;

	return (
		<Wrapper>
			{!isLabelOnTheRight && Label}
			<InputStyle
				name={name}
				id={name}
				type={'checkbox'}
				checked={isChecked}
				onChange={onChange}
				color={color}
				required={required}
			/>
			{isLabelOnTheRight && Label}
		</Wrapper>
	)
}
