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

  return (
    <React.Fragment>
      <h1>Небольшой блог</h1>
      {posts.map((post) => (
        <Post
          id={post.id}
          titlePost={post.title}
          bodyPost={post.body}
        />
      ))};
    </React.Fragment>
  );
}

export default MainPage;
