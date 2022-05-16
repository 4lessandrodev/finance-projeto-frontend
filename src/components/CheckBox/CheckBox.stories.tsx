import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckBox from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'CheckBox',
  component: CheckBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: {
		  control: { type: 'color' }
		},
		size: {
			control: {
				type: 'select',
				options: [
					'regular1', 'regular2', 'regular3', 'regular4',
					'regular5', 'medium1', 'medium2', 'medium3',
					'medium4', 'medium5', 'large1'
				]
			}
		},
		onChange: {
			defaultValue: () => alert('Você clicou')
		}
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#efefef',
	display: 'flex',
	width: '400px',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	height: '120px',
	position: 'absolute'
}}><CheckBox {...args} /></div>;

export const WithText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithText.args = {
	label: 'Aceito os termos',
	labelPosition: 'left',
	isChecked: false,
	name: 'check',
	color: 'black',
	size: 'regular2',
	weight: 'regular'
};
