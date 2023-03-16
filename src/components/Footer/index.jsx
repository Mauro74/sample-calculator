import React from "react";
import { FaFacebookSquare, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";
import Container from "../../layout/container";
import { Section, Sitemap, MapLink, Bottom, TandC, Social, SalesBtn, BottomInner, SocialButtons } from "./styles";

const Footer = () => {
  return (
    <Section>
      <Container color="white">
        <Sitemap>
          <div>
            <p>Platform</p>
            <MapLink>
              <a href="https://www.scalable.com/platform/">Platform Overview</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/platform/digital-experience-adoption/">Digital Experience &amp; Adoption</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/platform/advanced-workforce-and-systems-analytics/">Advanced Workforce Analytics</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/platform/next-gen-itam/">Next Gen ITAM</a>
            </MapLink>
          </div>
          <div>
            <p>Solutions</p>
            <MapLink>
              <a href="https://www.scalable.com/solutions/cost-optimization/">Cost Optimization</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/solutions/digital-employee-experience/">Digital Employee Experience</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/solutions/digital-initiative-metrics/">Digital Initiative Metrics</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/solutions/hybrid-working/">Hybrid Working</a>
            </MapLink>
          </div>
          <div>
            <p>Resources</p>
            <MapLink>
              <a href="https://www.scalable.com/support/">Product Support</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/blog/">Blog</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/lp-demo-request/">Request a Demo</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/resources2/">Library</a>
            </MapLink>
          </div>
          <div>
            <p>Company</p>
            <MapLink>
              <a href="https://www.scalable.com/about-us/">About Us</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/about-us/partners/">Partners</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/customer-stories/">Customers</a>
            </MapLink>
            <MapLink>
              <a href="https://www.scalable.com/about-us/careers/">Careers</a>
            </MapLink>
          </div>
        </Sitemap>
        <Bottom>
          <BottomInner>
            <TandC>
              <a href="https://www.scalable.com/legal-copyright-trademarks/">Terms of Use</a>
              <a href="https://www.scalable.com/privacy-cookies-policies/">Privacy Policy</a>
              <span>&copy;Scalable 2021</span>
            </TandC>
            <span className="light smaller">All other marks are the property of their respective owners.</span>
          </BottomInner>
          <Social>
            <SocialButtons>
              <a href="https://www.facebook.com/scalablesoftware">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/scalable">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/scalablesoftware">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/scalable-software/">
                <FaLinkedin />
              </a>
            </SocialButtons>
            <SalesBtn href="https://www.scalable.com/lp-contact-sales/">Contect Sales</SalesBtn>
          </Social>
        </Bottom>
      </Container>
    </Section>
  );
};

export default Footer;
