import React from 'react'
import '../styles/services.sass'
import Layout from '../components/layout'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import Service from '../components/service/Service'
import Footer from '../components/footer/Footer'

const Services = () => {
    return (
        <div>
            <Layout>
                <SectionTitle title={'Our Services'} type={'dark'} name={'Full Service Puppy Boutique'} subtext={'We offer a range of services from pet grooming to full room and boarding for your dog. Below are some of the services we provide.'} />
                <Service title={'Bath & Grooming'} desc={'From a standard bath to a full-service groom, we offer a variety of <span> dog grooming </span> that are just right for your pupper or dog. First, Choose a Dog Bath or Dog Groom Package, then personalize the rest to fit your needs!'} src={'./assets/images/service-img.png'} />
                <Service title={'Kennel & Boarding'} desc={'Our high-end luxury <span> Doggie Suites </span> are all equipped with a flat screen for your dogs enjoyment. Our facility was designed to offer your pet the most exclusive and unique experience, a perfect alternative to a caged boarding kennel.'} src={'./assets/images/service-img.png'} />
                <Service title={'Doggie Beds'} desc={'We sell some of the highest quality, name brand doggie beds. We offer a huge selection of some of the finest doggie beds you\'ll find anywhere. You\'ll be sure to find the perfect bed for your pup!'} src={'./assets/images/service-img.png'} />
                <Footer />
            </Layout>
        </div>
    )
}

export default Services