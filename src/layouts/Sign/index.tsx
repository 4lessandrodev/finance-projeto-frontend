import { ReactElement } from "react";
import { Container, Wrapper } from "./style";

export default function SignLayout({children}: { children?: ReactElement }) {
	return (
		<Wrapper>
			<Container>{ children }</Container>
		</Wrapper>
	)
}
