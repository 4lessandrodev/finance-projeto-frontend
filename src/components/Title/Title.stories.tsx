import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Title from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Title',
  component: Title,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
	  }
  },
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? 'darkgray',
	display: 'flex',
	width: '30vw',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem'
}}><Title {...args} /></div>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
	color: 'black',
	size: 'medium1',
	value: 'Title Example',
	weight: 'regular',
	textTransform: 'capitalize'
};

export const Dark = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dark.args = {
	color: 'black',
	size: 'regular3',
	value: 'Title Example',
	weight: 'black',
	textTransform: 'capitalize'
};

export const Light = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Light.args = {
	color: 'white',
	size: 'large5',
	value: 'Title Example',
	weight: 'thin',
	textTransform: 'capitalize'
};
