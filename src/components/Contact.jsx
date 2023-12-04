import React, {useRef} from "react";
import emailjs from 'emailjs-com';
import Reveal from 'react-reveal/Reveal';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pvssrek', 'template_yu2tizv', form.current, 'ajgTLMNQF9GbF_JYn').then((result) => {
            console.log(result.text);
            alert("SUCCESS!");
        }, (error) => {
            console.log(error.text);
            alert("FAILED...", error);
        });
    };
    return (
        <div>

            <div className="py-5 contact_section">
                <div className="container pt-5">
                    <div className="text-center">
                        <h3 className="fs-1 title_contact">Contact
                            <span className="ps-2">Me</span>
                        </h3>
                        <h5 className="p-0 m-0 my_introduction">Get in touch</h5>
                    </div>
                    <Reveal effect="fadeInUp">
                        <div className="px-3 my-5 py-5 card_bg_color rounded">
                            <div className='row'>
                                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-8'>
                                    <form ref={form}
                                        onSubmit={sendEmail}>
                                        <div className="mb-3">
                                            <input type="name" className="form-control text-white form_bg_color" id="name" name="name" placeholder="Your Name" aria-describedby="name"/>
                                        </div>
                                        <div className="mb-3">
                                            <input type="email" name="email" className="form-control text-white form_bg_color" id="email" placeholder="Your Email Address" aria-describedby="name"/>
                                        </div>
                                        <div class="form-floating">
                                            <textarea className="form-control h-100  text-white form_bg_color"
                                                rows={5}
                                                placeholder="Leave a comment here"
                                                id="email_body"></textarea>
                                            <label for="email_body" className="msg_text_color">Your Message</label>
                                        </div>
                                        <div className="py-4"></div>
                                        <div className="py-4">
                                            <button type="submit" className="py-2 px-5 btn_cv_download">
                                                Send Message</button>
                                        </div>
                                    </form>

                                </div>
                                <div className='col-sm-6 col-md-6 col-lg-6 col-xl-4'>
                                    <div className="d-flex align-items-center gap-3 py-2">
                                        <i class="fa-solid fa-envelope s-3 text-white d-sm-none d-md-block contact-icon-circle"></i>
                                        <p className="text-white">showkatbinidris70@gmail.com</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-3 py-2">
                                        <i class="fa-brands fa-whatsapp s-3 text-white d-sm-none d-md-block contact-icon-circle"></i>
                                        <p className="text-white">88+01572133260</p>
                                    </div>
                                    <div className="d-flex align-items-start gap-3 py-2">
                                        <i class="fa-solid fa-location-dot s-3 text-white d-sm-none d-md-block contact-icon-circle-location"></i>
                                        <p className="text-white">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3747016.782524042!2d87.70378100186713!3d23.48944602204458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1686305482213!5m2!1sen!2sbd" width="180" height="120" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    );
}
