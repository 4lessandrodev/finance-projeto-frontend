import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Nav from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Nav',
  component: Nav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof Nav>;

const Template: ComponentStory<typeof Nav> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#0b6b15',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><Nav {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	linkProps: [
		{
			url: 'https://github.com/4lessandrodev',
			value: 'Github'
		},
		{
			url: 'https://google.com',
			value: 'Google'
		},
		{
			url: 'https://youtube.com',
			value: 'Youtube'
		},
		{
			url: 'https://cos.tv',
			value: 'Costv'
		}
	]
};

