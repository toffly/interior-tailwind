import { heroImage, searchIcon } from "../assets";
import { heroTitle, heroSubtitle } from "../constants";

import Navbar from "./Navbar";

const Hero = () => {
  return (
    <section
      id="hero"
      className="h-screen relative flex flex-col items-center"
      style={{
        background: `url(${heroImage})`,
        backgroundPosition: "bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <div className="relative w-full max-w-[1490px] h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl leading-tight xs:text-[64px] text-white max-w-[1050px] text-center">
          {heroTitle}
        </h1>
        <h5 className="mt-6 text-center text-lg xs:text-xl text-white max-w-[500px]">
          {heroSubtitle}
        </h5>
        <div className="relative w-full xs:w-[460px] mt-11">
          <input
            type="text"
            placeholder="Search"
            className="rounded-full w-full pl-6 pr-[68px] py-4 bg-primary outline-none text-white text-base xs:text-lg placeholder-white"
          />
          <img
            src={searchIcon}
            alt="searchIcon"
            className="absolute top-2/4 -translate-y-2/4 right-3 h-11 cursor-pointer"
          />
        </div>
      </div>

      <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
    </section>
  );
};

export default Hero;
