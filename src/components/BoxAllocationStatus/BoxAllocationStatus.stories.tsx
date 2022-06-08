import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import BoxAllocationStatus from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'BoxAllocationStatus',
	component: BoxAllocationStatus,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof BoxAllocationStatus>;

const Template: ComponentStory<typeof BoxAllocationStatus> = (args: any) => <div style={{
	backgroundColor: 'lightgray',
	display: 'flex',
	width: '50vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><BoxAllocationStatus {...args} /></div>;

export const BoxAllocation = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BoxAllocation.args = {
	data: [
		{
			title: 'Investimento',
			value: 12
		},
		{
			title: 'Lazer',
			value: 21
		},
		{
			title: 'Suprimentos',
			value: 18
		},
		{
			title: 'Outros',
			value: 25
		}
	]
};