"use client";
import { useState } from "react";
import { Tab } from "@headlessui/react";

import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Career from "./career";
import About_hero from "./about/about-hero";
import Founding_story from "./about/founding-story";
import Teams from "./about/teams";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const hero = () => {
  let [categories] = useState({
    All: [
      {
        title: "Search engine optimization",
        url: "https:/google.com/",
      },
      {
        title: "Social media marketing",
        url: "https:/google.com/",
      },
      {
        title: "Integrated online strategies",
        url: "https:/google.com/",
      },
      {
        title: "Quality link building",
        url: "https:/google.com/",
      },
    ],

    Development: [
      {
        title: "Search engine optimization",
        url: "https:/google.com/",
      },
    ],

    Design: [
      {
        title: "Quality link building",
        url: "https:/google.com/",
      },
    ],

    Marketing: [
      {
        title: "Social media marketing",
        url: "https:/google.com/",
      },
      {
        title: "Integrated online strategies",
        url: "https:/google.com/",
      },
    ],
  });

  return (
    <>
      <main className="w-[98%] sm:w-[90%] mx-auto mt-[8rem] md:mt-[10rem]">
        <section>
          <div className="flex flex-col items-center ">
            <p className="text-[16px] sm:text-[19px] lg:text-[22px] text-[#181B23] font-bold">
              Services
            </p>
            <h3 className=" text-[2.3rem] text-center sm:text-[3rem] md:text-[3.2rem] lg:text-[58px] font-bold text-[#11141B]">
              Service we provide
            </h3>
          </div>
        </section>

        <section className="flex justify-center ">
          <div className="w-full  px-2 py-8 sm:px-0 ">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/15 max-w-md mx-auto p-1">
                {Object.keys(categories).map((category) => (
                  <Tab
                    key={category}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-lg px-1 text-[8px] md:text-[16px] py-2.5 text-sm font-medium leading-5",
                        "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                        selected
                          ? "bg-white text-black shadow "
                          : "text-black font-semibold hover:bg-white/[0.60] hover:text-black"
                      )
                    }
                  >
                    {category}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mt-2">
                {Object.values(categories).map((posts, idx) => (
                  <Tab.Panel key={idx}>
                    <ul className="w-[98%] sm:w-[90%] m-auto mt-[10%] lg:mt-[5%]">
                      {posts.map((post, idx) => (
                        <li
                          key={idx}
                          className="relative rounded-sm py-6 sm:py-8 lg:py-9 bg-[#11141D] text-white mt-4 sm:mt-6"
                        >
                          <h3 className="text-[1.1rem] sm:text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] font-medium w-[88%] sm:w-[85%] md:w-[80%] m-auto flex justify-between leading-5">
                            {post.title} <GoArrowUpRight />
                          </h3>
                          <Link
                            href={post.url}
                            target="_blank"
                            className={classNames(
                              "absolute inset-0 rounded-md",
                              "ring-blue-400 focus:z-10 focus:outline-none focus:ring-2"
                            )}
                          />
                        </li>
                      ))}
                    </ul>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </section>

        <hr className="mt-[6%] mb-[5%]" />

        <section>
          <Career />
        </section>
        <section>
          <About_hero />
        </section>

        <section>
          <Founding_story />
        </section>

        <section>
          <Teams />
        </section>
      </main>
    </>
  );
};

export default hero;
