import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ToastMessage from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ToastMessage',
  component: ToastMessage,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof ToastMessage>;

const Template: ComponentStory<typeof ToastMessage> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? 'darkgray',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><ToastMessage {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	type: 'error',
	message: 'Um erro inesperado ocorreu!',
	isVisible: true,
	closeToast: () => alert('Fechar toast')
};
