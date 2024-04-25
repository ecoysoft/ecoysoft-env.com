"use client";
import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import facebook_Logo from "../../../assets/images/logo/facebook.png"
import twitter_Logo from "../../../assets/images/logo/twitter.png"
import upwork_Logo from "../../../assets/images/logo/upwork.png"
import youtube_Logo from "../../../assets/images/logo/youtube.png"
import linkIn_Logo from "../../../assets/images/logo/linkIn.png"
import eco_Logo from "../../../assets/images/logo/Logo.png"
import ecoysoft_Logo from "../../../assets/images/logo/logo-with-name.png"
import Link from "next/link";

export default function footer() {

  const footersHomeData = [
    { name: "Services", url: "/service" },
    { name: "About Us", url: "/service" },
    { name: "Products", url: "/service" },
    { name: "Pricing", url: "/service" },
    { name: "Partners", url: "/service" }
  ]

  const UsersData = [
    { name: "Sign in", url: "/signIn" },
    { name: "New Account", url: "/account" },
    { name: "Demo", url: "/demo" },
    { name: "Career", url: "/career" },
    { name: "Surveys", url: "/surveys" }
  ]

  const resourcesData = [
    { name: "Documentation", url: "/signIn" },
    { name: "Tutorials", url: "/account" },
    { name: "Take a part", url: "/demo" },
    { name: "Support", url: "/career" },
  ]

  const supportsData = [
    { name: "Help Center", url: "/signIn" },
    { name: "Privacy Policy", url: "/account" },
    { name: "Conditions", url: "/demo" },
    { name: "FAQ", url: "/career" },
  ]


  const contactsUsData = [
    { name: "85 MM Hossain Road, Kushtia", url: "/signIn" },
    { name: "Khulna, Bangladesh - 7000", url: "/account" },
    { name: "community@ecoysoft.com", url: "/demo" },
    { name: "support@ecoysoft.com", url: "/career" },
    { name: "8801937270044", url: "/career" },
  ]


  return (
    <footer>
      <section className="mt-32 bg-[#f8f9fb]">
        <div className="flex flex-col items-center gap-6 pt-20">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium">Ready to do your best work?</h1>
          <h3 className="text-[19px] sm:text-3xl font-medium">Let s get you started.</h3>
          <button className="flex items-center bg-[#f74371] px-7 md:px-12 py-2 md:py-3 text-white rounded-md text-[16px] md:text-[20px]">
            <span className="uppercase">Contact US</span> <span><GoChevronRight /></span>
          </button>
        </div>

        <div className="w-[90%] mx-auto grid-cols-2 sm:grid-cols-3 grid lg:grid-cols-4 xl:grid-cols-5 justify-center  mt-16">
          <div className="flex flex-col gap-6">
            <p className="text-[18px] text-[#ababab]">HOME</p>
            <div className="flex flex-col gap-4 text-[#696668]">
              {
                footersHomeData.map((footer) => <Link href={footer.url} key={footer.name}>
                  {footer.name}
                </Link>)
              }
            </div>
          </div>

          <div className="flex flex-col gap-6 ">
            <p className="text-[18px] text-[#ababab]">USER</p>
            <div className="flex flex-col gap-4 text-[#696668]">
              {
                UsersData.map((user) => <Link href={user.url} key={user.name}>
                  {user.name}
                </Link>)
              }
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-12 lg:mt-0">
            <p className="text-[18px] text-[#ababab]">RESOURCES</p>
            <div className="flex flex-col gap-4 text-[#696668]">
              {
                resourcesData.map((resource) => <Link href={resource.url} key={resource.name}>
                  {resource.name}
                </Link>)
              }
            </div>
          </div>


          <div className="flex flex-col gap-6 mt-12 lg:mt-0">
            <p className="text-[18px] text-[#ababab]">SUPPORT</p>
            <div className="flex flex-col gap-4 text-[#696668]">
              {
                supportsData.map((support) => <Link href={support.url} key={support.name}>
                  {support.name}
                </Link>)
              }
            </div>
          </div>

          <div className="flex flex-col gap-6 mt-12 lg:mt-0">
            <p className="text-[18px] text-[#ababab]">CONTACT US</p>
            <div className="flex flex-col gap-4 text-[#696668]">
              {
                contactsUsData.map((contact) => <Link href={contact.url} key={contact.name}>
                  {contact.name}
                </Link>)
              }
            </div>
          </div>
        </div>

        <div>
          <div className="flex gap-4 justify-center ">
            <p className=" block sm:hidden mt-20 sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Eco Home</p>
            <p className=" block sm:hidden mt-20 sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Contact Us</p>
          </div>
          <div className="flex justify-center gap-6 mt-10 sm:mt-20">
            <Image className="w-[35px] h-auto "
              src={facebook_Logo}
              alt="facebook logo"
              width={30}
              height={30}
            />

            <Image className="w-[35px] h-auto "
              src={twitter_Logo}
              alt="twitter logo"
              width={30}
              height={30}
            />

            <Image className="w-[35px] h-auto "
              src={youtube_Logo}
              alt="youtube logo"
              width={30}
              height={30}
            />
            <Image className="w-[35px] h-auto "
              src={linkIn_Logo}
              alt="upwork logo"
              width={30}
              height={30}
            />
            <Image className="w-[35px] h-auto "
              src={upwork_Logo}
              alt="upwork logo"
              width={30}
              height={30}
            />
          </div>
          <div className="mt-6">
            <div className="flex justify-center gap-4 ">
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Eco Home</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Contact Us</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Security</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">IPR Complaints</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Anti-spam Policy</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Terms of Service</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Privacy Policy</p>
            </div>
            <br />
            <div className="flex justify-center gap-4">
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Cookie Policy</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">GDPR Compliance</p>
              <p className=" hidden sm:block sm:text-[12px] md:text-[16px] hover:text-[#03a9f5] transition-all delay-300">Abuse Policy</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bg-[#0b0d1f] text-white py-12">
          <Image className="w-[5%] h-auto mx-auto"
            src={eco_Logo}
            alt="youtube logo"
            width={1500}
            height={1000}
          />
          <p>© 2024, ecoysoft Corporation Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </section>
    </footer>
  )
}

