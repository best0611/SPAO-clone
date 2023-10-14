import styled from "styled-components";
import { ProductObject } from "./products/ProductArrType";

interface Props {
  arr: ProductObject[];
  gender: number;
}
export default function ProductTable({ arr, gender }: Props) {
  const selectedArr = arr
    .filter((el) => el.gender.includes(gender))
    .slice(0, 8);
  const PrdUl = styled.ul`
    /* display: table; */
    width: 100%;
    min-width: 100%;
    margin: 0;
    position: relative;
    height: fit-content;
    li {
      display: inline-block;
      width: 24%;
      margin: 0 0.5% 60px;
    }
    .num {
      position: relative;
      z-index: 10;
    }
    .price_box {
      position: relative;
      height: fit-content;
    }
  `;
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
      <PrdUl>
        {selectedArr.map((el, idx) => (
          <li key={el.id}>
            <div className="box animated">
              <div className="thumbnail">
                <span className="num">{idx + 1}</span>
                <div className="prdImg">
                  <a href="">
                    <img src={el.src} alt={el.name} />
                  </a>
                </div>
              </div>
              <div className="description">
                <div className="name">
                  <a href="">
                    <span>{el.name}</span>
                  </a>
                  <img
                    src="https://spao.com/web/upload/icon_202009041749300600.png"
                    alt="관심상품 등록 전"
                    style={{ width: "20px" }}
                  />
                  <img
                    src="https://spao.com/web/upload/icon_202009041749389300.png"
                    alt="관심상품 등록 후"
                    style={{ width: "20px" }}
                  />
                </div>
                <div className="price_box">
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
              </div>
              <div className="color">
                {el.colors.map((color) => (
                  <ColorSpan color={color} />
                ))}
              </div>
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
              <div className="crema-review"></div>
            </div>
          </li>
        ))}
      </PrdUl>
    </>
  );
}
