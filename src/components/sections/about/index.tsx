import LiveProject from "../liveproject";
import Tutorial from "../tutorial";
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
