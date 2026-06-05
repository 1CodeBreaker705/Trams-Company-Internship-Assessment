import comma from "../assets/comma.png";
import vector5 from "../assets/Vector 5.svg";
import Ellipse263 from "../assets/Ellipse 263.png"
import Ellipse266 from "../assets/Ellipse 266.png"
import Ellipse268 from "../assets/Ellipse 268.png"
import Ellipse267 from "../assets/Ellipse 267.png"
import Ellipse270 from "../assets/Ellipse 270.png"
import Ellipse264 from "../assets/Ellipse 264.png"
import Ellipse265 from "../assets/Ellipse 265.png"
import Ellipse269 from "../assets/Ellipse 269.png"

const TestimonialSection = () => {
  return (
    <>
      <section className="relative z-10 h-auto lg:h-[653px] mt-24 lg:mt-80 py-8 lg:py-0 ">
        <div className="hidden lg:block absolute w-[220px] h-[75px] bg-[#D6EDDD] rounded-full left-[590px] top-[-2px] z-[-1]"/>
        <img src={vector5} className="hidden lg:block absolute top-[123px] left-[860px] h-[30px] w-[371px] object-cover  z-[-1] " alt="" />
        <img src={Ellipse263} className="hidden lg:block absolute top-[2px] left-[150px]  " alt="" />
        <img src={Ellipse266} className="hidden lg:block absolute top-[200px] left-[60px]  " alt="" />
        <img src={Ellipse268} className="hidden lg:block absolute top-[240px] left-[190px]  " alt="" />
        <img src={Ellipse267} className="hidden lg:block absolute top-[460px] left-[35px]  " alt="" />
        <img src={Ellipse270} className="hidden lg:block absolute top-[1px] right-[50px]  " alt="" />
        <img src={Ellipse264} className="hidden lg:block absolute top-[80px] right-[300px]  " alt="" />
        <img src={Ellipse265} className="hidden lg:block absolute top-[250px] right-[250px]  " alt="" />
        <img src={Ellipse269} className="hidden lg:block absolute top-[350px] right-[-35px]  " alt="" />
        <div className="h-full max-w-[1844px] mx-auto flex flex-col gap-12 lg:gap-20 px-4 md:px-6 lg:px-0 items-center">
          <h1 className="font-gerbil text-[36px] md:text-[46px] lg:text-[56px] leading-[46px] md:leading-[56px] lg:leading-[66px] max-w-[690px] text-center">
            What our customer says About Us
          </h1>
          <div className="w-full max-w-[925px] min-h-[280px] lg:h-[358px] bg-[#D7EEDD4D] rounded-[30px] lg:rounded-[60px] flex items-center justify-center px-6 md:px-0">
            <div className="relative max-w-[703px] text-center p-4 lg:p-0">
            <img src={comma} className="absolute rotate-180 top-[-10px] lg:top-[-20px] left-0 lg:left-[-65px] w-6 lg:w-auto" alt="" />
            <p className="text-[18px] md:text-[24px] lg:text-[30px] leading-[30px] md:leading-[36px] lg:leading-[42px]">
              {" "}
              Elementum delivered the site within the timeline as they
              requested. In the end, the client found a 50% increase in traffic
              within days since its launch. They also had an impressive ability
              to use technologies that the company hasn`t used, which have also
              proved to be easy to use and reliable{" "}
            </p>
            <img src={comma} className="absolute bottom-[-10px] lg:bottom-[-20px] right-[70px] lg:right-[90px] w-6 lg:w-auto" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
