import styled from "styled-components";
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
  const ContainerBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    div {
      width: 250px;
      img {
        width: 80%;
      }
    }
  `;

  return (
    <div
      className="containerbox"
      style={{ height: "fit-content", width: "1240px" }}
    >
      <div>{title}</div>
      {title === "위클리 베스트" && (
        <>
          <button onClick={() => handleShowTable("woman")}>우먼</button>
          <button onClick={() => handleShowTable("man")}>맨</button>
          <button onClick={() => handleShowTable("kids")}>키즈</button>
          <button onClick={() => handleShowTable("pajama")}>파자마</button>
          <ContainerBox>
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
          </ContainerBox>
        </>
      )}
      {title === "신상품" && <ProductSlider arr={productNew} slide={3} />}
      {title === "스타일 픽" && (
        <ProductSlider arr={productStylePick} slide={4} />
      )}
      {title === "트랜드 픽" && <MegazineTable arr={trendpickArr} />}
      {title === "룩북" && (
        <MegazineSlider arr={lookbookArr} type={"lookbook"} />
      )}
      {title === "스냅" && <MegazineSlider arr={snapArr} type={"snap"} />}
    </div>
  );
}
