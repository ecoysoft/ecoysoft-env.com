/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import eco_logo_with_name from "../../../assets/images/logo/logo-with-name.png";
import { useState } from "react";
import Link from "next/link";

export default function navbar() {
  const [open, SetOpen] = useState(false);

  const navData = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: "Blog", url: "/blog" },
    { name: "Contact Us", url: "/contact" },
    { name: "About Us", url: "/about" },
  ];

  return (
    <nav>
      <section className="bg-[#ffffff] shadow-md text-[#262626] w-[100%] fixed top-0 md:p-0 z-[5000] ">
        <div className="flex justify-around   items-center py-2 ">
          <div className="block md:hidden text-2xl sm:text-4xl">
            <button onClick={() => SetOpen(!open)}>
              {open ? <IoCloseSharp /> : <FiMenu />}
            </button>
          </div>
          <div>
            <Image
              className="w-[150px] h-auto"
              src={eco_logo_with_name}
              alt="eco logo"
              width={150}
              height={1000}
            />
          </div>

          <div>
            <nav>
              <ul
                className={`flex flex-col md:flex-row ease-linear duration-500 absolute md:static bg-[#f2f2f2] md:bg-none items-center text-[20px] pt-12 md:pt-0 mt-[38px] md:mt-0 w-[100%] h-[100vh]  md:h-0 gap-8  md:gap-10 xl:gap-16 md:text-[15px] font-semibold ${open ? "left-0" : "-left-[100%]"
                  }  `}
              >
                {navData.map((nav) => (
                  <Link href={nav.url} key={nav.name}>
                    <li onClick={(open)}>{nav.name}</li>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <button className="rounded-md border-2 text-[10px] sm:text-[0.875rem] border-[#262626] px-[10px] sm:px-[15px] py-[4px] sm:py-[6px]  text-[#262626] ">
              Let’s Talk
            </button>
          </div>
        </div>
      </section>
    </nav>
  );
}
