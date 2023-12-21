import React, {useEffect} from 'react';

import { fetchData } from '../services/api';
import SearchField from '../components/SearchField';

import PostList from '../components/PostList';

import '../styles/pageMain.css';
import '../styles/loader.css';


function MainPage(props) {
  const { store } = props;

  useEffect(() => {
    fetchData(store).then(() => {
      console.log('loaded');
    });
  });

  return (
    <div className="post-list">
      <h1>Небольшой блог</h1>
      <SearchField />
      <PostList store={ store } />
    </div>
  );
};

export default MainPage;
