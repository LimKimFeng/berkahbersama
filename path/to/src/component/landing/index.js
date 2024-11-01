import React from "react";
import "./Landing.css";

const Landing = () => {
    return (
        <div className="landing-body">
            {/* ... Sections lainnya ... */}

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

            {/* Testimoni Section */}
            <section id="testimoni" className="testimoni-section py-5">
                <div className="container">
                    <h2 className="section-title">Testimoni</h2>
                    {/* Video Testimonial */}
                    <div className="mb-4 d-flex justify-content-center">
                        <video className="testimonial-video" controls>
                            <source src={require("./assets/testimonial-video.mp4")} type="video/mp4" />
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