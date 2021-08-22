import React from 'react'
import Article from './Article'

const Articles = ({ articles }) => {
  return (
    <div className="articles">
        {
          (articles != null) ? articles.map(
            (article, index) => <Article key={index} article={article.data} />
         ) : ''
        }
      </div>
  )
}

export default Articles
