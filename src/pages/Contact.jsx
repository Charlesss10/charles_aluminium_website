import { FaInstagram, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import {
  BackgroundContainer,
  PageHeaderOuterContainer,
  PageHeader,
  ContactPageContainer,
  MapContainer,
  ContactDetailsContainer,
  ContactFormContainer
} from './pages-styles/ContactStyles';
import React from 'react';
import axios from 'axios';

function ContactPage() {
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        '/api/sendEmail',
        formData, // formData is sent directly here
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.success) {
        alert(response.data.message || "Message sent successfully!");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <><PageHeaderOuterContainer>
      <PageHeader>CONTACT US</PageHeader>
    </PageHeaderOuterContainer>
      <BackgroundContainer>
        <ContactPageContainer>
          <MapContainer>
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0025729162517!2d7.005177675676517!3d4.939208239542333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d3d178527687%3A0x940cd45bb2eb538!2sCharles%20Aluminium!5e0!3m2!1sen!2sde!4v1725007856016!5m2!1sen!2sde"
              width="100%"
              height="200"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </MapContainer>

          <ContactDetailsContainer>
            <div className="branch">
              <div>
                <h2>Port Harcourt Branch (HQ)</h2>
                <p>Km 18, Rumuokoro, Airport Road,</p>
                <p>Igwuruta, Port Harcourt,</p>
                <p>Rivers State, Nigeria</p>
              </div>
              <div className="reachOut">
                {/*<p><FaPhone size={20} /> (+234) 91 6349 1771 </p>*/}
                <p><FaEnvelope size={20} /> <a href="mailto:charlesaluminium@yahoo.com"> charlesaluminium@yahoo.com</a></p>
              </div>
            </div>
            <div className="branch">
              <div>
                <h2>Orlu Branch</h2>
                <p>Km 2, Orlu, Owerri Road,</p>
                <p>Okporo, Imo State,</p>
                <p>Nigeria</p>
              </div>
              <div className="reachOut">
                <p><FaPhone size={20} /> (+234) 90 6798 8466 </p>
              </div>
            </div>
            <div className="branch">
              <div>
                <h2>Uyo Branch</h2>
                <p>Old Stadium Road, by Abak Road,</p>
                <p>Uyo, Akwa-Ibom State,</p>
                <p>Nigeria</p>
              </div>
              <div className="reachOut">
                <p><FaPhone size={20} /> (+234) 80 8118 2659 </p>
              </div>
            </div>
          </ContactDetailsContainer>

          <h1>Send Us A Message</h1>
          <ContactFormContainer>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="name">
                  <p>
                    <span>
                      <input
                        size={40}
                        maxLength={400}
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Name*"
                        value={formData.name}
                        type="text"
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        name="your-name"
                      />
                    </span>
                  </p>
                </div>
                <div className="phone">
                  <p>
                    <span>
                      <input
                        size={40}
                        maxLength={400}
                        aria-invalid="false"
                        placeholder="Phone"
                        value={formData.phone}
                        type="text"
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        name="your-phone"
                      />
                    </span>
                  </p>
                </div>
                <div className="email">
                  <p>
                    <span>
                      <input
                        size={40}
                        maxLength={400}
                        aria-required="true"
                        aria-invalid="false"
                        placeholder="Email*"
                        value={formData.email}
                        type="email"
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        name="your-email"
                      />
                    </span>
                  </p>
                </div>
                <div className="yourMessage">
                  <p>
                    <span>
                      <textarea
                        cols={40}
                        rows={10}
                        maxLength={2000}
                        aria-invalid="false"
                        placeholder="Your Message*"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        name="your-message"
                      ></textarea>
                    </span>
                  </p>
                </div>
                <div className="sendMessage">
                  <button type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>

            <div className="followUs">
              <h2>Follow Us</h2>
              {/*<a href="https://www.facebook.com/p/Charles-Aluminium-100064226793845/" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: '#1877F2' }} />
              </a>*/}
              <a href="https://www.instagram.com/charles_aluminium_company/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: '#E4405F' }} />
              </a>
              <a href="https://www.linkedin.com/company/charles-aluminium/about/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: '#0A66C2' }} />
              </a>
            </div>
          </ContactFormContainer>
        </ContactPageContainer>
      </BackgroundContainer>
    </>
  );
}

export default ContactPage;
