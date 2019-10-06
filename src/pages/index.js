import React from "react"
import './global.sass'

// * Components 
import Layout from '../components/layout'
import Service from '../components/service/Service'
import Footer from '../components/footer/Footer'
import SectionTitle from '../components/sectionTitle/SectionTitle'

const HomePage = () => {
    return (
        <div>
            <Layout>
                <SectionTitle title={'Our Services'} type={'dark'} />
                <Service title={'Bath & Grooming'} desc={'From a standard bath to a full-service groom, we offer a variety of <span> dog grooming </span> that are just right for your pupper or dog. First, Choose a Dog Bath or Dog Groom Package, then personalize the rest to fit your needs!'} src={'./assets/images/service-img.png'} />
                <Service title={'Kennel & Boarding'} desc={'Our high-end luxury <span> Doggie Suites </span> are all equipped with a flat screen for your dogs enjoyment. Our facility was designed to offer your pet the most exclusive and unique experience, a perfect alternative to a caged boarding kennel.'} src={'./assets/images/service-img.png'} />
                <Footer />
            </Layout>
        </div>
    )
}
export default HomePage
