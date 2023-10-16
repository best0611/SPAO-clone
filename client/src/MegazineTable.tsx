import styled from "styled-components";
import { megazineObject } from "./products/MegazineArr";
interface Props {
  arr: megazineObject[];
}
export default function MegazineTable({ arr }: Props) {
  const TableElem = styled.a<{ num: number }>`
    display: block;
    width: 48%;
    float: ${(props) => (props.num % 2 === 0 ? "right" : "left")};
    margin-top: ${(props) => props.num % 2 === 0 && "5%"};
    margin-bottom: ${(props) => props.num % 2 !== 0 && "5%"};
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
    }
  `;
  return (
    <div className="megazine_box">
      {arr.map((el) => (
        <TableElem href={el.page} key={el.id} num={el.id}>
          <img className="megazine_box--img" src={el.src} />
          <div className="megazine_box--text">
            {el.title} | {el.subtitle}
          </div>
        </TableElem>
      ))}
    </div>
  );
}
