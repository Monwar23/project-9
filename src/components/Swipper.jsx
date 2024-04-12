import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Swipper = () => {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src="https://ibb.co/2ZHyhQc" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    );
};

export default Swipper;