import { referenceTitle, referenceSubtitle } from "../constants";
import { imageOne, imageTwo, imageThree } from "../assets";

const Reference = () => {
  return (
    <section id="reference" className="mb-[160px] px-10 max-w-[1490px] mx-auto">
      <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6 text-center">
        {referenceTitle}
      </h1>
      <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12 text-center">{referenceSubtitle}</h5>

      <div className="flex flex-col md:flex-row md:justify-center gap-8">
        <div className="flex flex-col gap-8">
          <img src={imageOne} alt="" />
          <img src={imageTwo} alt="" />
        </div>
        <div>
          <img src={imageThree} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Reference;
