import { ReactElement } from "react";
import IMG, { LogoProps } from "./style";
import File from './logo.svg';

export default function Logo({ size = 'regular', color = 'default'}: LogoProps): ReactElement {
	return (
		<IMG color={color} size={size}>
			<File />
		</IMG>
	)
}
