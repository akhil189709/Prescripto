import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Doctors from "./pages/Doctors";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/My-Profile" element={<MyProfile />} />
        <Route path="/My-Appointments" element={<MyAppointments />} />
        <Route path="/Appointment/:docId" element={<Appointment/>} />
        <Route path="/Doctors" element={<Doctors />} />
        <Route path="/Doctors/:speciality" element={<Doctors />} />

      </Routes>
      <Footer/>
    </div>
  );
};

export default App;
