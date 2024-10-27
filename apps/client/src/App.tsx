import { Route, Routes, BrowserRouter } from "react-router-dom";
import { SpotlightPreview } from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import WriteBlog from "./pages/WriteBlog";
import Allpost from "./pages/Allpost";
import Connect from "./pages/Connect";
import Jobposting from "./pages/Jobposting";
import Logoutpage from "./pages/Logoutpage";
import Profile from "./pages/Profile";
import Blogpage from "./pages/Blogpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SpotlightPreview />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create" element={<WriteBlog />} />
          <Route path="/bulk" element={<Allpost />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/jobs" element={<Jobposting />} />
          <Route path="/logout" element={<Logoutpage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog/:id" element={<Blogpage />} /> 
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
