import React from 'react'
import '../styles/coupons.sass'

// * Components 
import Layout from '../components/layout'
import SectionTitle from '../components/sectionTitle/SectionTitle'
import Footer from '../components/footer/Footer'

const Coupons = () => {
    return (
        <div>
            <Layout>
                <SectionTitle title={'Coupons'} type={'dark'} name={'In-Store Printable Coupons'} subtext={'We offer all of our customers in-store printable coupons that you can only find online on our website. Check back daily for new deals!'} line={true} />
                <Footer />
            </Layout>
        </div>
    )
}

export default Coupons