import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from './ReviewCard';
import img1 from '../../assets/images/testimonial/player-1.png'
import img2 from '../../assets/images/testimonial/player-2.png'
import img3 from '../../assets/images/testimonial/player-3.png'
import img4 from '../../assets/images/testimonial/player-4.png'

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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
        <div className='my-20'>
            <div className='text-center mb-8'>
                <p className="text-2xl font-bold text-orange-600">Testimonial</p>
                <h2 className='text-5xl font-semibold my-6'>What Customer Says</h2>
                <p className='w-1/2 mx-auto'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly Believable.</p>
            </div>
            <div>
                <Carousel responsive={responsive} className="mx-10 mt-5">
                    <div >
                        <ReviewCard img={img1} name={'Leo jekkins'} title={"Businessman"} text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}></ReviewCard>
                    </div>
                    <div>
                        <ReviewCard img={img2} name={'Jr. Smith'} title={"Engineer"} text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}></ReviewCard>
                    </div>
                    <div>
                        <ReviewCard img={img3} name={'John Henry'} title={"Lawyer"} text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}></ReviewCard>
                    </div>
                    <div>
                        <ReviewCard img={img4} name={'Emi Andreson'} title={"Doctor"} text={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}></ReviewCard>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Testimonial;