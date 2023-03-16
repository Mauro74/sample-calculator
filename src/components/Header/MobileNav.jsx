import React from "react";
import { Menu, SubHeader, SubMenu, SubContainer } from "./styles";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";

const MobileNav = () => {
  return (
    <Menu>
      <Accordion>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Platform</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <SubMenu>
              <li>
                <a href="https://www.scalable.com/platform/">Platform Overview</a>
              </li>
              <li>
                <a href="https://www.scalable.com/platform/digital-experience-adoption/">Digital Experience &amp; Adoption</a>
              </li>
              <li>
                <a href="https://www.scalable.com/platform/advanced-workforce-and-systems-analytics/">
                  Advanced Workforce &amp; Systems Analytics
                </a>
              </li>
              <li>
                <a href="https://www.scalable.com/platform/next-gen-itam/">Next Gen ITAM</a>
              </li>
            </SubMenu>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Solutions</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <SubContainer>
              <SubHeader>Technology</SubHeader>
              <SubMenu>
                <li>
                  <a href="https://www.scalable.com/solutions/microsoft-365-optimization/">Microsoft 365 Optimization</a>
                </li>
                <li>
                  <a href="https://www.scalable.com/solutions/google-workspace/">Google Workspace</a>
                </li>
              </SubMenu>

              <SubHeader>Use Case</SubHeader>
              <SubMenu>
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
              </SubMenu>
              <SubHeader>Role</SubHeader>
              <SubMenu>
                <li>
                  <a href="https://www.scalable.com/solutions/cio-cdo/">CIO / CDO</a>
                </li>
                <li>
                  <a href="https://www.scalable.com/solutions/chief-hr-officer/">Chief HR Officer</a>
                </li>
                <li>
                  <a href="https://www.scalable.com/solutions/it-service-provider/">IT Service Provider</a>
                </li>
              </SubMenu>
            </SubContainer>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>Resources</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <SubMenu>
              <li>
                <a href="https://www.scalable.com/resource_categories/whitepapers/">Whitepapers</a>
              </li>
              <li>
                <a href="https://www.scalable.com/resource_categories/ebooks/">eBooks</a>
              </li>
              <li>
                <a href="https://www.scalable.com/resource_categories/case-studies/">Case Studies</a>
              </li>
              <li>
                <a href="https://www.scalable.com/resource_categories/webinars/">Webinars</a>
              </li>
              <li>
                <a href="https://www.scalable.com/resource_categories/videos/">Videos &amp; Podcasts</a>
              </li>
              <li>
                <a href="https://www.scalable.com/resource_categories/datasheets/">Datasheets</a>
              </li>
              <li>
                <a href="https://www.scalable.com/blog/">Blog</a>
              </li>
            </SubMenu>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>About</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <SubMenu>
              <li>
                <a href="https://www.scalable.com/about-us/">About Scalable</a>
              </li>
              <li>
                <a href="https://www.scalable.com/about-us/management-team/">Management Team</a>
              </li>
              <li>
                <a href="https://www.scalable.com/about-us/partners/">Partners</a>
              </li>
              <li>
                <a href="https://www.scalable.com/about-us/careers/">Careers</a>
              </li>
              <li>
                <a href="https://www.scalable.com/about-us/contact/">Contact</a>
              </li>
            </SubMenu>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Menu>
  );
};

export default MobileNav;
