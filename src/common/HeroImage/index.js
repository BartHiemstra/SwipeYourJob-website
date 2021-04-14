import * as S from "./styles";

const HeroImage = ({ src, width, height }) => (
    <S.Container>
        <img src={`/assets/img/${src}`} alt={src} with={width} height={height} />
    </S.Container>
);

export default HeroImage;
