import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Project from "./components/Projects/Project";
import Login from "./components/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./redux/actions/user";
import AdminPanel from "./components/admin/AdminPanel";
import Timeline from "./components/admin/Timeline";
import Projectupdate from "./components/admin/Projectupdate";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
    // console.log(`user is ${}`);
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home timeline={user.timeline} skills={user.skills} />}
            />

            <Route path="/about" element={<About about={user.about} />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/projects"
              element={<Project projects={user.projects} />}
            />
            <Route
              path="/admin/timeline"
              element={isAuthenticated ? <Timeline /> : <Login />}
            />
            <Route
              path="/admin/project"
              element={isAuthenticated ? <Projectupdate /> : <Login />}
            />
            <Route
              path="/account"
              element={isAuthenticated ? <AdminPanel /> : <Login />}
            />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;
