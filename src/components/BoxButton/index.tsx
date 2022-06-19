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
	icon?: 'dollar' | 'money' | 'sack';
	valueColor?: keyof IColors;
	onClick?: () => void;
}

export default function BoxButton({
	label,
	value,
	backgroundColor = 'white',
	color = 'black',
	percentage = -1,
	icon = 'sack',
	valueColor = 'black',
	borderStyle,
	onClick
}: BoxButtonProps) {

	const isHandleInfo = !!label || percentage >= 0 || !!value;
	const Icon = icon === 'dollar' ? Icon1 : icon === 'money' ? Icon2 : Icon3;
	const shortLabel = label && label.length > 12 ? label.slice(0, 12) + '...' : label;

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
					<UpSide title={label}>
						{
							shortLabel && (
								<Group>
									<Title value={shortLabel} weight="black" as="h3" size="regular2" color={color} />
									<Container color={color}>
										<Icon />
									</Container>
								</Group>
							)
						}
					</UpSide>
					<DownSide>
						{value || value === 0 && (
							<Title value={`R$ ${value}`} weight="thin" as="h3" size="regular2" color={valueColor} />
						)}
						{
							percentage >= 0 && (
								<Title value={`${percentage}%`} weight="thin" as="h3" size="regular2" color={color} />
							)
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
