import { useState } from "react";
import { assets } from "../assets/assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Akhil Kumar",
    image: assets.profile_pic,
    email: "akhildhiman189709@gmail.com",
    phone: "+91-7500372210",
    address: {
      line1: "E-19, Greater Kailash",
      line2: "New Delhi",
    },
    gender: "Male",
    Dob: "2001-08-11",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-xl sm:max-w-2xl mx-auto flex flex-col gap-4 p-6 sm:p-8 text-sm sm:text-base bg-white shadow-md rounded-lg">
      {/* Profile Picture */}
      <div className="flex flex-col items-center sm:items-start">
        <img
          className="w-24 sm:w-32 md:w-36 rounded-full shadow-md"
          src={userData.image}
          alt=""
        />
        {isEdit ? (
          <input
            className="bg-gray-100 text-xl sm:text-2xl font-medium mt-4 px-2 py-1 rounded-md w-full text-center sm:text-left"
            type="text"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        ) : (
          <p className="font-medium text-xl sm:text-2xl text-neutral-800 mt-4">
            {userData.name}
          </p>
        )}
      </div>

      <hr className="bg-zinc-400 h-[1px] border-none my-3" />

      {/* Contact Information */}
      <div>
        <p className="text-neutral-500 underline font-semibold">
          CONTACT INFORMATION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Email:</p>
          <p className="text-blue-500 break-all">{userData.email}</p>

          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="border rounded-md p-2 w-full"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-500">{userData.phone}</p>
          )}

          <p className="font-medium">Address:</p>
          {isEdit ? (
            <div className="flex flex-col gap-2">
              <input
                className="border rounded-md p-2"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <input
                className="border rounded-md p-2"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </div>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      {/* Basic Information */}
      <div>
        <p className="text-neutral-500 underline font-semibold mt-4">
          BASIC INFORMATION
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_3fr] gap-y-3 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              className="border rounded-md p-2 w-full bg-gray-100"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              className="border rounded-md p-2 w-full bg-gray-100"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, Dob: e.target.value }))
              }
              value={userData.Dob}
            />
          ) : (
            <p className="text-gray-400">{userData.Dob}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center">
        {isEdit ? (
          <button
            className="border border-[#5f6fff] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-[#5f6fff] font-semibold hover:text-white hover:bg-[#5f6fff] transition-all duration-300"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-[#5f6fff] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-[#5f6fff] font-semibold hover:text-white hover:bg-[#5f6fff] transition-all duration-300"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
