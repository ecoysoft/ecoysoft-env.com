"use client";

import Image from "next/image";
import portfolio2 from "../../assets/images/img/portfolio-img2.png"
import portfolio1 from "../../assets/images/img/portfolio-img1.png"
// import React icon-------------------->
import { GoArrowRight } from "react-icons/go";

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
  ];

  return (
    <main className="bg-[#1F1F1F] w-[100%] h-[842px] text-[#ffffff]">
      <section className="flex justify-around items-center w-[100%] mx-auto pt-28">
        <div>
          <p className="text-[#55E6A5] leading-[19px] text-[15px]">OUR PORTFOLIO</p>
          <h1 className="text-[48px] leading-[60px] font-bold">Explore our new recently <br /> completed projects.</h1>
        </div>

        <div>
          <p className="text=[#C8CFD5] leading-[25px] text-[15px]">We are web designers, developers, project <br /> managers, and digital solutions using the <br /> latest trends and technologies.</p>
        </div>
      </section>

      <section className="flex gap-6 justify-center mt-36">
        {
          portfolios.map((portfolio) => <div key={portfolio.name}>
            <div>
              <Image className="w-[653px] h-[447px] "
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
          </div>)
        }
      </section>
    </main>
  );
}
