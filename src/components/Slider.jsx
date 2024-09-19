// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import housemarketThumb from "../assets/housemarketThumb.png"
import yelpcampThumb from "../assets/yelpcampThumb.png"
import badbankThumb from "../assets/badbankThumb.png"
import supportdeskThumb from "../assets/supportdeskThumb.png"
import feedbackThumb from "../assets/feedbackThumb.png"
import githubfinderThumb from "../assets/githubfinderThumb.png"

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
        <img src={housemarketThumb} />
        <p>
          <span className="boldOverline">Toolset</span> HTML, CSS, javaScript, React, Leaflet, Swiper, Firebase, NodeJs, Heroku
        </p>
        <p>
          <span className="boldOverline">House Marketplace</span> connects homebuyers with homesellers and renters with landlords.  Sellers and landlords can create a profile and list their properties.  Interested buyers and renters can browse listed properties and contact the owner.
        </p>
        <button>
          <a href="https://house-marketplacev1.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/house-marketplace" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={yelpcampThumb} />
        <p>
          <span className="boldOverline">Toolset</span> HTML, CSS, Bootstrap, javaScript, EJS, Cloudinary, Mapbox, Express, MongoDB, NodeJS, Heroku
        </p>
        <p>
          <span className="boldOverline">YelpCamp</span> is a yelp-like website for campgrounds.  Users can browse campgrounds by geographic location, read campground reviews, add their own reviews, or add their own campground.
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
          <span className="boldOverline">Toolset</span> HTML, CSS, Bootstrap, javaScript, React, Express, MongoDB, Firebase, NodeJS, Heroku
        </p>
        <p>
          <span className="boldOverline">BadBank</span> is an online bank without banking-level security (hence the name).  Users can check their balance and make deposits and withdrawals.  The bank admin can view the account information of all users.
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
        <img src={supportdeskThumb} />
        <p>
          <span className="boldOverline">Toolset</span> HTML, CSS, javaScript, React, Express, MongoDB, NodeJS, Heroku
        </p>
        <p>
          <span className="boldOverline">SupportDesk</span> is a ticket system built for an IT support desk.  Users (i.e. support desk employees) can create a ticket for a tech device, add a description, add further notes, and eventually, close the ticket.
        </p>
        <button>
          <a href="https://support-deskv1.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/support-desk" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={feedbackThumb} />
        <p>
          <span className="boldOverline">Toolset</span> HTML, CSS, javaScript, React, NodeJS, Heroku
        </p>
        <p>
          <span className="boldOverline">FeedbackUI</span> is the front-end of a rating app.  Users can rate their service and write a review.  The review is then listed along with prior reviews and the average review rating is recalculated.
        </p>
        <button>
          <a href="https://feedback-app-frontend.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/feedback-app-frontend" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={githubfinderThumb} />
        <p>
          <span className="boldOverline">Toolset</span> HTML, CSS, TailwindCSS, daisyUI, javaScript, React, Axios, NodeJS, GitHub API, Heroku
        </p>
        <p>
          <span className="boldOverline">GitHub Finder</span> uses the GitHub API to search GitHub for a specific user's profile.  A stream-lined version of that user's profile can be viewed, complete with links to their latest repositories.
        </p>
        <button>
          <a href="https://github-finder.herokuapp.com/" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/github-finder" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
    </Swiper>
  );
}