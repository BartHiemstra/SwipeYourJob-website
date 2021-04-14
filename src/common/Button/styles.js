import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.color || '#48d7ba'};
  color: ${(props) => (props.color ? '#000000' : '#FFFFFF')};
  border-color: #000000
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '3px solid #191919' : '0px')};
  border-radius: 8px;
  height: 60px;
  outline: none;
  cursor: pointer;
  margin-top: 0.625rem;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  max-width: 180px;
  margin: 0rem 2rem 0rem 0rem;

  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
  }

  @media only screen and (max-width: 1024px) {
    width: ${(props) => (props.width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${(props) => (props.width ? '140px' : '100%')};
    margin: 0rem 1rem 0rem 0rem;
  }

  @media only screen and (max-width: 480px) {
    width: ${(props) => (props.width ? '130px' : '100%')};
  }
`;
