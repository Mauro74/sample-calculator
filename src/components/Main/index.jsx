import React from "react";
import { Link } from "react-scroll";
import { FaChevronCircleRight } from "react-icons/fa";
import Container from "../../layout/container";
import Cta from "../../elements/Cta";
import { Section, Intro, Box, BottomBox, Actions, Image, Chevron, AcuLogo } from "./styles";
import AcumenLogo from "../../assets/images/acumen-logo.svg";
import PeopleImg from "../../assets/images/people.svg";
import ChevronImg from "../../assets/images/chevron-down.svg";

const Main = () => {
  return (
    <Section>
      <Container color="white">
        <h1 className="title">Value calculator</h1>
        <h3>Estimate the business value you could achieve with Acumen</h3>
        <Intro>
          At Scalable, our mission is to help optimize employee experience, productivity and costs. Our findings have resulted in IT
          departments being able to make significant savings in both direct and indirect costs as well as delivering enhanced digital
          experiences for employees across their organization, wherever they choose to work.
        </Intro>
        <Box>
          <p className="orange">This value calculator focuses on 3 critical capabilities that help optimize your IT investments</p>
          <ol>
            <li>Identifying inefficient processes and optimizing to improve productivity and improve processing times</li>
            <li>
              Right-sizing the software estate: eliminating or reassigning unused software, aligning license type to needs based on accurate
              usage insights and recommendations
            </li>
            <li>Driving adoption of standard corporate applications and reduction of category sprawl to optimize ROI</li>
          </ol>
        </Box>
        <BottomBox>
          <Actions>
            <AcuLogo src={AcumenLogo} />
            <Cta text="Watch Demo" bgColor="orange" textColor="white" url="https://www.scalable.com/#">
              <FaChevronCircleRight />
            </Cta>
            <Link smooth={true} duration={500} offset={-120} to="calc">
              <Chevron>
                <p>Get started</p>
                <img src={ChevronImg} />
              </Chevron>
            </Link>
          </Actions>
          <Image>
            <img src={PeopleImg} style={{ width: "70%" }} />
          </Image>
        </BottomBox>
      </Container>
    </Section>
  );
};

export default Main;
