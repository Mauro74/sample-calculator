import React, { useState } from "react";
import { FaChevronCircleRight } from "react-icons/fa";
import Container from "../../layout/container";
import Cta from "../../elements/Cta";
import {
  Section,
  TopMenu,
  TopRow,
  MainNav,
  SubNav,
  SubSub,
  Nav,
  CtaWrap,
  Logo,
  Hamburger,
  MobileNavWrap,
  MobileNavInner,
  Overlay,
  SecondaryLinks,
} from "./styles";
import LogoImg from "../../assets/images/scalable-logo-2020-rgb-01.svg";
import MobileNav from "./MobileNav";

const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <Section>
      <Container>
        <TopRow>
          <TopMenu>
            <span>
              <a href="https://www.scalable.com/support/">Product Support</a>
            </span>
            <span>
              <a href="https://www.scalable.com/blog/">Blog</a>
            </span>
            <span>
              <a href="https://www.scalable.com/about-us/contact/">Contact</a>
            </span>
          </TopMenu>
        </TopRow>
        <MainNav>
          <a href="https://scalable.com" title="Scalable Home">
            <Logo src={LogoImg} />
          </a>
          <Nav>
            <span className="item">
              <a className="nav-link" href="https://www.scalable.com/platform/">
                Platform
              </a>
              <SubNav className="sub-nav">
                <div>
                  <a href="https://www.scalable.com/platform/">Platform Overview</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/platform/digital-experience-adoption/">Digital Experience &amp; Adoption</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/platform/advanced-workforce-and-systems-analytics/">
                    Advanced Workforce &amp; Systems Analytics
                  </a>
                </div>
                <div>
                  <a href="https://www.scalable.com/platform/next-gen-itam/">Next Gen ITAM</a>
                </div>
              </SubNav>
            </span>
            <span className="item">
              <a className="nav-link">Solutions</a>
              <SubNav className="sub-nav wide">
                <SubSub>
                  <span>By Technology</span>
                  <ul>
                    <li>
                      <a href="https://www.scalable.com/solutions/microsoft-365-optimization/">Microsoft 365</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/google-workspace/">Google Workspace</a>
                    </li>
                  </ul>
                </SubSub>
                <SubSub>
                  <span>By Use Case</span>
                  <ul>
                    <li>
                      <a href="https://www.scalable.com/solutions/cost-optimization/">Cost Optimization</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/workforce-and-systems-analytics/">Workforce and Systems Analytics</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/hybrid-working/">Hybrid Working</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/digital-employee-experience/">Digital Employee Experience</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/digital-initiative-metrics/">Digital Initiative Metrics and Benchmarks</a>
                    </li>
                  </ul>
                </SubSub>
                <SubSub>
                  <span>By Role</span>
                  <ul>
                    <li>
                      <a href="https://www.scalable.com/solutions/cio-cdo/">CIO / CDO</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/chief-hr-officer/">Chief HR Officer</a>
                    </li>
                    <li>
                      <a href="https://www.scalable.com/solutions/it-service-provider/">IT Service Provider</a>
                    </li>
                  </ul>
                </SubSub>
              </SubNav>
            </span>
            <span className="item">
              <a className="nav-link" href="https://www.scalable.com/customer-stories/">
                Customers
              </a>
            </span>
            <span className="item">
              <a className="nav-link">Resources</a>
              <SubNav className="sub-nav">
                <div>
                  <a href="https://www.scalable.com/resource_categories/whitepapers/">Whitepapers</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/resource_categories/ebooks/">eBooks</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/resource_categories/case-studies/">Case Studies</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/resource_categories/webinars/">Webinars</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/resource_categories/videos/">Videos &amp; Podcasts</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/resource_categories/datasheets/">Datasheets</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/blog/">Blog</a>
                </div>
              </SubNav>
            </span>
            <span className="item">
              <a className="nav-link">About</a>
              <SubNav className="sub-nav">
                <div>
                  <a href="https://www.scalable.com/about-us/">About Us</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/about-us/management-team/">Management Team</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/about-us/partners/">Partners</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/about-us/careers/">Careers</a>
                </div>
                <div>
                  <a href="https://www.scalable.com/about-us/contact/">Contact</a>
                </div>
              </SubNav>
            </span>
          </Nav>
          <CtaWrap>
            <Cta text="Schedule Demo" bgColor="orange" textColor="white" url="https://www.scalable.com/lp-demo-request/">
              <FaChevronCircleRight />
            </Cta>
          </CtaWrap>

          <Hamburger>
            <button
              onClick={() => {
                setBurgerOpen(!burgerOpen);
              }}
              className={`hamburger hamburger--squeeze ${burgerOpen ? "is-active" : ""}`}
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            {burgerOpen && (
              <MobileNavWrap>
                <MobileNavInner>
                  <a href="https://scalable.com" title="Scalable Home">
                    <Logo src={LogoImg} style={{ width: "200px" }} />
                  </a>
                  <MobileNav />
                  <SecondaryLinks>
                    <a href="https://www.scalable.com/support/">Product Support</a>
                    <a href="https://www.scalable.com/blog/">Blog</a>
                    <a href="https://www.scalable.com/about-us/contact/">Contact</a>
                  </SecondaryLinks>
                </MobileNavInner>
                <Overlay
                  onClick={() => {
                    setBurgerOpen(!burgerOpen);
                  }}
                />
              </MobileNavWrap>
            )}
          </Hamburger>
        </MainNav>
      </Container>
    </Section>
  );
};

export default Header;
