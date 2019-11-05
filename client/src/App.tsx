import React from 'react';
import { Container } from '@material-ui/core';
import 'typeface-roboto';
import SearchButton from './components/SearchButton/SearchButton';
import ArticleCard from './components/ArticleCard/ArticleCard';
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import axios from 'axios';
import './App.css';

interface MyState {
  articles: any[]
}

class App extends React.Component<{}, MyState> {

  state = {
    articles: []
  }
  
  getArticles = () => {
    this.setState({
      articles: 
      [{
        _id: "1",
        headline: 'Grab',
        summary: 'Protect',
        url: 'https://www.autoblog.com/gaming-guide/',
      },
      {
        _id: "2",
        headline: 'Introducing',
        summary: 'Everything',
        url: 'https://www.autoblog.com/gaming-guide/',
      }]
    })
    console.log("get articles!");
    // return articles;
  }

  componentDidMount(){
    this.getArticles();
  }

  render() {
    console.log("state", this.state)
    return (
      <div className="App">
        <Container maxWidth="lg">
          <header className="App-header">
            <SearchButton scrapeFunc={this.getArticles} />
            <ArticlesContainer articles={this.state.articles} />
            <ArticleCard headline="Germany to boost EV subsidies as first Volkswagen ID.3s roll off the line" summary="The government grants would be $5,000 and up" />

          </header>

        </Container>

      </div>
    );
  }
}

export default App;