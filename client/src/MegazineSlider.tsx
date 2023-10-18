"use client";
import { megazineObject } from "./products/MegazineArr";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";

SwiperCore.use([Navigation, Pagination, Autoplay]);
interface Props {
  arr: megazineObject[];
  type: string;
}

export default function MegazineSlider({ arr, type }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [modalId, setModalId] = useState<number>(0);
  const showModal = (id: number) => {
    dialogRef.current?.showModal();
    setModalId(id);
  };
  const closeModal = () => {
    dialogRef.current?.close();
    setModalId(0);
    console.log("닫음");
  };
  useEffect(() => {
    // 모달창 외부영역 클릭시, 모달창 닫기 구현
    if (dialogRef.current) {
      const dialogElement = dialogRef.current as HTMLDialogElement;

      dialogElement.addEventListener("click", (event) => {
        const dialogArea = dialogElement.getBoundingClientRect();
        if (
          event.clientX < dialogArea.left ||
          event.clientX > dialogArea.right ||
          event.clientY < dialogArea.top ||
          event.clientY > dialogArea.bottom
        ) {
          dialogElement.close();
          setModalId(0);
        }
      });
    }
  }, []);
  return (
    <>
      {type === "lookbook" && (
        <>
          <Swiper
            className="megazine-swiper"
            spaceBetween={20}
            slidesPerView={2.5}
            navigation
            loop={true}
            speed={700}
          >
            {arr.map((el) => (
              <SwiperSlide
                className="megazine-swiper--slide"
                key={el.id}
                onClick={() => showModal(el.id)}
              >
                <img src={el.src} className="megazine-swiper--img" />
                <div className="bg move"></div>
                <div className="megazine-swiper--text ">
                  <div className="megazine-swiper--text--subtitle">
                    {el.subtitle}
                  </div>
                  <div className="megazine-swiper--text--title">
                    <span>{el.title}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
      <dialog ref={dialogRef} className="dialog">
        {modalId > 0 && (
          <div>
            <Modal modalId={modalId} />
          </div>
        )}
        {/* <button onClick={closeModal}>X버튼</button> */}
      </dialog>
      {type === "snap" && (
        <>
          <Swiper
            className="megazine-swiper--snap"
            spaceBetween={50}
            slidesPerView={5}
            navigation
            autoplay={{ delay: 2000 }}
            loop={true}
            speed={400}
            centeredSlides={true}
          >
            {arr.map((el) => (
              <SwiperSlide
                className="megazine-swiper--slide snap--slide"
                key={el.id}
              >
                <a href={el.page}>
                  <img className="megazine-swiper--img" src={el.src} />
                  <div className="hashtags">
                    {el.hashtag?.map((tag, idx) => (
                      <span key={idx}>#{tag}</span>
                    ))}
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
}
