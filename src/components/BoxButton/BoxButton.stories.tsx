import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Button',
	component: Button,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		percentage: {
			control: 'select', options: [0, 20, 30, 40, 50, undefined]
		}
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => <div style={{
	backgroundColor: 'lightgray',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><Button {...args} /></div>;

export const Box = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Box.args = {
	percentage: 0,
	value: 2000,
	label: 'Lazer',
	onClick: () => alert('clicked on container')
};

export const Dotted = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dotted.args = {
	percentage: undefined,
	value: undefined,
	label: undefined,
	borderStyle: 'dashed',
	color: 'gray3',
	onClick: () => alert('clicked new budget box')
};

export const Ballance = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Ballance.args = {
	percentage: undefined,
	value: 2000,
	label: 'Total',
	backgroundColor: 'green',
	color: 'white',
	onClick: () => alert('clicked on total')
};
