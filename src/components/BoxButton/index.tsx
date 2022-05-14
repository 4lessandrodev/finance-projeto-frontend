import Icon1 from "../../assets/dollar-sign-solid.svg";
import Icon2 from "../../assets/money-bill-1-regular.svg";
import Icon3 from "../../assets/sack-dollar-solid.svg";
import Title from "../Title";
import { IColors } from "@types";
import {
	Container,
	CrossVerticalIcon,
	CrossHorizontalIcon,
	Group,
	DownSide,
	Wrapper,
	WrapperProps,
	UpSide
} from "./style";

export interface BoxButtonProps extends Partial<WrapperProps> {
	label?: string;
	value?: number;
	percentage?: number;
	color?: keyof IColors;
	icon?: 'dollar' | 'money' | 'sack';
	onClick?: () => void;
}

export default function BoxButton({
	label,
	value,
	backgroundColor = 'white',
	color = 'black',
	percentage = -1,
	icon = 'sack',
	borderStyle,
	onClick
}: BoxButtonProps) {

	const isHandleInfo = !!label || percentage >= 0 || !!value;
	const Icon = icon === 'dollar' ? Icon1 : icon === 'money' ? Icon2 : Icon3;

	return (
		<Wrapper
			backgroundColor={backgroundColor}
			color={color}
			borderStyle={borderStyle}
			isHandleInfo={!!isHandleInfo}
			onClick={onClick}
		>
			{isHandleInfo ? (
				<>
					<UpSide>
						{
							label && (
								<Group>
									<Title value={label} weight="black" as="h3" size="regular3" color={color} />
									<Container color={color}>
										<Icon />
									</Container>
								</Group>
							)
						}
					</UpSide>
					<DownSide>
						{value && (<Title value={`R$ ${value}`} weight="thin" as="h3" size="regular2" color={color} />)}
						{
							percentage >= 0 ? (
								<Title value={`${percentage}%`} weight="thin" as="h3" size="regular2" color={color} />) : false
						}
					</DownSide>
				</>
			) : (
				<>
					<CrossHorizontalIcon color={color} />
					<CrossVerticalIcon color={color} />
				</>
			)}
		</Wrapper>
	)
}
