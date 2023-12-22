import { useSelector } from "react-redux";
import Post from '../components/Post';
import {Link as NavLink} from "react-router-dom";
import {useState} from "react";

import {
  Pagination,
  PaginationItem,
  TextField,
  Stack,
  Link
} from '@mui/material';


function PostList(props) {
  const { postCounterOnPage, pageCount, page, setPage } = props;
  const { postsPerPage, setPostsPerPage } = useState([]);
  const posts = useSelector(state => state.postList.posts);
  const searching = useSelector(state => state.postList.searching);
  console.log(searching)

  return(
    <div className='posts'>
      {/*<Stack spacing={2}>*/}

      {/*  <Pagination*/}
      {/*    count={pageCount}*/}
      {/*    page={page}*/}
      {/*    rowsPerPage={5}*/}
      {/*    onChange={(_, num) => setPage(num)}*/}
      {/*    showFirstButton*/}
      {/*    showLastButton*/}
      {/*    sx={{ marginY: 3, marginX: "auto", color: "red"}}*/}
      {/*    renderItem={(item) => (*/}
      {/*      <PaginationItem*/}
      {/*        component={NavLink}*/}
      {/*        to={`/?page=${item.page}`}*/}
      {/*        {...item}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*  />*/}

        { posts.length > 1 && !searching.notFound ?
            posts.map((post) => (
              // <Link key={ post.id }>
              //   <div>Hello</div>
              <Post
                key={ post.id }
                id={ post.id }
                titlePost={ post.title }
                bodyPost={ post.body }
              />
              // </Link>
          )
            ) : searching.notFound ?
              <div className="post"><h1>Постов по данному запросу не найдено</h1></div>
          : (<div className="loader">
            <div className="inner one"></div>
            <div className="inner two"></div>
            <div className="inner three"></div>
          </div>)
        };

      {/*</Stack>*/}
    </div>
  )
};

export default PostList;
