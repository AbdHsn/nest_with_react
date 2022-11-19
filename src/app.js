import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./components/admin-module/layout/layout";
import MerchantLayout from "./components/merchant-module/layout/layout";
import NotFound from "./components/global/404/not-found";
import Unauthorized from "./components/global/unauthorized/unauthorized";
import Login from "./components/auth/login";
import AdminDashboard from "./components/admin-module/pages/dashboard/dashboard";
import MerchantDashboard from "./components/merchant-module/pages/dashboard/dashboard";

const useAuth = () => {
  let getLocalUser = localStorage.getItem("user");
  return getLocalUser ? JSON.parse(getLocalUser) : null;
};

function App() {
  let user = useAuth();

  switch (user?.module) {
    case 1:
      return (
        <Routes>
          <Route path="/" element={<AdminLayout />}>
            <Route path="/" element={<AdminDashboard />}></Route>
            <Route path="/dashboard" element={<AdminDashboard />}></Route>
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
    case 2:
      return (
        <Routes>
          <Route path="/" element={<MerchantLayout />}>
            <Route path="/" element={<MerchantDashboard />}></Route>
            <Route path="/dashboard" element={<MerchantDashboard />}></Route>
          </Route>
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
    default:
      return (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      );
  }
}

export default App;
