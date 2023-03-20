import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../views/HomePage";
import CandidateSinglePage from "../views/CandidateSinglePage";
import ManageJobsPage from "../views/ManageJobsPage";
import LoginModalProvider from "../providers/LoginModalProvider";
import Header from "../components/HeaderFooter/Header";
import Footer from "../components/HeaderFooter/Footer";
import ForgottenPasswordPage from "../views/ForgottenPasswordPage";
import ResetPasswordPage from "../views/ResetPasswordPage";
import CandidatesDashboard from "../views/CandidatesDashboard";
import Allaplicants from "../views/AllAplicants";
import EmployerSinglePage from "../views/EmployerSinglePage";
import ChangePassword from "../views/ChangePassword";
import Curriculum from "../components/curriculum/Curriculum";
import ErrorPage from "../views/ErrorPage";
import UnauthorizedPage from "../views/UnauthorizedPage";
import { JobList } from "../views/JobList";
import CandidateList from "../views/CandidateList";
import RequireAuth from "../auth/RequireAuth";
import PostAJobComponents from "../views/PostAJob.components";
import DetailCandidate from "../components/detailCandidate/DetailCandidate";
import CandidateProfile from "../views/CandidateProfile.component";
import CompanyProfile from "../views/CompanyProfile.component";
import EmployersDashboard from "../views/EmployersDashboard";
import AppliedJobsPage from "../views/AppliedJobsPage";

// Revisar esta importación, es el componente que esta haciendo Rafa
/* import { JobDetails } from '../views/JobDetail'; */

const Routing = () => {
  return (
    <Router>
      <LoginModalProvider>
        <Header />
      </LoginModalProvider>
      <Routes>
        {/* Rutas no protegidas */}
        <Route path='/' element={<HomePage />} />
        <Route path='forgottenpassword' element={<ForgottenPasswordPage />} />
        <Route path='reset-password/:token' element={<ResetPasswordPage />} />
        <Route path='unauthorized' element={<UnauthorizedPage />} />
        <Route path='*' element={<ErrorPage />} />

        {/* Ruta con authenticacion con acceso tanto para candidatos como para empleadores */}
        <Route element={<RequireAuth allowedRole='both' />}>
          <Route path='auth/change-password' element={<ChangePassword />} />
          <Route path='candidate/:loginId' element={<CandidateSinglePage />} />
          <Route path='employer/:id' element={<EmployerSinglePage />} />

          {/*  importacion desde componentes repetiendo la ruta de arriba*/}
          {/* <Route path='candidate/:loginId' element={<DetailCandidate />} /> */}
          {/*  <Route
                        path="job/job-single/:jobId"
                        element={<JobDetails />}
                    /> */}
        </Route>

        {/* Rutas de candidatos */}
        <Route element={<RequireAuth allowedRole='candidate' />}>
          <Route
            path='candidates-dashboard'
            element={<CandidatesDashboard />}
          />
          <Route
            path='candidates-dashboard/profile/:id'
            element={<CandidateProfile />}
          />
          <Route
            path='candidates-dashboard/curriculum'
            element={<Curriculum />}
          />
          <Route
            path='candidates-dashboard/job/job-list'
            element={<JobList />}
          />
          <Route
            path='candidates-dashboard/applied-jobs'
            element={<AppliedJobsPage />}
          />
        </Route>

        {/* Rutas de empleadores */}
        <Route element={<RequireAuth allowedRole='employer' />}>
          <Route path='employers-dashboard' element={<EmployersDashboard />} />
          <Route
            path='employers-dashboard/candidate/all-candidates'
            element={<CandidateList />}
          />

          <Route
            path='employers-dashboard/profile/:id'
            element={<CompanyProfile />}
          />

          {/* Entiendo que la ruta all-applicants deberia de ir concatenado con job  !!!CONFIRMAR */}

          <Route
            path='employers-dashboard/all-applicants'
            element={<Allaplicants />}
          />
          <Route
            path='employers-dashboard/job/employer-jobs'
            element={<ManageJobsPage />}
          />
          <Route
            path='employers-dashboard/post-a-job'
            element={<PostAJobComponents />}
          />
          <Route
            path='employers-dashboard/post-a-job/:jobId'
            element={<PostAJobComponents />}
          />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
};

export default Routing;
