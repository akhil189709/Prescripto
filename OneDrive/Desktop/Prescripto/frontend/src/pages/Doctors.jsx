import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDocs, setFilterDocs] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDocs(
        doctors.filter(
          (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
        )
      );
    } else {
      setFilterDocs(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <p className="text-lg sm:text-xl font-semibold mb-4 text-gray-800">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Filter Button (Mobile) */}
        <button
          className={`py-2 px-4 border rounded text-sm transition-all md:hidden ${
            showFilter ? "bg-[#5f6fff] text-white" : "bg-white"
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>

        {/* Speciality List */}
        <div
          className={`flex flex-col gap-2 text-gray-700 transition-all ${
            showFilter ? "flex" : "hidden md:flex"
          }`}
        >
          {[
            "General Physician",
            "Gynecologist",
            "Dermatologist",
            "Pediatricians",
            "Neurologist",
            "Gastroenterologist",
          ].map((spec) => (
            <p
              key={spec}
              onClick={() =>
                speciality === spec
                  ? navigate("/Doctors")
                  : navigate(`/Doctors/${spec}`)
              }
              className={`w-full md:w-auto px-4 py-2 border border-gray-300 rounded cursor-pointer transition-all ${
                speciality === spec ? "bg-indigo-100 text-black" : "bg-white"
              } hover:bg-gray-200`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Doctor Cards */}
        <div className="w-full flex justify-center md:justify-end">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filterDocs.map((item, index) => (
              <div
                onClick={() => navigate(`/Appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
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
                  <p className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </p>
                  <p className="text-gray-500">{item.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
