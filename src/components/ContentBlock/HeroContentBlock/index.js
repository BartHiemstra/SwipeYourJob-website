import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";

import HeroImage from "../../../common/HeroImage";
import SvgIcon from "../../../common/SvgIcon";
import SvgIconHero from "../../../common/SvgIconHero";
import GradientButton from "../../../common/GradientButton";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, t, id }) => {
  return (
    <S.HeroContainer>
      <Row type="flex" justify="center" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Fade bottom>
            <SvgIconHero src={'logo_name.svg'} width="auto" height="25px" />
          </Fade>
          <Fade bottom>
            <S.ContentWrapper>
              <h6>{t(title) }</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <GradientButton
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => window.open('http://eepurl.com/hvA9nL', "_blank")}
                      >
                        {t(item.title)}
                      </GradientButton>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Fade>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Fade bottom>
            <HeroImage
              src={icon}
              className="about-block-image"
              width="100%"
              height="100%"
            />
          </Fade>
        </Col>
      </Row>
    </S.HeroContainer>
  );
};

export default withTranslation()(RightBlock);
