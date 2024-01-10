import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setNotFound } from "../../store/reducers/post_reducer";
import { MAINPAGE_CONSTANTS } from "../../utils/constants";
import './style.css';


function SearchField(props) {
  const { setSearchingQuery } = props;
  const [ inputValue, setInputValue ] = useState('');
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postList.posts)

  function handleOnClick() {
    if (inputValue.length > 0) {
      try {
        setSearchingQuery(inputValue.toLowerCase());
        setInputValue('');
      } catch (exception) {
          console.log(exception)
        };
    } else {
      // Нажали на кнопку поиска и не ввели запрос
      alert('Вы не ввели фразу/слово для поиска');
    };
  };

  function resetPosts() {
    setSearchingQuery('');
    dispatch(setNotFound(false));
    console.log('posts in state deleted');
  };

  function handleOnChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  return (
    <div className={posts.length > 0 ? 'search-field' : 'search-field disabled'}>
      <h4>{MAINPAGE_CONSTANTS.TITLE_H4}<span id={"mini-button"} onClick={resetPosts}>Обновить</span></h4>
      <input
        onChange={handleOnChange}
        type='text'
        placeholder='Введите часть загловка или поста'
        value={inputValue}
      />
      <button
        className='search-btn'
        onClick={handleOnClick}
      >{MAINPAGE_CONSTANTS.SEARCH_BTN_NAME}</button>
    </div>
  );
};

export default SearchField;
