import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Blank from './Components/Blank/Blank';
import ReviewPage from './Components/ReviewPage/ReviewPage';
import React, { useEffect, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import UseReviews from './Hook/UseReviews';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
 export const ReviewsData = React.createContext();

function App() {
  const [reviews , setReviews] = UseReviews();
  return (
    <div>
      <ReviewsData.Provider value= {[reviews , setReviews]}>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home'  element={<Home></Home>}></Route>
        <Route path='/review' element={<ReviewPage></ReviewPage>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Blank></Blank>}></Route>
      </Routes>
      <Footer></Footer>
      </ReviewsData.Provider>
    </div>
  );
}

export default App;
