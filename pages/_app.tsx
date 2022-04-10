import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Head from "next/head";

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
          <Head>
              <title>
                  Rick and morty
              </title>
          </Head>
          <ApolloProvider client={client}>
              <Component {...pageProps} />
          </ApolloProvider>
      </>
  )
}

export default MyApp
