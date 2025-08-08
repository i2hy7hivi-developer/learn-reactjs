import ContactUs from './components/ContactUs';
import Register from './components/Register';
import Task from './components/Task';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Welcome</Link> | <Link to="/tasks">Task</Link> | <Link to="contact-us">Contact Us</Link> | <Link to="register">Register</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
