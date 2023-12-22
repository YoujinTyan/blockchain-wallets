import {useSelector} from "react-redux";

export default function SliceHelper(props) {
  const { pages, rowsPerPage } = props;
  const posts = useSelector(state => state.postList.posts);
  let slicedPosts = [];
  let indexOfCurrentPost = 0;

  for (let i=0; i<pages; i++) {
    for (let j=0; j<rowsPerPage; j++) {
      slicedPosts.push(
        {i: posts[indexOfCurrentPost]}
      );
      indexOfCurrentPost++;
    };
  };
  return slicedPosts;
};