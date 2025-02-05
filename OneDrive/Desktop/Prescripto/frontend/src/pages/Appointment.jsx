import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/Appcontext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    const doctor = doctors.find((doc) => doc._id === docId);
    if (doctor) {
      setDocInfo(doctor);
    } else {
      console.error("Doctor not found");
    }
  }, [doctors, docId]);

  const getAvailableSlot = () => {
    if (!docInfo) return;

    let today = new Date();
    let allSlots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (i === 0) {
        if (currentDate.getHours() > 10) {
          currentDate.setHours(currentDate.getHours() + 1);
        } else {
          currentDate.setHours(10);
        }
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });

        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      allSlots.push(timeSlots);
    }

    setDocSlots(allSlots);
  };

  useEffect(() => {
    if (docInfo) {
      getAvailableSlot();
    }
  }, [docInfo]);

  return (
    docInfo && (
      <div className="px-4 sm:px-6 lg:px-12">
        {/* Doctor Details */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div>
            <img
              className="bg-[#5f6fff] w-full sm:max-w-64 md:max-w-72 lg:max-w-80 rounded-lg"
              src={docInfo.image}
              alt={docInfo.name}
            />
          </div>
          <div className="flex-1 border border-gray-300 rounded-lg p-6 sm:p-8 bg-white">
            <p className="flex items-center gap-3 text-xl sm:text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="Verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* About Section */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking Slots */}
        <div className="mt-6 font-medium text-gray-700">
          <p className="text-lg sm:text-xl">Booking Slots</p>
          <div className="flex gap-3 overflow-x-auto mt-4 scrollbar-hide">
            {docSlots.length > 0 &&
              docSlots.map((item, index) =>
                item.length > 0 ? (
                  <div
                    key={index}
                    onClick={() => setSlotIndex(index)}
                    className={`text-center py-4 min-w-[60px] rounded-lg cursor-pointer border transition-all ${
                      slotIndex === index
                        ? "bg-[#5f6fff] text-white"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    <p className="text-sm font-medium">
                      {daysOfWeek[item[0]?.dateTime.getDay()]}
                    </p>
                    <p className="text-lg font-bold">
                      {item[0]?.dateTime.getDate()}
                    </p>
                  </div>
                ) : null
              )}
          </div>
        </div>

        {/* Time Slots */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide mt-4">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`text-sm px-4 py-2 rounded-lg cursor-pointer ${
                  item.time === slotTime
                    ? "bg-[#5f6fff] text-white"
                    : "text-gray-400 border border-gray-300"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>

        {/* Book Button */}
        <div className="text-center">
          <button className="bg-[#5f6fff] text-white text-sm font-medium px-10 py-3 rounded-full mt-6">
            Book an Appointment
          </button>
        </div>

        {/* Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
