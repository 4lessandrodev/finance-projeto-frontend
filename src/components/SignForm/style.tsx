import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 50px;
`;

export const Group = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 0.3rem;
	>:first-child {
		justify-content: flex-start;
		margin-left: 0.5rem;
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
	gap: 2rem;
`;