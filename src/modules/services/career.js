"use client";
import { GoArrowUpRight } from "react-icons/go";
const career = () => {
  return (
    <>
      <main>
        <section>
          <div className="flex flex-col gap-y-8  md:flex-row justify-between text-center md:text-left items-center ">
            <div className="md:w-[60%]">
              <p className=" text-[17px] sm:text-[19px] xl:text-[22px] text-[#181B23] font-bold">
                Career
              </p>
              <h3 className="text-[28px] sm:text-[42px] md:text-[38px] md:leading-[40px] lg:leading-0 lg:text-[48px] font-bold text-[#11141B]">
                We're looking for the best
              </h3>
              <p className="text-[#6F7174] font-medium text-[16px] w-[90%] m-auto sm:w-full mt-5">
                We're always looking from smart, motivated people.{" "}
                <br className="hidden sm:block" /> Send us your CV and a chat.
                We'd love to meet you!
              </p>
            </div>

            <div>
              <button className="bg-[#11141D]  text-[#dcdddf] text-[16px] lg:text-[21px] px-16 md:px-10 py-4  lg:py-5 rounded-md flex items-center gap-4">
                Explore open roles <GoArrowUpRight />{" "}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default career;
