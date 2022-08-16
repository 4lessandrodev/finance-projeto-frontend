import Title from "../Title";
import Pending from '../../assets/clock-solid.svg';
import Done from '../../assets/circle-check-solid.svg';

import { Column, CrossHorizontalIcon, CrossVerticalIcon, Data, Icon, RowStyle, RowType } from "./style";

export interface EntryRowData {
	type: 'Entrada' | 'Saida';
	box: string;
	reason: string;
	date: string;
	amount: string;
	status: 'Pendente' | 'Concluido'
}

export interface EntryRowProps {
	data?: EntryRowData;
}

export default function EntryRow(props: EntryRowProps) {
	const { data } = props;
	const style: RowType = !!data ? { border: 'none' } : { border: 'dashed' };
	const color = data?.type === 'Entrada' ? 'green' : 'red';
	const pending = data?.status === 'Pendente';

	return (
		<RowStyle border={style.border}>
			{data && (
				<Data>
					<Column viewOnMobile>
						< Title value={data.type} as='h2' size="regular1" color={color} weight="bold" />
					</Column>
					<Column viewOnMobile>
						< Title value={data.box} as='h3' size="regular1" color='gray3' weight="medium" />
					</Column>
					<Column>
						< Title value={data.reason} as='h3' size="regular1" color='gray3' weight="medium"/>
					</Column>
					<Column>
						< Title value={data.date} as='h3' size="regular1" color='gray3' weight="medium" />
					</Column>
					<Column position="flex-end" viewOnMobile>
						< Title value={data.amount} as='h2' size="regular1" color={color} weight="bold" />
					</Column>
					<Column position="flex-end">
						{pending && (<Icon color="orange"><Pending /></Icon>)}
						{!pending && (<Icon color="green"><Done /></Icon>)}
					</Column>
				</Data>
			)}
			{ !data && (
				<>
					<CrossVerticalIcon />
					<CrossHorizontalIcon />
				</>
			)}
		</RowStyle>
	)
}
