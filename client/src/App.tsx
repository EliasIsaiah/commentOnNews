// TODO
// POST cheerio data to mongo db
// add comment functionality to articles
// take care of pushing "scrape" multiple times causing duplicates (DROP database?)

import React from 'react';
import 'typeface-roboto';
import SearchButton from './components/SearchButton/SearchButton';
import ArticleCard from './components/ArticleCard/ArticleCard';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container maxWidth="lg">

      <header className="App-header">
      <SearchButton/>
      <ArticleCard body="eatus peetus" />
      </header>

      </Container>

    </div>
  );
}

export default App;