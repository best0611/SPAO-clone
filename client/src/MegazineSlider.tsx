import { megazineObject } from "./products/MegazineArr";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: auto;
  margin-bottom: 70px;
`;
const StyledSlide = styled(SwiperSlide)`
  width: 484px !important;
  margin-right: 20px !important;
`;
const SliderImage = styled.img`
  width: 484px;
  opacity: 10;
`;

interface Props {
  arr: megazineObject[];
  type: string;
}

export default function MegazineSlider({ arr, type }: Props) {
  return (
    <>
      {type === "lookbook" && (
        <div>
          <StyledSwiper spaceBetween={50} slidesPerView={2} navigation>
            {arr.map((el) => (
              <StyledSlide key={el.id}>
                <SliderImage src={el.src} />
              </StyledSlide>
            ))}
          </StyledSwiper>
        </div>
      )}
      {type === "snap" && (
        <div>
          <StyledSwiper
            spaceBetween={50}
            slidesPerView={5}
            navigation
            autoplay={{ delay: 3000 }}
          >
            {arr.map((el) => (
              <StyledSlide key={el.id}>
                <SliderImage src={el.src} />
              </StyledSlide>
            ))}
          </StyledSwiper>
        </div>
      )}
    </>
  );
}
