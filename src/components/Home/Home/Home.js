import React from 'react';
import Header from '../Header/Header';
import ClientCompany from '../ClientCompany/ClientCompany';
import Services from '../Services/Services';
import CarouselSlide from '../CarouselSlide/CarouselSlide';
import ClientFeedbacks from '../ClientFeedbacks/ClientFeedbacks';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ClientCompany></ClientCompany>
            <Services></Services>
            <CarouselSlide></CarouselSlide>
            <ClientFeedbacks></ClientFeedbacks>
            <Footer></Footer>

        </div>
    );
};

export default Home;