import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { ProductObject } from "./products/ProductArrType";
import { useState, useEffect } from "react";

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface Props {
  arr: ProductObject[];
  slide: number;
  type: string;
}

export default function ProductSlider({ arr, slide, type }: Props) {
  const [heart, setHeart] = useState<number[]>(() => {
    const storedData = window.localStorage.getItem("heart");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("heart", JSON.stringify(heart));
  }, [heart]);
  const ColorSpan = styled.span`
    display: inline-block;
    margin-right: 3px;
    box-shadow: 1cap;
    width: 15px;
    height: 15px;
    background-color: ${(props) => props.color};
    border: 0.5px solid lightgray;
  `;
  const toggleHeart = (id: number) => {
    heart.includes(id)
      ? setHeart(heart.filter((el) => el !== id))
      : setHeart([...heart, id]);
  };

  return (
    <>
      <Swiper
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
              <div className="productname">
                <a href="">
                  <div className="productname--text">{el.name}</div>
                </a>
                {type === "new" && (
                  <img
                    src={
                      heart.includes(el.id)
                        ? "https://spao.com/web/upload/icon_202009041749389300.png"
                        : "https://spao.com/web/upload/icon_202009041749300600.png"
                    }
                    alt="관심상품 등록 전"
                    style={{ width: "20px" }}
                    onClick={() => toggleHeart(el.id)}
                    className="heartbutton"
                  />
                )}
              </div>
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
              {type === "style" && (
                <div className="promotion">
                  {el.tags.map((tag) => (
                    <span>
                      <img
                        src={tag}
                        style={{
                          height: "15px",
                          width: "auto",
                          marginRight: "3px",
                        }}
                      />
                    </span>
                  ))}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
