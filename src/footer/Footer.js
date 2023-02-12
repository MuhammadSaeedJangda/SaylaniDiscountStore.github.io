import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="box-container">
        <div className="box">
          <FontAwesomeIcon icon={['fas', 'faUser']} />
          <img className="footer_logo" src='../Logo.png'/>
          <p>
            Lorem, Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Natus,
            Laudantium?
          </p>
          <div className="share">
            <a href="https://web.facebook.com/profile.php?id=100069117104078">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faFacebookF} />
              </i>
            </a>
            <a href="https://twitter.com/SaeedJangda">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
              </i>
            </a>
            <a href="https://www.instagram.com/muhammadsaeedjangda/">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
              </i>
            </a>
            <a href="www.linkedin.com/in/muhammad-saeed-jangda">
              <i>
                <FontAwesomeIcon className="fa-icon" icon={faLinkedin} />
              </i>
            </a>
          </div>
        </div>
        <div className="box">
          <h3>Contact Info</h3>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +92 313 2858 481
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faPhone} />
            </i>
            +92 313 2858 481
          </a>
          <a href="/" className="links" id="emailLink">
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            muhammadsaeedjangda@gmail.com
          </a>
          <a href="/" className="links">
            <i>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            </i>
            Karachi,Pakistan
          </a>
        </div>
        <div className="box">
          <h3>Quick Info</h3>
          <a href="#home" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Home
          </a>
          <a href="#features" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Features
          </a>
          <a href="#products" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Products
          </a>
          <a href="#categories" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Categories
          </a>
          <a href="#reviews" className="links">
            <i>
              <FontAwesomeIcon icon={faArrowRight} />
            </i>
            Reviews
          </a>
        
        </div>
        <div className="box">
          <h3>Newsletter</h3>
          <p>Subscribe For Latest Updates</p>
          <input type="text" placeholder="your email" />
          <button type="button" className="btn">
            Subscribe
          </button>
          <img src="../payment.png" alt="" />
        </div>
      </div>
      <div className="credits">
        <p>
          Created By
          {' '}
          <span>Muhammad Saeed Jangda</span>
          {' '}
          | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}