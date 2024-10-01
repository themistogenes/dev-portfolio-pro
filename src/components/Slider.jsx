// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import propertypulseThumb from "../assets/propertypulseThumb.png"
import proshopThumb from "../assets/proshopthumb.png"
import housemarketThumb from "../assets/housemarketThumb.png"
import supportdeskThumb from "../assets/supportdeskThumb.png"
import yelpcampThumb from "../assets/yelpcampThumb.png"
import badbankThumb from "../assets/badbankThumb.png"
import swolenormousThumb from "../assets/swolenormousThumb.png"

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1.2}
      scrollbar={{ draggable: true }}
      // navigation
      // pagination={{ clickable: true }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={propertypulseThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, ...
        </p>
        <p>
          <span className="boldGreen">PropertyPulse</span> is a website...
        </p>
        <button>
          <a href="https://property-pulse-olive.vercel.app" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/property-pulse" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={proshopThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, ...
        </p>
        <p>
          <span className="boldGreen">ProShop</span> is a website...
        </p>
        <button>
          <a href="https://proshop-ijre.onrender.com" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/proshop-v2" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={housemarketThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, javaScript, React, Leaflet, Swiper, Firebase, NodeJs, Heroku
        </p>
        <p>
          <span className="boldGreen">House Marketplace</span> connects homebuyers with homesellers and renters with landlords.  Sellers and landlords can create a profile and list their properties.  Interested buyers and renters can browse listed properties and contact the owner.
        </p>
        <button>
          <a href="https://house-marketplacev1.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/house-marketplace" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={supportdeskThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, javaScript, React, Express, MongoDB, NodeJS, Heroku
        </p>
        <p>
          <span className="boldGreen">SupportDesk</span> is a ticket system built for an IT support desk.  Users (i.e. support desk employees) can create a ticket for a tech device, add a description, add further notes, and eventually, close the ticket.
        </p>
        <button>
          <a href="https://support-deskv1.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/support-desk" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={yelpcampThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, Bootstrap, javaScript, EJS, Cloudinary, Mapbox, Express, MongoDB, NodeJS, Heroku
        </p>
        <p>
          <span className="boldGreen">YelpCamp</span> is a yelp-like website for campgrounds.  Users can browse campgrounds by geographic location, read campground reviews, add their own reviews, or add their own campground.
        </p>
        <button>
          <a href="https://yelp-campgrounds-v2.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/yelp-campgrounds-v2" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={badbankThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, Bootstrap, javaScript, React, Express, MongoDB, Firebase, NodeJS, Heroku
        </p>
        <p>
          <span className="boldGreen">BadBank</span> is an online bank without banking-level security (hence the name).  Users can check their balance and make deposits and withdrawals.  The bank admin can view the account information of all users.
        </p>
        <button>
          <a href="https://badbank2.herokuapp.com/#/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/BadBank2" target="_blank">View GitHub</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/BadBank2" target="_blank">View Presentation</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swolenormousThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, ...
        </p>
        <p>
          <span className="boldGreen">Swolenormous</span> is a website...
        </p>
        <button>
          <a href="https://www.google.com" target="_blank">View Project - update link</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/gym-app" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
    </Swiper>
  );
}