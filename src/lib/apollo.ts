import { ApolloClient, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
	uri: 'https://finance-api-ddd.herokuapp.com/graphql',
	cache: new InMemoryCache(),
	defaultOptions: {
		watchQuery: {
			errorPolicy: 'none'
		}
	}
});


export default apolloClient;
