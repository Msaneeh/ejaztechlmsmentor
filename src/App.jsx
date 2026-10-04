import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
// import DashboardLayout from "./components/Layout/DashboardLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import Dashbord from "./pages/Dashbord";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    <Route element={<ProtectedRoute />}>
    {/* <Route element={<DashboardLayout />}> */}
    <Route path="/auth" element={<Auth />} />
    <Route path="dashbord" element={<Dashbord />} />
    </Route>
    {/* </Route> */}
    </Routes>

  );
}

export default App;