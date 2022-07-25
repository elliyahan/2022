import React from 'react';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiShoppingCart, FiInstagram } from "react-icons/fi";
import { BiUpArrowAlt } from "react-icons/bi";
import './css/reset.css';
import './css/global.css';
import './css/style.css';
import './css/header.css';
import './css/main.css';
import './css/footer.css';

const Kiffy = () => {
  return (
    <div id='Kiffy'>
      <header>
        <div className="pop-up"></div>
        <div className="header-wrap inner">
          <div className="header-left">
            <div className="inline-box"></div>
              <ul className="header-nav">
                <li className="header-nav-depth1"><a href="#">ABOUT KIFFY</a>
                  <ul className="header-nav-depth2 blind">
                    <li><a href="#">Show Room</a></li>
                    <li className="depth2-brand">
                      <a href="#">Brand Partners</a>
                      <GrFormNext />
                      <ul className="header-nav-depth3 blind">
                        <li><a href="#">VETRESKA 베트레스카</a></li>
                        <li><a href="#">PUR LAB 펄랩</a></li>
                        <li><a href="#">PETSVERYMUCH 페츠베리머치</a></li>
                        <li><a href="#">NORADOG 노라독</a></li>
                        <li><a href="#">MOOD ON PET 무드 온 팻</a></li>
                        <li><a href="#">TINKLYLIFE 팅클리라이프</a></li>
                        <li><a href="#">SMILE PAWS 스마일 파우</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="header-nav-depth1">
                  <a href="#">SHOP</a>
                  <ul className="header-nav-depth2 blind">
                      <li className="depth2-dog">
                        <a href="#">FOR DOG</a>
                        <GrFormNext />
                        <ul className="header-nav-depth3 blind">
                          <li><a href="#">산책/훈련</a></li>
                          <li><a href="#">간식/사료</a></li>
                          <li><a href="#">이동장</a></li>
                          <li><a href="#">장난감</a></li>
                          <li><a href="#">식기</a></li>
                          <li><a href="#">배변/위생</a></li>
                          <li><a href="#">하우스/방석</a></li>
                        </ul>
                      </li>
                      <li className="depth2-cat">
                        <a href="#">FOR CAT</a>
                        <GrFormNext />
                        <ul className="header-nav-depth3 blind">
                          <li><a href="#">이동장</a></li>
                          <li><a href="#">간식/사료</a></li>
                          <li><a href="#">장난감</a></li>
                          <li><a href="#">식기</a></li>
                          <li><a href="#">하우스/방석</a></li>
                          <li><a href="#">배변/위생</a></li>
                          <li><a href="#">스크래쳐</a></li>
                        </ul>
                      </li>
                    </ul>
                    </li>
                    <li className="header-nav-depth1"><a href="#">PROMOTION</a></li>
                    <li className="header-nav-depth1">
                        <a href="#">COMMUNITY</a>
                        <ul className="header-nav-depth2 blind">
                            <li><a href="#">Notice</a></li>
                            <li><a href="#">F&Q</a></li>
                            <li><a href="#">Review</a></li>
                            <li><a href="#">배경화면</a></li>
                        </ul>
                    </li>
                </ul>
          </div>
          <a href="#" className="header-logo">Kiffy</a>
          <div className="header-right">
            <div className="header-util-box">
              <a href="#" className="header-login">Login</a>
              <a href="#" className="header-join">Join</a>
            </div>
            <a href="#" className="header-cart"><FiShoppingCart /></a>
          </div>
        </div>
      </header>

      <div className="main-banner-wrap">
        <button className="num1 num">1</button>
        <button className="num2 num">2</button>
        <button className="prev-banner-btn"><GrFormPrevious /></button>
        <button className="next-banner-btn"><GrFormNext /></button>
        <div className="main-banner">메인배너</div>
      </div>

      <div className="main">
        <div className="inner">
          <div className="main-best">
            <div className="main-best-title title">
              <div className="main-best-title-left title-left">
                <h2>KIFFY BEST ITEM</h2>
                <p>키피에서 가장 많은 사랑을 받은 제품들을 만나보세요.</p>
              </div>
              <div className="main-best-title-right">
                <a href="#">MORE</a>
              </div>
            </div>
            <div className="main-best-item">
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/portfolio/kiffyImg/28c51c1b5b355.jpg" alt="" className="hover-img opacity"></img>
                    <img src="/img/portfolio/kiffyImg/기획전 이미지 (3).jpg" alt=""></img>
                  </a>
                  <div className="best-item-txt-box">
                    <a href="#">
                      <p>아보카도 브런치 강아지 H형 양면 하네스 세트(리드줄,풉백)</p>
                      <span>61,900원</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/portfolio/kiffyImg/8dab9fe43beb4.jpg" alt="" className="hover-img opacity"></img>
                    <img src="/img/portfolio/kiffyImg/기획전 이미지 (1).png" alt=""></img>
                  </a>
                  <div className="best-item-txt-box">
                    <a href="#">
                      <p>선인장 하우스 벨벳 숨숨집</p>
                      <span>44,900원</span>
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <img src="/img/portfolio/kiffyImg/c48f17ac3df02.jpg" alt="" className="hover-img opacity"></img>
                    <img src="/img/portfolio/kiffyImg/기획전 이미지 (2).jpg" alt=""></img>
                  </a>
                    <div className="best-item-txt-box">
                      <a href="#">
                        <p>명화 아트 고양이 박스 스크래쳐 (해바라기)</p>
                        <span>85,000원</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/96eb7551044a4.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (1).jpg" alt=""></img>
                    </a>
                    <div className="best-item-txt-box">
                      <a href="#">
                        <p>플라워 해먹 핑크 꿀잠 베드</p>
                        <span>82,000원</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/94422af19461c.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지.jpg" alt=""></img>
                    </a>
                    <div className="best-item-txt-box">
                      <a href="#">
                        <p>체리 2구 세라믹 도자기 식기</p>
                        <span>35,900원</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/11710768b9a31.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지.png" alt=""></img>
                    </a>
                    <div className="best-item-txt-box">
                      <a href="#">
                        <p>음식 캣토이 3종 (감자튀김, 라면, 훠궈)</p>
                        <span>16,900원</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
          </div>

          <div className="main-all">
            <div className="main-all-title title">
              <div className="main-all-title-left title-left">
                <h2>KIFFY ALL ITEM</h2>
                <p>키피가 선보이는 모든 아이템!</p>
              </div>
              <div className="main-all-title-right">
                <a href="#">MORE</a>
              </div>
            </div>
            <div className="main-all-item">
              <ul>
                <li>
                  <a href="#">
                    <img src="/img/portfolio/kiffyImg/30986d83af53a.png" alt="" className="hover-img opacity"></img>
                    <img src="/img/portfolio/kiffyImg/기획전 이미지 (4).jpg" alt=""></img>
                  </a>
                  <div className="all-item-txt-box">
                    <a href="#">
                      <p>핑크 투명/반투명 고양이 강아지 애견 캐리어 이동장</p>
                        <span>147,900원</span>
                        <span className="best-icon">BEST</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/606c106bd3b62.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (5).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>복숭아 낚싯대 고양이 장난감 캣토이</p>
                        <span>18,900원</span>
                        <span className="best-icon">BEST</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/8ff3201ac2895.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (6).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>수박 가방 하네스</p>
                        <span>36,900원</span>
                        <span className="best-icon">BEST</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/448d8a8532017.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>체리 해먹 고양이 스크래쳐</p>
                        <span>159,900원</span>
                        <span className="md-icon">MD</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/7c275713d8636.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (9).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>그린 투명/반투명 고양이 강아지 애견 캐리어 이동장 </p>
                        <span>147,900원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/ce998a19d0d72.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (10).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>선인장 기둥형 스크래쳐 (S/M/L)</p>
                        <span>139,000원</span>
                        <span className="md-icon">MD</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/141d469780d1e.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (11).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>완전 트리형 스크래쳐 캣타워</p>
                          <span>512,380원</span>
                          <span className="md-icon-2">MD</span>
                          <span className="hot-icon">HOT</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/11a74299b5b11.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (3).png" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>로프 리드줄 그라디언트 핑크</p>
                        <span>65,000원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/829074b1b0312.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (4).png" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>로프 리드줄 그라디언트 퍼플</p>
                        <span>65,000원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/cea9886260560.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/cea9886260560.jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>레인보우 하네스 5size (XXS~L)</p>
                        <span>49,900원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/370e4eed7d824.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (14).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>수박 삼각 스크래쳐 숨숨집</p>
                        <span>27,900원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/f53c24881d6ad.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (15).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>커스텀 2구 원형 파스텔 컬러 세라믹 식기</p>
                        <span>28,900원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/b37f319282e26.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (16).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>핫도그 트럭 고양이 스크래쳐 숨숨집</p>
                        <span>47,900원</span>
                        <span className="md-icon">MD</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/6012cdb21eb73.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/6012cdb21eb73.jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>돌체 로즈 강아지 H형 양면 하네스 / 목줄 세트 (리드줄,풉백)</p>
                        <span>29,900원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/28c51c1b5b355.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (3).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>아보카도 브런치 강아지 H형 양면 하네스 세트(리드줄,풉백)</p>
                        <span>61,900원</span>
                        <span className="best-icon-2">BEST</span>
                        <span className="md-icon-2">MD</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/8bc9d41480a6a.jpg" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/기획전 이미지 (17).jpg" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>귤 오렌지 평판형 고양이 화장실 삽 세트</p>
                        <span>62,000원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/4b40167c1b116.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/4b40167c1b116.png" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>로프 리드줄 레인보우</p>
                        <span>65,000원</span>
                        <span className="none-icon"></span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/img/portfolio/kiffyImg/0f0c10d0ab575.png" alt="" className="hover-img opacity"></img>
                      <img src="/img/portfolio/kiffyImg/0f0c10d0ab575.png" alt=""></img>
                    </a>
                    <div className="all-item-txt-box">
                      <a href="#">
                        <p>오렌지 귤 고양이 스크래쳐</p>
                        <span>44,900원</span>
                        <span className="best-icon-2">BEST</span>
                        <span className="soldout-icon">SOLDOUT</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="btn-wrap"><button className="more-btn">MORE</button></div>
          </div>

          <div className="line-img-box">
            <div className="inner">
              <div className="line-img">구분선 이미지</div>
            </div>
          </div>

          <div className="main-review">
            <div className="main-review-title title">
              <div className="main-review-title-left title-left">
                <h2>KIFFY REVIEW</h2>
                <p>키피 제품을 구매한 집사님들의 리얼 후기를 들어보세요.</p>
              </div>
              <div className="main-review-title-right">
                <a href="#">MORE</a>
              </div>
            </div>
            <div className="main-review-item">
              <ul>
                <li>
                  <a href="#">
                    <div className="content-wrap">
                      <img src="/img/portfolio/kiffyImg/review-attachment-b9b4e94b-e6f5-49ed-97f4-07743474e979.jpg" alt=""></img>
                      <div className="content-bottom">
                        <h6>저희집에서 젤 큰애한테는 조금 빠듯해보이긴하는데 다른애들은 쏙 앉혀져요 너무 귀엽네요 그리고 조립할때 아무생각없이 밑판에 체리알 먼저 고정했다가 나머지를 힘들게 조립했는데 체리알이랑 체리꼭지 먼저 조립하고 밑판을 마지막으로 하는게 그나마 간단할거같아여</h6>
                        <p>저희집에서 젤 큰애한테는 조금 빠듯해보이긴하는데 다른애들은 쏙 앉혀져요 너무 귀엽네요 그리고 조립할때 아무생각없이 밑판에 체리알 먼저 고정했다가 나머지를 힘들게 조립했는데 체리알이랑 체리꼭지 먼저 조립하고 밑판을 마지막으로 하는게 그나마 간단할거같아여</p>
                        <div className="profile-wrap">
                          <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                          <div className="profile-info-wrap">
                            <div className="profile-info">
                              <p className="profile-id">jj-1****</p>
                              <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                            </div>
                            <p className="review-date">2022-04-27</p>
                          </div>
                        </div>
                        <div className="review-item-wrap">
                          <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                          <div className="review-item-info">
                            <p>체리 해먹 고양이 스크래쳐</p>
                            <span>★★★★★</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div className="content-wrap">
                      <img src="/img/portfolio/kiffyImg/review-attachment-0b50720c-befe-4870-8a9e-4325f9e77313.jpg" alt=""></img>
                      <div className="content-bottom">
                        <h6>아이스크림가게차가 왔어요. 애기가 너무 좋아합니다. 앞문으로 들어가서 옆문으로 나오고 난리에요</h6>
                        <p>아이스크림가게차가 왔어요. 애기가 너무 좋아합니다. 앞문으로 들어가서 옆문으로 나오고 난리에요</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">flow****</p>
                                <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                              </div>
                              <p className="review-date">2022-04-25</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/d8975dfee3940.gif" alt=""></img>
                            <div className="review-item-info">
                              <p>행운의 럭키박스 Season2</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/review-attachment-f42e8141-7f66-4cd6-be23-129fc9ecc735.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>치즈 스크래처 아직도 잘 쓰고 있는데 고양이들이 위에 올라가서 무게로 짓눌러 가라앉았네요ㅠㅠ 하지만 오래썼어요! 그리고 조립한게 가라앉으면서 빠졌었는데 다시 조립해서 테이프도 붙여줬으니 한 달 더 사용할 수 있겠지요 ㅋㅋ</h6>
                          <p>치즈 스크래처 아직도 잘 쓰고 있는데 고양이들이 위에 올라가서 무게로 짓눌러 가라앉았네요ㅠㅠ 하지만 오래썼어요! 그리고 조립한게 가라앉으면서 빠졌었는데 다시 조립해서 테이프도 붙여줬으니 한 달 더 사용할 수 있겠지요 ㅋㅋ</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">pop_****</p>
                                <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                              </div>
                              <p className="review-date">2022-04-15</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/d8975dfee3940.gif" alt=""></img>
                            <div className="review-item-info">
                              <p>행운의 럭키박스 Season2</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/review-attachment-200b357f-c4f8-48b3-a2ac-c92cd1efe598.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>내가 마음에들어요 ㅎㅎ</h6>
                          <p>내가 마음에들어요 ㅎㅎ</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">j643****</p>
                                <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                              </div>
                              <p className="review-date">2022-03-20</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                            <div className="review-item-info">
                              <p>[비밀링크] 선인장 기둥형 스크래쳐 (M)</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/review-attachment-8b80f1b9-0cbd-4723-aa58-6a2436126939.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>입 짧은 강아지라 사료를 너무 안먹는데 이거는 그릇에 주자마자 고개 한번 안들고 다 먹었네요! 소분 포장되어 있어서 보관하기도 좋을 것 같아요. 다음에는 연어</h6>
                          <p>입 짧은 강아지라 사료를 너무 안먹는데 이거는 그릇에 주자마자 고개 한번 안들고 다 먹었네요! 소분 포장되어 있어서 보관하기도 좋을 것 같아요. 다음에는 연어</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">whdk****</p>
                                <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                              </div>
                              <p className="review-date">2022-03-16</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/40681edce0e5f.jpg" alt=""></img>
                            <div className="review-item-info">
                              <p>몽글이네 X 눈물/피부케어 오리/연어 사료 (1kg) / 간식 (120g) / 조이밀세트</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/b4c8c5ea7630a.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>순덕이 동영상 찍은게 안올라가요ㅠㅡㅠ 울 애기 원래 푹신한거 안좋아한데 역시나 방석깔아주면 안들어가길래 빼주니 정말 잘들어가요ㅋㅋㅋㅋㅋ 라탄이라 그런지 막 스크래쳐 처럼 쓰기도..^^헿 럭키박스 자주 해주세요♥️</h6>
                          <p>순덕이 동영상 찍은게 안올라가요ㅠㅡㅠ 울 애기 원래 푹신한거 안좋아한데 역시나 방석깔아주면 안들어가길래 빼주니 정말 잘들어가요ㅋㅋㅋㅋㅋ 라탄이라 그런지 막 스크래쳐 처럼 쓰기도..^^헿 럭키박스 자주 해주세요♥️</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">날****</p>
                              </div>
                              <p className="review-date">2022-03-14</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                            <div className="review-item-info">
                              <p>행운의 럭키박스 Season2</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/review-attachment-73088115-f904-4f71-bcbf-bd08722574cf.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>울애기 계속 핫도그 팔아요ㅠ 장난감이든 뭐든 사주면 잘 안갖고 노는데 하루죙일 안에 들어가있음</h6>
                          <p>울애기 계속 핫도그 팔아요ㅠ 장난감이든 뭐든 사주면 잘 안갖고 노는데 하루죙일 안에 들어가있음</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">smin****</p>
                              </div>
                              <p className="review-date">2022-03-10</p>
                            </div>
                          </div>
                          <div className="review-item-wrap">
                            <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                            <div className="review-item-info">
                              <p>[비밀링크] 핫도그 트럭 고양이 스크래쳐 숨숨집</p>
                              <span>★★★★★</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div className="content-wrap">
                        <img src="/img/portfolio/kiffyImg/review-attachment-73088115-f904-4f71-bcbf-bd08722574cf.jpg" alt=""></img>
                        <div className="content-bottom">
                          <h6>울애기 계속 핫도그 팔아요ㅠ 장난감이든 뭐든 사주면 잘 안갖고 노는데 하루죙일 안에 들어가있음</h6>
                          <p>울애기 계속 핫도그 팔아요ㅠ 장난감이든 뭐든 사주면 잘 안갖고 노는데 하루죙일 안에 들어가있음</p>
                          <div className="profile-wrap">
                            <img src="/img/portfolio/kiffyImg/default_profile.png" alt=""></img>
                            <div className="profile-info-wrap">
                              <div className="profile-info">
                                <p className="profile-id">smin****</p>
                                <img src="/img/portfolio/kiffyImg/npay-icon-35x15_2x.png" alt=""></img>
                              </div>
                              <p className="review-date">2022-03-10</p>
                            </div>
                          </div>
                        <div className="review-item-wrap">
                          <img src="/img/portfolio/kiffyImg/기획전 이미지 (7).jpg" alt=""></img>
                          <div className="review-item-info">
                            <p>행운의 럭키박스 Season2</p>
                            <span>★★★★★</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-banner"></div>

      <div className="bottom-sns">
        <div className="sns-title-wrap">
          <h2>kiffy instagram</h2>
          <span>키피를 인스타그램에서도 만나요!</span>
        </div>
        <div className="inner">
          <ul className="sns-content-wrap">
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/275971105_650723759544120_4066944986516728504_n.jpg" alt=""></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/274898845_3048925725358796_6417206832955143649_n.jpg" alt=""></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/274555101_213767527599829_2184339315952610455_n.jpg" alt=""></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/274385239_440323314497227_8486850071017452434_n.jpg" alt=""></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/274333215_379574426841024_1383805071107692158_n.jpg" alt=""></img>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/img/portfolio/kiffyImg/274510055_506097987786136_723717409630151986_n.jpg" alt=""></img>
              </a>
            </li>
          </ul>

            <button className="more-btn">MORE</button>
        </div>
        <div className="sns-line-wrap">
            <div className="sns-line"></div>
        </div>
      </div>

      <footer>
        <div className="footer-top">
          <div className="footer-policy">
            <h6>KIFFY 정책</h6>
            <a href="#">배송 반품 정책</a>
            <a href="#">사업자정보확인</a>
            <a href="#">개인정보취급방침</a>
            <a href="#">이용약관</a>
          </div>
          <div className="footer-cs">
            <h6>CS 센터</h6>
            <p>1533-2909</p>
            <p>AM 10:00 - PM 06:00</p>
            <p>LUNCH : PM 12:00 - PM 1:30</p>
            <p>Weekend and holiday off</p>
            <FiInstagram />
          </div>
          <div className="footer-contact">
            <h6>CONTACT</h6>
            <a href="#">info@wired.company</a>
            <h6>ADDRESS</h6>
            <p>서울 강남구 테헤란로 522, 6층</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; dot.photos 2018<br />Hosting by I'MWEB</span>
          <div className="com-info">
            <p>상호명 : (주)버틀랩</p>
            <p>CEO : 홍만의</p>
            <p>사업자등록번호 : 175-87-02074</p>
            <p>통신판매업 신고번호 2021-서울강남-04260.</p>
            <p>입금계좌 : 하나은행 231-910023-70104</p>
          </div>
        </div>
      </footer>

      <button className="talk-btn"></button>
      <button className="up-btn">
        <BiUpArrowAlt />
      </button>
    </div>
  );
};

export default Kiffy;