import ContactUs from './components/ContactUs';
import Task from './components/Task';
import Welcome from './components/Welcome';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Welcome</Link> | <Link to="/tasks">Task</Link> | <Link to="contact-us">Contact Us</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/tasks" element={<Task />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
