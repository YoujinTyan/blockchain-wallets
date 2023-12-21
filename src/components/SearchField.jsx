import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchData } from "../services/api";
import {changeSearchingState} from "../store/reducers/post_reducer";
import { setPosts } from "../store/reducers/post_reducer";

import { store } from "../store/store";


function SearchField() {
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.posts)

  function handleOnClick() {
    if (inputValue.length > 0) {
      try {
        // Фильтруем тольк те посты, которые совпадают с поисковым запросом
        const filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.body.toLowerCase().includes(inputValue);
        });
        if (filteredPosts.length === 0) {
          alert('Ничего не найдено')
          dispatch(changeSearchingState({
            turnOn: true, notFound: true
          }));
        } else {
          // Если посты отфильтровались, то меняем их в сторе
          dispatch(setPosts(filteredPosts));
          dispatch(changeSearchingState({
            turnOn: true, notFound: false
          }));
          console.log('posts found', filteredPosts.length);
        };
        // Сбрасываем запрос
        setInputValue('');
      } catch (exception) {
          console.log(exception)
        };
    } else {
      // Нажали на кнопку поиска и не ввели запрос
      alert('Please, enter a searching phrase');
    }
  };

  function resetPosts() {
    fetchData(store).then(() => {
      console.log('updated posts in store')
      dispatch(changeSearchingState({
        turnOn: false, foundData: false
      }));
    });
  }

  function handleOnChange(event) {
    event.preventDefault();
      setInputValue(event.target.value);
    };

  return (
    <div className={posts.length > 0 ? 'search-field' : 'search-field disabled'}>
      <h4>Поиск по постам <span id={"mini-button"} onClick={resetPosts}>Обновить</span></h4>
      <input
        onChange={handleOnChange}
        type='text'
        placeholder='Введите часть загловка или поста'
        value={inputValue}
      />
      <button
        className='search-btn'
        onClick={handleOnClick}
      >Найти</button>
    </div>
  );
};

export default SearchField;
