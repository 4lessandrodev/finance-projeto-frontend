import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@lib/apollo';
import AuthProvider from '@contexts/auth.provider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default MyApp
