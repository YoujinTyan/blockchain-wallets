import React from 'react';
import Post from '../components/Post';
import '../styles/pageMain.css';
import { useState, useEffect } from 'react';


function MainPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => {
      setPosts(data);
    })
    .catch((error) => console.log(error));
  };

  function SearchField() {
    return (
      <div className='search-field'>
        <h4>Поиск по постам</h4>
        <input
          onChange={console.log('input is changing')}
          type='text'
          placeholder='Введите часть загловка или поста'
        />
        <button
          onClick={console.log('кнопка поиска нажата')}
        >Найти</button>
      </div>
    );
  };

  function PostList() {
    return(
      <div className="posts">
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            titlePost={post.title}
            bodyPost={post.body}
          />
        ))};
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
