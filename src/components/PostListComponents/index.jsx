import { useDispatch, useSelector } from "react-redux";
import Post from './components/Post';
import {Link as NavLink} from "react-router-dom";
import {useState} from "react";
import './style.css';

import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link
} from '@mui/material';
import {changeSearchingState} from "../../store/reducers/post_reducer";


function PostList(props) {
  const { posts, postCounterOnPage, pageCount, page, setPage } = props;
  // const { postsPerPage, setPostsPerPage } = useState([]);
  const isNotFound = useSelector(state => state.postList.notFound);
  const dispatch = useDispatch();
  // console.log('POSTS:', posts);



  return(
    <Stack className='posts'>
      {/*<Stack spacing={2}>*/}

        {/*{!!pageCount &&(*/}
        {/*  <Pagination*/}
        {/*    count={pageCount}*/}
        {/*    page={page}*/}
        {/*    rowsPerPage={5}*/}
        {/*    onChange={(_, num) => setPage(num)}*/}
        {/*    showFirstButton*/}
        {/*    showLastButton*/}
        {/*    // sx={{ marginY: 3, marginX: "auto", color: "red"}}*/}
        {/*    // renderItem={(item) => (*/}
        {/*    //   <PaginationItem*/}
        {/*    //     component={NavLink}*/}
        {/*    //     to={`/?page=${item.page}`}*/}
        {/*    //     {...item}*/}
        {/*    //   />*/}
        {/*    // )}*/}
        {/*  />*/}
        {/*)}*/}

        { posts.length > 0 ?
            posts.map((post) => (
              <Post
                key={ post.id }
                id={ post.id }
                titlePost={ post.title }
                bodyPost={ post.body }
              />
          )
            ) : posts.length === 0 && !isNotFound ?
                <div className="loader">
                  <div className="inner one"></div>
                  <div className="inner two"></div>
                  <div className="inner three"></div>
                </div>
          : (
              <div className="post">
                <h1>Постов по данному запросу не найдено</h1>
              </div>
            )
        };

      {/*</Stack>*/}
    </Stack>
  )
};

export default PostList;
