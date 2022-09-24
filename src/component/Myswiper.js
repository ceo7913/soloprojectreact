import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // basic
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/css"; //basic
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Navigation, Pagination]);

const Myswiper = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      pagination={{ Clickable: true }}
      spaceBetween={30}
      mousewheel={{ Control: true }}
      parallax={true}
      speed={600}>
      <div className="swiper-container">
        <div className="div-img">
          <img
            alt=""
            src="https://www.baemin.com/_next/static/images/scroll@2x.png"
            className="fg-img"
          />
        </div>
        <div className="color1-top">
          <img
            src="https://www.baemin.com/_next/static/images/logo@2x.png"
            alt="배달의민족"
          />
          <ul className="nav">
            <li>
              <img
                role="button"
                src="https://www.baemin.com/_next/static/images/iconFacebook@2x.png"
                alt="페이스북 가기"
              />
            </li>
            <li>
              <img
                role="button"
                src="https://www.baemin.com/_next/static/images/iconInstagram@2x.png"
                alt="인스타그램 가기"
              />
            </li>
            <li>
              <img
                role="button"
                src="https://www.baemin.com/_next/static/images/iconBlog@2x.png"
                alt="네이버 블로그 가기"
              />
            </li>
            <li>
              <img
                role="button"
                src="https://www.baemin.com/_next/static/images/iconYoutube@2x.png"
                alt="유튜브 가기"
              />
            </li>
          </ul>
        </div>
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="swiper-slide color-1">
              <a href="https://www.naver.com/" className="right-top-img">
                <img
                  src="https://www.baemin.com/_next/static/images/rider-button-pc@2x.png"
                  alt="rider"
                  draggable="false"
                />
              </a>
              <div className="color1-mid">
                <div className="color1-mid-1">
                  <img
                    src="https://www.baemin.com/_next/static/images/main_text_05@2x.png"
                    alt="공복에 떡볶이가 그리울 때"
                  />
                </div>
                <div className="color1-mid-2">
                  <div className="mid2-left">
                    <label>앱스토어 다운로드</label>
                    <div className="mid-2-button">
                      <button className="mid-btn1"></button>
                      <button className="mid-btn2"></button>
                    </div>
                  </div>
                  <div className="mid2-right">
                    <label>QR코드 다운로드</label>
                    <img
                      src="https://www.baemin.com/_next/static/images/qrcode@3x.png"
                      alt="qr코드 이용해 앱 다운로드하기"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide color-2">
              <div></div>
              <a href="https://www.naver.com/" className="right-top-img">
                <img
                  src="https://www.baemin.com/_next/static/images/rider-button-pc@2x.png"
                  alt="rider"
                  draggable="false"
                />
              </a>
              <div className="color1-mid">
                <div className="color1-mid-1">
                  <img
                    src="https://www.baemin.com/_next/static/images/ctn01_text_01@2x.png"
                    alt="바로 그거! 배민에 다 있다"
                  />
                </div>
                <div className="color1-mid-2">
                  <div className="mid2-left ptag">
                    <p>3천만 이상이 선택한 배달의 민족,</p>
                    <p>업계 최다 배달가능 업소 보유 중!</p>
                    <span>(2017년 11월 기준)</span>
                  </div>
                  <div className="rider-img">
                    <img
                      className="max-up"
                      src="https://www.baemin.com/_next/static/images/img-bike@2x.png"
                      alt=""
                    />
                  </div>
                  <div className="rider-img2">
                    <img
                      className="max-up"
                      alt=""
                      src="https://www.baemin.com/_next/static/images/img-road@2x.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  );
};

export default Myswiper;
