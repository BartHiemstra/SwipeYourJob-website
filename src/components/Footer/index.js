import { lazy, Fragment } from "react";
import { Row, Col } from "antd";
import i18n from "i18next";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import * as S from "./styles";

const SvgIcon = lazy(() => import("../../common/SvgIcon"));
const Container = lazy(() => import("../../common/Container"));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade>
        <S.Footer>
          <Container>
            <Row type="flex" justify="space-between">
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Title>{t("Contact")}</S.Title>
                <S.Para>
                <a href="mailto:info@swipeyourjob.nl">
                  <S.Chat>{t(`Footer_contact_mail`)}</S.Chat>
                </a> 
                </S.Para>
                <a href="tel:+31650884876">
                  <S.Chat>{t(`Footer_contact_phone`)}</S.Chat>
                </a>
              </Col>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Title>{t("Policy")}</S.Title>
                <S.Large to="/" left="true">
                  {t("Footer_policy_terms")}
                </S.Large>
                <S.Large left="true" to="/">
                  {t("Footer_policy_privacy")}
                </S.Large>
              </Col>
            </Row>
          </Container>
        </S.Footer>
        <S.Extra>
          <Container border="true">
            <Row
              type="flex"
              justify="space-between"
              align="middle"
              style={{ paddingTop: "3rem" }}
            >
              <S.NavLink to="/" onClick={() => window.scrollTo(0, 0)}>
                <S.LogoContainer>
                  <SvgIcon
                    src="logo.svg"
                    aria-label="homepage"
                    width="101px"
                    height="55px"
                  />
                </S.LogoContainer>
              </S.NavLink>
              <S.FooterContainer>
                <SocialLink
                  href="https://twitter.com/"
                  src="social_twitter.svg"
                />
                <SocialLink
                  href="https://instagram.com/"
                  src="social_instagram.svg"
                />
                <SocialLink
                  href="https://www.linkedin.com/"
                  src="social_linkedin.svg"
                />
                <SocialLink
                  href="https://github.com/BartHiemstra/SwipeYourJob_App"
                  src="social_github.svg"
                />
              </S.FooterContainer>
            </Row>
          </Container>
        </S.Extra>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
