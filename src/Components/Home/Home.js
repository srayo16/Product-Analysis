import React from 'react';
import './Home.css';
const Home = () => {
    return (
        <section className='homePage container'>
            <div className='captionPrt'>
                <h1 className='text-danger'>Your PC Style</h1>
                <h1 className='text-danger'>Your lifeStyle</h1>
                <hr />
                <p className='pt-2'>We offer high quality products for competitive prices.
                    Our main goal is customer satisfaction, which we obtain through market orientation and the allocation of ongoing service and support.</p>
                    <button class="button border-0">Explore Now</button>
            </div>
            <div className='imagePart'>
                <img src="https://st.depositphotos.com/1000128/2642/i/600/depositphotos_26429241-stock-photo-desktop-computer-with-touchscreen-interface.jpg" alt="" />
            </div>
        </section>
    );
};

export default Home;