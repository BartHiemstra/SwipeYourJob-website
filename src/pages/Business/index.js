import { lazy } from "react";
import ContactInfo from "../../content/ContactInfo.json";

const ContactFrom = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Business = () => {
  return (
    <Container>
      <ContactFrom
        title={ContactInfo.title}
        content={ContactInfo.text}
        id="contact"
      />
    </Container>
  );
};

export default Business;
