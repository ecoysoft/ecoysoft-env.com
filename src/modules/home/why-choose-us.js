// "use client";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
// Import Animated Tooltip ----------------->
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
//Import image from assets file ---------------------------->
import eco_bg from "../../assets/images/img/project2.gif"
import project1 from "../../assets/images/img/project1.gif"
import project2 from "../../assets/images/img/project2.gif"
import project3 from "../../assets/images/img/project3.gif"
import project4 from "../../assets/images/img/project4.gif"
import project5 from "../../assets/images/img/project5.gif"


const people = [
  {
    id: 1,
    name: "UI/UX",
    designation: "Software Engineer",
    image: project1,
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: project2,
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: project3,
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image: project4,
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image: project5,
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image: project1,
  },
];

export default function WhyUs() {
  return (
    <>
      {/* Today work from figma!!
        Follow giving figma url!!
      */}

      <main className="max-w-[1500px] m-auto  px-3">
        <section className=" w-[100%] ">
          <div className=" md:flex  gap-6 items-center text-center md:text-left">

            <div className="md:w-[50%]">
              <p className="text-[0.75rem] leading-[25.6PX] font-semibold text-[#55E6A5]">Why choose us</p>
              <h1 className="text-[2.2rem] md:text-[3rem]  leading-[40px]  sm:leading-[62px] font-bold text-[#18191C] mb-6">Building a design easy for business</h1>
              <hr className="w-[32%] border-b-[2px]  hidden md:block"></hr>
            </div>

            <div className="md:w-[50%]">
              <p className="text-[14px]  xl:text-[16px] text-justify sm:text-center md:text-justify leading-[25.6px]	text-[#6F7174]">
                At ecoysoft Management, we simplify the design process for your business.
                Our expert designers and innovative solutions ensure seamless integration
                and impactful results. From concept to execution, we prioritize simplicity,
                efficiency, and excellence. Choose ecoysoft Management for an easier design
                journey and to stand out in today competitive landscape.
              </p>
              <hr className="w-[25%] mt-6 border-b-[3px] mx-auto block md:hidden"></hr>
            </div>
          </div>

          <div className="sm:flex sm:gap-4 md:gap-6 lg:gap-8 mt-8 ">

            <div className="sm:w-[520px] xl:w-[600px] h-[240px] xl:h-[400px]  md:h-[300px] bg-black rounded-[14px] text-[#ffff] flex flex-col  md:gap-[30px] xl:gap-[40px]">
              <div>

              </div>
              <div className=" md:ms-[35px] xl:mt-[30px] text-center md:text-left">
                <h1 className="text-[4rem] md:text-[5rem] xl:text-[6rem] leading-[115.2px] font-bold"><span>90</span><span className="text-[#55E6A5]">+</span></h1>
                <p className=" text-[14px] md:text-[16px] xl:text-[20px] text-[#C8CFD5] ">Projects Completed</p>
              </div>

              <div className=" md:ms-[35px] mt-[30px]  flex justify-center md:justify-start ">

                {/* <p className="w-[40px] xl:w-[50px] h-[40px] xl:h-[50px] bg-gray-400 -mr-2.5 z-50   border-2 text-[#ffff] rounded-full flex justify-center items-center">
                  <FaUserAlt className="w-[100%] h-[50%]" />
                </p> */}

                <div className="flex flex-row items-center justify-center mb-10 ">
                  <AnimatedTooltip items={people} />
                </div>
              </div>
            </div>

            <div className="sm:w-[744px] xl:w-[850px] h-[240px] md:h-[300px] xl:h-[400px] rounded-[14px] relative bg-black">
              <Image
                className="object-cover w-[100%] xl:w-[850px] h-[240px] md:h-[300px] xl:h-[400px] rounded-[14px]  opacity-[50%] absolute "
                src={eco_bg}
                alt="Background Image"
                width={1500}
                height={1000}
              />
              <div className="relative mt-6 sm:mt-[110px] md:mt-[138px] xl:mt-[180px]">

                <div className="pt-28 sm:pt-0">
                  <h1 className=" flex justify-center text-[28px] md:text-[40px] xl:text-[47px] leading-[52px] font-bold text-[#FFFFFF] tracking-[6px] ">How We Work</h1>
                </div>

                <div className="relative flex justify-end mt-4 sm:mt-0  xl:mt-16 -right-3">
                  <button className="w-[80px] sm:w-[100px] md:w-[130px] h-[80px] sm:h-[100px] md:h-[130px] bg-[#FFFFFF] rounded-full  hover:bg-[#55E6A5]">
                    <p className="text-2xl sm:text-3xl md:text-4xl flex justify-center items-center w-[63px] sm:w-[80px] md:w-[108px]  h-[63px] sm:h-[80px] md:h-[108px] mx-auto  bg-[#55E6A5] hover:bg-white rounded-full "><FaPlay color="white" /></p>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

    </>
  );
}
