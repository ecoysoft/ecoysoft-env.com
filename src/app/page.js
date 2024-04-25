import HeroSection from "@/modules/home/hero";
import WhyUs from "@/modules/home/why-choose-us";

export default function Home() {
  return (
    <>
      <div>
        <div className="mb-52 sm:mb-80">
          <HeroSection />
        </div>
        <WhyUs />
      </div>
      {/* Adding here your all home page component side by side */}
    </>
  );
}
