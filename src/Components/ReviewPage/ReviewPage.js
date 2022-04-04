import React, { useContext, useEffect, useState } from 'react';
import { ReviewsData } from '../../App';
import ReviewPagePro from '../ReviewPagePro/ReviewPagePro';

const ReviewPage = () => {
    const [reviews , setReviews] = useContext(ReviewsData)
  
    return (
       <section className='mt-5 mb-5 pb-5'>
           <h1 className='text-center text-dark mb-5'>Customer's Review</h1>
           {
               reviews.map(item => <ReviewPagePro key={item.id} item={item} ></ReviewPagePro>)
           }
       </section>
    );
};

export default ReviewPage;