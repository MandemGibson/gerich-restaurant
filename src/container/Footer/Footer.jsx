import React from 'react';
import { SubHeading } from '../../components';
import { FooterOverlay, Newsletter } from '../../components';
import {FiFacebook, FiTwitter, FiInstagram} from "react-icons/fi"

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding'>
    <FooterOverlay />
    <Newsletter/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact"></div>
      <div className="app__footer-links_logo"></div>
      <div className="app__footer-links_work"></div>
    </div>
    <div className="footer__copyright"></div>
  </div>
);

export default Footer;
