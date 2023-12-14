function SearchField(props) {
  const { posts } = props;

  return (
    <div className={posts.length > 0 ? 'search-field' : 'search-field disabled'}>
      <h4>Поиск по постам</h4>
      <input
        onChange={console.log('input is changing')}
        type='text'
        placeholder='Введите часть загловка или поста'
      />
      <button
        className='search-btn'
        onClick={console.log('кнопка поиска нажата')}
      >Найти</button>
    </div>
  );
};

export default SearchField;
