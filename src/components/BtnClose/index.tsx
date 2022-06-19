import { Container, Icon } from "./style";

interface CloseButtonProps {
	onClick: (args: any) => void;
}

export default function CloseButton({onClick}: CloseButtonProps) {
	return (
		<Container onClick={onClick}>
			<Icon />
		</Container>
	)
}
