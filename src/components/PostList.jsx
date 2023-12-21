import { useSelector } from "react-redux";
import Post from '../components/Post';


function PostList() {
  const posts = useSelector(state => state.postList.posts) || [];
  const searching = useSelector(state => state.postList.searching);
  console.log(searching)

  return(
    <div className='posts'>
      { posts.length > 0 && !searching.notFound ?
          posts.map((post) => (
            <Post
              key={ post.id }
              id={ post.id }
              titlePost={ post.title }
              bodyPost={ post.body }
            />)
          ) : searching.notFound ?
            <div className="post"><h1>Постов по данному запросу не найдено</h1></div>
        : (<div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>)
      };
    </div>
  )
};

export default PostList;
