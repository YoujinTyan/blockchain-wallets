import { postsURL, postsURLByTitle } from "./config";
import { setNotFound, setPosts } from "../store/reducers/post_reducer";
import { store } from "../store/store";

export const fetchData = async (page, limit, searchQuery) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const paramPages = process.env.REACT_APP_PAGE;
  const paramLimit = process.env.REACT_APP_LIMIT;
  const paramTitles = process.env.REACT_APP_TITLES;
  const postsURL = `${baseURL}posts?${paramPages}${page}${paramLimit}${limit}`;
  const searchQueryURL = `${baseURL}posts?${paramPages}${page}${paramLimit}${limit}${paramTitles}${searchQuery}`;

  if (searchQuery.length > 0) {  // если есть запрос, то ищем
    await fetch(searchQueryURL)
      .then((response) => response.json())
      .then((posts) => {
        store.dispatch(setPosts(posts));
        if (posts.length === 0) {
          store.dispatch(setNotFound(true));
        };
      });
  } else { // если запроса нет, то запрашиваем посты по страницам и лимитам
    fetch(postsURL)
      .then((response) => response.json())
      .then((posts) => { // и отпрваляем в стор
        store.dispatch(setPosts(posts));
        store.dispatch(setNotFound(false));
      });
  };
};
