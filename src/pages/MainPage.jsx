import React from 'react';
import Post from '../components/Post';
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

  function SearchInput() {
    return (
      <React.Fragment>
        <h4>Поиск по постам</h4>
        <input
          onChange={console.log('input is changing')}
          type='text'
          placeholder='Введите часть загловка или поста'
        />
        <button
          onClick={console.log('кнопка поиска нажата')}
        >Найти</button>
      </React.Fragment>
    );
  };

  function PostList() {
    return(
      <React.Fragment>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            titlePost={post.title}
            bodyPost={post.body}
          />
        ))};
      </React.Fragment>
    )
  };

  return (
    <React.Fragment>
      <h1>Небольшой блог</h1>
      <SearchInput />
      <PostList />
    </React.Fragment>
  );
}

export default MainPage;
