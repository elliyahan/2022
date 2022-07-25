import './App.css';
import './css/body.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Body from './component/Body';
import Profile from './page/Profile';
import Portfolio from './page/Portfolio';
import Log from './page/Log';
import Code from './page/Code';
import StoryBoard from './page/StoryBoard';
import Image from './page/Image';
import Sns from './page/Sns';
import Folder from './page/Folder';
import Contact from './page/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/log' element={<Log />} />
          <Route path='/code' element={<Code />} />
          <Route path='/storyboard' element={<StoryBoard />} />
          <Route path='/image' element={<Image />} />
          <Route path='/sns' element={<Sns />} />
          <Route path='/folder' element={<Folder />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
