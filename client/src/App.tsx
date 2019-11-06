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
    articles: [{}]
  }
  
  getArticles = () => {
    axios.get('/api/articles').then((response:any) => {

      this.setState({
        articles: response.data
      })
      console.log("get articles!");
    }).catch((err) => {
      console.log("error", err);
      throw err;
    })
    // return articles;
  }

  sendComment = (id:string) => {
    axios.post(`/api/articles/${id}`).then((response:any) => {
      console.log("sendComment response", response);
    }).catch((err) => {
      console.log("error", err);
      throw err;
    })
  }

  // componentDidMount(){
  //   this.getArticles();
  // }

  render() {
    console.log("state", this.state)
    return (
      <div className="App">
        <Container maxWidth="lg">
          <header className="App-header">
            <SearchButton scrapeFunc={this.getArticles} />
            <ArticlesContainer articles={this.state.articles} />
          </header>

        </Container>

      </div>
    );
  }
}

export default App;