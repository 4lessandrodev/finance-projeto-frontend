import '../src/styles/globals.css';
import React from "react";
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
