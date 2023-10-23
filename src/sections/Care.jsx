import { careTitle, careList, careSubtitle } from "../constants";
import { imageFour } from "../assets";

const Care = () => {
  return (
    <section
      id="care"
      className="flex flex-1 flex-col xl:flex-row gap-4 justify-between px-10 max-w-[1490px] mx-auto mb-[160px]"
    >
      <div className="flex flex-col justify-start w-[640px]">
        <h1 className="text-5xl lg:text-[64px] font-medium text-fontBlack mb-6">
          {careTitle}
        </h1>
        <h5 className="text-[#4F4F4F] text-lg xs:text-xl mb-12">
          {careSubtitle}
        </h5>

        <div className="flex flex-row xs:flex-col gap-6 items-center xs:items-start">
          {careList.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col xs:flex-row gap-6 items-center xs:items-start"
            >
              <img src={item.img} alt="item-image" width={88} height={68} />
              <div>
                <h3 className="text-center xs:text-start mb-2 text-2xl lg:text-[28px] text-fontBlack font-medium">
                  {item.title}
                </h3>
                <h6 className="text-center xs:text-start text-base lg:text-lg text-fontGray font-medium">
                  {item.subtitle}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={imageFour} alt="plants" />
    </section>
  );
};

export default Care;
