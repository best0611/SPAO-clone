import logobk from "./img/top_logo_pc.png";
import logowh from "./img/top_logo_pc_wh.png";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  }, []);

  const [hover, setHover] = useState<boolean>(false);

  return (
    <>
      <div
        className={
          scrollPosition > 50
            ? "topHeader topHeader--scroll"
            : "topHeader topHeader--unscroll"
        }
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="width1440">
          <div className="topHeader_logo">
            <a href="/">
              {scrollPosition > 50 || hover ? (
                <img src={logobk} alt="logo-wh" />
              ) : (
                <img src={logowh} alt="logo-bk" />
              )}
            </a>
          </div>
          <div className="topHeader_menu">
            <ul className="topHeader_menu__lists">
              <li>
                <a href="/" style={{ color: "#C41E20" }}>
                  할인 상품
                </a>
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
            </ul>
          </div>
          <div className="top_member"></div>
        </div>
      </div>
    </>
  );
}
