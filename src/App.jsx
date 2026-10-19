import { Routes, Route } from "react-router-dom";

// I want to lazyload

import Landing from "./pages/Landing";
import ProtectedRoute from "./components/ProtectedRoute";
import Auth from "./pages/Auth";
import Dashbord from "./pages/Dashbord";
import Mentees from "./pages/Mentees";
import Tasks from "./pages/Tasks";
import Announcement from "./pages/Announcement";
import Settings from "./pages/Settings";
import Notification from "./pages/Notification";
import Profile from "./pages/Profile";
import DashboardLayout from "./Layout/DashboardLayout";
import LeaderBord from "./pages/LeaderBord";
import MentorTaskDetail from "./pages/MentorTaskDetail";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
        <Route element={<ProtectedRoute />}>
            <Route element={<DashboardLayout />}>
              <Route path="/dashbord" element={<Dashbord />} />
              <Route path="/mentees" element={<Mentees />} />
              <Route path="/tasks" element={<Tasks />} />
              <Route path="/announcement" element={<Announcement />} />
              <Route path="/settings" element={<Settings />} />
            </Route>

                <Route path="/notification" element={<Notification />} />
                <Route path="/leaderbord" element={<LeaderBord />} />
                <Route path="/mentor/tasks/:submissionId" element={<MentorTaskDetail />} />
                <Route path="/profile" element={<Profile />} />
                
        </Route>
    </Routes>

  );
}

export default App;