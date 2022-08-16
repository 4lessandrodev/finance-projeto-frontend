import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Entry from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'EntryRow',
  component: Entry,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Entry>;

const Template: ComponentStory<typeof Entry> = (args: any) => <div style={{}}><Entry {...args} /></div>;

export const Entrada = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Entrada.args = {
  data: {
    amount: 'R$ 500,00',
    box: 'Investimento',
    date: '01/08',
    reason: 'Comprar Ações',
    status: 'Concluido',
    type: 'Entrada'
  }
};

export const Saida = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Saida.args = {
  data: {
    amount: 'R$ 230,00',
    box: 'Suprimentos',
    date: '01/08',
    reason: 'Compras Supermercado',
    status: 'Concluido',
    type: 'Saida'
  }
};

export const NewEntry = Template.bind({
  data: {
    type: "Entrada",
    box: "Financeiro",
    reason: "Supermercado",
    date: "01/08"
  }
});
