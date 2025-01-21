import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSlideEffect() {
  return (
    <Swiper
      spaceBetween={30}
      effect={"fade"}
      speed={1500}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination, EffectFade, Autoplay]}
      className="mySwiper w-100 h-100"
      autoplay={{ delay: 2500 }}
    >
      <SwiperSlide>
        <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
          <h1>Specail For Today</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-3">
            Shop Now
          </button>
        </div>
        <img
          style={{ filter: "brightness(50%)" }}
          src="https://cdn.thewirecutter.com/wp-content/media/2024/07/laptopstopicpage-2048px-3685-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <div className="position-absolute z-3 top-50 start-50 translate-middle text-light text-center font-poppins">
          <h1>Specail For Today</h1>
          <p>Lorem ipsum dolor sit amet.</p>
          <button className="btn btn-outline-light rounded-0 px-4 fs-5 py-2 mt-3">
            Shop Now
          </button>
        </div>
        <img
          style={{ filter: "brightness(50%)" }}
          src="https://cdn.mos.cms.futurecdn.net/eokugfjL7Ce62BgPVnm7XT.jpg"
          alt=""
          className="w-100 h-100 object-fit-cover"
        />
      </SwiperSlide>
      
    </Swiper>
  );
}

export default SwiperSlideEffect;
