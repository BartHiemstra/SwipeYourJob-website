import { lazy } from "react";

import Hero from "../../content/Hero.json";
import Jongeren from "../../content/Jongeren.json";
import Bedrijven from "../../content/Bedrijven.json";
import Closing from "../../content/Closing.json";

const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Home = () => {
  return (
    <Container>
      <ContentBlock
        type="hero"
        first="true"
        title={Hero.title}
        content={Hero.text}
        button={Hero.button}
        icon="app.png"
        id="intro"
      />
      <MiddleBlock
        title={Jongeren.title}
        content={Jongeren.text}
        section={Jongeren.section}
        button={Jongeren.button}
        id="jongeren"
      />
      <ContentBlock
        type="left"
        title={Bedrijven.title}
        content={Bedrijven.text}
        section={Bedrijven.section}
        button={Bedrijven.button}
        icon="monitor.svg"
        id="bedrijven"
      />
      <ContentBlock
        type="right"
        title={Closing.title}
        content={Closing.text}
        button={Closing.button}
        icon="notification.svg"
        id="closing"
      />
    </Container>
  );
};

export default Home;
