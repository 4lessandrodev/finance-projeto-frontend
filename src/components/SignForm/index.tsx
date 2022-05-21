import { Container, Group, SignFormStyle, Wrapper } from "./style";
import Input from '../Input';
import Title from '../Title';
import Logo from '../Logo';
import Link from '../Link';
import CheckBox from '../CheckBox';
import InputButton from '../InputButton';
import { ChangeEvent, useState } from "react";

export interface SignFormProps {
	formType: 'SignIn' | 'SignUp'
}

export default function SignForm({ formType }: SignFormProps) {
	
	const [isChecked, setChecked] = useState(false);
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value)
	}

	const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}

	const isSignIn = formType === 'SignIn';
	const titleLabel = isSignIn ? "Realize seu Login": "Cadastre-se gratuitamente";
	const linkLabel = isSignIn ? "Não tenho cadastro" : "Já tenho cadastro";
	const buttonLabel = isSignIn ? "Entrar" : "Cadastrar";
	const linkPath = isSignIn ? "/signup" : "/signin";

	return (
		<Wrapper>
			<Logo />
			<Title
				value={titleLabel}
				size="regular2"
				weight="bold"
				color="green"
				textTransform="none"
			/>
			<SignFormStyle method="POST" action="/home" onSubmit={()=> alert('Submit')}>
				<Input
					type="email"
					name="email"
					placeholder="email"
					value={email}
					id='email'
					require
					onChange={handleEmail}
				/>
				<Input
					type="password"
					name="senha"
					placeholder="senha"
					value={password}
					id='senha'
					require
					onChange={handlePassword}
				/>
				<Group>
					<Link
						url={linkPath}
						value={linkLabel}
						color="green"
						hoverColor="orange"
					/>
					{ !isSignIn && <CheckBox
						label="Aceito os termos e política"
						labelPosition="right"
						name="termos"
						isChecked={isChecked}
						onChange={() => setChecked(!isChecked)}
						onLabelClick={() => alert('Clicou na label')}
						weight={'bold'}
						color='green'
						required
					/>}
				</Group>
				<Container>
					<InputButton
						value={buttonLabel}
						backgroundColor="green"
						type="submit"
						/>
				</Container>
			</SignFormStyle>
		</Wrapper>
	)
}
