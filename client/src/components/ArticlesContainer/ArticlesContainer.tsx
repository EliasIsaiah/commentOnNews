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
    articles: Article[]
}


export function ArticlesContainer(props: Props) {

    return (
        <>
            {/* <SearchButton /> */}
            {props.articles && props.articles.map((article) => {
                return <ArticleCard headline="Germany to boost EV subsidies as first Volkswagen ID.3s roll off the line" summary="The government grants would be $5,000 and up" />
            })}
        </>
    );
}

export default ArticlesContainer;
