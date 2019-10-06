import React from "react"
import './global.sass'
import '../styles/index.sass'

// * Libraries 
import Slider from 'react-slick'

// * Components 
import Layout from '../components/layout'
import Service from '../components/service/Service'
import Footer from '../components/footer/Footer'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import Puppy from '../components/puppy/Puppy'

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        rows: 1,
        vertical: false,
        // lazyLoad: 'progressive',
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Layout>
                <div className="reputation-section">
                    <SectionTitle title={'Our Reputation'} type={'dark'} />
                    <Slider {...settings} className='reputation-slider'>
                        {/* // ! Doesn't work with more than one Item */}

                        <div className="review">
                            <img src="https://via.placeholder.com/150" alt="" />
                            <h1>"They ahve the cutest puppies in our town.. Hands down!"</h1>
                            <p>Stewart Little, United States</p>
                        </div>
                    </Slider>
                </div>
                <div className="puppy-section">
                    <SectionTitle title={'Our Puppies'} type={'dark'} />
                    <div className="collection">
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                        <Puppy />
                    </div>
                </div>
                <div className="services-section">
                    <SectionTitle title={'Our Services'} type={'dark'} />
                    <Service title={'Bath & Grooming'} desc={'From a standard bath to a full-service groom, we offer a variety of <span> dog grooming </span> that are just right for your pupper or dog. First, Choose a Dog Bath or Dog Groom Package, then personalize the rest to fit your needs!'} src={'./assets/images/service-img.png'} />
                    <Service title={'Kennel & Boarding'} desc={'Our high-end luxury <span> Doggie Suites </span> are all equipped with a flat screen for your dogs enjoyment. Our facility was designed to offer your pet the most exclusive and unique experience, a perfect alternative to a caged boarding kennel.'} src={'./assets/images/service-img.png'} />
                    <Footer />
                </div>
            </Layout>
        </div>
    )
}
export default HomePage
