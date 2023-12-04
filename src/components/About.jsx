import React from 'react'
import AboutImg from '../images/about.png'
import Slide from 'react-reveal/Slide';

export default function About() {
    return (
        <div>
            <div className="py-5 about_section">
                <div className="container pt-5">
                    <div className="text-center">
                        <h3 className="fs-1 title_about">About
                            <span className="ps-2">Me</span>
                        </h3>
                        <h5 className="p-0 m-0 my_introduction">My introduction</h5>
                    </div>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-sm-6 col-md-7 py-2'>
                            <div className="">
                                <p className="text-justify text-white introduce_text">A passionate programmer with 3 years of experience and a team player with a can-do attitude. Fascinated by technologies such as Front End Development. Always willing to take ownership of the core components of a project and have a mindset.</p>
                            </div>
                            <div className="d-flex gap-3 text-white">
                                <div className="">
                                    <h1 className="text-center">03+</h1>
                                    <h6 className="text-center">Years experience</h6>
                                </div>
                                <div className="">
                                    <h1 className="text-center">20+</h1>
                                    <h6 className="text-center">Completed Projects</h6>
                                </div>
                                <div className="">
                                    <h1 className="text-center">03+</h1>
                                    <h6 className="text-center">Companies Work</h6>
                                </div>
                            </div>
                            <div className="py-4">
                                <a href="https://drive.google.com/file/d/1k5vJ5hv_OsH8fiN8Ge_fFYXdA9ZiZM_H/view?usp=sharing" target="_blank">
                                    <button className="py-2 px-5 btn_cv_download">Download CV</button>
                                </a>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-5 py-2 d-flex justify-content-md-end'>
                            <Slide right cascade>
                                <img src={AboutImg}
                                    className="img-fluid"
                                    alt="about pic"/>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
