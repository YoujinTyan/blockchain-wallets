import GeneralLayout from "../../layouts/GeneralLayout";

export default function Blog() {
  const posts = [
    {id: 1, title: 'Post Title', content: 'Content'},
    {id: 2, title: 'Post Title', content: 'Content'},
    {id: 3, title: 'Post Title', content: 'Content'},
  ];
  return (
    <GeneralLayout>
      {posts.map((post) => 
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      )}
    </GeneralLayout>
  );
};
