import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from '../services/api';
import SearchField from '../components/SearchField';

import PostList from '../components/PostList';

import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link
} from '@mui/material';

import '../styles/pageMain.css';
import '../styles/loader.css';
import {changeSearchingState, setLoading} from "../store/reducers/post_reducer";


function MainPage() {
  const [ searchingQuery, setSearchingQuery ] = useState('');
  const postsInStore = useSelector(state => state.postList.posts);

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
      <h1>Небольшой блог</h1>
      <SearchField setSearchingQuery={setSearchingQuery} />
      <PostList
        posts={postsInStore}
      />
    </div>
  );
};

export default MainPage;
