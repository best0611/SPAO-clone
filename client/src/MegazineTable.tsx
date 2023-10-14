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
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
    }
  `;
  return (
    <div style={{ width: "1250px", height: "1000px" }}>
      {arr.map((el) => (
        <TableElem href={el.page} key={el.id} num={el.id}>
          <img src={el.src} />
          <span>{el.title}</span>
          <span> | </span>
          <span>{el.subtitle}</span>
        </TableElem>
      ))}
    </div>
  );
}
