"use client";

import Image from "next/image";
import service_bg from "../../assets/images/img/service-Bg.png"
import shape from "../../assets/images/img/Shape.png"
import Link from "next/link";

export default function OurServices() {
  return (
    <main>
      <section className="mt-20 relative">
        <div>
          <Image
            className="w-[100%] h-[250px] sm:h-[400px] md:h-[500px] lg:h-[610px]  xl:h-[650px] 2xl:h-[780px] relative"
            src={service_bg}
            alt="Service Background Image..."
            width={1500}
            height={800}
          />

          <div className="absolute top-[60px] md:top-[80px] lg:top-[100px] left-[10px] sm:left-[50px] md:left-[95px] lg:left-[140px] xl:left-[180px] w-[90%] sm:w-[80%]  flex justify-center">
            <Image
              className="w-[100%] md:w-[90%] lg:w-[92%] xl:w-[90%] 2xl:w-[80%] h-auto"
              src={shape}
              alt="Service Background Image..."
              width={1500}
              height={800}
            />


            <div>
              <div className="absolute -top-[35%] sm:top-[8%] left-0 md:left-[0%] lg:left-[3%]  xl:left-[5%] 2xl:left-[10%] text-white">
                <p className="text-[8px] sm:text-[10px] md:text-[11px] ld:text-[12px] xl:text-[14px] leading-[25px] text-[#55E6A5] uppercase"> Our Services</p>
                <h1 className="text-[15px] sm:text-[23px] md:text-[28px] lg:text-[36px] xl:text-[42px] 2xl:text-[48px]  lg:leading-[62px] font-bold">Explore what services <br /> we’re offering</h1>
                <hr className="w-[30%] xl:w-[35%] mt-3" />
              </div>

              <div className="absolute top-[60%] sm:top-[85%] md:top-[94%] ld:top-[97%] -left-[1%] sm:left-0 md:left-[3%] lg:left-[5%] xl:left-[9%] 2xl:left-[14%] text-white flex gap-1.5 sm:gap-3 items-center">
                <h1 className="text-[20px] sm:text-[40px] md:text-[55px] lg:text-[75px] xl:text-[90px] 2xl:text-[100px] leading-[132px] font-black ">1</h1>
                <div className="flex flex-col 2xl:gap-1">
                  <h2 className="text-[10px] sm:text-[13px] md:text-[14px] lg:text-[18px] leading-[26px] font-semibold">Website Development</h2>
                  <p className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] sm:leading-[16px] md:leading-[23px] text-[#C8CFD5] hidden sm:block">Digital agency is an high test for <br /> business website work</p>
                  <p className="text-[8px] sm:text-[10px] md:text-[12px] md:leading-[19px]"> <Link href={"/learn_more"}>Learn More +</Link> </p>
                </div>
              </div>

              <div className=" absolute top-[26%] sm:top-[58%] md:top-[67%] ld:top-[70%] left-[35%] sm:left-[38%] md:left-[39%] xl:left-[41%] 2xl:left-[43%] text-white flex gap-3 items-center">
                <h1 className="text-[20px]  sm:text-[40px] md:text-[55px] lg:text-[75px] xl:text-[90px] 2xl:text-[100px] leading-[132px] font-black ">2</h1>
                <div className="flex flex-col 2xl:gap-1">
                  <h2 className="text-[10px] sm:text-[13px] md:text-[14px] lg:text-[18px] leading-[26px] font-semibold">Product Design</h2>
                  <p className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] sm:leading-[16px] md:leading-[23px] text-[#C8CFD5] hidden sm:block">Digital agency is an high test for <br /> business website work</p>
                  <p className="text-[8px] sm:text-[10px] md:text-[12px] md:leading-[19px]"> <Link href={"/learn_more"}>Learn More +</Link> </p>
                </div>
              </div>

              <div className=" absolute -top-[12%] sm:top-[15%] md:top-[23%] ld:top-[26%] -right-[1%] sm:-right-[6%] md:right-[1.5%] xl:right-[5%] 2xl:right-[12%] text-white flex gap-3 items-center">
                <h1 className=" text-[20px] sm:text-[40px] md:text-[55px] lg:text-[75px] xl:text-[90px] 2xl:text-[100px] leading-[132px] font-black ">3</h1>
                <div className="flex flex-col  2xl:gap-1">
                  <h2 className="text-[10px] sm:text-[13px] md:text-[14px] lg:text-[18px] leading-[26px] font-semibold">Ui/Ux Design</h2>
                  <p className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] sm:leading-[16px] md:leading-[23px] text-[#C8CFD5] hidden sm:block ">Digital agency is an high test for <br /> business website work</p>
                  <p className="text-[8px] sm:text-[10px] md:text-[12px] md:leading-[19px]"> <Link href={"/learn_more"}>Learn More +</Link> </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
}
