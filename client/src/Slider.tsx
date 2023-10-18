import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { sliderImageArr } from "./products/SliderImageArr";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const StyledSwiper = styled(Swiper)`
  width: 100%;
  min-width: 1240px;
  height: auto;
`;
const SliderImage = styled.img`
cursor: pointer;
  width: 100%;
  opacity: 10;
`;

export default function Slider() {
  return (
    <StyledSwiper
      className="banner"
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      loopAdditionalSlides={1}
    >
      {sliderImageArr.map((val) => (
        <SwiperSlide>
          <SliderImage src={val.src} alt={val.alt} />
        </SwiperSlide>
      ))}
    </StyledSwiper>
  );
}
