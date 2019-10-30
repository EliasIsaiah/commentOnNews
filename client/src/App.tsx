import React from 'react';
import 'typeface-roboto';
import SearchButton from './SearchButton';
import './App.css';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>

      <header className="App-header">
      <SearchButton/>
      </header>

      </Container>

    </div>
  );
}

export default App;