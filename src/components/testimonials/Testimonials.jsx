import React from "react";
import { Pagination } from "swiper";
import Avatar1 from "../../assets/DavidMacdonald.png";
import Avatar2 from "../../assets/TRG525V88-U05CW2K1VPW-c2c41ff618d2-512.jpg";
import Avatar3 from "../../assets/TRG525V88-U065N71LRB7-f8fdda6a8bee-512.png";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "David Macdonald",
      avatar: Avatar1,
      role: "CEO Vertex Software, Austin, Texas",
      test: "As a developer and a problem solver, I think Christian is a great collaborative partner to have. I met Christian in some basic javascript & react projects and since then he has drastically progressed in him understanding of the development process. He always has a professional environment and has good audio and video quality which makes it easier to communicate with him.",
    },
    {
      id: 2,
      name: "Santiago Pardal",
      avatar: Avatar2,
      role: "Co-founder, Chief Product Officer",
      test: "It was a pleasure collaborating with Christian on different projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources and strengthens him knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      name: "Luciano Noble",
      avatar: Avatar3,
      role: "Backend Engineer",
      test: "I worked with Christian in the same team and him communication skills are very strong. Him programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    }
  ];
  return (
    <section id="testimonials">
      <h2 className="section__title">4. Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div>
              <div className="client__avatar">
                <img src={test.avatar} alt="" />
              </div>
            </div>
            <div className="testimonial__description">
              <p className="client__review">{test.test}</p>
              <p className="client__info">
                <span className="client__name">{test.name}</span>
                <span>{test.role}</span>
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
