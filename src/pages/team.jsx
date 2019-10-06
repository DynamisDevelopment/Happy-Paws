import React from 'react'
import '../styles/team.sass'

// * Components 
import Layout from '../components/layout'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import Footer from '../components/footer/Footer'

const Team = () => {
    return (
        <div>
            <Layout>
                <SectionTitle title={'Our Team'} type={'dark'} name={'We Are Puppy Enthusiasts'} subtext={'We\'re a team full of puppy lovers who can eat, sleep, and drink adorable puppies on a daily basis. Meet our fantasic team below!'} line={true} />
                <div className="social">
                    <div className="details">
                        <h1>Our Humble Shop</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, accusamus saepe vel voluptas, soluta obcaecati placeat commodi aperiam distinctio quas assumenda corrupti, possimus voluptate? Magnam expedita inventore exercitationem soluta ex.</p>
                    </div>
                    <div className="links">
                        <a href="#"><img src="https://via.placeholder.com/75" alt="" /></a>
                        <a href="#"><img src="https://via.placeholder.com/75" alt="" /></a>
                        <a href="#"><img src="https://via.placeholder.com/75" alt="" /></a>
                    </div>
                </div>
                <Footer />
            </Layout>
        </div>
    )
}

export default Team