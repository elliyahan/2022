import React from 'react';
import './css/reset.css';
import './css/style.css';

const MarketKurly = () => {
    return (
        <div id='MarketKurly'>
            <header>
                <button className="header-top">
                    <div className="inner">
                        <p>지금 가입하고 인기상품 100원에 받아가세요!</p>
                        <button className="close_btn">닫기</button>
                    </div>
                </button>
                <div className="header-mid">
                    <div className="inner cf">
                        <div className="header-mid-top cf">
                            <button className="post-info"><em>샛별·택배</em> 배송안내</button>
                            <div className="header-nav">
                                <button className="sign">회원가입</button>
                                <button className="login">로그인</button>
                                <button className="customer">고객센터 ▼</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area"><button className="logo">마켓컬리</button></div>
                <div className="header-bottom">
                    <div className="inner">
                        <ul className="header-nav">
                            <li>
                                <button className="all-menu"><button className="menu-btn">메뉴</button> 전체 카테고리</button>
                                <ul className="menu-dep1">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li><button>신상품</button></li>
                            <li><button>베스트</button></li>
                            <li><button>알뜰쇼핑</button></li>
                            <li><button>특가/혜택</button></li>
                        </ul>

                        <div className="search-box">
                            <input type="text" className="search" placeholder="검색어를 입력해주세요."></input>
                            <button type="button" className="search-btn"></button>
                        </div>

                        <div className="header-util">
                            <button className="location">위치</button>
                            <button className="like">찜</button>
                            <button className="cart">장바구니</button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="main-banner-wrap">
                <div className="inner">
                    <button className="prev-btn blind">prev</button>
                    <button className="next-btn blind">next</button>
                    <p className="banner-num">2 / 12</p>
                </div>
            </div>

            <div className="main">
                <div className="inner">
                    <div className="recommend">
                        <span>이 상품 어때요?</span>
                        <ul className="recommend-list">
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/food1.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[혼신마켓] 양배추 피클</p>
                                    <p className="now-price">4,900원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/food2.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[오뗄두스] 구움과자 2종</p>
                                    <p className="now-price">2,200원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/food3.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[LOTS OF LOVE] 손맛듬뿍 새우볶음밥</p>
                                    <p className="now-price"><em>10%</em>6,120원</p>
                                    <p className="origin-price">6,800원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/food4.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[한국의집] 육개장</p>
                                    <p className="now-price"><em>10%</em>9,900원</p>
                                    <p className="origin-price">11,000원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                        </ul>
                        <button className="next-btn">다음</button>
                    </div>

                    <div className="sub-banner"></div>

                    <div className="sale">
                        <button>놓치면 후회할 가격</button>
                        <ul className="sale-list">
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/price1.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">1등급 한우 채끝 스테이크 300g(냉장)</p>
                                    <p className="now-price"><em>35%</em>31,200원</p>
                                    <p className="origin-price">48,000원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/price2.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[프레시지] THE낙곱새</p>
                                    <p className="now-price"><em>20%</em>12,720원</p>
                                    <p className="origin-price">15,900원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/price3.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[프레시메이드] 장단콩 되비지탕</p>
                                    <p className="now-price"><em>15%</em>3,825원</p>
                                    <p className="origin-price">4,500원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/food4.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[풀치넬라] 고르곤졸라&리코타 피자</p>
                                    <p className="now-price"><em>10%</em>9,810원</p>
                                    <p className="origin-price">10,900원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                        </ul>
                        <button className="next-btn">다음</button>
                    </div>

                    <div className="popular">
                        <button>2천원대 후기가 많은 인기상품</button>
                        <p className="title-txt">최근 2주간 후기를 가장 많이 남겨주셨어요.</p>
                        <ul className="popular-list">
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/popular1.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[KF365] DOLE 실속 바나나 1kg(필리핀)</p>
                                    <p className="now-price">2,980원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/popular2.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[다향오리] 훈제오리 150g</p>
                                    <p className="now-price">2,980원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/popular3.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[서울마님] 간편 간식 떡구이 5종(냉동)</p>
                                    <p className="now-price">2,200원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <div className="img-wrap">
                                        <img src="/img/portfolio/MarketKurlyImg/product/popular4.PNG" alt=""></img>
                                    </div>
                                    <p className="product-name">[KF365] 아보카도 200g(1개)</p>
                                    <p className="now-price">2,980원</p>
                                    <button className="take-cart">장바구니</button>
                                </button>
                            </li>
                        </ul>
                        <button className="next-btn">다음</button>
                    </div>

                    <div className="sub-banner2"></div>

                    <div className="review">
                        <h2 className="title">인스타그램 고객 후기</h2>
                        <p className="review-txt">더 많은 고객 후기가 궁금하다면?</p>
                        <ul className="review-list cf">
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                            <li><button><img src="/img/portfolio/MarketKurlyImg/sample.PNG" alt=""></img></button></li>
                        </ul>
                        <button type="button" className="next-btn"></button>
                        <p className="review-txt">더 많은 고객 후기가 궁금하다면?</p>
                        <p className="kurly-instagram">@marketkurly_regram</p>
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer-info">
                    <div className="inner">
                        <div className="footer-info-left">
                            <h2>고객행복센터</h2>
                            <ul className="footer-info-list">
                                <li>
                                    <h6>1644-1107</h6>
                                    <div className="footer-info-txt-wrap">
                                        <p className="txt-one">365고객센터</p>
                                        <p className="txt-two">오전 7시 - 오후 7시</p>
                                    </div>
                                </li>
                                <li>
                                    <button>카카오톡 문의</button>
                                    <div className="footer-info-txt-wrap">
                                        <p className="txt-one">365고객센터</p>
                                        <p className="txt-two">오전 7시 - 오후 7시</p>
                                    </div>
                                </li>
                                <li>
                                    <button>1:1 문의</button>
                                    <div className="footer-info-txt-wrap">
                                        <p className="txt-one">24시간 접수 가능</p>
                                        <p className="txt-two">고객센터 운영시간에 순차적으로 답변해드리겠습니다.</p>
                                    </div>
                                </li>
                                <li>
                                    <button>대량주문 문의</button>
                                    <div className="footer-info-txt-wrap">
                                        <p className="txt-two">비회원의 경우 메일로 문의 바랍니다.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-info-right">
                            <div className="footer-policy-wrap">
                                <ul className="policy-list">
                                    <li><button>컬리소개</button></li>
                                    <li><button>컬리소개영상</button></li>
                                    <li><button>인재채용</button></li>
                                    <li><button>이용약관</button></li>
                                    <li><button><em>개인정보처리방침</em></button></li>
                                    <li><button>이용안내</button></li>
                                </ul>
                            </div>
                            <div className="footer-txt-wrap">
                                <span>법인명(상호) : 주식회사 컬리 | 사업자등록번호 : 261-81-23567 <button>사업자정보 확인</button></span>
                                <span>통신판매업 : 제 2018-서울강남-01646호 | 개인정보보호책임자 : 이원준</span>
                                <span>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동) | 대표이사 : 김슬아</span>
                                <span>입점문의 : <button>입점문의하기</button> | 마케팅제휴 : <button>business@kurlycorp.com</button></span>
                                <span>채용문의 : <button>recruit@kurlycorp.com</button></span>
                                <span>팩스 : 070 - 7500 - 6098 | 이메일 : <button>help@kurlycorp.com</button></span>
                                <span>대량주문 문의 : <button>kurlygift@kurlycorp.com</button></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copy">
                    <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br /> 마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문,품질,교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
                    <p>&copy; KURLY CORP.ALL RIGHTS RESERVED</p>
                </div>
            </footer>
        </div>
    );
};

export default MarketKurly;