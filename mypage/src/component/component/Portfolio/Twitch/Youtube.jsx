import React from 'react';
import './css/style.css';

const Youtube = () => {
  return (
    <div className='youtube'>
      <div id="wrapper">

        <nav id="youtube-top-nav">

          <div className="youtube-top-wrap flex-align-between">
            <div className="nav-left flex-align-start">
              <button type="button" className="btn-menu"></button>
              <h1>
                <button>
                  <img src="https://via.placeholder.com/90x20" alt=''></img>
                </button>
              </h1>
            </div>

            <div className="nav-center flex-align-start">
              <div className="search-wrap flex-align-start">
                <input type="text" placeholder="검색"></input>
                <button type="button" className="btn-search"></button>
              </div>
              <button className="btn-voice"></button>
            </div>

            <div className="nav-right flex-align-end">
              <button type="button" className="btn-menu btn-menu-1"></button>
              <button type="button" className="btn-menu btn-menu-2"></button>
              <button className="btn-login">로그인</button>
            </div>
          </div>
          
        </nav>

        <nav id="youtube-left-nav">
          <div id="youtube-left-content">

            <div className="nav-section">
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-1"></i>
                      <span>홈</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-2"></i>
                      <span>탐색</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-3"></i>
                      <span>구독</span>
                    </button>
                  </li>
                </ul>
              </div>

            </div>

            <div className="nav-section">
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>보관함</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-5"></i>
                      <span>시청 기록</span>
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="nav-section">
              
              <div className="nav-body">
                <div className="txt-wrap">
                  <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p>
                  <button className="btn-login">로그인</button>
                </div>
              </div>
              
            </div>

            <div className="nav-section">

              <div className="nav-title-wrap">
                <h2>인기 YOUTUBE</h2>
              </div>
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-6"></i>
                      <span>음악</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-7"></i>
                      <span>스포츠</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-8"></i>
                      <span>게임</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-9"></i>
                      <span>영화</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-10"></i>
                      <span>뉴스</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-11"></i>
                      <span>실시간</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-12"></i>
                      <span>학습</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-13"></i>
                      <span>360° 동영상</span>
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="nav-section">
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>채널 탐색</span>
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="nav-section">

              <div className="nav-title-wrap">
                <h2>YOUTBUE 더보기</h2>
              </div>
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-6"></i>
                      <span>YouTube Premium</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-7"></i>
                      <span>실시간</span>
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="nav-section">
              
              <div className="nav-body">
                <ul>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>설정</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>신고 기록</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>고객센터</span>
                    </button>
                  </li>
                  <li>
                    <button className="flex-align-start">
                      <i className="icon icon-4"></i>
                      <span>의견 보내기</span>
                    </button>
                  </li>
                </ul>
              </div>
              
            </div>

            <footer id="youtube-footer">
              <div className="txt-wrap">
                <button>정보</button>
                <button>보도자료</button>
                <button>저작권</button>
                <button>문의하기</button>
                <button>크리에이터</button>
                <button>광고</button>
                <button>개발자</button>
              </div>
              <div className="txt-wrap">
                <button>약관</button>
                <button>개인정보처리방침</button>
                <button>정책 및 안전</button>
                <button>Youtube 자동의 원리</button>
                <button>새로운 기능 테스트하기</button>
              </div>
              <div className="txt-wrap">
                <p>Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet you Nice to meet youNice to meet you</p>
              </div>
            </footer>

          </div>
        </nav>

        <main id="youtube-main" role="main">
          
          <div id="youtube-main-content">
            <ul className="flex-align-between">
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
              <li>
                <div className="video-thumbnail">
                  <button>
                    <img src="https://via.placeholder.com/1024x640" alt=''></img>
                    <span className="time">00:20</span>
                  </button>
                </div>

                <div className="video-txt-wrap flex-align-start">
                  <button className="image-link">
                    <img className="profile" src="https://via.placeholder.com/36" alt=''></img>
                  </button>

                  <div className="txt">
                    <h3>
                      <button className="title-link">
                        [무한도전] 무한상사 특집편! 퇴근... 할려면 하시던가요.
                      </button>
                    </h3>
                    
                    <p><button className="channel-link">MBC 엔터테이먼트</button></p>
                    
                    <div className="txt-bottom">
                      <span className="count">조회수 71만회</span>
                      <span className="date">6개월 전</span>
                    </div>
                  </div>

                </div>
              </li>
            </ul>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Youtube;