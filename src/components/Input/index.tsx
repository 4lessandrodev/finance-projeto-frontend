import { ContainerIcon, Group, InputStyle, InputStyleProps, LabelType, Wrapper } from "./style";
import IconShow from '../../assets/eye-regular.svg';
import IconHide from '../../assets/eye-slash-regular.svg';
import { ChangeEvent, useState } from "react";
export type InputType = 'password' | 'number' | 'email' | 'date' | 'search' | 'text' | 'tel';

interface InputProps extends Partial<InputStyleProps> {
	value: string | number;
	type: InputType;
	placeholder?: string;
	id: string;
	name: string;
	label?: string;
	require?: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
	value,
	type,
	id,
	name,
	placeholder,
	label,
	require,
	borderColor = 'orange',
	fontSize = 'regular3',
	fontColor = 'gray1',
	onChange
}: InputProps) {

	const [isVisible, setVisible] = useState(false);
	const [inputType, setInputType] = useState(type);
	const isPassword = type === 'password';

	const showPassword = () => {
		setVisible(true);
		setInputType('text');
	};
	const hidePassword = () => {
		setVisible(false);
		setInputType('password');
	};

	return (
		<>
			<Wrapper>
				{label && <LabelType htmlFor={name} fontColor={fontColor}>{label}</LabelType>}
				<Group>
					<InputStyle
						type={inputType}
						value={value}
						borderColor={borderColor}
						fontSize={fontSize}
						fontColor={fontColor}
						isPassword={isPassword}
						placeholder={placeholder}
						id={id}
						name={name}
						required={require}
						onChange={(e) => onChange(e)}
					/>
					{
						(
							isPassword && !isVisible && <ContainerIcon onClick={showPassword}>
								<IconShow />
							</ContainerIcon>
						)
					}
					{
						(
							isVisible && <ContainerIcon onClick={hidePassword}>
								<IconHide />
							</ContainerIcon>
						)
					}
				</Group>
			</Wrapper>
		</>
	)
}
