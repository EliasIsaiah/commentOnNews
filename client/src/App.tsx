import React from 'react';
import 'typeface-roboto';
import SearchButton from './components/SearchButton/SearchButton';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Divider from './components/Divider';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container maxWidth="lg">

      <header className="App-header">
      <SearchButton/>
      <Divider />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      <ArticleCard body="eatus peetus" />
      </header>

      </Container>

    </div>
  );
}

export default App;