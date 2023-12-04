import React from 'react'
import RailwayPoliceImg from '../images/project-9.png'
import DebateManagementImg from '../images/project-8.png'
import EcommerceImg from '../images/project-7.png'
import EliteSteelImg from '../images/project-100000.png'
import LandingPageImg from '../images/project-10.png'
import SonargaonLibrayImg from '../images/project-4.png'
import AboutImg from '../images/about.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from 'react-reveal/Slide';
export default function Projects() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="py-5 about_section">
                <div className="container pt-5">
                    <div className="text-center">
                        <h3 className="fs-1 title_about">My
                            <span className="ps-2">Projects</span>
                        </h3>
                        <h5 className="p-0 m-0 my_introduction">My awesome works</h5>
                    </div>
                    <div className='row align-items-center justify-content-center'>
                        <div className='col-sm-12 col-md-8 py-2'>
                            <Slider {...settings}>

                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div><img src={RailwayPoliceImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="pt-1 text-white projects-title">Bangladesh Railway Police</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="https://github.com/showkatbinidris70/nano-bd-railway-police-figma-to-html" className="px-2 py-1 rounded project_link_btn">Github</a>
                                            <a href="https://nano-bd-railway-police-figma-to-html.vercel.app/" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div><img src={SonargaonLibrayImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="fs-4 pt-1 text-white">Sonargaon Library</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="#" className="px-2 py-1 rounded project_link_btn">Github</a>
                                            <a href="#" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div><img src={LandingPageImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="fs-4 pt-1 text-white">Landing Page</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="https://github.com/showkatbinidris70/noipunno-landing-page" className="px-2 py-1 rounded project_link_btn">Github</a>
                                            <a href="https://noipunno-landing-page.vercel.app/" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div>
                                            <img src={DebateManagementImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="fs-4 pt-1 text-white">Debate Management</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="https://github.com/showkatbinidris70/nano-debate-management-figma-to-html" className="px-2 py-1 rounded project_link_btn">Github</a>
                                            <a href="https://nano-debate-management-figma-to-html.vercel.app/" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div><img src={EcommerceImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="fs-4 pt-1 text-white">E-commerce</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="https://charming-pothos-aa55b8.netlify.app/" className="px-2 py-1 rounded project_link_btn">Github</a>
                                            <a href="#" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-1">
                                    <div className="card p-2 project_card_bg_color">
                                        <div><img src={EliteSteelImg}
                                                className="img-fluid rounded"
                                                alt=""/></div>
                                        <div>
                                            <h3 className="fs-4 pt-1 text-white">Elite Steel</h3>
                                        </div>
                                        <div className="d-flex gap-3">
                                            <a href="https://github.com/showkatbinidris70/nano-Elite-Steel-html-css">Github</a>
                                            <a href="https://nano-elite-steel-html-css.vercel.app/" className="px-2 py-1 rounded project_link_btn">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                        <div className='col-sm-12 col-md-4 py-2 d-flex justify-content-md-end d-none d-md-block'>
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
