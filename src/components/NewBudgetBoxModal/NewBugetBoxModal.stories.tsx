import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Modal',
  component: Modal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#0b6b15',
	display: 'flex',
	width: '100vw',
	height: '100vh',
	justifyContent: 'center',
	alignItems: 'center',
}}><Modal {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	isOpen: true,
	onSubmit: async (props) => {
		alert(JSON.stringify(props))
	}
};
