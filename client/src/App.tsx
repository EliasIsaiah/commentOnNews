// TODO
// POST cheerio data to mongo db
// add comment functionality to articles
// take care of pushing "scrape" multiple times causing duplicates (DROP database?)

import React from 'react';
import { Container } from '@material-ui/core';
import 'typeface-roboto';
import SearchButton from './components/SearchButton/SearchButton';
import ArticleCard from './components/ArticleCard/ArticleCard';
import ArticlesContainer from './components/ArticlesContainer/ArticlesContainer';
import axios from 'axios';
import './App.css';

interface Article {
  _id: string,
  headline: string,
  summary: string,
  comments?: string[]
}

interface MyState {
  articles?: Article[]
}


class App extends React.Component<{}, MyState> {

  // constructor() {
  //   this.state = {
  //     articles: []
  //   }
  // }

  getArticles() {
    // return: axios.get(/api/articles).then((articles) => this.state.articles = articles)
    axios.get(`/api/articles`)
      .then(res => {
        console.log(res);
      },
        (error) => {
          console.log(error);
          throw error;
        }
      ).catch((error) => {
        console.log(error);
        throw error;
      })

  }
  render() {
    return (
      <div className="App">
        <Container maxWidth="lg">
          <header className="App-header">
            <SearchButton scrapeFunc={this.getArticles} />
            <ArticlesContainer articles={[{
              _id: "5dc068e324155604f49a9e76",
              headline:
                'Grab this 4 pack of sun shades for just $5.63 right now on Amazon',
              summary: 'Protect your backseat from snow-reflected sunbeams',
              url: 'https://amzn.to/331b31h',
              __v: 0
            },
            {
              _id: "5dc068e324155604f49a9e74",
              headline: 'Introducing the 2019 Autoblog Gaming Guide',
              summary:
                'Everything you need to know about video games, live streaming, esports and more',
              url: 'https://www.autoblog.com/gaming-guide/',
              __v: 0
            }]} />
            <ArticleCard headline="Germany to boost EV subsidies as first Volkswagen ID.3s roll off the line" summary="The government grants would be $5,000 and up" />

          </header>

        </Container>

      </div>
    );
  }
}

export default App;