import Head from 'next/head';
import { useState } from 'react';
import Header from './Header';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Help from './Help';

export default function Home() {
  const [state, setstate] = useState('black');
  function handleColorChange() {
    const nextColor = state === 'green' ? 'red' : 'green';
    setstate(nextColor);
  }

  return (
    <>
      <Header />
      <About />
      <Services />
      <Contact />
      <Help />
    </>
  );
}
