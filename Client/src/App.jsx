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
      <SnackbarProvider> // Provides context for snackbars
        <Auth0ProviderWithConfig> // Auth0 authentication provider
          <Routes>
            <Route element={<ProtectedLayout />}> // Layout for protected routes
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