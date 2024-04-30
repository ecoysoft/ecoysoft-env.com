"use client";

// Import image -------------------------->
import Image from "next/image";
import blog1 from "../../assets/images/img/blog1.png";
import blog2 from "../../assets/images/img//blog2.png";
import blog3 from "../../assets/images/img/blog3.png";

//Import React icon -----------------> 
//Import user icon 
import { FaRegUser } from "react-icons/fa";
//Import sms icon 
import { MdOutlineTextsms } from "react-icons/md";
//Import ArrowUpRight icon 
import { GoArrowUpRight } from "react-icons/go";


// Import Swiper React components ------------------------->
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination } from 'swiper/modules';



export default function RecentBlog() {
  const blogs = [
    {
      title: "Wins 2023 good design London Award",
      image: blog1,
      date: "14 March",
      commentCount: "83"
    },
    {
      title: "Our experience at Word Camp in New York",
      image: blog2,
      date: "19 August",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog3,
      date: "24 March",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog1,
      date: "24 March",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog3,
      date: "24 March",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog2,
      date: "24 March",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog1,
      date: "24 March",
      commentCount: "83"
    },
    {
      title: "Speaking remotely at Word Camp US.",
      image: blog3,
      date: "24 March",
      commentCount: "83"
    },
  ];

  return (
    <main>
      <section className="w-[100%] h-auto bg-[#0A0A0A] mt-36 relative  ">
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 sm:pt-20  md:pt-24 w-[82%] 2xl:w-[75%] mx-auto">
          <div>
            <p className="text-center md:text-left text-[#55E6A5] text-[11px] sm:text-[14px] ld:text-[16px] leading-[20px]">Blog & News</p>
            <h1 className="text-[23px] sm:text-[35px] md:text-[28px] text-center md:text-left lg:text-[38px] xl:text-[48px] leading-0 xl:leading-[60px] text-[#FFFFFF] font-bold">Read Our Latest News & <br className=" hidden md:block" /> Blog Get Every Updates</h1>
            <hr className="w-[50%] hidden md:block mt-4" />
          </div>

          <div>
            <p className=" text-center md:text-left mt-4 sm:mt-6 md:mt-0 text-[#C8CFD5] text-[10px] sm:text-[14px] xl:text-[16px]">We are web designers, developers, project <br /> managers, and digital solutions using the <br /> latest trends and technologies.</p>
            <hr className="block md:hidden mt-4 sm:mt-6 sm:w-96" />
          </div>
        </div>

        <div className="w-[82%] mx-auto">
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
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >

            {
              blogs.map((blog) => <SwiperSlide key={blog.name}>
                <div className="text-white">
                  <div className="mx-auto mt-36 mb-14 max-w-[380px] space-y-5 xl:space-y-6 rounded-xl bg-[#ffffff]  pb-8   shadow-lg bg-transparent border border-[#888a92]">
                    <div className="relative flex h-auto w-full justify-center lg:h-[280px]">
                      <Image width={300} height={300} className="h-full w-full rounded-lg " src={blog.image} alt="card navigate ui" />
                    </div>
                    <div className="flex flex-wrap items-center justify-between w-[85%]  mx-auto">
                      <span className="flex gap-2 xl:gap-4 items-center">
                        <p><FaRegUser color="#55E6A5" /></p>
                        <p className=" text-[13px] md:text-[15px]">By: Admin</p>
                      </span>
                      <span className="flex gap-2 xl:gap-4 items-center">
                        <p><MdOutlineTextsms color="#55E6A5" /></p>
                        <p className="text-[13px] md:text-[15px]">{blog.commentCount} Comments</p>
                      </span>
                    </div>
                    <div className="mx-auto w-[85%] space-y-2 text-left font-bold">
                      <h6 className="text-[18px] sm:text-[17px] md:text-[20px] xl:text-[24px] leading-[25px] md:leading-[31px]">{blog.title}</h6>
                    </div>
                    <div className="flex flex-wrap items-center  justify-between w-[85%] mx-auto">
                      <button className="text-[13px] md:text-[15px] duration-300 hover:scale-105 flex items-center gap-2 text-[#55E6A5]">Read More <GoArrowUpRight /></button>
                      <button className="bg-[#C8CFD5] text-[#18191C] font-bold text-[13px] md:text-[14px] leading-[18px] rounded-[6px] px-[8px] md:px-[10px] py-[12px] md:py-[15px] ">
                        <p>{blog.date}</p>
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>)
            }
          </Swiper>

          <div className="absolute top-[30%] right-[12%]">
            <div className="w-[300px]">
              <div className="swiper-button-next bg-[#55E6A5] p-[40px]  rounded-full"></div>
              <div className="swiper-button-prev bg-[#55E6A5] p-[40px]  rounded-full"></div>
            </div>
          </div>
        </div>
      </section >
    </main >
  );
}
