import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./HeroSlider.css";

import hero1 from "../assets/banners/hero1.webp";
import hero2 from "../assets/banners/hero2.webp";
import hero3 from "../assets/banners/hero3.webp";
import hero4 from "../assets/banners/hero4.webp";

function Hero() {
  const slides = [
    {
      image: hero1,
      title: "Fresh Groceries Delivered in Minutes",
      subtitle:
        "Farm fresh vegetables, fruits and dairy products delivered straight to your doorstep.",
    },
    {
      image: hero2,
      title: "Farm Fresh Fruits",
      subtitle:
        "Healthy, juicy and naturally delicious fruits sourced directly from trusted farms.",
    },
    {
      image: hero3,
      title: "Fresh Dairy Products",
      subtitle:
        "Milk, cheese, butter and dairy essentials delivered fresh every morning.",
    },
    {
      image: hero4,
      title: "Fresh Bakery & Snacks",
      subtitle:
        "Fresh breads, cookies and delicious snacks baked every single day.",
    },
  ];

  return (
    <section className="mt-2">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        speed={1800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="overflow-hidden shadow-xl"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[400px] lg:h-[420px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-16">
                  <div className="max-w-xl">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[6px] text-green-300">
                      FRESH • ORGANIC • HEALTHY
                    </p>
                    <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white lg:text-5xl">
                      {slide.title}
                    </h1>

                    <p className="mb-8 max-w-lg text-lg leading-8 text-gray-200">
                      {slide.subtitle}
                    </p>

                    <div className="flex gap-4">
                      <button className="rounded-xl bg-green-600 px-7 py-3 font-semibold text-white transition hover:bg-green-700">
                        Shop Now
                      </button>

                      <button className="rounded-xl border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-black">
                        Browse Categories
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Hero;
