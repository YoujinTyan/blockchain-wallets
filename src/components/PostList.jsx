import Post from '../components/Post';
import { useSelector } from "react-redux";


function PostList() {
  const posts = useSelector(state => state.postList.posts) || [];

  return(
    <div className='posts'>
      { posts.length > 0 ?
          posts.map((post) => (
            <Post
              key={ post.id }
              id={ post.id }
              titlePost={ post.title }
              bodyPost={ post.body }
            />)
          )
        :
        (<div className="loader">
          <div className="inner one"></div>
          <div className="inner two"></div>
          <div className="inner three"></div>
        </div>)
      };
    </div>
  )
};

export default PostList;
