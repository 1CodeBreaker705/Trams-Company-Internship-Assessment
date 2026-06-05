import vector2510 from "../assets/Vector 2510.png";
import vector2511 from "../assets/Vector 2511.png";
import vector5 from "../assets/Vector 5.svg";
import Ellipse736 from "../assets/Ellipse 736.svg";
import img1 from "../assets/Ellipse 262.png";
import img2 from "../assets/Ellipse 261.png";
import img3 from "../assets/Ellipse 255.png";
import img4 from "../assets/Ellipse 256.png";
import img5 from "../assets/Ellipse 257.png";
import img6 from "../assets/Ellipse 258.png";
import img7 from "../assets/Ellipse 259.png";
import img8 from "../assets/Ellipse 260.png";
const HeroSection = () => {
  return (
    <>
      <section className="relative z-10 h-auto lg:h-[1011px] mt-28 lg:mt-30">
        <img src={vector2510} className="hidden lg:block absolute top-[380px] left-[1px] " alt="" />
        <img src={vector2511} className="hidden lg:block absolute top-[380px] left-[50px] " alt="" />
        <img src={vector5} className="hidden lg:block absolute top-[100px] left-[650px] z-[-1] " alt="" />
        <img src={Ellipse736} className="hidden lg:block absolute left-[1660px] top-[200px] z-[-1] " alt="" />
        <img src={img1} className="hidden lg:block absolute h-[226px] w-[226px]  left-[30px] top-[765px] " alt="" />
        <img src={img2} className="hidden lg:block absolute h-[226px] w-[226px]  left-[190px] top-[700px] " alt="" />
        <img src={img3} className="hidden lg:block absolute h-[226px] w-[226px]  left-[550px] top-[570px] " alt="" />
        <img src={img4} className="hidden lg:block absolute h-[226px] w-[226px]  left-[700px] top-[780px] " alt="" />
        <img src={img5} className="hidden lg:block absolute h-[226px] w-[226px]  left-[1010px] top-[610px] " alt="" />
        <img src={img6} className="hidden lg:block absolute h-[226px] w-[226px]  left-[1180px] top-[690px] " alt="" />
        <img src={img7} className="hidden lg:block absolute h-[226px] w-[226px]  left-[1450px] top-[570px] " alt="" />
        <img src={img8} className="hidden lg:block absolute h-[226px] w-[226px]  right-[20px] top-[750px] " alt="" />
        <div className="hidden lg:block absolute w-[405px] h-[137px] bg-[#FFC2EA] rounded-full left-[1229px] top-[137px] z-[-1]"></div>
        <div className="hidden lg:block absolute w-[445px] h-[109px] bg-[#D6EDDD] rounded-full left-[555px] top-[268px] z-[-1]"></div>
        <div className="h-full mx-auto max-w-[1844px]">
          <div className="max-w-[1305px] mx-auto px-4 lg:px-0 ">
            <h1 className="font-gerbil text-[42px] md:text-[70px] lg:text-[100px] leading-[52px] md:leading-[90px] lg:leading-[126px] text-center">
              The thinkers and 
              doers were changing 
              the status Quo with
            </h1>
            <p className="max-w-[831px] mx-auto text-center mt-6 md:mt-10 text-[16px] md:text-[20px] lg:text-[24px] leading-[26px] md:leading-[32px] lg:leading-[36px]">
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only happens when
              you refuse to play things safe.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
