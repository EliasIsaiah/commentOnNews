import React from 'react';
import SearchButton from '../SearchButton/SearchButton';
import ArticleCard from '../ArticleCard/ArticleCard';

interface Article {
    _id: string,
    headline: string,
    summary: string,
    comments?: string[]
  }

interface Props {
    articles: any[]
}


export function ArticlesContainer(props: Props) {

    return (
        <>
            {/* <SearchButton /> */}
            {props.articles && props.articles.map((article) => {
                return <ArticleCard key={article._id} headline={article.headline} summary={article.summary} comments={article.comments} />
            })}
        </>
    );
}

export default ArticlesContainer;
