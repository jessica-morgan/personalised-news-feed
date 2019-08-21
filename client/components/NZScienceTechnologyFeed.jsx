import { useState, useEffect } from 'react'
import { getNZScienceTechnologyHeadlines } from '../api/newsApi'
import React, { useGlobal } from 'reactn'
import { selectTitle, currentTitleSelected } from '../utils'
import SingleNewsArticle from './SingleNewsArticle'

const NZScienceTechnologyFeed = () => {
  const [allArticles, setArticles] = useState()

  useEffect(() => {
    getNZScienceTechnologyHeadlines()
      .then(articles => {
        setArticles({
          articles
        })
      })
  }, [])
  const [titleSelected, setTitleSelected] = useGlobal('titleSelected')
  const [categorySelected, setCategorySelected] = useGlobal('categorySelected')
  const [currentTitle, setCurrentTitle] = useGlobal('currentTitle')

  if (allArticles && categorySelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      {allArticles.articles.map((article, idx) => {
        return (
          <div key={idx}>
            <h1 key={article.title} onClick={() => { selectTitle(true); currentTitleSelected(article.title) }}>{article.title}</h1>
          </div>
        )
      })}
    </div>
  } if (allArticles && titleSelected) {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
      <SingleNewsArticle articles={allArticles.articles} key={currentTitle} />
    </div>
  } else {
    return <div style={{ display: 'block', width: '70vw', height: '100%', float: 'right', position: 'relative' }}>
        loading component
    </div>
  }
}

export default NZScienceTechnologyFeed
