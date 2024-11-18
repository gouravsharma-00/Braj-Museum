import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer" style={{ color: 'black', fontSmooth: 'always', fontSize: '1.2em', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
            <div className='container-top flex'>
                <div className='container-top-left flex'>
                    <p>Follow us on</p>
                    <div className='social flex'>
                        <a href='https://www.facebook.com/' target='_blank' rel='noreferrer' style={{ display: 'inline-block', padding: '9px', border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'black' }}>
                            <i className='fab fa-facebook' style={{ color: 'white', fontSize: '1.5em', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}></i>
                        </a>
                        <a href='https://www.instagram.com/' target='_blank' rel='noreferrer' style={{ display: 'inline-block', padding: '9px', border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'black' }}>
                            <i className='fab fa-instagram' style={{ color: 'white', fontSize: '1.5em', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}></i>
                        </a>
                        <a href='https://twitter.com/' target='_blank' rel='noreferrer' style={{ display: 'inline-block', padding: '9px', border: '1px solid black', borderRadius: '5px', margin: '5px', backgroundColor: 'black' }}>
                            <i className='fab fa-twitter' style={{ color: 'white', fontSize: '1.5em', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}></i>
                        </a>
                    </div>
                </div>
                <div className='container-top-right flex'>
                    <div className='footer-card'>
                        <h4>About Us</h4>
                        <p>Learn more about our mission and values.</p>
                    </div>
                    <div className='footer-card'>
                        <h4>Services</h4>
                        <p>Discover the services we offer.</p>
                    </div>
                    <div className='footer-card'>
                        <h4>Contact</h4>
                        <p>Get in touch with us.</p>
                    </div>
                    <div className='footer-card'>
                        <h4>Support</h4>
                        <p>Find out how to support our work.</p>
                    </div>
                </div>
            </div>
            <div className='container-bottom'>
                <div className='footer-text flex'>
                    <p>© 2024 Braj Museum App</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
