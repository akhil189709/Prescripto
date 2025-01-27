import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/Appcontext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDocs, setFilterDocs] = useState([]);
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
    <div>
      <p className="text-lg font-semibold mb-4">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col md:flex-row">
        {/* Speciality List */}
        <div className="flex flex-col gap-2 text-gray-700">
          <p
            onClick={() =>
              speciality === "General Physician"
                ? navigate("/Doctors")
                : navigate("/Doctors/General Physician")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "General Physician"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            General Physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/Doctors")
                : navigate("/Doctors/Gynecologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gynecologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/Doctors")
                : navigate("/Doctors/Dermatologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/Doctors")
                : navigate("/Doctors/Pediatricians")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatricians" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/Doctors")
                : navigate("/Doctors/Neurologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologist" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologist"
                ? navigate("/Doctors")
                : navigate("/Doctors/Gastroenterologist")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologist"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologist
          </p>
        </div>

        {/* Doctor Cards */}
        <div className="w-full flex justify-end mt-6 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterDocs.map((item, index) => (
              <div
                onClick={() => navigate(`/Appointment/${item._id}`)}
                className="border border-blue-200 rounded-xl overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-xl"
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
