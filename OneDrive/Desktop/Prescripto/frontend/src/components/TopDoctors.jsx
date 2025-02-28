import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/Appcontext.jsx";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-6 my-16 text-black px-4 sm:px-6 lg:px-10">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Top Doctors to Book
      </h1>
      <p className="sm:w-2/3 md:w-1/2 text-center text-sm md:text-base">
        Simply browse through our extensive list of trusted doctors
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 justify-items-center">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/Appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Doctor Image */}
            <img
              className="bg-blue-50 w-full h-40 sm:h-48 md:h-56 object-contain"
              src={item.image}
              alt={`Profile of ${item.name}`}
            />

            {/* Doctor Info */}
            <div className="p-4">
              <div className="flex items-center text-sm text-green-500 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                <p>Available</p>
              </div>
              <p className="text-lg font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-500">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <button
        onClick={() => {
          navigate("/Doctors");
          scrollTo(0, 0);
        }}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
      >
        More
      </button>
    </div>
  );
};

export default TopDoctors;
