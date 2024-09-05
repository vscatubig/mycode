// pages/_app.js
// pages/_app.js
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const client = initializeApollo(pageProps.initialApolloState);
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;

/*import { ApolloProvider } from '@apollo/client';
import client from '../lib/apolloClient';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    );
}

export default MyApp;
*/
