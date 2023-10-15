import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { ProductObject } from "./products/ProductArrType";

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface Props {
  arr: ProductObject[];
  slide: number;
}
const StyledSwiper = styled(Swiper)``;

export default function ProductSlider({ arr, slide }: Props) {
  const ColorSpan = styled.span`
    display: inline-block;
    margin-right: 3px;
    box-shadow: 1cap;
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.color};
    border: 0.5px solid lightgray;
  `;

  return (
    <>
      <StyledSwiper
        className="swiper-banner"
        spaceBetween={60}
        slidesPerView={slide}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        loopAdditionalSlides={1}
      >
        {arr.map((el) => (
          <SwiperSlide className="thumbnail" key={el.id}>
            <div className="prdImg">
              <a href="">
                <img className="prdImg--img" src={el.src} />
              </a>
            </div>
            <div className="description">
              <div className="productname--text">{el.name}</div>
              <div className="pricebox">
                <span className="pricebox--current">
                  {(
                    Math.round((el.price * (100 - el.sale)) / 10000) * 100
                  ).toLocaleString()}
                </span>
                {el.sale > 0 && (
                  <>
                    <span className="pricebox--before">
                      {el.price.toLocaleString()}
                    </span>
                    <span className="pricebox--percent">{el.sale}%</span>
                  </>
                )}
              </div>
              <div className="color">
                {el.colors.map((color) => (
                  <ColorSpan color={color}></ColorSpan>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}
