import styled from "styled-components";

export interface GroupProps {
	isSignIn: boolean;
}

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 50px;
`;

export const ContainerMessage = styled.div`
	display: flex; 
	padding: 0.5rem; 
	width: 100%;
`;

export const Group = styled.div<GroupProps>`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 0.3rem;
	>:first-child {
		justify-content: flex-start;
		margin-left: 0.5rem;
	}
	@media (max-width: 600px){
		display: flex;
		flex-direction: column;
		margin: 0;
		height: ${({ isSignIn }: GroupProps ) => `${ !isSignIn ? '6rem' : '0'}`};
		gap: 2rem;
		>:first-child {
			justify-content: center;
			margin-left: 0;
		}
	}
`;

export const Container = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0.5rem;
`;

export const SignFormStyle = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
	min-width: 100%;
	min-height: 100%;
	gap: 2rem;
`;