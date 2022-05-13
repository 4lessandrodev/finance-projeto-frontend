import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Logo from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Logo',
  component: Logo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? 'darkgray',
	display: 'flex',
	width: '10vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '2rem'
}}><Logo {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	color: 'default',
	size: 'regular',
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
	color: 'dark',
	size: 'regular'
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
	color: 'light',
	size: 'regular'
};
