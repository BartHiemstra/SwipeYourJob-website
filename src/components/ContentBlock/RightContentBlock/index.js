import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../common/SvgIcon";
import Button from "../../../common/Button";
import GradientButton from "../../../common/GradientButton";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, t, id }) => {
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title) }</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return item.style == "gradient" ? (
                      <GradientButton
                        key={id}
                        color={item.color}
                        width="true"
                        nav={item.nav}
                        ext={item.ext}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {t(item.title)}
                      </GradientButton>
                    ) : (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        nav={item.nav}
                        ext={item.ext}
                        onClick={() => window.scrollTo(0, 0)}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide right>
            <SvgIcon
              src={icon}
              className="about-block-image"
              width="200px"
              height="200px"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
