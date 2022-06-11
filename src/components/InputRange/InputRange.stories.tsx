import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputRange from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputRange',
  component: InputRange,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
		}
  },
} as ComponentMeta<typeof InputRange>;

const Template: ComponentStory<typeof InputRange> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#efefef',
	display: 'flex',
	width: '400px',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	height: '120px',
	position: 'absolute'
}}><InputRange {...args} /></div>;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
	value: 10,
	label: 'Percentual',
	step: 0.5,
	min: 0,
	max: 100
};
