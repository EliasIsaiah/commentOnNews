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
                return <ArticleCard key={article._id} headline={article.headline} summary={article.summary} />
                // return <ArticleCard key={Math.random.toString()} headline="Germany to boost EV subsidies as first Volkswagen ID.3s roll off the line" summary="The government grants would be $5,000 and up" />
            })}
        </>
    );
}

export default ArticlesContainer;
