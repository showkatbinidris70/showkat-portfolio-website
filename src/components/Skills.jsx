import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectOneImg from '../images/project-1.png'
import ProjectOneImg2 from '../images/skills-bg-img.png'
export default function Skills() {
    var mySkills = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                mySkills: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }, {
                breakpoint: 767,
                mySkills: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }, {
                breakpoint: 480,
                mySkills: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <div className="py-5 skills_section">
                <div className="container pt-3">
                    <div className="text-center">
                        <h3 className="fs-1 title_about">My
                            <span className="ps-2">Skills</span>
                        </h3>
                        <h5 className="p-0 m-0 my_introduction">My knowledge</h5>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <div className="col-lg-10 col-md-12 card px-3 my-5 py-5 card_bg_color">
                            <div className='row align-items-center'>
                                <div className='col-sm-12 col-md-4 col-lg-5'>
                                    <h2 className='skills-title'>Please see my skills and
                                        <br/>
                                        <span className='ps-2'>
                                            <a href='/contact'>contact me</a>
                                        </span>
                                    </h2>
                                </div>
                                <div className='col-sm-12 col-md-8 col-lg-7 pe-4'>
                                    <Slider {...mySkills}>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>Javascript is my favorite scripting language. I have built some projects using JavaScript. I have faced many difficulties. I have clear knowledge about Array, Object, ES6 & Async.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>80%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">JavaScript</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>React JS is my favorite javascript library. I have built some projects using React JS. I have clear knowledge about Hooks, JSX , Virtual DOM, One-way data binding & Component Based Architecture.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>70%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">React JS</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>HTML5 is the latest version of Hypertext Markup Language. I have built some projects using HTML 5. I have sound knowledge about Semantic Elements, Canvas Elements, Responsive Images.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>90%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">HTML 5</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>CSS3, which stands for Cascading Style Sheets, is a stylesheet language. I have built some projects using CSS3. I have faced many difficulties. I have clear knowledge about flexbox, grid system.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>80%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">CSS 3</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>Bootstrap is my favorite front-end framework. I have built some projects using Bootstrap. I have clear knowledge about flex, grid system.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>80%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">Bootstrap 5</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>Bootstrap is my favorite front-end framework. I have built some projects using Bootstrap. I have clear knowledge about flex, grid system.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>80%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">Bootstrap 5</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-1">
                                            <div className="card p-2 project_card_bg_color">
                                                <div className='skills_bg_img p-3 position-relative'>
                                                    <h5 className='skilled-subject-message'>Tailwind CSS focuses on providing a vast collection of atomic utility classes that handle styling directly in the HTML markup.</h5>
                                                    <div className='position-absolute subject-skilled'>
                                                        <p className='d-flex justify-content-center align-items-center'>60%</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className="fs-6 pt-1 text-white">Tailwind CSS</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
