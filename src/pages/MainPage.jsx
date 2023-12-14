import React, { useState, useEffect } from 'react';
import Post from '../components/Post';
import '../styles/pageMain.css';
import '../styles/adaptive.css';
import '../styles/loader.css';


function MainPage() {
  const [ posts, setPosts ] = useState([]);
  const [ isPostsDownloaded, setisPostsDownloaded ] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
      setisPostsDownloaded(true);
    })
    .catch((error) => console.log(error));
  };

  function SearchField() {
    return (
      <div className={isPostsDownloaded ? 'search-field' : 'search-field'}>
        <h4>Поиск по постам</h4>
        <input
          onChange={console.log('input is changing')}
          type='text'
          placeholder='Введите часть загловка или поста'
        />
        <button
          className='search-btn'
          onClick={console.log('кнопка поиска нажата')}
        >Найти</button>
      </div>
    );
  };

  function PostList() {
    return(

      <div className='posts'>
        { isPostsDownloaded ?
          posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            titlePost={post.title}
            bodyPost={post.body}
          />
        ))
        :
        (<div class="loader">
          <div class="inner one"></div>
          <div class="inner two"></div>
          <div class="inner three"></div>
        </div>)};
      </div>
    )
  };

  return (
    <div className="post-list">
      <h1>Небольшой блог</h1>
      <SearchField/>
      <PostList />
    </div>
  );
}

export default MainPage;
