import React from 'react'
import HireImg from '../images/hireMe.png'
import Slide from 'react-reveal/Slide';

export default function HireMe() {
    return (
        <div>
            <div className="py-3 about_section">
                <div className="container pt-3">
                    <div className="text-center">
                        <h3 className="fs-1 title_about">Hire
                            <span className="ps-2">Me</span>
                        </h3>
                        <h5 className="p-0 m-0 my_introduction">Do you have any work?</h5>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="col-10 card px-3 my-5 py-5 card_bg_color">
                            <div className='row align-items-center'>
                                <div className='col-sm-12 col-md-12 col-lg-7'>
                                    <h2 className='fs-3 text-white'>Do you want any work from me?</h2>
                                    <p className="text-justify text-white introduce_text">I am working at Nano Information Technology company as a Front end developer. At present this company is developing many Project. I am working here an e-commerce project as a front-end developer. Used technologies are "Laravel", "Node JS", "React JS" & "Mongo BD" In this project.</p>
                                    <div className="py-4">
                                        <a href='/contact'>
                                            <button className="py-2 px-5 btn_cv_download">
                                                Say Hello</button>
                                        </a>
                                    </div>
                                </div>
                                <div className='col-sm-12 d-none d-lg-block col-md-12 col-lg-5'>
                                    <Slide right cascade>
                                        <img src={HireImg}
                                            className='img-fluid'
                                            alt='hire img'/>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
