"use client";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { LiaSmsSolid } from "react-icons/lia";
import { TiLocation } from "react-icons/ti";
import { GoArrowUpRight } from "react-icons/go";

import Link from "next/link";

export default function Contact() {
  return (
    <main className="w-[90%] mx-auto">
      <section className="mt-32">
        <div className="flex flex-col items-center">
          <p className="text-[22px] font-semibold text-[#11141D]">Contact us</p>
          <h2 className="text-[48px] font-bold text-[#11141D]">
            We'd love to hear from you
          </h2>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around mt-20">
        <div>
          <div>
            <h1 className="text-[48px] font-bold">Get in touch</h1>
          </div>

          <div className="flex gap-6 text-[#717277] text-[1.8rem] mt-3">
            <Link href={""} target="_blank">
              {" "}
              <FaLinkedinIn />{" "}
            </Link>
            <Link href={""} target="_blank">
              {" "}
              <SiUpwork />{" "}
            </Link>
            <Link href={""} target="_blank">
              {" "}
              <IoLogoYoutube />{" "}
            </Link>
            <Link href={""} target="_blank">
              {" "}
              <FaFacebookF />{" "}
            </Link>
          </div>

          <div className="space-y-6 mt-16 ms-3">
            <div className="flex items-center gap-4">
              <div className="text-[1.8rem] bg-[#ffe375] p-4 rounded-full">
                <FaPhoneVolume />
              </div>

              <div className="space-y-1">
                <p className="text-[#11141D] font-bold text-[1.2rem]">
                  +1800 123 456
                </p>
                <p className="text-[#717277]">Help phone suppport</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[1.8rem] bg-[#ffe375] p-4 rounded-full">
                <LiaSmsSolid />
              </div>

              <div className="space-y-1">
                <p className="text-[#11141D] font-bold text-[1.2rem]">
                  ecoysoft@gmail.com
                </p>
                <p className="text-[#717277]">Help phone suppport</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-[1.8rem] bg-[#ffe375] p-4 rounded-full">
                <TiLocation />
              </div>

              <div className="space-y-1">
                <p className="text-[#11141D] font-bold text-[1.2rem] capitalize">
                  5th avenue, new york, ny.
                </p>
                <p className="text-[#717277]">Our office address</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <form class="w-[45rem] mx-auto bg-[#2B2B35] p-16">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full  text-[#809090] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-medium absolute  text-[#809090] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                First name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_last_name"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full  text-[#809090] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-medium absolute  text-[#809090] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Last name
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                class="block py-2.5 px-0 w-full  text-[#809090] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute  text-[#809090] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full  text-[#809090] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute  text-[#809090] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Phone number (123-456-7890)
                </label>
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="floating_company"
                  id="floating_company"
                  class="block py-2.5 px-0 w-full  text-[#809090] bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute  text-[#809090] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Company (Ex. Google)
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg  w-ful[#809090]uto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-6 items-center"
            >
              Submit <GoArrowUpRight />{" "}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
