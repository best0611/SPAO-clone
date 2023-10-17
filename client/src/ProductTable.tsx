import styled from "styled-components";
import { ProductObject } from "./products/ProductArrType";
import { useState, useEffect } from "react";

interface Props {
  arr: ProductObject[];
  gender: number;
}
export default function ProductTable({ arr, gender }: Props) {
  const [heart, setHeart] = useState<number[]>(() => {
    const storedData = window.localStorage.getItem("heart");
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    window.localStorage.setItem("heart", JSON.stringify(heart));
  }, [heart]);
  const selectedArr = arr
    .filter((el) => el.gender.includes(gender))
    .slice(0, 8);
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
      <ul className="productTable">
        {selectedArr.map((el, idx) => (
          <li key={el.id}>
            <div className="box animated">
              <div className="thumbnail">
                <span className="num">{idx + 1}</span>
                <div className="prdImg">
                  <a href="">
                    <img className="prdImg--img" src={el.src} alt={el.name} />
                  </a>
                </div>
              </div>
              <div className="description">
                <div className="productname">
                  <a href="">
                    <span className="productname--text">{el.name}</span>
                  </a>
                  <img
                    src={
                      heart.includes(el.id)
                        ? "https://spao.com/web/upload/icon_202009041749389300.png"
                        : "https://spao.com/web/upload/icon_202009041749300600.png"
                    }
                    alt="관심상품"
                    style={{ width: "20px" }}
                    onClick={() => toggleHeart(el.id)}
                    className="heartbutton"
                  />
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
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
