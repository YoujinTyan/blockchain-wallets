import { data } from "./config";


export const fetchData = async (actionSetPosts) => {
  await fetch(data.urlPosts)
  .then((response) => response.json())
  .then((data) => {
    actionSetPosts(data);
  })
  .catch((error) => console.log(error));
};
