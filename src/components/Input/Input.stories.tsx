import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Input',
  component: Input,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
		},
		type: {
			control: {
				type: 'select',
				options: ['password', 'number', 'email', 'date', 'search', 'text', 'tel']
			}
		},
		fontSize: {
			control: {
				type: 'select',
				options: [
					'regular1', 'regular2', 'regular3', 'regular4',
					'regular5', 'medium1', 'medium2', 'medium3',
					'medium4', 'medium5', 'large1'
				]
			}
		}
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#efefef',
	display: 'flex',
	width: '400px',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	height: '120px',
	position: 'absolute'
}}><Input {...args} /></div>;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
	value: 'text example',
	type: 'text',
	fontSize: 'regular3',
	label: ''
};

export const Password = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Password.args = {
	value: 'my-pass-123',
	type: 'password',
	fontSize: 'regular3',
	label: ''
};

export const Email = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Email.args = {
	value: 'email@domain.com',
	type: 'email',
	fontSize: 'regular3',
	label: ''
};

export const NumberInput = Template.bind({});

NumberInput.args = {
	value: 1998,
	type: 'number',
	fontSize: 'regular3',
	label: 'total'
};

export const DateInput = Template.bind({});

DateInput.args = {
	value: '2022-05-20',
	type: 'date',
	fontSize: 'regular3',
	label: ''
};

export const PlaceHolder = Template.bind({});

PlaceHolder.args = {
	value: '',
	type: 'search',
	fontSize: 'regular3',
	label: 'Pesquisar',
	id: 'pesquisar',
	placeholder: 'Seu texto aqui',
	name: 'pesquisar'
};