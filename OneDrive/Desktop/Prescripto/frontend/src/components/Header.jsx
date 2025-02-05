import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#5f6fff] rounded-lg px-6 md:px-10 lg:px-20">
      {/*-------- Left Side -------*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-9 m-auto md:py-[10vw]">
        <p className="text-3xl md:text-4xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight">
          Book Appointments <br /> With Trusted Doctors
        </p>
        <div>
          <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
            <img className="w-25" src={assets.group_profiles} alt="" />
            <p className="text-center md:text-left">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>
          <div className="mt-4">
            <a
              className="text-black flex items-center gap-2 bg-white px-5 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-all duration-300"
              href="#speciality"
            >
              Book appointment <img src={assets.arrow_icon} alt="" />
            </a>
          </div>
        </div>
      </div>

      {/*--------- Right Side --------*/}
      <div className="md:w-1/2 relative mt-6 md:mt-0">
        <img
          className="w-full h-auto rounded-lg relative md:top-20 lg:top-28"
          src={assets.header_img}
          alt="Header Illustration"
        />
      </div>
    </div>
  );
};

export default Header;
