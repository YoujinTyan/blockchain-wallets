import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from '../services/api';
// import SearchField from '../components/SearchField';
import SearchField from '../components/SearchFieldComponent';

// import PostList from '../components/PostList';
import PostList from '../components/PostListComponents';
import { MAINPAGE_CONSTANTS } from '../utils/constants';

// import {
//   Pagination,
//   PaginationItem,
//   TextField,
//   Stack,
//   Link
// } from '@mui/material';

// import '../styles/loader.css';


function MainPage() {
  const [ searchingQuery, setSearchingQuery ] = useState('');
  const postsInStore = useSelector(state => state.postList.posts);
  // const currentTheme = useSelector(state => state.settings.theme);
  

  // const { store } = props;

  // массив постов
  // количество постов на странице
  // const [ postCounterOnPage, setpostCounterOnPage ] = useState(10);
  // текущая страница (номер)
  // const [ page, setPage ] = useState(1);
  // количество страниц
  // const [ pageCount, setpageCount ] = useState(1);

  useEffect(() => {
    fetchData(1, 5, searchingQuery)
      .then(() => 0);
  });

  return (
    <div className="post-list">
      <h1>{MAINPAGE_CONSTANTS.TITLE_H1}</h1>
      <SearchField setSearchingQuery={setSearchingQuery} />
      <PostList
        posts={postsInStore}
      />
    </div>
  );
};

export default MainPage;
