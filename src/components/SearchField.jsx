import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import { setPosts } from "../store/reducers/post_reducer";
import { fetchData } from "../services/api";

import { store } from "../store/store";


function SearchField() {
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.posts);

  function handleOnClick() {
    if (inputValue.length > 0) {
      try {
        const filteredPosts = posts.filter((post) => {
            return post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.body.toLowerCase().includes(inputValue);
        });
        dispatch(setPosts(filteredPosts))
        setInputValue('');
        console.log('searched', filteredPosts.length)

        if (filteredPosts.length === 0) {
          fetchData(store).then(() => {
            console.log('not searched')
          });
        }
      } catch (exception) {
          console.log(exception)
        };
    }
  };

  function resetPosts() {
    fetchData(store).then(() => {
      console.log('not searched')
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
