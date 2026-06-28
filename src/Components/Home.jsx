import React from 'react';
import Testimonials from './Testimonials';
import FeaturedShots from './FeaturedShots';
import Services from './Services';
import Header from './Header';
import Stats from './Stats';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Stats></Stats>
            <Services></Services>           
             <FeaturedShots></FeaturedShots>
           <Testimonials></Testimonials>
        </div>
    );
};

export default Home;