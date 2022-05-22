import { Container, Group, SignFormStyle, Wrapper } from "./style";
import Input from '../Input';
import Title from '../Title';
import Logo from '../Logo';
import Link from '../Link';
import CheckBox from '../CheckBox';
import InputButton from '../InputButton';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SignUpService from "../../services/signIn";
import SignInService from "../../services/signUp";

export interface SignFormProps {
	formType: 'SignIn' | 'SignUp'
}

export default function SignForm({ formType }: SignFormProps) {
	
	const [isChecked, setChecked] = useState(false);
	const [password, setPassword] = useState<string>('');
	const [email, setEmail] = useState<string>('');

	const { signUp, error: signupError } = SignUpService();
	const { signIn, error: signInError } = SignInService();

	useEffect(() => {
		if (signupError) alert(`Algo deu errado... ${signupError.message}`);
		if (signInError) alert(`Algo deu errado... ${signInError.message}`);
	}, [signupError, signInError])

	const handlePassword = (e: ChangeEvent<HTMLInputElement>): void => {
		setPassword(e.target.value)
	}

	const handleEmail = (e: ChangeEvent<HTMLInputElement>): void => {
		setEmail(e.target.value)
	}

	const handleCheck = (): void => {
		setChecked(!isChecked);
	}

	const isSignIn = formType === 'SignIn';
	const titleLabel = isSignIn ? "Realize seu Login": "Cadastre-se gratuitamente";
	const linkLabel = isSignIn ? "Não tenho cadastro" : "Já tenho cadastro";
	const buttonLabel = isSignIn ? "Entrar" : "Cadastrar";
	const linkPath = isSignIn ? "/signup" : "/signin";

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		!isSignIn && signUp({
			variables: {
				SignupInput: {
					acceptedTerms: isChecked,
					email,
					password
				}
			}
		});

		isSignIn && signIn({
			variables: {
				SigninInput: {
					email,
					password
				}
			}
		})
	}

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
			<SignFormStyle method="POST" action="/home" onSubmit={handleSubmit}>
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
				<Group isSignIn={isSignIn}>
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
						onChange={handleCheck}
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
