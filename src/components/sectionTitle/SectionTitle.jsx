import React from 'react'
import './SectionTitle.sass'

const SectionTitle = ({ title, type = 'light', name, subtext, line }) => {
    return (
        <div className={'sectionTitle ' + type}>
            <h3>{title}</h3>
            {name && <div className="div">
                <div className="section">
                    <div className="line"></div>
                    <h1>{name}</h1>
                    <div className="line"></div>
                </div>

                <div className='wrapper'>
                    <p>{subtext}</p>
                    {line && <div className="sub-line"></div>}
                </div>
            </div>
            }
        </div>
    )
}

export default SectionTitle


// mixin sectionTitle(section, $type, name, subtext, line) 
//     .sectionTitle(class=$type) 
//         h3=section 
//         if name  
//             .section 
//                 .line 
//                 h1=name
//                 .line 
//             p=subtext
//             if line 
//                 .sub-line

