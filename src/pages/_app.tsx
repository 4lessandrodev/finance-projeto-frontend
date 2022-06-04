import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@lib/apollo';
import AuthProvider from '@contexts/auth.provider';
import { CookiesProvider } from 'react-cookie';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <AuthProvider>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </AuthProvider>
    </CookiesProvider>
  )
}

export default MyApp
