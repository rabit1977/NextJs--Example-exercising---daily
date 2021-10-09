import Header from './Header';
import posts from './post.json';

const About = () => {
  return (
    <>
      <Header />
      <div className="text-center">
          <h1 className="text-2xl tracking-wide">New Posts</h1>
        <ul className='w-full'>
          {posts.members.map((post) => (
            <div className='gap-2 flex flex-col justify-center items-center bg-red-500 m-4 p-4 text-white'>
              <li>{post.name}</li>
              <li>{post.age} </li>
              <li>{post.secretIdentity} </li>
              <li>{post.powers} </li>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default About;
