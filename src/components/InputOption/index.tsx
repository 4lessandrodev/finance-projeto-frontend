import { InputStyle, LabelStyleProps, LabelStyle, Wrapper, Option, InputStyleProps } from "./style";

export interface OptionProps {
	value: string | number;
	isSelected?: boolean;
}

export interface CheckBoxProps extends Partial<LabelStyleProps & InputStyleProps> {
	label: string;
	multiple: boolean;
	name: string;
	onChange: (e: any) => void;
	required?: boolean;
	options: OptionProps[];
	defaultValue?: string | number;
}

export default function CheckBox({
	label,
	name,
	options,
	required = false,
	multiple = false,
	onChange,
	fontColor = 'gray3',
	borderColor = 'orange',
	defaultValue
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
				defaultValue={defaultValue}
			>
				{options.length && options.map((opt, index) => <Option
					key={`${index}-${opt.value}`}
					value={opt.value} selected={opt.isSelected}
				>{opt.value}</Option>)}
			</InputStyle>
		</Wrapper>
	)
}
