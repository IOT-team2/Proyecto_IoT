
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import Home from "./Home.tsx";
// import Login from "./Login.tsx";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Home from "./Home.tsx";
import Login from "./Login.tsx";
import Register from "./Register.tsx"; // <--- IMPORTANTE
import { BrowserRouter, Routes, Route } from "react-router-dom";
<Route path="/register" element={<Register />} />
import User from "./User.tsx";
<Route path="/user" element={<User />} />
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} /> {/* <--- NUEVA RUTA */}
        <Route path="/user" element={<User />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
