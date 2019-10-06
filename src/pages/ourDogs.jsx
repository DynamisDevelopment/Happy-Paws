import React from 'react'
import '../styles/ourDogs.sass'

// * Components 
import Layout from '../components/layout'
import Puppy from '../components/puppy/Puppy'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import Footer from '../components/footer/Footer'
const OurDogs = () => {
    return (
        <div>
            <Layout>
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
                <Footer />
            </Layout>
        </div>
    )
}

export default OurDogs