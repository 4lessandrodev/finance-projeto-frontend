import { InputButtonStyle, InputStyle } from "./style";

export interface InputButtonProps extends Partial<InputStyle>{
	value: string;
	onClick?: () => void;
	type?: 'button' | 'submit';
}

export default function InputButton({
	value,
	onClick,
	color = 'white',
	backgroundColor = 'orange',
	textTransform = 'none',
	weight = 'bold',
	fontSize = 'regular5',
	height = 'medium5',
	type='button'
}: InputButtonProps) {
	return (
		<InputButtonStyle
			type={type}
			value={value}
			color={color}
			backgroundColor={backgroundColor}
			weight={weight}
			textTransform={textTransform}
			fontSize={fontSize}
			height={height}
			onClick={onClick}
		/>
	)
}
