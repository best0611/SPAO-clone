import { lookbookArr } from "./products/MegazineArr";
import { productLookBook } from "./products/ProductArr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./css/modal.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

type Props = {
  modalId: number;
};

export default function Modal({ modalId }: Props) {
  const lookbook = lookbookArr.filter((val) => val.id === modalId)[0];
  return (
    <>
      <div className="modal_box">
        <div className="modal_section modal_section--01">
          <Swiper
            className="modal_section--swiper"
            slidesPerView={1}
            loop={true}
            speed={700}
            autoplay={{ delay: 2000 }}
          >
            {lookbook.modal?.imgs.map((img, idx) => (
              <>
                <SwiperSlide key={idx} className="modal_section--swiper slide">
                  <img src={img} />
                </SwiperSlide>
              </>
            ))}
          </Swiper>
        </div>
        <div className="modal_section modal_section--02">
          <div className="modal_section--02 subtitle">{lookbook.subtitle}</div>
          <div className="modal_section--02 title">{lookbook.title}</div>
          <div className="modal_section--02 contents">
            {lookbook.modal?.contents.map((content, idx) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
          <div className="modal_section--02 relatedBox">
            <div className="modal_section--02 text">연관 상품</div>
            <div className="modal_section--02 relateds">
              {lookbook.modal?.related.map((el, idx) => (
                <div key={idx} className="modal_secton--02 relateds--box">
                  <img
                    src={productLookBook.filter((val) => val.id === el)[0].src}
                  />
                  <div className="modal_section--02 pdname">
                    {productLookBook.filter((val) => val.id === el)[0].name}
                  </div>
                  <div className="modal_section--02 pdprice">
                    {productLookBook
                      .filter((val) => val.id === el)[0]
                      .price.toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
