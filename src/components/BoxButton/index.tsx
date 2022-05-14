import Title from "../Title";
import { IColors } from "@types";
import { Container, CrossVerticalIcon, CrossHorizontalIcon, Group, UpSide, Wrapper, WrapperProps } from "./style";
import CircleChevronRight from "../../assets/right-solid.svg";

export interface BoxButtonProps extends Partial<WrapperProps> {
	label?: string;
	value?: number;
	percentage?: number;
	color?: keyof IColors;
	onClick?: () => void;
}

export default function BoxButton({
	label,
	value,
	backgroundColor = 'white',
	color = 'black',
	percentage = -1,
	borderStyle
}: BoxButtonProps) {

	const handleInfo = (percentage: number, color: keyof IColors) => {
		return (
			<Group>
				<Title value={`${percentage}%`} weight="thin" as="h3" size="regular1" color={color} />
				<Container color={color}>
					<CircleChevronRight />
				</Container>
			</Group>
		)
	}

	const isHandleInfo = !!label || percentage >= 0 || !!value;

	console.log(!!isHandleInfo);
	
	return (
		<Wrapper
			backgroundColor={backgroundColor}
			color={color}
			borderStyle={borderStyle}
			isHandleInfo={!!isHandleInfo}
		>
			{ isHandleInfo ? (
				<>
					<UpSide>
						{label && (
							<Title value={label} weight="black" as="h3" size="regular3" color={color} />
						)}
						{percentage >= 0 ? handleInfo(percentage, color) : false}
					</UpSide>
					{value && (<Title value={`R$ ${value}`} weight="thin" as="h3" size="regular1" color={color} />)}
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
