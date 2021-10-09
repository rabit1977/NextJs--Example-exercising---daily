import Header from './Header';

const Contact = ({ posts }) => {
  return (
    <>
      <Header />
      <ul className='m-3 border-2 p-4'>
        {posts.map((post) => (
          <div key={post.id} className='my-4 border-2 border-black text-center '>
            <li className=' my-3 p-2  underline'>{post.title} </li>
            <li className=' p-2 '>{post.body} </li>
          </div>
        ))}
      </ul>
    </>
  );
};
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Contact;
