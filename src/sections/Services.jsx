import { services } from "../constants";

const Services = () => {
  return (
    <section
      id="services"
      className="mt-[160px] max-w-[1490px] mx-auto px-10 flex flex-col xs:flex-row gap-12 xs:justify-between w-full"
    >
      {services.map((service, index) => (
        <div
          className="flex flex-col lg:flex-row gap-4 w-full items-center"
          key={service.title}
        >
          <img
            src={service.icon}
            alt="service-image"
            className="max-w-[84px] max-h-[84px]"
          />
          <div className="flex flex-col gap-1.5">
            <h3 className="text-center lg:text-start text-2xl lg:text-[28px] text-fontBlack font-medium">
              {service.title}
            </h3>
            <h6 className="text-center lg:text-start text-base lg:text-lg text-fontGray font-medium">
              {service.subtitle}
            </h6>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
