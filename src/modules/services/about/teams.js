"use client";
import { GoArrowUpRight } from "react-icons/go";
import { FaLinkedinIn } from "react-icons/fa";
import { FcPortraitMode } from "react-icons/fc";

import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

import img1 from "../../../assets/images/img/project1.gif";
import img2 from "../../../assets/images/img/project2.gif";
import img3 from "../../../assets/images/img/project3.gif";
import img4 from "../../../assets/images/img/project4.gif";

const teams = () => {
  const teams = [
    { image: img1, name: "teams", profashion: "Developers..." },
    { image: img2, name: "teams", profashion: "Developers..." },
    { image: img3, name: "teams", profashion: "Developers..." },
    { image: img4, name: "teams", profashion: "Developers..." },
  ];
  return (
    <>
      <main className="mt-36">
        <section>
          <div className="flex flex-col gap-y-8  md:flex-row justify-between text-center md:text-left items-center ">
            <div className="md:w-[60%] space-y-2">
              <p className=" text-[17px] sm:text-[19px] xl:text-[22px] text-[#181B23] font-bold">
                Team
              </p>
              <h3 className="text-[28px] sm:text-[42px] md:text-[38px] md:leading-[40px] lg:leading-[50px] lg:text-[50px] font-bold text-[#11141B]">
                Amazing team <br /> member
              </h3>
            </div>

            <div>
              <button className="bg-[#FFE375]  text-[#181B23] font-semibold text-[16px] lg:text-[21px] px-16 md:px-10 py-4  lg:py-5 rounded-md flex items-center gap-4">
                View all member <GoArrowUpRight />{" "}
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 mt-20 justify-between">
            {teams.map((team, ind) => (
              <div key={ind} className="mt-8">
                <DirectionAwareHover imageUrl={team.image}>
                  <p className="font-bold text-[25px] flex justify-between items-center">
                    {team.name} <GoArrowUpRight />
                  </p>
                  <p className="font-normal text-md">{team.profashion}</p>

                  <div className="mt-3 flex gap-3">
                    <button>
                      <FcPortraitMode />
                    </button>

                    <button>
                      <FaLinkedinIn />
                    </button>
                  </div>
                </DirectionAwareHover>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default teams;
