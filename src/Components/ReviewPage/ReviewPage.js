import React, { useEffect, useState } from 'react';
import ReviewPagePro from '../ReviewPagePro/ReviewPagePro';

const ReviewPage = () => {
    const [reviews , setReviews] = useState([])
    useEffect(() =>{
        fetch('data2.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])
    return (
       <section>
           {
               reviews.map(item => <ReviewPagePro key={item.id} item={item} ></ReviewPagePro>)
           }
       </section>
    );
};

export default ReviewPage;