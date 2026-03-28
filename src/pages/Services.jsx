import services from '../assets/services.png';
import ServiceData from '../services/ServiceData';
import {
    PageHeaderOuterContainer,
    PageHeader,
    BackgroundContainer,
    ServicesPageContainer,
    IntroContent,
    IntroText,
    IntroImageContainer,
    IntroImage,
    ServiceGrid,
    ServiceItem,
    CTASection,
    CTASectionLink,
    StyledList,
} from './pages-styles/ServicesStyles';

const ServicesPage = () => {
    return (
        <><PageHeaderOuterContainer>
            <PageHeader>OUR SERVICES</PageHeader>
        </PageHeaderOuterContainer>
            <BackgroundContainer>
                <ServicesPageContainer>
                    <IntroContent>
                        <IntroText>
                            <h2>DELIVERING QUALITY AND EXPERTISE</h2>
                            <p>
                                At Charles Aluminium, we are dedicated to delivering high-quality services that cater to your specific requirements.
                                Our team of professionals ensures each project is handled with expertise and attention to detail. We offer the following services:
                            </p>
                            <StyledList>
                                <li>Installation: Professional installation of aluminium products, ensuring precision and long-lasting durability.</li>
                                <li>Maintenance: Regular maintenance services to keep your aluminium installations in optimal condition.</li>
                                <li>Consultation: Expert consultation to help you select the most suitable aluminium solutions for your needs.</li>
                                <li>We are committed to providing top-tier service at every stage of your project.</li>
                            </StyledList>
                        </IntroText>
                        <IntroImageContainer>
                            <IntroImage src={services} alt="Our Services" />
                        </IntroImageContainer>
                    </IntroContent>

                    <h2>OUR SERVICES INCLUDE:</h2>
                    <ServiceGrid>
                        {ServiceData.map(service => (
                            <ServiceItem key={service.id}>
                                <img src={service.Image} alt={service.name} />
                                <h3>{service.name}</h3>
                            </ServiceItem>
                        ))}
                    </ServiceGrid>

                    <CTASection>
                        <h3>For more information or enquiries, feel free to contact us, and we will be happy to assist you.</h3>
                        <CTASectionLink href="/contact">Contact Us</CTASectionLink>
                    </CTASection>
                </ServicesPageContainer>
            </BackgroundContainer>
        </>
    );
};

export default ServicesPage;
