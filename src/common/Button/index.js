import * as S from "./styles";
import { Link } from 'react-router-dom';

const Button = ({ color, width, children, nav, onClick }) => (
  <Link to={nav}>
    <S.Button color={color} width={width} onClick={onClick}>
      {children}
    </S.Button>
  </Link>
);

export default Button;
