import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {changeSearchingState} from "../store/reducers/post_reducer";


function SearchField(props) {
  const { setPosts } = props;
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.posts)

  function handleOnClick() {
    if (inputValue.length > 0) {
      try {
        // Фильтруем тольк те посты, которые совпадают с поисковым запросом
        const filteredPosts = posts.filter((post) => {
          return post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.body.toLowerCase().includes(inputValue.toLowerCase());
        });
        console.log(filteredPosts)
        if (filteredPosts.length === 0) {
          alert('Ничего не найдено')
          dispatch(changeSearchingState({
            turnOn: true, notFound: true
          }));
        } else {
          // Если посты отфильтровались, то меняем их в сторе
          // dispatch(setPosts(filteredPosts));
          dispatch(changeSearchingState({
            turnOn: true, notFound: false
          }));
          console.log('posts found', filteredPosts.length);
          // Записываем отфильтрованные посты в стейт
          setPosts(filteredPosts);
        };
        // Сбрасываем запрос
        setInputValue('');
      } catch (exception) {
          console.log(exception)
        };
    } else {
      // Нажали на кнопку поиска и не ввели запрос
      alert('Вы не ввели фразу/слово для поиска');
    }
  };

  function resetPosts() {
    setPosts([]);
    console.log('posts in state deleted');
    dispatch(changeSearchingState({
      turnOn: false, foundData: false
    }));
  }

  function handleOnChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
    if (inputValue.trim().length === 0) {
      setPosts([])
    };
  };

  return (
    <div className={posts.length > 0 ? 'search-field' : 'search-field disabled'}>
      <h4>Поиск по постам<span id={"mini-button"} onClick={resetPosts}>Обновить</span></h4>
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
