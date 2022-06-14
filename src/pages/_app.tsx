import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@lib/apollo';
import AuthProvider from '@contexts/auth/auth.provider';
import { CookiesProvider } from 'react-cookie';
import BudgetBoxProvider from '@contexts/my-budget-boxes/my-budget-boxes.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <BudgetBoxProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </BudgetBoxProvider>
        </ApolloProvider>
      </AuthProvider>
    </CookiesProvider>
  )
}

export default MyApp
