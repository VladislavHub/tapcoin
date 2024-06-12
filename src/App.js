import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Page from './component/main';
import Welcome from './component/welcome';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Welcome}></Route>
        <Route path='/coin' Component={Page}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
