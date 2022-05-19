import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Link from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Link',
  component: Link,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? 'darkgray',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><Link {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	url: 'https://github.com/4lessandrodev',
	// size: 'medium1',
	value: 'Link',
	// weight: 'regular',
	// textTransform: 'capitalize'
};

