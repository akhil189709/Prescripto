import { useContext } from "react";
import { AppContext } from "../context/Appcontext";

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-8 md:px-12">
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b text-lg sm:text-xl">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-4 border-b items-center sm:items-start"
            key={index}
          >
            {/* Doctor Image */}
            <div>
              <img
                className="w-24 sm:w-32 bg-indigo-100 rounded-md shadow-md"
                src={item.image}
                alt=""
              />
            </div>

            {/* Doctor Info */}
            <div className="flex-1 text-sm sm:text-base text-zinc-600">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-zinc-700 font-medium mt-2">Address:</p>
              <p className="text-xs sm:text-sm">{item.address.line1}</p>
              <p className="text-xs sm:text-sm">{item.address.line2}</p>
              <p className="text-xs sm:text-sm mt-2">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time:
                </span>{" "}
                25, July, 2024 | 8:30 PM
              </p>
            </div>

            {/* Buttons Section */}
            <div className="flex flex-col gap-3 sm:gap-4 justify-end w-full sm:w-auto">
              <button className="text-sm sm:text-base cursor-pointer text-stone-500 text-center sm:min-w-48 py-2 sm:py-3 border rounded-md hover:bg-[#5f6fff] hover:text-white transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm sm:text-base cursor-pointer text-stone-500 text-center sm:min-w-48 py-2 sm:py-3 border rounded-md hover:bg-red-500 hover:text-white transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
