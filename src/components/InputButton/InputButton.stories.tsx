import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputButton from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputButton',
  component: InputButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
			control: { type: 'select' },
			options: [
				'orange', 'green', 'black', 'white', 'gray1', 'gray2',
				'gray3', 'gray4', 'gray5', 'red'
			]
	  }
  },
} as ComponentMeta<typeof InputButton>;

const Template: ComponentStory<typeof InputButton> = (args: any) => <div style={{
	backgroundColor: 'darkgray',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><InputButton {...args} /></div>;

export const Orange = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Orange.args = {
	color: 'white',
	fontSize: 'regular5',
	value: 'Button',
	weight: 'black',
	textTransform: 'capitalize',
	backgroundColor: 'orange',
	height: 'large5',
	onClick: () => alert('Você clicou!')
};

export const Green = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Green.args = {
	color: 'white',
	fontSize: 'regular5',
	value: 'Button',
	weight: 'black',
	textTransform: 'capitalize',
	backgroundColor: 'green',
	height: 'large5',
	onClick: () => alert('Você clicou!')
};

export const White = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
White.args = {
	color: 'orange',
	fontSize: 'regular5',
	value: 'Button',
	weight: 'black',
	textTransform: 'capitalize',
	backgroundColor: 'white',
	height: 'large5',
	onClick: () => alert('Você clicou!')
};