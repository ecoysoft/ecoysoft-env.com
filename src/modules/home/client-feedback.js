"use client";

import Image from "next/image";
import client_feedback_bg from "../../assets/images/img/client-feedback-bg.jpg"

// import Swiper js ------------------------->
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';



export default function ClientFeedback() {
  const comments = [
    {
      name: "jany dicosta",
      comment:
        "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
      image: "https://randomuser.me/api/portraits/women/72.jpg",
      location: "islamabad, pakisthan",
    },
    {
      name: "flora jain",
      comment:
        "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
      image: "https://randomuser.me/api/portraits/women/0.jpg",
      location: "new york, america",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again\nblinded do they leave those who accuse us, whence they hate us pleasure\nbecause pleasure therefore attains pain\nnot those who are softened by things",
      image: "https://randomuser.me/api/portraits/men/78.jpg",
      location: "new dilhi, india",
    },
  ];

  return (
    <main>
      <section className="relative text-white mt-32">
        <div>
          <Image
            className="w-[100%] h-[750px] object-cover relative"
            src={client_feedback_bg}
            alt="Background Image"
            width={1500}
            height={1000}
          />
          <div className=" absolute top-[8%] md:top-[10%] lg:top-[15%] w-[80%] left-[10%] text-center">
            <p className="text-[13px] md:text-[16px] text-[#55E6A5] leading-[25px]">Client Feedback</p>
            <h1 className="text-[25px] sm:text-[38px] lg:text-[42px] xl:text-[48px] sm:leading-[50px] xl:leading-[60px] font-bold">Happy Words From Happy Customer</h1>

            <hr className="w-[50%] md:w-[20%] mx-auto  mt-4 md:mt-6" />
          </div>
        </div>

        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {
              comments.map((com, ind) => <SwiperSlide key={ind}>
                <h1>{com.name}</h1>
              </SwiperSlide>)
            }
          </Swiper>
        </div>
      </section>
    </main>
  );
}
