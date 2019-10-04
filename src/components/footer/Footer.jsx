import React from 'react'
import './Footer.sass'

// * Components 
import SectionTitle from '../sectionTitle/SectionTitle'

const Footer = () => {
    return (
        <div>
            <SectionTitle title={'Contact Us'} type={'dark'} name={"Contact Us Now"} subtext={'Give us a call or send us an email with any puppy related questions or concerns that you may have. Or if you\'re in the vicinity, stop by and pay us a visit!'} line={true} />
        </div>
    )
}

export default Footer

//- include ../sectionTitle/sectionTitle
//- footer 
//-     +sectionTitle('Contact Us', "light", 'Contact Us Now!', 'Give us a call or send us an email with any puppy related questions or concerns that you may have. Or if you\'re in the vicinity, stop by and pay us a visit!')
//-     .row 
//-         ul.details
//-             li 121 King Street, Melbourne Victoria 3000 Australia
//-             li Phone: +613 8376 6284
//-             li Email: support@wp-puppystore.com 
//-             li Facebook: 
//-                 a(href="#") facebook.com/puppies 
//-             li
//-                 a(href="#") Twitter.com/puppies4u
//-         form 
//-             .wrapper
//-                 input(type="text" name="name" placeholder="Name")
//-                 input(type="text" name="Email" placeholder="Email")
//-             textarea(name="message" placeholder="Message")
//-             button.btn(type="submit") SEND
//-     .copyright 
//-         .wrapper
//-             p © 2013 The Puppy Store. All rights reserved.
//-             p Handmade in Las Vegas, NV.