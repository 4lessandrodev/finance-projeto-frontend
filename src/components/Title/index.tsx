import Logo from "@components/Logo";
import { ReactElement } from "react";
import H1 from './style';

export default function Title(): ReactElement  {
	return (
		<div>
			<H1>Hello There!!!</H1>
			<Logo />
		</div>
	)
}
