import React from 'react';
import './CarouselSlide.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselSlide = () => {
    const carousel = [carousel1, carousel2, carousel3]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="container slide-bg">
            <div style={{ marginBottom: '80px' }}>
                <h4 style={{ color: 'white' }} className='font-weight-bold text-center'>
                    Here are some of <span className='text-success'>our works</span>
                </h4>
            </div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={5000}
                keyBoardControl={true} dotListClass="custom-dot-list-style" showDots={true}>
                {
                    carousel.map(allCarousel => {
                        return (
                            <div>
                                <img className='carousel-image' src={allCarousel} alt="" />
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default CarouselSlide;