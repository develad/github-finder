import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "./ReactToastify.css";

import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
// import Alert from "./components/layout/Alert";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import Notfound from "./pages/Notfound";

function App() {
  return (
    <div className="flex flex-col justify-between h-screen relative">
      <Navbar />
      <main className="px-3 container pb-12 mx-auto flex-1 md:w-4/5">
        {/* <Alert /> */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          className="font-bold"
          limit={1}
        />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/user/:login"
            element={<User />}
          />
          <Route
            path="/notfound"
            element={<Notfound />}
          />
          <Route
            path="/*"
            element={<Notfound />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
