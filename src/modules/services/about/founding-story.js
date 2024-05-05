"use client";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import service_bg from "../../../assets/images/img/project3.gif";
import CEO from "../../../assets/images/img/client2.jpg";
import Career from "../career";

const FundingStory = () => {
  const ex = [
    { count: "14+", title: "Years of experience" },
    { count: "3K", title: "Priject done" },
    { count: "1K+", title: "Cline satisfy" },
    { count: "20", title: "Company trusted us" },
  ];
  return (
    <>
      <main>
        <section className="flex gap-12 justify-between">
          <div className="w-[45%]">
            <div>
              <h1 className="text-[48px] mb-6 text-[#18191C] font-bold">
                Our founding story
              </h1>
            </div>

            <div>
              <Image
                className="w-[90%] h-[500px] object-cover"
                src={service_bg}
                height={1000}
                width={1000}
                alt="Splash Icon"
              />
            </div>

            <div className="flex gap-6 items-center mt-14">
              <Image
                className="w-[100px] h-[100px] rounded-full"
                src={CEO}
                height={100}
                width={100}
                alt="Splash Icon"
              />

              <div>
                <p className="text-[21px] text-[#18191C] font-semibold">
                  Wade warren
                </p>
                <p className="text-[#717277]">CEO, corporation</p>
              </div>
            </div>
          </div>

          <div className="w-[45%] text-left text-[#717277]">
            <p>
              Responsibilities The responsibilities of an organizations CEO are
              set by the organizations board of directors or other authority,
              depending on the organizations structure. They can be far-reaching
              or quite limited, and are typically enshrined in a formal
              delegation of authority regarding business administration.
              Typically, responsibilities include being an active decision-maker
              on business strategy and other key policy issues, leader, manager,
              and executor. The communicator role can involve speaking to the
              press and to the public, as well as to the organizations
              management and employees; the decision-making role involves
              high-level decisions about policy and strategy.
              <br />
              <br />
              <br />
              The CEO is tasked with implementing the goals, targets and
              strategic objectives as determined by the board of directors. As
              an executive officer of the company, the CEO reports the status of
              the business to the board of directors, motivates employees, and
              drives change within the organization. As a manager, the CEO
              presides over the organizations day-to-day operations.[5][6][7]
              The CEO is the person who is ultimately accountable for a companys
              business decisions, including those in operations, marketing,
              business development, finance, human resources, etc. The use of
              the CEO title is not necessarily limited to describing the head of
              a company. For example, the CEO of a political party is often
              entrusted with fundraising, particularly for election campaigns.
              International use In some countries, there is a dual
              <br />
              <br />
              <br />
              board system with two separate boards, one executive board for the
              day-to-day business and one supervisory board for control purposes
              (selected by the shareholders). In these countries, the CEO
              presides over the executive board and the chairperson presides
              over the supervisory board, and these two roles will always be
              held by different people. This ensures a distinction between
              management by the executive board and governance by the
              supervisory board. This allows for clear lines of authority. The
              aim is to prevent a conflict of interest and too much power being
              concentrated in the hands of one person. In the United States, the
              board of directors (elected by the shareholders) is often.
            </p>

            <h3 className=" text-[40px] font-bold text-[#18191C] mt-12 w-[70%]">
              Our goal is to build software that gives customer-facing teams at
              SMBs the ability to create fruitful and enduring relationships
              with custmers.
            </h3>
          </div>
        </section>

        <section className="mt-32">
          <hr />
          <div className="flex justify-between items-center py-6">
            {ex.map((e, index) => (
              <div key={index}>
                <h4 className="text-[3.7rem] font-bold text-[#18191C]">
                  {e.count}
                </h4>
                <p className="text-[20px] ms-2 text-[#18191C] font-semibold">
                  {e.title}
                </p>
              </div>
            ))}
          </div>
          <hr />
        </section>
      </main>
    </>
  );
};

export default FundingStory;
