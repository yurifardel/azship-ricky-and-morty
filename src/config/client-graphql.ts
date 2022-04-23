import {InMemoryCache, ApolloClient} from '@apollo/client'

export  const client =  new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      query: {
        fields: {
          characters: {
            merge(_, incoming) {
              return incoming
            }
          }
        }
      }
    }
  })
})