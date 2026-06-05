import Arrow5 from "../assets/Arrow 5.png";
import vector5 from "../assets/Vector 5.svg";
import rectangle661 from "../assets/Rectangle 661.png";
import vector2516 from "../assets/Vector 2516.png";

const ServicesSection = () => {
  return (
    <>
      <section className="relative z-10 h-auto lg:h-[856px] mt-24 lg:mt-80 py-8 lg:py-0">
        <div className="hidden lg:block absolute w-[235px] h-[92px] bg-[#D6EDDD] rounded-full left-[675px] top-[25px] z-[-1]"/>
        <img src={vector5} className="hidden lg:block absolute top-[213px] left-[75px] h-[30px] w-[371px] object-cover  z-[-1] " alt="" />
        <img src={rectangle661} className="hidden lg:block absolute h-[160px] w-[160px]  bottom-[-100px] right-[250px]" alt="" />
        <img src={vector2516} className="hidden lg:block absolute top-[-400px] right-[0px]" alt="" />
        <div className="h-full max-w-[1618px] mx-auto flex flex-col gap-12 lg:gap-20 px-4 md:px-6 lg:px-0">
          <h1 className="font-gerbil text-[42px] md:text-[60px] lg:text-[90px] leading-[52px] md:leading-[80px] lg:leading-[116px] max-w-[869px] ">
            What we can offer you!
          </h1>
          <div>
            <div className=" py-6 lg:h-[180px] border-t border-t-[#B1B1B1] border-b border-b-[#B1B1B1] grid grid-cols-1 lg:grid-cols-[450px_1fr_100px] gap-4 lg:gap-0 items-center ">
              <p className="text-[18px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[36px] lg:leading-[42px] max-w-[226px]">Office of multiple interest content</p>
              <h1 className="font-gerbil text-[32px] md:text-[42px] lg:text-[56px] leading-[40px] md:leading-[60px] lg:leading-[116px]">Collaborative & partnership</h1>
              <img src={Arrow5} className="hover:opacity-70 transition cursor-pointer  w-12 lg:w-auto justify-self-start lg:justify-self-auto" alt="" />
            </div>
            <div className="py-6 lg:h-[180px] border-b border-b-[#B1B1B1] grid grid-cols-1 lg:grid-cols-[450px_1fr_100px] gap-4 lg:gap-0 items-center ">
              <p className="text-[18px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[36px] lg:leading-[42px] max-w-[316px]" >The hanger US Air force digital experimental</p>
              <h1 className="font-gerbil text-[32px] md:text-[42px] lg:text-[56px] leading-[40px] md:leading-[60px] lg:leading-[116px]">We talk about our weight</h1>
              <img src={Arrow5} className="hover:opacity-70 transition cursor-pointer  w-12 lg:w-auto justify-self-start lg:justify-self-auto"  alt="" />
            </div>
            <div className="py-6 lg:h-[180px] border-b border-b-[#B1B1B1] grid grid-cols-1 lg:grid-cols-[450px_1fr_100px] gap-4 lg:gap-0 items-center ">
              <p className="text-[18px] md:text-[24px] lg:text-[30px] leading-[28px] md:leading-[36px] lg:leading-[42px] max-w-[273px]">Delta faucet content, social, digital</p>
              <h1 className="font-gerbil text-[32px] md:text-[42px] lg:text-[56px] leading-[40px] md:leading-[60px] lg:leading-[116px]" >Piloting digital confidence</h1>
              <img src={Arrow5} className="hover:opacity-70 transition cursor-pointer  w-12 lg:w-auto justify-self-start lg:justify-self-auto"  alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
