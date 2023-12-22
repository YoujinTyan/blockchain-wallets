import { data } from "./config";
import { setPosts } from "../store/reducers/post_reducer";
import {store} from "../store/store";

export const fetchData = async () => {

  await fetch(data.urlPosts)
  .then((response) => response.json())
  .then((data) => {
    console.log('store updated:', data);
    // store.dispatch(setPosts(data))
  })
  .catch((error) => console.log(error));
};
