import "./css/footer.scss";
export default function Footer() {
  return (
    <>
      <div className="cboth footer">
        <div className="cboth">
          <div className="footer_section01">
            <div className="bt bt_cscenter">
              <p className="phone">1670-9600</p>
              <p>상담시간 : 오전 10시 ~ 오후 5시 (토요일, 공휴일 휴무)</p>
              <p className="email">
                email : spao@eland.co.kr(단체주문 문의)
                <br />
                email : spao_mkt@eland.co.kr(마케팅 협찬 문의)
              </p>
            </div>
            <div className="bt bt_copyright">
              (주)이랜드월드패션사업부
              <span></span>
              [사업자정보확인]
              <span></span>
              통신판매업 신고번호 : 제 2005-01053 호
              <br />
              대표이사: 최운식
              <span></span>
              서울특별시 금천구 가산디지털1로 159 (가산동) 이랜드가산동사옥
              <span></span>
              개인정보 보호책임자 : 최운식
              <br />
              사옥 주소로 상품을 발송하시면 교환·환불이 불가하므로, 교환·환불은
              사이트 내에서 신청해주시기 바랍니다.
            </div>
            <div className="wrap_bt_icon">
              <div className="emblem">
                <img src="https://spao.com/morenvyimg/emblem01.png" />
                <img src="https://spao.com/morenvyimg/emblem02.png" />
                <img src="https://spao.com/morenvyimg/emblem03.png" />
              </div>
              <div className="bt_sns">
                <a href="https://www.facebook.com/SPAOSTORY" target="_blank">
                  <img src="https://spao.com/morenvyimg/bt_sns_face.png" />
                </a>
                <a
                  href="https://instagram.com/spao_kr?igshid=1guzwlhu77ea9"
                  target="_blank"
                >
                  <img
                    src="https://spao.com/morenvyimg/bt_sns_insta.png"
                    alt="인스타그램"
                  />
                </a>
                <a
                  href="https://www.youtube.com/user/SPAOKOREA"
                  target="_blank"
                >
                  <img
                    src="https://spao.com/morenvyimg/bt_sns_you.png"
                    alt="유투브"
                  />
                </a>
                <a href="https://blog.naver.com/spaostory" target="_blank">
                  <img
                    src="https://spao.com/morenvyimg/bt_sns_blog.png"
                    alt="블로그"
                  />
                </a>
                <a href="https://post.naver.com/spaostory" target="_blank">
                  <img
                    src="https://spao.com/morenvyimg/bt_sns_post.png"
                    alt="포스트"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="footer_section02">
            <ul>
              <li>
                <a href="https://spao.com/company.html">브랜드소개</a>
              </li>
              <li>
                <a href="https://spao.com/board/store/list.html?board_no=5&category_no=">
                  오프라인 매장안내
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://spao.com/member/privacy.html">
                  <b>개인정보 처리방침</b>
                </a>
              </li>
              <li>
                <a href="https://spao.com/member/agreement.html">약관안내</a>
              </li>
              <li>
                <a href="http://www.elandethic.co.kr/" target="_blank">
                  윤리경영
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://spao.com/board/free/list.html?board_no=1">
                  공지사항
                </a>
              </li>
              <li>
                <a href="https://spao.com/myshop/membership.html">회원혜택</a>
              </li>
              <li>
                <a href="https://spao.com/processspao.html">
                  채용정보 및 인사제도
                </a>
              </li>
              <li>
                <a href="https://spao.com/board/free/faq_list.html?board_no=3&category_no=">
                  자주묻는질문 FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="cboth footer_section03">
            Copyright ⓒ 스파오닷컴 All Right Reserved.
            <a href=""></a>
          </div>
        </div>
      </div>
    </>
  );
}
