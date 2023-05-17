import React from 'react'
import Img from '../assets/img.png'
import './index.scss'


const ContactUs = () =>{
    return (
        <div className='contact'>
            <h1 className='contact-heading'>Contact Us</h1>
            <div className='contact-form-container'>
                <form  action="mailto:gdscemail@gmail.com">
                    <input type="text" name="text" placeholder='full name'/>
                    <input type="email" name="email" placeholder='email'/>
                    <textarea placeholder='message'>
                         message
                    </textarea>
                    <button className='btn'>
                        SEND
                    </button>
                </form> 
                <div className='contact-row'>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do </p>
                     <div className="contact-checkboxes">
                        <div className='contact-checkbox'>
                            <label htmlFor="checkbox1"></label>
                            <input type="checkbox" id="checkbox1" />
                        </div>
                        <div className='contact-checkbox'>
                            <label htmlFor="checkbox2"></label>
                            <input type="checkbox" id="checkbox2" />
                        </div>
                        <div className='contact-checkbox'>
                            <label htmlFor="checkbox3"></label>
                            <input type="checkbox" id="checkbox3" />
                        </div>
                     </div>
                     <div className='contact-image-container'>
                         <img src={Img} alt=""/>
                     </div>
                </div>
            </div>
        </div>
    )
}


export default ContactUs;