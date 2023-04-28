import React from 'react';
import NewsItem from '../newsItem/newsItem';

const Feed = () => {
  return (
    <main className='news-list'>
      Новостная лента
      <NewsItem />
    </main>
  )
}

export default Feed;