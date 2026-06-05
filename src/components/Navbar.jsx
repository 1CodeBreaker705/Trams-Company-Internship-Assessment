const Navbar = () => {
  return (
    <nav className=" h-[80px] md:h-[100px]">
      <div className="max-w-[1600px] mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        <h1 className="text-xl md:text-2xl font-gerbil">
          Elementum
        </h1>

        <ul className="hidden md:flex items-center gap-10 ">
          <li><a href="#" className="hover:opacity-70 transition font-medium">Home</a></li>
          <li><a href="#" className="hover:opacity-70 transition font-medium">Studio</a></li>
          <li><a href="#" className="hover:opacity-70 transition font-medium">Services</a></li>
          <li><a href="#" className="hover:opacity-70 transition font-medium">Contact</a></li>
          <li><a href="#" className="hover:opacity-70 transition font-medium">FAQ's</a></li>
        </ul>
        {/* Hamburger */}
        <div className="flex flex-col gap-2 hover:opacity-70 transition cursor-pointer">
           <div className="h-[2px] w-[45px] bg-black"></div>
           <div className="h-[2px] w-[45px] bg-black"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;