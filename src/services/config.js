export const postsURL = (page, limit) =>
  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;

export const postsURLByTitle = (page, limit, searchQuery) =>
  `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}&title_like=${searchQuery}`;
