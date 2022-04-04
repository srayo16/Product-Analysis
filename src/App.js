import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blank from './Components/Blank/Blank';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import React, { useEffect, useState } from 'react';
import About from './Components/About';
 export const ReviewsData = React.createContext();

function App() {
  const [reviews , setReviews] = useState([]);
  useEffect(() =>{
    fetch('data2.json')
    .then(res => res.json())
    .then(data => setReviews(data))
} , [])
  return (
    <div>
      <ReviewsData.Provider value= {[reviews , setReviews]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/review' element={<ReviewPage></ReviewPage>}></Route>
        <Route path='/dashboard'></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Blank></Blank>}></Route>
      </Routes>
      </ReviewsData.Provider>
    </div>
  );
}

export default App;
