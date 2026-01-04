import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, FreeMode } from "swiper/modules";

export default function CardSlider({ items = [] }) {
  return (
    <div style={{ width: "100%" }}>
      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        slidesPerView={"auto"}          // 카드 폭대로
        spaceBetween={16}
        speed={9000}                    // 숫자 클수록 "천천히 오래" 움직임 (마퀴 느낌)
        freeMode={true}                 // 스르륵 흘러가게
        freeModeMomentum={false}        // 관성 튐 방지 (마퀴에 중요)
        grabCursor={true}               // PC에서 잡는 커서
        allowTouchMove={true}           // 모바일/PC 드래그 허용
        autoplay={{
          delay: 0,                     // 쉬는 시간 없이 계속 이동
          disableOnInteraction: false,  // 드래그해도 다시 자동 재개
          pauseOnMouseEnter: true,      // 마우스 올리면 멈춤(원하면 false)
        }}
      >
        {items.map((it) => (
          <SwiperSlide key={it.id} style={{ width: 240 }}>
            <article className="card" style={{
              paddingTop: "1rem",
            }}>
              <img style={{
                width: "100px"
              }} src={it.img} className="card-desc" /> 
              <h3 className="card-title">{it.title}</h3>
               <span style={{opacity : "0.6" , fontSize:"10px"}}>{it.engTitle}</span>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}