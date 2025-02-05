import { Link } from "react-router-dom";
import { specialityData } from "../assets/assets";

const SpecialityMenu = () => {
  return (
    <div
      className="flex flex-col items-center gap-6 py-16 text-gray-800 px-4 sm:px-6 lg:px-10"
      id="speciality"
    >
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Find by Speciality
      </h1>

      {/* Specialities Container */}
      <div className="w-full flex flex-row sm:flex-wrap sm:justify-center gap-4 pt-5 overflow-x-auto sm:overflow-hidden md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/doctors/${item.speciality}`}
            className="flex flex-col items-center text-xs md:text-sm cursor-pointer flex-shrink-0 transform transition-all duration-500 hover:-translate-y-2"
          >
            <img
              className="w-16 sm:w-20 md:w-24 mb-2"
              src={item.image}
              alt={item.speciality}
            />
            <p className="text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
