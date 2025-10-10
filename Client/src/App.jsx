import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Auth0ProviderWithConfig from "./auth/Auth0ProviderWithConfig";
import Dashboard from "./pages/Dashboard";
import CityDetail from "./components/city-detail/CityDetail";
import "./styles.css";
import { SnackbarProvider } from "./components/snackbar";
import ProtectedLayout from "./layout/ProtectedLayout";

export default function App() {
  return (
    <BrowserRouter>
      {/* Provides context for snackbars */}
      <SnackbarProvider>
        {/* Auth0 authentication provider */}
        <Auth0ProviderWithConfig> 
          <Routes>
            {/* Layout for protected routes */}
            <Route element={<ProtectedLayout />}> 
              <Route
                path="/"
                element={<Dashboard />}
              />
              <Route
                path="/weather/city/:cityId"
                element={ <CityDetail />}
              />
            </Route>
          </Routes>
        </Auth0ProviderWithConfig>
      </SnackbarProvider>
    </BrowserRouter>
  );
}