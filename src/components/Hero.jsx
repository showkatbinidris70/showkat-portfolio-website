import React from 'react'
import HeroImg from '../images/hero.png'
import {FaFacebook, FaLinkedin, FaTwitter} from "react-icons/fa";
import {FaInstagram} from "react-icons/fa6";
import Bounce from 'react-reveal/Bounce';
import Rotate from 'react-reveal/Rotate';

export default function Hero() {
    return (
        <div>
            <div className="hero_section py-5">
                <div className="container pt-5">
                    <div className='row align-items-center'>
                        <Bounce left cascade>
                            <div className='col-sm-6 col-md-6'>
                                <img src={HeroImg}
                                    className='img-fluid'
                                    alt='hero img'/>
                            </div>
                        </Bounce>
                        <div className='col-sm-6 col-md-6'>
                            <div className='ms-3'>
                                <h1 className="greetings">Hello!</h1>
                                <h3 className="hero_name">My Name is
                                    <span className='ps-2'>
                                        Showkat Ali
                                    </span>
                                </h3>
                                <h5 className="py-2 hero_title">Front End Developer</h5>
                                <a className='py-2 px-5 bt_contact' href='/contact'>Contat Me</a>
                                <Rotate top left cascade>
                                    <div className={`d-flex gap-3 text-white fs-2 py-4`}>
                                        <a href='https://www.instagram.com/showkatbinidris70/'><FaInstagram className="social_icons"/></a>
                                        <a href='https://www.facebook.com/salibinidris/'><FaFacebook className="social_icons"/></a>
                                        <a href='https://www.linkedin.com/in/showkatbinidris/'><FaLinkedin className="social_icons"/></a>
                                        <a href='https://www.linkedin.com/in/showkatbinidris/'><FaTwitter className="social_icons"/></a>
                                    </div>
                                </Rotate>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
