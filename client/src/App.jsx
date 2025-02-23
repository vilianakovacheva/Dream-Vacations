import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import AboutUs from "./components/aboutUs/AboutUs";
import VacationsCatalog from "./components/vacations-catalog/VacationsCatalog";
import VacationCreate from "./components/vacation-create/VacationCreate";
import VacationDetails from "./components/vacation-details/VacationDetails";
import VacationEdit from "./components/vacation-edit/VacationEdit";
import Testimonials from "./components/testimonials/Testimonials";
import TestimonialAdd from "./components/testimonial-add/TestimonialAdd";
import Search from "./components/search/Search";
import Profile from "./components/profile/Profile";
import NotFound from "./components/notFound/NotFound";
import { AuthContextProvider } from "./contexts/AuthContext";
import Logout from "./components/logout/Logout";
import UserGuard from "./components/guards/UserGuard";
import GuestGuard from "./components/guards/GuestGuard";

function App() {

  return (
    <AuthContextProvider>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/vacations" element={<VacationsCatalog />} />
          <Route path="/vacations/:vacationId/details" element={<VacationDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/search" element={<Search />} />

          <Route element={<GuestGuard />}>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<UserGuard />}>
            <Route path="/logout" element={<Logout />} />
            <Route path="/vacations/:vacationId/edit" element={<VacationEdit />} />
            <Route path="/vacations/create" element={<VacationCreate />} />
            <Route path="/testimonials/add" element={<TestimonialAdd />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>

      </>
    </AuthContextProvider>
  )
}

export default App
