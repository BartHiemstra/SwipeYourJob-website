import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../common/SvgIcon";

import * as S from "./styles";

const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, section, id, t }) => {
  return (
    <S.MiddleBlock>
      <Row type="flex" justify="center" align="middle" id={id}>
        <Fade top>
        <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section && typeof section === "object" && section.map((item, id) => {
                      return (
                        <Col key={id} span={7}>
                          <SvgIcon src={item.icon} width="80px" height="80px" />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })
                  }
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
        </Fade>
      </Row>
    </S.MiddleBlock>
  );
};

export default withTranslation()(MiddleBlock);
