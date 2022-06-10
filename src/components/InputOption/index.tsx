import { InputStyle, LabelStyleProps, LabelStyle, Wrapper, Option, InputStyleProps } from "./style";

export interface OptionProps {
	value: string | number;
	isSelected: boolean;
}

export interface CheckBoxProps extends Partial<LabelStyleProps & InputStyleProps> {
	label: string;
	isChecked: boolean;
	multiple: boolean;
	name: string;
	onChange: () => void;
	required?: boolean;
	options: OptionProps[];
}

export default function CheckBox({
	label,
	name,
	options,
	required = false,
	multiple = false,
	onChange,
	fontColor = 'gray3',
	borderColor = 'orange'
}: CheckBoxProps) {
	
	const Label = <LabelStyle
		htmlFor={name}
		fontColor={fontColor}
	>{label}</LabelStyle>;

	return (
		<Wrapper>
			{label && Label}
			<InputStyle
				name={name}
				id={name}
				onChange={onChange}
				fontColor={fontColor}
				required={required}
				multiple={multiple}
				borderColor={borderColor}
			>
				{options.length && options.map((opt, index) => <Option
					key={`${index}-${opt.value}`}
					value={opt.value} selected={opt.isSelected}
				>{opt.value}</Option>)}
			</InputStyle>
		</Wrapper>
	)
}
