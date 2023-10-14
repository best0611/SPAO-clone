import styled from "styled-components";
import logobk from "./img/top_logo_pc.png";
export default function Header() {
  const TopHeader = styled.div`
    display: flex;
    flex-wrap: nowrap;
  `;
  const TopMenu = styled.ul`
    display: flex;
    li {
      list-style: none;
    }
  `;
  return (
    <>
      <TopHeader>
        <div className="top_logo">
          <a href="/">
            <img src={logobk} alt="logo-bk" />
          </a>
        </div>
        <div className="top_menu">
          <TopMenu>
            <li>
              <a href="/">할인 상품</a>
            </li>
            <li>
              <a href="/">베스트</a>
            </li>
            <li>
              <a href="/">우먼</a>
            </li>
            <li>
              <a href="/">맨</a>
            </li>
            <li>
              <a href="/">컬래버레이션</a>
            </li>
            <li>
              <a href="/">키즈</a>
            </li>
            <li>
              <a href="/">커뮤니티</a>
            </li>
            <li>
              <a href="/">런칭 캘린더</a>
            </li>
            <li>
              <a href="/">매거진</a>
            </li>
          </TopMenu>
        </div>
        <div className="top_member"></div>
      </TopHeader>
    </>
  );
}
