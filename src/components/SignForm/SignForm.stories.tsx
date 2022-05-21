import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SignForm from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SignForm',
  component: SignForm,
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
} as ComponentMeta<typeof SignForm>;

const Template: ComponentStory<typeof SignForm> = (args: any) => <div style={{
	backgroundColor: '#ededed',
	display: 'flex',
	width: '35%',
	padding: '1rem',
	height: '90vh',
	position: 'absolute'
}}><SignForm {...args} /></div>;

export const SignIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SignIn.args = {
	formType:'SignIn'
};

export const SignUp = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SignUp.args = {
	formType:'SignUp'
};
