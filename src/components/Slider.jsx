// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import propertypulseThumb from "../assets/propertypulseThumb.png"
import proshopThumb from "../assets/proshopThumb.png"
import housemarketThumb from "../assets/housemarketThumb.png"
import supportdeskThumb from "../assets/supportdeskThumb.png"
import yelpcampThumb from "../assets/yelpcampThumb.png"
import devcamperapiThumb from "../assets/devcamperapiThumb.png"
import flixxThumb from "../assets/flixxThumb.png"
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
          <span className="bold">Toolset</span> HTML, CSS, TailwindCSS, javaScript, React, Next.js, Cloudinary, Mapbox, Photoswipe, Node.js, MongoDB, Vercel
        </p>
        <hr />
        <p>
          <span className="boldGreen">PropertyPulse</span>, a full-stack Next.js application, is a real estate listing platform for rental properties.  Renters can discover rental properties, explore their amenities, bookmark them, and contact owners.  Property owners can list their properties for either short or long term renting.
        </p>
        <button>
          <a href="https://property-pulse-hub.vercel.app" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/property-pulse" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={proshopThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, Bootstrap, javaScript, React, Stripe, Node.js, Express.js, MongoDB, Render
        </p>
        <hr />
        <p>
          <span className="boldGreen">ProShop</span>, a full-stack MERN application, is an e-commerce website where customers can search for products, add them to their cart and checkout, and review products.  Admin functionality for the shop's owner includes the ability to edit users, products, and order information.
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
          <span className="bold">Toolset</span> HTML, CSS, javaScript, React, Leaflet, Swiper, Node.js, Firebase, Heroku
        </p>
        <hr />
        <p>
          <span className="boldGreen">House Marketplace</span>, a full-stack React application, connects homebuyers with homesellers and renters with landlords.  Property owners can create a profile and list their properties.  Interested renters and buyers can browse listed properties and contact the owner.
        </p>
        <button>
          <a href="https://house-marketplacev1.herokuapp.com" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/house-marketplace" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={supportdeskThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, javaScript, React, Node.js, Express.js, MongoDB, Heroku
        </p>
        <hr />
        <p>
          <span className="boldGreen">SupportDesk</span>, a full-stack MERN application, is a ticket system built for an IT support desk.  Users (i.e. support desk employees) can create a ticket for a tech device, add a description, add further notes, and eventually, close the ticket.
        </p>
        <button>
          <a href="https://support-deskv1.herokuapp.com" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/support-desk" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={yelpcampThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, Bootstrap, javaScript, EJS, Cloudinary, Mapbox, Node.js, Express.js, MongoDB, Heroku
        </p>
        <hr />
        <p>
          <span className="boldGreen">YelpCamp</span>, a full-stack EJS application, is a yelp-like website for campgrounds.  Users can browse campgrounds by geographic location as well as add their own campgrounds.  Users can also view and add campground reviews.
        </p>
        <button>
          <a href="https://yelp-campgrounds-v2.herokuapp.com" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/yelp-campgrounds-v2" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={devcamperapiThumb} />
        <p>
          <span className="bold">Toolset</span> Node.js, Express.js, MongoDB
        </p>
        <hr />
        <p>
          <span className="boldGreen">DevCamperAPI</span> is a backend Node.js-based RESTful API for a coding bootcamp directory.  Functionality includes registering users, logging in/out, updating users' information and password, CRUDing users, CRUDing bootcamps, getting bootcamps within a geographic radius, CRUDing bootcamp courses, and CRUDing user reviews for bootcamps.
        </p>
        <button>
          <a href="https://github.com/themistogenes/devcamper-api" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={flixxThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, javaScript, Vercel
        </p>
        <hr />
        <p>
          <span className="boldGreen">Flixx</span>, a vanilla JS app, showcases movies currently in theaters as well as popular TV shows.  Users can search for TV shows and movies.
        </p>
        <button>
          <a href="https://flixxfilms.vercel.app" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/flixx-app" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={badbankThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, Bootstrap, javaScript, React, Node.js, Express.js, MongoDB, Firebase, Heroku
        </p>
        <hr />
        <p>
          <span className="boldGreen">BadBank</span>, a full-stack MERN application, is an online banking website without bank-level security (hence the name).  Users can check their balance or make deposits and withdrawals.  The bank manager (admin) can view the account information of all users.
        </p>
        <button>
          <a href="https://badbank2.herokuapp.com" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/BadBank2" target="_blank">View GitHub</a>
        </button>
        <button>
          <a href="https://www.youtube.com/playlist?list=PLn6PLPwvu-4JYVvbNKl5wAtT5vxMr0enV" target="_blank">View Presentation</a>
        </button>
      </SwiperSlide>
      <SwiperSlide>
        <img src={swolenormousThumb} />
        <p>
          <span className="bold">Toolset</span> HTML, CSS, TailwindCSS, javaScript, React, Vercel
        </p>
        <hr />
        <p>
          <span className="boldGreen">Swolenormous</span>, a React application, is a personal workout generator.  Users can specify their desired workout type, muscle groups to target, and their ultimate workout objective (strength and power, growth hypertrophy, or cardiovascular endurance).  Once a custom workout and exercise descriptions are generated, users can keep track of sets completed.
        </p>
        <button>
          <a href="https://swolenormous-fit.vercel.app" target="_blank">View Project</a>
        </button>
        <button>
          <a href="https://github.com/themistogenes/gym-app" target="_blank">View GitHub</a>
        </button>
      </SwiperSlide>
    </Swiper>
  );
}