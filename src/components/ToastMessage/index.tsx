import { IColors } from "@types";
import { Container, IMG, Wrapper } from "./style";
import Text from '../../components/Paragraph';
import ErrorIcon from '../../assets/triangle-exclamation-solid.svg';
import InfoIcon from '../../assets/circle-exclamation-solid.svg';
import CloseIcon from '../../assets/circle-xmark-solid.svg';

export interface ToastMessageProps {
	message: string;
	type: 'info' | 'error';
	isVisible: boolean;
	closeToast: () => void;
}

export default function ToastMessage({ type, message, isVisible, closeToast }: ToastMessageProps) {

	if (!isVisible) return null;

	const BackgroundColor: keyof IColors = type === 'error' ? 'lightRed' : 'lightGreen';
	return (
		<Wrapper BackgroundColor={BackgroundColor}>
			{ type === 'error' && <IMG color="white" size="regular3"><ErrorIcon /></IMG>}
			{ type === 'info' && <IMG color="white" size="regular3"><InfoIcon /></IMG> }
			<Container><Text color="white" value={message} size='small5' /></Container>
			<IMG color="white" size="small5" onClick={closeToast}><CloseIcon /></IMG>
		</Wrapper>
	)
}
