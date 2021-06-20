import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer (){
    return (
        <div className = "footer-container" >
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the advanture newsletter to receive our best vacation deal.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscib any time.
                </p>
                <div className="input-areas">
                    <form>
                        <input type="email" name="email" placeholder="your email" className="footer-input"/>
                        <Button buttonStyle="btn--outline">Subscribe</Button>
                    </form>
                </div>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term and Conditions</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term and Conditions</Link>
                    </div>
                </div>
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term and Conditions</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it Works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Term and Conditions</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link className="social-logo">
                            TRVL <i className="fab fa-typo3"></i>
                        </Link>
                    </div>
                    <small className="website-rights">TRVL © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="facebook">
                            <i className="fab fa-facebook-square"></i>
                        </Link>
                        <Link className="social-icon-link mail" 
                        to="/"
                        target="_blank"
                        aria-label="mail">
                            <i class="far fa-envelope"></i>
                        </Link>
                        <Link className="social-icon-link twitter" 
                        to="/"
                        target="_blank"
                        aria-label="twitter">
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin" 
                        to="/"
                        target="_blank"
                        aria-label="linkedin">
                            <i className="fab fa-linkedin-in"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>  
    )
}
export default Footer