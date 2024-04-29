"use client";

// Import image -------------------------->
import Image from "next/image";
import client_feedback_bg from "../../assets/images/img/client-feedback-bg.jpg"

import client_img1 from "../../assets/images/img/client1.jpg"
import client_img2 from "../../assets/images/img/client2.jpg"
import client_img3 from "../../assets/images/img/client3.jpg"


// Import Swiper React components ------------------------->
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';



export default function ClientFeedback() {
  const clientFeedbacks = [
    {
      name: "jany dicosta",
      comment:
        "laudantiu enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium",
      image: client_img1,
      location: "islamabad, pakisthan",
    },
    {
      name: "flora jain",
      comment:
        "est natus enim nihil est dolore omnis voluptatem numquam   et omnis occaecati quod ullam at voluptatem error expedita pariatur nihil sint nostrum voluptatem reiciendis et",
      image: client_img2,
      location: "new york, america",
    },
    {
      name: "rahul chawhan",
      comment:
        "not again and again   blinded do they leave those who accuse us, whence they hate us pleasure because pleasure therefore attains pain not those who are softened by things",
      image: client_img3,
      location: "new dilhi, india",
    }
    

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
          <div className=" absolute top-[8%] md:top-[10%] lg:top-[13%] w-[80%] left-[11%] text-center">
            <p className="text-[13px] md:text-[16px] text-[#55E6A5] leading-[25px]">Client Feedback</p>
            <h1 className="text-[25px] sm:text-[38px] lg:text-[42px] xl:text-[48px] sm:leading-[50px] xl:leading-[60px] font-bold">Happy Words From Happy Customer</h1>
            <hr className="w-[50%] md:w-[20%] mx-auto  mt-4 md:mt-6" />
          </div>
        </div>


        <div className="absolute w-[80%] left-[11%] top-[30%] sm:top-[35%] md:top-[30%] lg:top-[33%] xl:top-[35%]">
          <Swiper

            slidesPerView={1}
            spaceBetween={10}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              type: 'bullets',
            }}
            modules={[Pagination, Navigation]}
          >

            {
              clientFeedbacks.map((feedback, index) => <SwiperSlide key={feedback.index}>
                <div className="text-white">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <p className="md:w-[70%] xl:w-[50%] leading-[32px] text-[#C8CFD5] capitalize ">{feedback.comment}</p>
                    <Image width={300} height={300} className="w-[120px] sm:w-[130px] md:w-[140px] rounded-full" src={feedback.image} alt="card navigate ui" />
                    <span className="space-y-3">
                      <h4 className="text-[22px] sm:text-[24px] font-bold capitalize">{feedback.name}</h4>
                      <p className="text-[#C8CFD5] capitalize">{feedback.location}</p>
                    </span>
                  </div>
                </div>
              </SwiperSlide>)
            }

          </Swiper>
        </div>

        <div className="absolute top-[85%] w-[250px] left-[15%]  sm:left-[44.5%]">
          <div className="swiper-button-next bg-[#55E6A5] p-[40px]  rounded-full"></div>
          <div className="swiper-button-prev bg-[#55E6A5] p-[40px]  rounded-full"></div>
        </div>

      </section>
    </main>
  );
}
