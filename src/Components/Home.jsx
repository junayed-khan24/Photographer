import React from 'react';
import Testimonials from './Testimonials';
import FeaturedShots from './FeaturedShots';
import Services from './Services';
import Header from './Header';
import Stats from './Stats';
import BookingForm from './BookingForm';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>           
            <Stats></Stats>
             <FeaturedShots></FeaturedShots>
             <BookingForm></BookingForm>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;