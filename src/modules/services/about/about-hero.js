"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import service_bg from "../../../assets/images/img/project2.gif";

const AboutHero = () => {
  return (
    <>
      <main className=" mt-64 mb-64">
        <section className="flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-[20px] font-bold">About us</p>
            <h1 className="text-[64px] font-bold w-[50%] leading-[70px]">
              We build bridge between companies and coustmers
            </h1>
          </div>

          <div className="w-[25%] text-justify">
            <p className="text-[22px]">
              Seamlessly formulate exceptional outside the box thinking business
              e-commerce. Phosfiuorescently engage ennd-to-end platforms before
              integrated.
            </p>
          </div>
        </section>

        <section className="mt-20 ">
          <Image
            className="w-[100%] h-[620px] object-cover"
            src={service_bg}
            height={1000}
            width={1000}
            alt="Splash Icon"
          />
        </section>
      </main>
    </>
  );
};

export default AboutHero;
