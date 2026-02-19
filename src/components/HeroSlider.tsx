"use client";
import { heroSlides } from "@/data/rw011";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

export const HeroSlider1 = () => {
  return (
    <section className="hero-section hero-4">
      <Swiper {...sliderProps.heroSlider1} className="swiper hero-slider-2">
        {heroSlides.map((slide, i) => (
          <SwiperSlide className="swiper-slide" key={i}>
            <div
              className="hero-image bg-cover"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="container">
                <div className="row g-4 align-items-center justify-content-between">
                  <div className="col-lg-9">
                    <div className="hero-content">
                      <h5
                        data-animation="fadeInUp"
                        data-delay="1.3s"
                        className="mb-2"
                      >
                        <i className="fas fa-mosque" /> {slide.tagline}
                      </h5>
                      <h1
                        data-animation="fadeInUp"
                        data-delay="1.5s"
                      >
                        {slide.heading}
                      </h1>
                      <div className="hero-button">
                        <Link
                          href="/about"
                          data-animation="fadeInUp"
                          data-delay="1.7s"
                          className="theme-btn"
                        >
                          Lihat Profil
                        </Link>
                        <Link
                          href="/infaq"
                          data-animation="fadeInUp"
                          data-delay="1.7s"
                          className="theme-btn transparent-btn"
                        >
                          Infaq Online
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-dot text-center">
          <div className="dot" />
        </div>
      </Swiper>
    </section>
  );
};
