import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="contact footer-bg my-5 py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h3>Let us handle your project professionally</h3>
                        <p style={{ fontWeight: '100', fontSize: '14px', marginTop: '20px' }}>
                            With well written codes, we build amazing apps for all platforms, mobile and web apps in general
                        </p>
                    </div>
                    <div className="col-md-7">
                        <div className="col-md-9 mx-auto">
                            <form action="">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="  Your email address " required />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="  Your name / Company's name " />
                                </div>
                                <div className="form-group">
                                    <textarea name="" className="form-control" id="" cols="" rows="7" placeholder="Message "></textarea>
                                </div>
                                <div className="form-group">
                                    <button style={{ width: '170px', backgroundColor: '#111430', color: 'white' }} type="button" className="btn"> Send </button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <small className='d-block text-center mt-5'>Copyright Orange labs {new Date().getFullYear()}</small>
            </div>
        </section>
    );
};

export default Footer;