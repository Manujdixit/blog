import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Blog from "./pages/Blog";
import Blogs from "./pages/Blogs";
import "./App.css";
import Create from "./pages/Create";
import Protected from "./components/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Protected Component={Blogs} />} />
          <Route path="/blog/:id" element={<Protected Component={Blog} />} />
          <Route path="/create" element={<Protected Component={Create} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
