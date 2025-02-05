import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <div className="text-center text-xl sm:text-2xl text-gray-500 mt-6 sm:mt-10">
        <p>
          CONTACT <span className="text-gray-600 font-semibold">US</span>
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col md:flex-row items-center justify-center text-gray-700 gap-8 md:gap-14 my-10 md:my-16">
        {/* Contact Image */}
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-[360px]"
          src={assets.contact_image}
          alt="Contact"
        />

        {/* Contact Details */}
        <div className="flex flex-col items-center md:items-start gap-4 sm:gap-6 text-center md:text-left">
          {/* Office Location */}
          <p className="font-semibold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">E-19, Greater Kailash-1, New Delhi</p>
          <p className="text-gray-500">Tel: +91-7500372210</p>
          <p className="text-gray-500">Email: akhildhiman189709@gmail.com</p>

          {/* Careers Section */}
          <p className="font-semibold text-lg text-gray-600">
            Careers at PRESCRIPTO
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>

          {/* Explore Jobs Button */}
          <button className="border border-black px-6 sm:px-8 py-2 sm:py-3 hover:bg-black hover:text-white transition-all duration-300 rounded-md">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
