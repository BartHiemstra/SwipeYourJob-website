import styled from 'styled-components';

export const Button = styled.button`
  background-image: linear-gradient(45deg, #55CBE0, #5EDD92);
  color: ${(props) => (props.color ? '#FFFFFF' : '#FFFFFF')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '0px' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 180px;
  margin: 0rem 2rem 0rem 0rem;
  
  &:hover {
    background-image: linear-gradient(60deg, #50C6DB, #59D88D);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
