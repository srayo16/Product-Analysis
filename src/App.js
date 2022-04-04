import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blank from './Components/Blank/Blank';
import ReviewPage from './Components/ReviewPage/ReviewPage';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<ReviewPage></ReviewPage>}></Route>
        <Route path='*' element={<Blank></Blank>}></Route>
      </Routes>
    </div>
  );
}

export default App;
