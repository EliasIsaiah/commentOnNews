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
    axios.get('/api/articles').then((response: any) => {

      this.setState({
        articles: response.data
      })
      console.log("get articles response", response.data);
    }).catch((err) => {
      console.log("error", err);
      throw err;
    })
    // return articles;
  };

  sendComment = (id: string, body: string) => {

    axios.post(`/api/articles/${id}`, {

      body: body

    }).then((response: any) => {

      console.log("sendComment response", response);

      this.getArticles();

    }).catch((err) => {

      console.log("error", err);

      throw err;

    })
  };

  // showComments = async (id: string) => {
  //   try {

  //     let res = await axios.get(`/api/articles/${id}`)
  //     let comments = res.data;
  //     this.getArticles();

  //     return comments;

  //   } catch (error) {

  //     console.log(error);
  //     throw error;
  //   }
  // }

  // showComments = (id: string) => {

  //   axios.get(`/api/articles/${id}`, {

  //   }).then((response: any) => {

  //     console.log("showComment response", response);
  //     console.log("comments", response.data.comments);

  //     return response.data.comments;

  //   }).catch((err) => {

  //     console.log("error", err);
  //     // throw err;
  //     return err.message;
  //   })
  // }

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
            <ArticlesContainer articles={this.state.articles} sendComment={this.sendComment} />
          </header>

        </Container>

      </div>
    );
  }
}

export default App;