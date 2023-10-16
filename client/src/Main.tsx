import Slider from "./Slider";
import Header from "./Header";
import Container from "./Container";
import styled from "styled-components";
import "./css/product.scss";
import "./css/megazine.scss";
import "./css/header.scss";

export default function Main() {
  const BannerDiv = styled.div`
    display: flex;
    min-width: 1250px;
    width: 100%;
    cursor: pointer;
    img {
      width: 50%;
      margin: 130px 0px 50px;
      padding: 0;
    }
  `;
  return (
    <>
      <Header />
      <Slider />
      <Container title="위클리 베스트" />
      <Container title="신상품" />
      <BannerDiv>
        <img src="https://spao.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/312b6f02cf87c4fd4a1c8059efad9a0b.webp" />
        <img src="https://spao.com/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/8fb497a08683204c1bf6b72f88e286ec.webp" />
      </BannerDiv>
      <Container title="스타일 픽" />
      <Container title="트랜드 픽" />
      <Container title="룩북" />
      <Container title="스냅" />
      {/* fixedban */}
      {/* footer */}
    </>
  );
}
