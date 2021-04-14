import styled from 'styled-components';
import { Col } from 'antd';

export const MiddleBlock = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled.div`
  max-width: 720px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled.h6`
  font-size: 1.3rem;
  line-height: 1rem;
  padding: 0.5rem 0;
`;

export const MinPara = styled.p`
  font-size: 0.9rem;
`;

export const ServiceItem = styled(Col)`
  margin: 2rem 0;
  position: relative;
`;
