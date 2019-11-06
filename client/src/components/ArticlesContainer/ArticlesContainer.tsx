import React from 'react';
import SearchButton from '../SearchButton/SearchButton';
import ArticleCard from '../ArticleCard/ArticleCard';

interface Article {
    _id: string,
    headline: string,
    summary: string,
    comments?: any
  }

interface Props {
    articles: any[]
    sendComment: (id:string, body:string) => void;
    showComments: (id:string) => any;
}


export function ArticlesContainer(props: Props) {

    return (
        <>
            {/* <SearchButton /> */}
            {props.articles && props.articles.map((article) => {
                return <ArticleCard key={article._id} 
                headline={article.headline} 
                summary={article.summary} 
                comments={article.comments}
                sendComment={props.sendComment} 
                showComments={props.showComments}
                />
            })}
        </>
    );
}

export default ArticlesContainer;
