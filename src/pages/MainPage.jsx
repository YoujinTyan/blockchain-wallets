import React, { useState, useEffect } from 'react';

import { fetchData } from '../services/api';

import SearchField from '../components/SearchField';
import PostList from '../components/PostList';

import '../styles/pageMain.css';
import '../styles/loader.css';


function MainPage() {
  const [ posts, setPosts ] = useState([]);

  useEffect(() => {
    fetchData(setPosts);
  }, []);

  return (
    <div className="post-list">
      <h1>Небольшой блог</h1>
      <SearchField posts={posts} />
      <PostList posts={posts} />
    </div>
  );
}

export default MainPage;
