import { data } from "./config";
import { setPosts } from "../store/reducers/post_reducer";
import {store} from "../store/store";

export const fetchData = async (props) => {

  await fetch(data.urlPosts)
  .then((response) => response.json())
  .then((data) => {
    store.dispatch(setPosts(data))
  })
  .catch((error) => console.log(error));
};
