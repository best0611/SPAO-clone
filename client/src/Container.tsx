import ProductTable from "./ProductTable";
import {
  productsBest,
  productNew,
  productStylePick,
} from "./products/ProductArr";
import { useState } from "react";
import ProductSlider from "./ProductSlider";
import { lookbookArr, snapArr, trendpickArr } from "./products/MegazineArr";
import MegazineSlider from "./MegazineSlider";
import MegazineTable from "./MegazineTable";

interface Props {
  title: string;
}
export default function Container({ title }: Props) {
  const [selectedComp, setSelectedComp] = useState("woman");

  const handleShowTable = (keyword: string) => {
    setSelectedComp(keyword);
  };

  return (
    <div className="containerbox">
      <div className="containerbox--title">{title}</div>
      {title === "위클리 베스트" && (
        <>
          <div className="containerbox--btn">
            <ul>
              {["woman", "man", "kids", "pajama"].map((el) => (
                <li
                  key={el}
                  className={`bestCategory ${
                    selectedComp === el ? "bestCategory--active" : ""
                  }`}
                  onClick={() => handleShowTable(el)}
                >
                  {el === "woman" && "우먼"}
                  {el === "man" && "맨"}
                  {el === "kids" && "키즈"}
                  {el === "pajama" && "파자마"}
                  {selectedComp === el && (
                    <span className="activeCircle"></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="containerbox--best">
            {selectedComp === "woman" && (
              <ProductTable arr={productsBest} gender={0} />
            )}
            {selectedComp === "man" && (
              <ProductTable arr={productsBest} gender={1} />
            )}
            {selectedComp === "kids" && (
              <ProductTable arr={productsBest} gender={2} />
            )}
            {selectedComp === "pajama" && (
              <ProductTable arr={productsBest} gender={4} />
            )}
          </div>
        </>
      )}
      {title === "신상품" && (
        <ProductSlider arr={productNew} slide={4} type={"new"} />
      )}
      {title === "스타일 픽" && (
        <ProductSlider arr={productStylePick} slide={3} type={"style"} />
      )}
      {title === "트랜드 픽" && <MegazineTable arr={trendpickArr} />}
      {title === "룩북" && (
        <MegazineSlider arr={lookbookArr} type={"lookbook"} />
      )}
      {title === "스냅" && <MegazineSlider arr={snapArr} type={"snap"} />}
    </div>
  );
}
