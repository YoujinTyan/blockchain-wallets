import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from '../services/api';
import SearchField from '../components/SearchField';

import PostList from '../components/PostList';

// import {
//   Pagination,
//   PaginationItem,
//   TextField,
//   Stack,
//   Link
// } from '@mui/material';

import '../styles/pageMain.css';
import '../styles/loader.css';
import {setPosts} from "../store/reducers/post_reducer";


function MainPage(props) {
  const [ posts, setPosts ] = useState([])

  // const { store } = props;
  // массив постов
  const dispatch = useDispatch();
  const postsInStore = useSelector(state => state.postList.posts)
  // количество постов на странице
  const [ postCounterOnPage, setpostCounterOnPage ] = useState(10);
  // текущая страница (номер)
  const [ page, setPage ] = useState(1);
  // количество страниц
  const [ pageCount, setpageCount ] = useState(1);

  useEffect(() => {
    fetchData().then((d) => {
      return
    });
  });

  return (
    <div className="post-list">
      <h1>Небольшой блог</h1>
      <SearchField setPosts={setPosts} />
      <PostList
        posts={posts.length > 0 ? posts : postsInStore}
        pageCount={pageCount}
        page={page}
        setPage={setPage}
        postCounterOnPage={postCounterOnPage}
      />
    </div>
  );
};

export default MainPage;
