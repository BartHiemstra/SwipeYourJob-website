import styled from 'styled-components';

export const HeroContainer = styled.section`
  position: relative;
  padding: 6rem 0 11rem;

  @media only screen and (max-width: 768px) {
    padding: 3rem 0 6rem;
  }

  @media only screen and (min-width: 768px) {
    height: 100vh;
    padding: 3rem 0 6rem;
    height: 92vh;
  }
`;

export const Content = styled.p`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled.div`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 480px) {
    margin: 0rem 0;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
`;
