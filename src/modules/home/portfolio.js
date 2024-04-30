"use client";

import Image from "next/image";
import portfolio2 from "../../assets/images/img/portfolio-img2.png"
import portfolio1 from "../../assets/images/img/portfolio-img1.png"
// import React icon-------------------->
import { GoArrowLeft, GoArrowRight } from "react-icons/go";



// Import Swiper React components ------------------------->
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';



export default function OurPortfolio() {
  const portfolios = [
    {
      image: portfolio2,
      name: "Saas Website",
      date: "Development. Jan 19, 2024",
    },
    {
      image: portfolio1,
      name: "Car Dealership App",
      date: "UI / UX. Mar 25, 2024",
    },
    {
      image: portfolio1,
      name: "Car Dealership App",
      date: "UI / UX. Mar 25, 2024",
    },
    {
      image: portfolio1,
      name: "Car Dealership App",
      date: "UI / UX. Mar 25, 2024",
    },
    {
      image: portfolio1,
      name: "Car Dealership App",
      date: "UI / UX. Mar 25, 2024",
    },
    {
      image: portfolio1,
      name: "Car Dealership App",
      date: "UI / UX. Mar 25, 2024",
    },
  ];

  return (
    <main className="bg-[#1F1F1F] w-[100%] h-[842px] text-[#ffffff]">
      <section className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-5 md:space-y-0 w-[90%] md:w-[82%] mx-auto pt-28">
        <div >
          <p className="text-[#55E6A5] leading-[19px] text-[10px] sm:text-[13px] lg:text-[15px]">OUR PORTFOLIO</p>
          <h1 className="text-[1.7rem] sm:text-[45px] md:text-[30px]  lg:text-[48px] sm:leading-[50px] lg:leading-[60px] font-bold">Explore our new recently <br className="hidden lg:block" />  completed projects.</h1>
        </div>

        <div>
          <p className="text=[#C8CFD5] sm:leading-[25px] text-[12px] sm:text-[15px] ">We are web designers, developers, project <br className="hidden sm:block" /> managers, and digital solutions using the <br className="hidden sm:block md:hidden" /> latest trends and technologies.</p>
        </div>
      </section>


      <div className="w-[79%] mx-auto relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: ".arrow-next",
            prevEl: ".arrow-prev",
            disabledClass: "swiper-button-disabled",
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          modules={[Pagination, Navigation]}
        >

          {
            portfolios.map((portfolio) => <SwiperSlide key={portfolio.name}>
              <div className="mt-36">
                <Image className="w-[100%] h-[447px] "
                  src={portfolio.image}
                  alt="portfolio Image"
                  width={500}
                  height={500}
                />
              </div>

              <div className="flex justify-around items-center gap-14 py-8 bg-[#FFFFFF] shadow-md rounded-md">
                <div>
                  <h4 className="text-[#18191C] text-[24px] font-bold leading-[32px]">{portfolio.name}</h4>
                  <p className="text-[#6F7174] text-[14px] leading-[23px]">{portfolio.date}</p>
                </div>

                <div>
                  <button className="bg-[#55E6A5] text-[14px] px-[25px] py-[13px] font-semibold rounded-[6px] text-[#18191C] flex items-center gap-3">See Project <GoArrowRight /> </button>
                </div>
              </div>
            </SwiperSlide>)
          }

        </Swiper>

        <div className="absolute top-8 right-0">
          <div className="w-[250px]">
            <div
              style={{
                display: "flex",
                gap: "8px",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 0%)",
                zIndex: 1
              }}
            >
              <button
                style={{
                  padding: "12px",
                  color: "black",
                  backgroundColor: "#55E6A5",
                  border: "solid 4px #55E6A5",
                  cursor: "pointer",
                }}
                className="iconButton arrow-prev"
              >
                <GoArrowLeft />
              </button>
              <button
                style={{
                  padding: "12px",
                  color: "black",
                  backgroundColor: "#55E6A5",
                  border: "solid 4px #55E6A5",
                  cursor: "pointer",
                }}
                className="iconButton arrow-next"
              >
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

    </main >
  );
}
