import { Range, LabelProps, LabelType, Wrapper } from "./style";

export interface InputRangeProps extends Partial<LabelProps>{
	value: number;
	step?: number;
	min?: number;
	max?: number;
	label?: string;
	onChange?: (e: any) => void;
	name?: string;
}

export default function InputRange(props: InputRangeProps) {
	const { value, max=100, min=0, step=0.5, fontColor='gray3', label } = props;
	return (
		<Wrapper>
			{label && <LabelType fontColor={fontColor} htmlFor={props.name}>{label} - {value}%</LabelType>}
			<Range type="range"
				min={min}
				max={max}
				step={step}
				value={value}
				onChange={props.onChange}
				name={props.name}
			/>
		</Wrapper>
	)
}
