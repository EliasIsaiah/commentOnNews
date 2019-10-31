import React from 'react';
import 'typeface-roboto';
import SearchButton from './components/SearchButton/SearchButton';
import ArticleCard from './components/ArticleCard/ArticleCard';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>

      <header className="App-header">
      <SearchButton/>
      <ArticleCard body="eatus peetus" />
      </header>

      </Container>

    </div>
  );
}

export default App;