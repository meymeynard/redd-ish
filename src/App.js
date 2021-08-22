import React, { useState, useEffect } from 'react'
import { Router } from '@reach/router'
import Articles from './components/Articles'

function App() {
  const [articles, setArticles] = useState([])
  const [subreddit, setSubreddit] = useState("all")

  useEffect(() => {
    fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => {
        if (response.status !== 200) {
          console.log("ERROR")
          return
        }

        response.json().then(data => {
          if (data != null) setArticles(data.data.children)
        })
      })
  }, [subreddit])

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={e => setSubreddit(e.target.value)}
        />
      </header>

      <Router>
        <Articles path="/" articles={articles} />
      </Router>
    </div>
  );
}

export default App;
