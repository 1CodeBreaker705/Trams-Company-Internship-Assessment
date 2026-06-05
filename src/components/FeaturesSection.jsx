import Arrow4 from "../assets/Arrow 4.png";
import img348 from "../assets/image 348.png";
import img349 from "../assets/image 349.png";
import vector5 from "../assets/Vector 5.svg";
import Polygon1 from "../assets/Polygon 1.png"
import Polygon3 from "../assets/Polygon 3.png"
import vector2517 from "../assets/Vector 2517.png";

const FeaturesSection = () => {
  return (
    <>
      <section className="relative z-10 lg:h-[1370px] mt-32 lg:mt-80">
        <div className="hidden lg:block absolute w-[214px] h-[81px] bg-[#D6EDDD] rounded-full left-[550px] top-[210px] z-[-1]"/>
        <img src={vector5} className="hidden lg:block absolute top-[190px] left-[180px] h-[30px] w-[371px] object-cover  z-[-1] " alt="" />
        <div className="hidden lg:block absolute w-[170px] h-[81px] bg-[#D6EDDD] rounded-full right-[711px] bottom-[430px] z-[-1]"/>
        <img src={vector5} className="hidden lg:block absolute bottom-[345px] right-[220px] h-[30px] w-[371px] object-cover  z-[-1] " alt="" />
        <img src={Polygon1} className="hidden lg:block absolute bottom-[20px] left-[550px]  z-20 " alt="" />
        <img src={Polygon1} className="hidden lg:block absolute bottom-[440px] left-[120px]  z-[-1] " alt="" />
        <img src={Polygon3} className="hidden lg:block absolute top-[45px] right-[70px]  z-[-1] " alt="" />
        <div className="hidden lg:block absolute top-[20px] left-[850px] w-[166px] h-[166px] rounded-full bg-[#FF2020] blur-[150px]  "></div>
        <img src={vector2517} className="hidden lg:block absolute bottom-[250px] right-[0px]  z-[-2] " alt="" />
        <div className="h-full max-w-[1599px] mx-auto flex flex-col px-4 md:px-6 lg:px-0">
         <div className="flex flex-col gap-32">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-72 items-center justify-between">
            <div className="flex flex-col gap-7 max-w-[737px]">
              <h1 className="font-gerbil text-[32px] md:text-[44px] lg:text-[54px] leading-[48px] md:leading-[60px] lg:leading-[76px]">
                Tomorrow should be better than today{" "}
              </h1>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[36px]">
                We are a team of strategists, designers communicators,
                researchers. Together, we believe that progress only
                happens when you refuse to play things safe.
              </p>
              <div className="flex gap-3 items-center hover:opacity-70 transition cursor-pointer">
                <p className="text-[16px] md:text-[20px] leading-[24px] font-medium">Read more</p>
                <img src={Arrow4} className="h-[7px] w-[144px] mt-2" alt="" />
              </div>
            </div>
            <img src={img348} className="w-full h-auto lg:h-[600px] max-w-[600px]" alt="" />
          </div>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-x-72 items-center justify-between">
            <img src={img349} className="w-full h-auto lg:h-[600px] max-w-[600px]" alt="" />
            <div className="flex flex-col gap-7 max-w-[737px]">
              <h1 className="font-gerbil text-[32px] md:text-[44px] lg:text-[54px] leading-[48px] md:leading-[60px] lg:leading-[76px]">
                See how we can help you progress
              </h1>
              <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[28px] md:leading-[32px] lg:leading-[36px]">
                We add a layer of fearless insights and action that allows
                change makers to accelerate their progress in areas such as
                brand, design digital, comms and social research.
              </p>
              <div className="flex gap-3 items-center hover:opacity-70 transition cursor-pointer">
                <p className="text-[16px] md:text-[20px] leading-[24px] font-medium">Read more</p>
                <img src={Arrow4} className="h-[7px] w-[144px] mt-2" alt="" />
              </div>
            </div> 
          </div>
         </div>  
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
