import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
    FooterContainer,
    FooterBox,
    FooterTitle,
    SocialIcon,
    SocialIconContainer,
    FooterSignature,
    NavLink
} from './components-styles/FooterStyles';

function Footer() {
    return (
        <>
            <FooterContainer>
                <div className="inner-footer">

                    <FooterBox className="head-office">
                        <FooterTitle>Head Office</FooterTitle>
                        <div>
                            <p>Km 18, Rumuokoro, Airport Road,</p>
                            <p>Igwuruta, Port Harcourt,</p>
                            <p>Rivers State, Nigeria</p>
                        </div>

                        <div className="reachOut">
                            <p><FaPhone size={20} /> (+234) 80 8118 2659 </p>
                            <p><FaEnvelope size={20} /> <a href="mailto:charlesaluminium@yahoo.com"> charlesaluminium@yahoo.com</a></p>
                        </div>

                        <div>
                            <p>Mon - Fri: 8:00AM - 5:00PM</p>
                            <p>Sat: 8:00AM - 2:00PM</p>
                        </div>
                    </FooterBox>

                    <FooterBox className="quick-links">
                        <FooterTitle>Quick Links</FooterTitle>
                        <div>
                            <p><NavLink href="/">Home</NavLink> </p>
                            <p><NavLink href="/about">About</NavLink></p>
                            <p><NavLink href="/products">Products</NavLink></p>
                            <p><NavLink href="/services">Services</NavLink></p>
                            <p><NavLink href="/contact">Contact</NavLink></p>
                        </div>
                    </FooterBox>

                    <FooterBox className="follow-us">
                        <FooterTitle>Follow Us</FooterTitle>
                        <SocialIconContainer>
                            {/*<SocialIcon href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank">
                                <FaFacebook size={24} />
                            </SocialIcon>*/}
                            <SocialIcon href="https://www.instagram.com/charles_aluminium_company/" target="_blank">
                                <FaInstagram size={24} />
                            </SocialIcon>
                            <SocialIcon href="https://www.linkedin.com/company/charles-aluminium/about/" target="_blank">
                                <FaLinkedin size={24} />
                            </SocialIcon>
                        </SocialIconContainer>
                    </FooterBox>
                </div>

            </FooterContainer>

            <FooterSignature>
                © 2024 Charles Aluminium Designed by{" "}
                <a
                    href="https://www.linkedin.com/in/charles-eboson/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CharlesTech Solutions
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ marginLeft: "6px", marginBottom: "4px", verticalAlign: "middle" }}
                    >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>
            </FooterSignature>
        </>
    );
}

export default Footer;
