import HeroSection from "@/modules/home/hero";
import MeetOurProfessional from "@/modules/home/meet-professional";
import OurPortfolio from "@/modules/home/portfolio";
import RecentBlog from "@/modules/home/recent-blog";
import OurServices from "@/modules/home/services";
import WhyUs from "@/modules/home/why-choose-us";
import ClientFeedback from "@/modules/home/client-feedback";

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-52 sm:mb-80">
          <HeroSection />
        </div>
        <WhyUs />
        <OurServices />
        <OurPortfolio />
        <MeetOurProfessional />
        <ClientFeedback />
        <RecentBlog />
      </div>
      {/* Adding here your all home page component side by side */}

      {/* If you need install any package or anything you can do */}
    </>
  );
}
