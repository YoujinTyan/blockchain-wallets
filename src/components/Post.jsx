import React from 'react';


function Post(props) {
  let { titlePost, bodyPost} = props;
  
  titlePost = titlePost[0].toUpperCase() + titlePost.slice(1);
  bodyPost = bodyPost[0].toUpperCase() + bodyPost.slice(1);

  return (
    <div className="post">
      <h3>{titlePost}</h3>
      <hr />
      <div className="post-body">
        <p>{bodyPost}</p>
      </div>
    </div>
  );
}

export default Post;
