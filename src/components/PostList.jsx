import Post from '../components/Post';


function PostList(props) {
  const { posts } = props;

  return(
    <div className='posts'>
      { posts.length > 0 ?
          posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              titlePost={post.title}
              bodyPost={post.body}
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
