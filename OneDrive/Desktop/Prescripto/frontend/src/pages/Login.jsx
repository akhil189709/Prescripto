import { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const OnSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-8 mt-[-100px]">
      <div className="flex flex-col gap-3 p-5 w-full max-w-sm sm:max-w-md md:max-w-lg border rounded-xl text-zinc-600 text-xs sm:text-sm shadow-md transition-all duration-300">
        {/* Title */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-800">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-600 text-xs sm:text-sm">
          Please {state === "Sign Up" ? "Sign Up" : "Login"} to Book an
          Appointment
        </p>

        {/* Full Name (Only for Sign Up) */}
        {state === "Sign Up" && (
          <div className="w-full">
            <label className="text-gray-700 font-medium text-xs sm:text-sm">
              Full Name:
            </label>
            <input
              className="border border-zinc-300 rounded-md w-full p-2 mt-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
            />
          </div>
        )}

        {/* Email Field */}
        <div className="w-full">
          <label className="text-gray-700 font-medium text-xs sm:text-sm">
            Email:
          </label>
          <input
            className="border border-zinc-300 rounded-md w-full p-2 mt-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="w-full">
          <label className="text-gray-700 font-medium text-xs sm:text-sm">
            Password:
          </label>
          <input
            className="border border-zinc-300 rounded-md w-full p-2 mt-1 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
          />
        </div>

        {/* Submit Button */}
        <button className="bg-[#5f6fff] text-white w-full py-2 rounded-md text-sm sm:text-base font-medium hover:bg-blue-600 transition-all duration-300">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {/* Toggle Between Sign Up & Login */}
        <p className="text-gray-700 text-xs sm:text-sm">
          {state === "Sign Up"
            ? "Already have an account?"
            : "Create a new account?"}{" "}
          <span
            className="text-[#5f6fff] font-medium underline cursor-pointer hover:text-blue-600 transition-all duration-300"
            onClick={() => setState(state === "Sign Up" ? "Login" : "Sign Up")}
          >
            {state === "Sign Up" ? "Login Here!" : "Click Here!"}
          </span>
        </p>
      </div>
    </form>
  );
};

export default Login;
