import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AppContext } from "../context/Appcontext.jsx";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-black md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => ( 
          <div
            onClick={() => navigate(`/Appointment/${item._id}`)}
            className="border border-blue-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            key={index}
          >
            <img
              className="bg-blue-50 w-full h-48 object-cover"
              src={item.image}
              alt={`Profile of ${item.name}`}
            />
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
          <button onClick={() => { navigate('/Doctors'); scrollTo(0,0)}} className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
        More
      </button>
    </div>
  );
};

export default TopDoctors;
