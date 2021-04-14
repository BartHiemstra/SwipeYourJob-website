import styled from 'styled-components';

export const ContactContainer = styled.div`
  padding: 5rem 0;

  @media only screen and (min-width: 768px) {
    height: 100vh;
  }
`;

export const Contact = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
`;

export const IconContainer = styled.div`
  @media only screen and (min-width: 980px) {
    padding: 10rem 7rem;
  }
`;

export const FormGroup = styled.form`
  width: 100%;
  max-width: 540px;
  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;

export const Span = styled.span`
  display: block;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`;

export const ButtonContainer = styled.div`
  text-align: end;
  position: relative;
  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`;

export const Chat = styled.p`
  color: rgba(2, 7, 62, 0.8);
  display: block;
  position: relative;
  max-width: 200px;
  cursor: pointer;
  margin-bottom: 0.625rem;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;