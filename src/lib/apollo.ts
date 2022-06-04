import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from '@apollo/client';
import Cookies from 'js-cookie';

const httpLink = new HttpLink({ uri: 'https://finance-api-ddd.herokuapp.com/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
	const token = Cookies.get('token');

	operation.setContext({
		headers: {
			authorization: token ? `Bearer ${token}`: ''
		}
	})
	return forward(operation);
});

export const apolloClient = new ApolloClient({
	link: concat(authMiddleware, httpLink),
	cache: new InMemoryCache(),
	credentials: 'include',
	defaultOptions: {
		watchQuery: {
			errorPolicy: 'none'
		}
	}
});

export default apolloClient;
