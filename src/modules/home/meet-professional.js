"use client";
import Image from "next/image";
import Aditto_Dev from "../../assets/images/img/438275324_827408062550534_3886180235609295478_n.jpg"
import Shahriar_Ahmed from "../../assets/images/img/Shahriar Ahmed.jpg"

const professionals = [
  { name: "Aditto Dev Barmon", professio: "Developer", image: Aditto_Dev },
  { name: "Shahriar Ahmed", professio: "Developer", image: Shahriar_Ahmed },
  { name: "Aditto Dev Barmon", professio: "Developer", image: Aditto_Dev }
]



export default function MeetOurProfessional() {
  return (
    <main>
      <section className="flex flex-col  items-center mt-36">
        <div>
          <p className="text-[11px] sm:text-[14px] md:text-[17px] text-center  text-[#55E6A5] md:leading-[26px] uppercase">Meet our team members</p>
          <h1 className="text-[25px]  sm:text-[38px] xl:text-[48px] text-center px-2 md:px-12 md:leading-[62px] text-[#18191C] font-bold ">Meet the professional team behind the success</h1>
          <hr className="w-[30%] mx-auto mt-4 border-[1.8px] text-[#6F7174]" />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {
            professionals.map((professional) => <div key={professional.name}>
              <div className="w-[300px] sm:w-[370px] h-[380px] sm:h-[402px] bg-[#F2F3F6] rounded-[12px] flex flex-col gap-6  text-center">
                <div>
                  <h3 className="text-[19px] sm:text-[24px] leading-[31px] font-bold text-[#18191C] mt-6">{professional.name}</h3>
                  <p className="text-[14px] sm:text-[16px] leading-[23px] text-[#6F7174]">{professional.professio}</p>
                </div>

                <div>
                  <Image
                    className="w-[270px] sm:w-[334px] h-[275px] sm:h-[300px] object-cover mx-auto rounded-[10px]"
                    src={professional.image}
                    height={1500}
                    width={1000}
                    alt="Splash Icon"
                  />
                </div>
              </div>
            </div>)
          }
        </div>
      </section>
    </main>
  );
}
