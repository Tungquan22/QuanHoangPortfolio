import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import MyHobbiesPage from './components/MyHobbiesPage';
import MyProjectsPage from './components/MyProjectsPage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/my-hobbies" element={<MyHobbiesPage />} />
          <Route path="/my-projects" element={<MyProjectsPage />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;