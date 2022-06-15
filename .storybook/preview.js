import '../src/styles/globals.css';
import React from "react";
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import AuthProvider from '../src/contexts/auth/auth.provider';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../src/lib/apollo'
import BudgetBoxProvider from '../src/contexts/my-budget-boxes/my-budget-boxes.provider';
import { CookiesProvider } from 'react-cookie';

export const decorators = [
  (Story) => (
    <CookiesProvider>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <BudgetBoxProvider>
            <ThemeProvider theme={theme}>
              <Story />
            </ThemeProvider>
          </BudgetBoxProvider>
        </ApolloProvider>
      </AuthProvider>
    </CookiesProvider>
  ),
];
