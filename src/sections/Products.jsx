import { productsTitle, productsBtnText, products } from "../constants";
import { arrowIcon, starsIcon, plusIcon } from "../assets";

const Products = () => {
  return (
    <section
      id="products"
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
        mx-auto px-10 w-full"
    >
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {productsTitle}
          </h1>
          <button
            className="flex items-center gap-2 bg-transparent text-fontBlack border-transparent font-bold py-2
              px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto
              2xl:mx-0 mb-10 2xl:mb-0"
          >
            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium">
              {productsBtnText}
            </h5>
            <img src={arrowIcon} alt="" />
          </button>
        </div>

      <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
        {products.map((product, i) => (
          <div className="h-[510px] relative flex md:flex-1 items-center justify-center bg-[#C1D0E4] rounded-[50px] max-w-[500px]" key={product.title}>
            <img
              src={product.img}
              alt=""
              className="absolute -top-[120px] left-1/2 -translate-x-1/2"
            />
            <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
              <div>
                <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
                  {product.title}
                </h2>
                <img src={starsIcon} alt="" />
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
                  {product.price}
                </h3>
                <img
                  src={plusIcon}
                  alt=""
                  className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
