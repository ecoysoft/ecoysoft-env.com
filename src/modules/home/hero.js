// "use client";

import Image from "next/image";
import eco_hero_bg from "../../assets/images/eco-hero-bg.jpg";
import eco_hero_splash_icon from "../../assets/images/eco-hero-splash-icon.png";
import { GoArrowUp } from "react-icons/go";

const HeroSection = () => {
  return (
    <main className="text-white ">
      <section>
        <div>
          <Image
            className="w-[100%] h-[300px] sm:h-[640px] md:h-[480px] lg:h-[600px] xl:h-[700px] object-cover absolute"
            src={eco_hero_bg}
            alt="Background Image"
            width={1500}
            height={1000}
          />
        </div>

        <div className="relative flex flex-col gap-1.5 sm:gap-6 xl:gap-10">
          <div>
            <div className="text-center pt-11 sm:pt-32 md:pt-14 lg:pt-24 xl:pt-32">
              <h1 className=" text-[22px] sm:text-5xl md:text-4xl xl:text-5xl font-semibold ">
                <span className="text-[#4989fd] ">Online solutions</span>
                <br />
                <span className="text-[#0C117B]">to boost your website</span>
              </h1>
            </div>
          </div>

          <div>
            <p className="text-[14px] text-center text-[#ADADC1] hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
              leo.
            </p>
          </div>

          <div className="flex gap-2 sm:gap-6 md:gap-8 justify-center font-bold mt-3 ">
            <button className="bg-[#f74371] text-[10px] sm:text-[18px] md:text-[14px] px-6 sm:px-10 py-1.5 rounded-full">
              Our services
            </button>

            <button className="bg-blue-600 text-[10px] sm:text-[18px] md:text-[14px] text-blue-800 px-6 sm:px-10 py-1.5  sm:py-2 rounded-full bg-transparent border  transition-all delay-100 border-blue-700 hover:bg-blue-700 hover:text-white">
              <p className="">Learm more</p>
            </button>
          </div>
        </div>
      </section>

      <section className="hidden md:block">
        <div>
          <p className="text-gray-400 font-bold text-[14px]">
            Visit Our Social Media
          </p>
        </div>
        <div>
          <div className="absolute  -right-5 xl:right-6 top-52 xl:top-80 rotate-90 scale-90	 flex items-center font-bold ">
            <p className="text-[#4989fd]">SCROLL DOWN</p>
            <p className="text-[#f74371] rotate-90 ">
              <GoArrowUp />
            </p>
          </div>
        </div>

        <div className="relative flex justify-between md:px-6 xl:px-12 md:top-32 lg:top-44  items-center">
          <div className="flex gap-2">
            <Image
              className="w-6 xl:w-full"
              src={eco_hero_splash_icon}
              height={10}
              width={24}
              alt="Splash Icon"
            />
            <div>
              <p className="text-gray-400 md:text-[11px] xl:text-[14px] font-semibold">
                Have questions?
              </p>
              <p className="md:text-[11px] xl:text-[15px] flex gap-2 text-[#4989fd] font-semibold">
                <span>+880</span>
                <span>193</span>
                <span>727</span> <span>0044</span>
              </p>
            </div>
          </div>

          <div className="flex gap-3 xl:gap-4 items-center">
            <p className="text-gray-400 font-bold md:text-[10px] xl:text-[14px]">
              Visit Our Social Media
            </p>
            <div className="flex gap-1 text-white font-bold">
              <button className="bg-[#4989fd] md:px-[6px] xl:px-3.5 md:py-[5px] md:text-[11px] xl:text-[15px] xl:py-2.5 rounded-full">
                FB
              </button>
              <button className="bg-[#4989fd] md:px-[6px] xl:px-3.5 md:py-[5px] md:text-[11px] xl:text-[15px] xl:py-2.5 rounded-full">
                IN
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
