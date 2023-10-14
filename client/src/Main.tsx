import Slider from "./Slider";
import Header from "./Header";
import Container from "./Container";
// import { productsBest } from "./SliderImageArr";

// import {Outlet} from 'react-router-dom'
export default function Main() {
  return (
    <div>
      <Header />
      <Slider />
      <Container title="위클리 베스트" />
      <Container title="신상품" />
      <Container title="스타일 픽" />
      <Container title="트랜드 픽" />
      <Container title="룩북" />
      <Container title="스냅" />
      {/* fixedban */}
      {/* footer */}
    </div>
  );
}
