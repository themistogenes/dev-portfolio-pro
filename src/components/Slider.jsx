// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.2}
      // navigation
      // pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nulla facere, nostrum ab nemo, magni praesentium asperiores sequi harum nam consequatur. Deserunt nesciunt quaerat ea adipisci eligendi architecto doloribus ipsum.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nulla facere, nostrum ab nemo, magni praesentium asperiores sequi harum nam consequatur. Deserunt nesciunt quaerat ea adipisci eligendi architecto doloribus ipsum.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nulla facere, nostrum ab nemo, magni praesentium asperiores sequi harum nam consequatur. Deserunt nesciunt quaerat ea adipisci eligendi architecto doloribus ipsum.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet nulla facere, nostrum ab nemo, magni praesentium asperiores sequi harum nam consequatur. Deserunt nesciunt quaerat ea adipisci eligendi architecto doloribus ipsum.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}