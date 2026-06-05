import vector2518 from "../assets/Vector 2518.png";
import Ellipse739 from "../assets/Ellipse 739.png"

const FooterAndCTASection = () => {
  return (
    <>
      <section className="relative z-10 h-auto lg:h-[1200px] mt-32 lg:mt-80 pt-16 lg:pt-30 bg-[#D7EEDD]">
        <img src={vector2518} className="hidden lg:block absolute top-[0px] left-[650px]" alt="" />
        <img src={vector2518} className="hidden lg:block absolute top-[0px] left-[760px]" alt="" />
        <img src={Ellipse739} className="hidden lg:block absolute top-[200px] right-[100px]" alt="" />
        <div className="h-full max-w-[1600px] mx-auto flex flex-col gap-12 lg:gap-20 items-center px-4 md:px-6 lg:px-0">
          <div className="text-center flex flex-col gap-10 items-center justify-center">
            <h1 className="font-gerbil text-[42px] md:text-[70px] lg:text-[100px] leading-[52px] md:leading-[90px] lg:leading-[116px]">
              Subscribe to our newsletter
            </h1>
            <p className="text-[16px] md:text-[20px] lg:text-[24px] leading-[26px] md:leading-[32px] lg:leading-[36px]">
              To make your stay special and even more memorable
            </p>
            <button className="w-[200px] md:w-[233px] h-[60px] md:h-[72px] rounded-full text-white bg-black font-medium text-[20px] leading-[30px] hover:opacity-80 transition cursor-pointer ">
              Subscribe Now
            </button>
          </div>
          <div className="h-[1px] w-full bg-black"></div>
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-between w-full gap-12 lg:gap-0 ">
            <div >
              <ul className="space-y-7">
                <li className="font-gerbil text-[20px] lg:text-[22px] leading-[30px]">
                  Company
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mt-10">
                  <a className="hover:opacity-70 transition" href="">Home</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Studio</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Service</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Blog</a>
                </li>
              </ul>
            </div>
            <div >
              <ul className="space-y-7">
                <li className="font-gerbil text-[20px] lg:text-[22px] leading-[30px]">
                  Terms & Policies
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mt-10">
                  <a className="hover:opacity-70 transition"  href="">Privacy Policy</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Terms & Conditions</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Explore</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Accessibility</a>
                </li>
              </ul>
            </div>
            <div >
              <ul className="space-y-7">
                <li className="font-gerbil text-[20px] lg:text-[22px] leading-[30px]">
                  Follow Us
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mt-10">
                  <a className="hover:opacity-70 transition"  href="">Instagram</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">LinkedIn</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Youtube</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">Twitter</a>
                </li>
              </ul>
            </div>
            <div >
              <ul className="space-y-7">
                <li className="font-gerbil text-[20px] lg:text-[22px] leading-[30px]">
                  Contact
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px] mt-10">
                  <a className="hover:opacity-70 transition"  href="">1498w Fluton ste, STE <br/> 2D Chicgo, IL 63867.</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">(123) 456789000</a>
                </li>
                <li className="text-[16px] md:text-[18px] lg:text-[20px] leading-[30px]">
                  <a className="hover:opacity-70 transition"  href="">info@elementum.com</a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-[18px] leading-[30px] mt-20">
              ©2023 Elementum. All rights reserved
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterAndCTASection;
