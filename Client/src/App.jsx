import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth0ProviderWithConfig from "./auth/Auth0ProviderWithConfig";
import ProtectedRoute from "./auth/ProtectedRoute";

import Dashboard from "./pages/Dashboard";
import CityDetail from "./pages/CityDetail";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Auth0ProviderWithConfig>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/city/:cityId"
            element={
              <ProtectedRoute>
                <CityDetail />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Auth0ProviderWithConfig>
    </BrowserRouter>
  );
}




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Auth0ProviderWithConfig from './auth/Auth0ProviderWithConfig';

// import Dashboard from "./pages/Dashboard";
// import CityDetail from "./pages/CityDetail";
// import "./styles.css";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Auth0ProviderWithConfig>
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/city/:cityId" element={<CityDetail />} />
//         </Routes>
//       </Auth0ProviderWithConfig>
//     </BrowserRouter>
//   );
// }

