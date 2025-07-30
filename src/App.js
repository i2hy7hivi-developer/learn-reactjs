import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home()
{
  return <div>Home Page</div>
}

function About()
{
  return <div>About Page</div>
}

function ContactUs()
{
  return <div>ContactUs Page</div>
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
