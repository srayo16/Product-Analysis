import React, { useEffect, useState } from 'react';

const UseReviews = () => {
    const [reviews , setReviews] = useState([]);
    useEffect(() =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setReviews(data))
  } , [])
    return [reviews , setReviews]
};

export default UseReviews;