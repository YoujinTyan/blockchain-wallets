import { postsURL, postsURLByTitle } from "./config";
import { setNotFound, setPosts } from "../store/reducers/post_reducer";
import { store } from "../store/store";

export const fetchData = async (page, limit, searchQuery) => {
  if (searchQuery.length > 0) {  // если есть запрос, то ищем
    await fetch(postsURLByTitle(page, limit, searchQuery))
      .then((response) => response.json())
      .then((posts) => {
        store.dispatch(setPosts(posts));
        if (posts.length === 0) {
          store.dispatch(setNotFound(true));
        };
      });
  } else { // если запроса нет, то запрашиваем посты по страницам и лимитам
    fetch(postsURL(page, limit))
      .then((response) => response.json())
      .then((posts) => { // и отпрваляем в стор
        store.dispatch(setPosts(posts));
        store.dispatch(setNotFound(false));
      });
  };
};
