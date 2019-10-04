import React from 'react'
import './Service.sass'

const Service = ({ title, desc, src }) => {
    return (
        <div className="service">
            <div className="about">
                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            <img src={src} alt={title + ' Image'} />
        </div>
    )
}

export default Service