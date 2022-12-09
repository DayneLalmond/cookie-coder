import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Style from './styles/index';

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

// function App() {
//     return (

//     );
// }