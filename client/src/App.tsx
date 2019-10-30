import React from 'react';
import 'typeface-roboto';
import './App.css';
import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import Icon from '@material-ui/core/Icon';
import { Container } from '@material-ui/core';

const App: React.FC = () => {
  return (
    <div className="App">
      <Container>

      <header className="App-header">
      <Button variant="contained" color="primary" className="scrapeBtn" startIcon={<DescriptionIcon />}>Search</Button>
      </header>

      </Container>

    </div>
  );
}

export default App;
