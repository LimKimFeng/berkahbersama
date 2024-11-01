import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="landing-body">
            {/* Navbar */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#home">BerkahBersama</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#service">Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#testimoni">Testimoni</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Home Section */}
            <section id="home" className="home-section d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h1>Give Bread for Everyone</h1>
                            <p>Empowering communities through social assistance, educational opportunities, and job placements.</p>
                        </div>
                        <div className="col-md-6">
                            {/* Placeholder for Home Image */}
                            <img src={require("./../../assets/home-image.jpg")} alt="Home" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section py-5">
                <div className="container">
                    <h2 className="section-title">About Us</h2>
                    <div className="about-content mt-4">
                        <p>
                            BerkahBersama.com adalah platform yang berdedikasi untuk memberikan dukungan 
                            dan peluang kepada masyarakat melalui berbagai program beasiswa, pelatihan, 
                            dan kesempatan kerja. Kami percaya bahwa setiap individu memiliki potensi 
                            yang luar biasa dan kami berkomitmen untuk membantu mewujudkan impian mereka.
                        </p>
                        <p>
                            Dengan tim yang berpengalaman dan jaringan yang luas, kami bekerja sama 
                            dengan berbagai mitra untuk menyediakan sumber daya yang diperlukan agar 
                            para pengguna dapat berkembang dan mencapai tujuan mereka.
                        </p>
                    </div>
                </div>
            </section>

            {/* Service Section */}
            <section id="service" className="service-section py-5 bg-light">
                <div className="container">
                    <h2 className="section-title">Our Services</h2>
                    <div className="row">
                        {/* Social Assistance Box */}
                        <div className="col-md-4">
                            <div className="service-box text-center">
                                <i className="fas fa-hands-helping fa-3x mb-3"></i>
                                <h4>Social Assistance</h4>
                                <p>Provide food, clothing, and shelter for those in need.</p>
                                <Link to="/bantuan" className="btn btn-primary">Apply Now</Link>
                            </div>
                        </div>
                        {/* Scholarship Box */}
                        <div className="col-md-4">
                            <div className="service-box text-center">
                                <i className="fas fa-graduation-cap fa-3x mb-3"></i>
                                <h4>Scholarships</h4>
                                <p>Educational scholarships for children from underprivileged families.</p>
                                <a href="#scholarships" className="btn btn-primary">View Scholarships</a>
                            </div>
                        </div>
                        {/* Job Opportunities Box */}
                        <div className="col-md-4">
                            <div className="service-box text-center">
                                <i className="fas fa-briefcase fa-3x mb-3"></i>
                                <h4>Job Opportunities</h4>
                                <p>Job listings from partner companies for the unemployed.</p>
                                <a href="#job-opportunities" className="btn btn-primary">View Jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimoni Section */}
            <section id="testimoni" className="testimoni-section py-5">
                <div className="container">
                    <h2 className="section-title">Testimoni</h2>
                    {/* Video Testimonial */}
                    <div className="mb-4 d-flex justify-content-center">
                        <video className="testimonial-video" controls>
                            <source src={require("./../../assets/testimonial-video.mp4")} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    {/* Carousel of Testimonials */}
                    <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
                        {/* Carousel Indicators */}
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#testimonialCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            {/* Testimonial Item 1 */}
                            <div className="carousel-item active d-flex justify-content-center">
                                <div className="testimonial-box">
                                    <p>"BerkahBersama has changed my life by providing the support I needed."</p>
                                    <h5>- Nama Pengguna</h5>
                                </div>
                            </div>
                            {/* Testimonial Item 2 */}
                            <div className="carousel-item d-flex justify-content-center">
                                <div className="testimonial-box">
                                    <p>"Thanks to the scholarships, my children can continue their education."</p>
                                    <h5>- Nama Pengguna</h5>
                                </div>
                            </div>
                            {/* Testimonial Item 3 */}
                            <div className="carousel-item d-flex justify-content-center">
                                <div className="testimonial-box">
                                    <p>"The job opportunities provided helped me get back on my feet."</p>
                                    <h5>- Nama Pengguna</h5>
                                </div>
                            </div>
                        </div>
                        {/* Carousel Controls */}
                        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact-section py-5">
                <div className="container">
                    <h2 className="section-title">Contact Us</h2>
                    <div className="row align-items-center mt-4">
                        {/* Contact Form */}
                        <div className="col-md-6">
                            <form className="contact-form p-4">
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="fas fa-user"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control contact-form-input"
                                            id="name"
                                            placeholder="Enter your name"
                                            aria-describedby="basic-addon1"
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon2">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control contact-form-input"
                                            id="email"
                                            placeholder="Enter your email"
                                            aria-describedby="basic-addon2"
                                        />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="message">Message</label>
                                    <div className="input-group">
                                        <span className="input-group-text" id="basic-addon3">
                                            <i className="fas fa-comment-dots"></i>
                                        </span>
                                        <textarea
                                            className="form-control contact-form-input"
                                            id="message"
                                            rows="5"
                                            placeholder="Your message"
                                            aria-describedby="basic-addon3"
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-submit">
                                    Submit
                                </button>
                            </form>
                        </div>
                        {/* Contact Image */}
                        <div className="col-md-6">
                            <img
                                src={require("./../../assets/home-image.jpg")}
                                alt="Contact Us"
                                className="img-fluid contact-image"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer-section py-3">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} BerkahBersama.com. All rights reserved.</p>
                </div>
            </footer>
        </div>

    );
}

export default Landing;