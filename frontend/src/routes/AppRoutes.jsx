import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import RegionDetails from "../pages/RegionDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import Region from "../pages/Region";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <AppLayout>
              <Dashboard />
            </AppLayout>
          }
        />

        <Route
          path="/regions"
          element={
            <AppLayout>
              <Region />
            </AppLayout>
          }
        />
        <Route
  path="/regions/:id"
  element={
    <AppLayout>
      <RegionDetails />
    </AppLayout>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}