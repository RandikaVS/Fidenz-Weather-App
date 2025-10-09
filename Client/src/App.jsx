import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Auth0ProviderWithConfig from "./auth/Auth0ProviderWithConfig";
import ProtectedRoute from "./auth/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import CityDetail from "./components/city-detail/CityDetail";
import Auth0TokenSetter from "./auth/Auth0TokenSetter";
import "./styles.css";
import { SnackbarProvider } from "./components/snackbar";
import Layout from "./layout/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Auth0ProviderWithConfig>
          <Auth0TokenSetter/>
            <ProtectedRoute>
              <Layout>
                  <Routes>
                      <Route
                        path="/"
                        element={<Dashboard />}
                      />
                      <Route
                        path="/weather/city/:cityId"
                        element={ <CityDetail />}
                      />
                  </Routes>
              </Layout>
            </ProtectedRoute>
        </Auth0ProviderWithConfig>
      </SnackbarProvider>
    </BrowserRouter>
  );
}