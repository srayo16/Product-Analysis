import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Home.css';
const Home = () => {
    const [reviews , setReviews] = useState([])
    useEffect(() =>{
        fetch('data3.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])
    return (
        <>
        <section className='homePage container mb-5 pb-5'>
            <div className='captionPrt'>
                <h1 className='text-danger'>Your PC Style</h1>
                <h1 className='text-danger'>Your lifeStyle</h1>
                <hr />
                <p className='pt-2'>We offer high quality products for competitive prices.
                    Our main goal is customer satisfaction, which we obtain through market orientation and the allocation of ongoing service and support.</p>
                    <button className="button border-0">Explore Now</button>
            </div>
            <div className='imagePart'>
                <img src="https://st.depositphotos.com/1000128/2642/i/600/depositphotos_26429241-stock-photo-desktop-computer-with-touchscreen-interface.jpg" alt="" />
            </div>
        </section>
        <section className='mb-5 pb-5'>
        <div>
            <h1 className='text-dark text-center fw-bold mt-5 pt-5 mb-5'>Customer Reviews(3)</h1>
            {
                reviews.map(singlereview => <Review key={singlereview.id} singlereview={singlereview} ></Review>)
            }
            <button className='handlebtn'>See All Reviews</button>
        </div>
        </section>
        </>
    );
};

export default Home;