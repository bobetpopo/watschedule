import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloCache, InMemoryCache, ApolloClient } from "@apollo/client"
import App from './App.tsx'
import './index.css'

const client = new ApolloClient({
  uri: 'https://uwflow.com/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
