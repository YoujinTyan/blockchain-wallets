import { useState } from "react";


function SearchField(props) {
  const { posts, setPosts } = props;
  const [ inputValue, setInputValue ] = useState([]);

  function handleOnClick() {
    // Временная логика
    console.log('кнопка поиска нажата');
    console.log('inputValue.length', inputValue.length);
    console.log('POSTS', posts);
    if (inputValue.length > 0) {
      const tmp = posts.filter((post) => {
        return post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.body.toLowerCase().includes(inputValue);
      });
      setPosts(tmp);
      setInputValue([]);
      console.log('tmp', tmp);
      console.log('posts', posts);
    } else {
      setPosts(posts);
    }
  };

  function handleOnChange(event) {
    event.preventDefault();
    setInputValue(event.target.value);
  };


  return (
    <div className={posts.length > 0 ? 'search-field' : 'search-field disabled'}>
      <h4>Поиск по постам</h4>
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
