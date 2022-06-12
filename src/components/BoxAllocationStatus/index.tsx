import { Container, Step, Text } from "./style";

interface IData {
	value: number;
	title: string;
}

interface Props {
	data: IData[]
}

export default function BoxAllocationStatus(props: Props) {
	const totalAllocate = props.data.length && props.data.reduce((total, currentValue) => total + currentValue.value, 0);
	const pendingToAllocate = 100 - (totalAllocate ?? 0);
	return (
		<Container>
			{
				props.data.length && props.data.map(
					(step, index) => <Step key={`${step.value}-${index}`} title={step.title}
						color='black' width={step.value} backgroundColor="gray4">
						<Text weight>{step.value}%</Text>
						<Text>{step.title}</Text>
					</Step>
				)
			}
			<Step color="white" width={pendingToAllocate} title="Total livre" backgroundColor="orange">
				<Text weight>{pendingToAllocate}%</Text>
				<Text>Total livre</Text>
			</Step>
		</Container>
	)
}
