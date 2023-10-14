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
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  margin-bottom: 70px;
`;
const SliderImage = styled.img`
  width: 100%;
  opacity: 10;
`;
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
  const BeforePrice = styled.span`
    text-decoration: line-through;
    color: lightgray;
  `;
  const SalePercent = styled.span`
    color: red;
  `;
  return (
    <>
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={slide}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
      >
        {arr.map((el) => (
          <SwiperSlide key={el.id}>
            <SliderImage src={el.src} />
            <div>{el.name}</div>
            <div>
              <span>
                {(
                  Math.round((el.price * (100 - el.sale)) / 10000) * 100
                ).toLocaleString()}
              </span>
              {el.sale > 0 && (
                <>
                  <BeforePrice>{el.price.toLocaleString()}</BeforePrice>
                  <SalePercent>{el.sale}%</SalePercent>
                </>
              )}
            </div>
            <div>
              {el.colors.map((color) => (
                <ColorSpan color={color}></ColorSpan>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}
