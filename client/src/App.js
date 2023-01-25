import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './views/profile/Profile';
import Feed from './views/feed/Feed';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/feed' element={<Feed />}/>
        <Route path='/profile' element={<Profile />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
