const Header = () => {
  return (
    <main className=' bg-red-400 text-red-50'>
      <nav className='flex p-2'>
        <div className='flex mr-auto'>
          <h1>My Page</h1>
        </div>
        <ul className='flex gap-4'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/About'>About</a>
          </li>
          <li>
            <a href='/Services'>Services</a>
          </li>
          <li>
            <a href='Contact'>Contact</a>
          </li>
          <li>
            <a href='Help'>Help</a>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default Header;
