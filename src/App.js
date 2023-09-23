import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import './sass/style.scss';
import './sass/style.css';
import Landing from './pages/landing';
import Navbar from './layouts/navbar';
import About from './pages/about.js';
import Projects from './pages/projects';
import Contact from './pages/contact';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>  
      <Route index element={<Landing />} />
      <Route path="about" element={<About/>} />
      <Route path="projects" element={<Projects/>} />
      <Route path="contact" element={<Contact/>} />
      
      {/* 404 page link */}
      {/* <Route path="*" element={<NotExist />} /> */}
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  );
}

export default App;
