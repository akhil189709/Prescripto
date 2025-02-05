import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="text-center text-2xl sm:text-3xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col sm:flex-row md:flex-col gap-8 sm:gap-12 items-center">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm" // Adjusted max-width for better scaling
          src={assets.about_image}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 text-sm sm:text-base text-gray-600 md:w-3/5">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800 text-lg sm:text-xl">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl sm:text-2xl my-6 text-center md:text-left">
        <p>
          WHY<span className="text-gray-700 font-semibold"> CHOOSE US</span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-20">
        <div className="border px-8 py-8 sm:px-10 sm:py-12 flex flex-col gap-4 text-sm sm:text-base hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border px-8 py-8 sm:px-10 sm:py-12 flex flex-col gap-4 text-sm sm:text-base hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border px-8 py-8 sm:px-10 sm:py-12 flex flex-col gap-4 text-sm sm:text-base hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer rounded-lg">
          <b>Personalization:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
