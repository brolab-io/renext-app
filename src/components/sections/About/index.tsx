import LiveProject from "../LiveProject";
import Tutorial from "../Tutorial";
import AboutStyleWrapper from "./About.style";

const About = () => {
  return (
    <AboutStyleWrapper>
      <LiveProject />
      <Tutorial />
    </AboutStyleWrapper>
  );
};

export default About;
