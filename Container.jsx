
import React from 'react'
import {Card} from 'semantic-ui-react'
import articles from './Article';
import Article from './Article';

function Container(){
    const articleList = articles.map((article, index) =>
        <Article key={index}
        name={article.name} 
        img = {article.img}
        description = {article.description}
        rating = {article.rating}
        authorName = {article.authorName}
        />
    );

    return (

        <Card.Group className='centered'>

            {articleList}

        </Card.Group>
    
    )
   
}
export default Container