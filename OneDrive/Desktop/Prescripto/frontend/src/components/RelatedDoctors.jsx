import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Appcontext";
import { useNavigate } from "react-router-dom";

const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDocs, setRelDocs] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDocs(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-black px-4 sm:px-6 lg:px-10">
      {/* Section Title */}
      <h1 className="text-2xl sm:text-3xl font-medium text-center">
        Related Doctors
      </h1>
      <p className="w-full sm:w-2/3 lg:w-1/2 text-center text-sm text-gray-600">
        Simply browse through our extensive list of trusted doctors
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5">
        {relDocs.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/Appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            key={index}
          >
            <img
              className="bg-blue-50 w-full h-44 sm:h-48 md:h-52 object-cover"
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

export default RelatedDoctors;
