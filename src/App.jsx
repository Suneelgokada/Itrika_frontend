// import { useEffect } from "react"; // 1. useEffect import cheyali
// import { Routes, Route, useLocation } from "react-router-dom"; // 2. useLocation add cheyali

// import Header from "./header/Header";
// import SocialSidebar from "./SocialMedia/SocialSidebar";

// import Home from "./pages/Home";
// import ContactPage from "./contactus/ContactPage";
// import Footer from "./footer/footer";
// import CareersPage from "./Careers/CareersPage";
// import JobDetailsPage from "./Careers/JobDetailsPage";
// import WhyChooseUs from "./Whywechoose/WhyChoose";
// import "./index.css";
// import ScrollToTop from "./ScrollToUp/ScrollToTop";
// import CloudSolutions from "./servicepages/cloud/CloudSolutions";
// // 3. Ee chinna component ni create chey (idi separate file lo unna ok, leda ikkade unna ok)


// function App() {
//   return (
//     <>
//       <SocialSidebar />
//       {/* 4. ScrollToTop ni Router lopala, Header kante paina pettu */}
//       <ScrollToTop /> 
      
//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/careers" element={<CareersPage />} />
//         <Route path="/careers/:id" element={<JobDetailsPage/>}/>
//         <Route path="/contact-us" element={<ContactPage />} />
//         <Route path="/whychoose" element={<WhyChooseUs/>}/>
//         <Route path="/cloud-solutions" element={<CloudSolutions/>}/>
//       </Routes>

//       <Footer/>
//     </>
//   );
// }

// export default App;

// import { Routes, Route } from "react-router-dom";

// import Header from "./header/Header";
// import SocialSidebar from "./SocialMedia/SocialSidebar";
// import Footer from "./footer/footer";

// import Home from "./pages/Home";
// import ContactPage from "./contactus/ContactPage";
// import CareersPage from "./Careers/CareersPage";
// import JobDetailsPage from "./Careers/JobDetailsPage";
// import WhyChooseUs from "./Whywechoose/WhyChoose";
// import CloudSolutions from "./servicepages/cloud/CloudSolutions";
// import Itservice from "./servicepages/itservices/Itservice"
// import ScrollToTop from "./ScrollToUp/ScrollToTop";
// import "./index.css";
// import SoftwareEngineering from "./servicepages/softwareengineering/SoftwareEngineering";
// import CloudDesktop from "./servicepages/cloudDesktop/CloudDesktop";
// import NetworkSolutions from "./servicepages/networksolutions/NetworkSolutions";
// import SupportConsultingSection from "./servicepages/supportconsulting/SupportConsulting";
// import SupportConsulting from "./servicepages/supportconsulting/SupportConsulting";

// function App() {
//   return (
//     <>
//       <SocialSidebar />

//       {/* works because BrowserRouter is in main.jsx */}
//       <ScrollToTop />

//       <Header />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/careers" element={<CareersPage />} />
//       <Route path="/careers/:title" element={<JobDetailsPage />} />
//         <Route path="/contact-us" element={<ContactPage />} />
//         <Route path="/whychoose" element={<WhyChooseUs />} />

//         {/* SERVICE INNER PAGE */}
//         <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
//        <Route path="/services/managed-it-solutions" element={<Itservice />} />
//        <Route path="/services/software-engineering" element={<SoftwareEngineering />} />
//       <Route path="/services/cloud-desktop" element={<CloudDesktop />} />
//            <Route path="/services/network-solutions" element={<NetworkSolutions />} />
//            <Route path="/services/support-consulting" element={<SupportConsulting/>}/>
//       </Routes>

//       <Footer />
//     </>
//   );
// }

// export default App;

import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Header from "./header/Header";
import SocialSidebar from "./SocialMedia/SocialSidebar";
import Footer from "./footer/footer";

import Home from "./pages/Home";
import ContactPage from "./contactus/ContactPage";
import CareersPage from "./Careers/CareersPage";
import JobDetailsPage from "./Careers/JobDetailsPage";
import WhyChooseUs from "./Whywechoose/WhyChoose";
import CloudSolutions from "./servicepages/cloud/CloudSolutions";
import Itservice from "./servicepages/itservices/Itservice";
import ScrollToTop from "./ScrollToUp/ScrollToTop";
import SoftwareEngineering from "./servicepages/softwareengineering/SoftwareEngineering";
import CloudDesktop from "./servicepages/cloudDesktop/CloudDesktop";
import NetworkSolutions from "./servicepages/networksolutions/NetworkSolutions";
import SupportConsulting from "./servicepages/supportconsulting/SupportConsulting";

import "./index.css";

/* ADMIN IMPORTS */

import Login from "./admin/pages/Login";
import Dashboard from "./admin/pages/DashboardHome";
import CreateJob from "./admin/pages/CreateJob";
import JobsList from "./admin/pages/JobList";

import AdminLayout from "./admin/layout/AdminLayout";
import ProtectedRoute from "./admin/components/ProtectedRoute";

function App() {

  const location = useLocation();

  const isAdminRoute =
    location.pathname.startsWith("/admin-login") ||
    location.pathname.startsWith("/admin-dashboard");

  return (
    <>
      {/* Hide SocialSidebar in admin */}
      {!isAdminRoute && <SocialSidebar />}

      <ScrollToTop />

      {/* Hide Header in admin */}
      {!isAdminRoute && <Header />}

      <Routes>

        {/* USER ROUTES */}

        <Route path="/" element={<Home />} />

        <Route path="/careers" element={<CareersPage />} />

        <Route path="/careers/:title" element={<JobDetailsPage />} />

        <Route path="/contact-us" element={<ContactPage />} />

        <Route path="/whychoose" element={<WhyChooseUs />} />

        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />

        <Route path="/services/managed-it-solutions" element={<Itservice />} />

        <Route path="/services/software-engineering" element={<SoftwareEngineering />} />

        <Route path="/services/cloud-desktop" element={<CloudDesktop />} />

        <Route path="/services/network-solutions" element={<NetworkSolutions />} />

        <Route path="/services/support-consulting" element={<SupportConsulting />} />

        {/* ADMIN LOGIN */}

        <Route path="/admin-login" element={<Login />} />

        {/* ADMIN DASHBOARD PROTECTED */}

        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >

          <Route index element={<Dashboard />} />

          <Route path="create-job" element={<CreateJob />} />

          <Route path="jobs" element={<JobsList />} />

        </Route>

        {/* fallback */}

        <Route path="*" element={<Navigate to="/" />} />

      </Routes>

      {/* Hide Footer in admin */}
      {!isAdminRoute && <Footer />}

    </>
  );
}

export default App;
