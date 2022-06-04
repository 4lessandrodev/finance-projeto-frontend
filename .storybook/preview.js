import '../src/styles/globals.css';
import React from "react";
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../src/contexts/auth.provider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../src/lib/apollo'

export const decorators = [
  (Story) => (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <Story />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  ),
];
