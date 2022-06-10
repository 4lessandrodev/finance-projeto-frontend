import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputOption from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'InputOption',
  component: InputOption,
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
} as ComponentMeta<typeof InputOption>;

const Template: ComponentStory<typeof InputOption> = (args: any) => <div style={{
	backgroundColor: args?.backgroundColor ?? '#efefef',
	display: 'flex',
	width: '400px',
	justifyContent: 'center',
	alignItems: 'center',
	padding: '1rem',
	height: '120px',
	position: 'absolute'
}}><InputOption {...args} /></div>;

export const BoxType = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BoxType.args = {
	label: 'Tipo de caixa',
	name: 'tipo-caixa',
	options: [
		{
			isSelected: false,
			value: 'Percentual'
		},
		{
			isSelected: false,
			value: 'Benefício'
		}
	]
};
