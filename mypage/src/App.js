import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from './component/Main/Main';
import Home from './page/Home';
import Profile from './page/Profile';
import Portfolio from './page/Portfolio';
import Diary from './page/Diary';
import Code from './page/Code';
import StoryBoard from './page/StoryBoard';
import Gallery from './page/Gallery';
import Instagram from './page/Instagram';
import Folder from './page/Folder';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/log' element={<Diary />} />
          <Route path='/code' element={<Code />} />
          <Route path='/storyboard' element={<StoryBoard />} />
          <Route path='/image' element={<Gallery />} />
          <Route path='/sns' element={<Instagram />} />
          <Route path='/folder' element={<Folder />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
