import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Root } from "./Root.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import App from "./App.jsx";
import ContactUs from "./components/ContactUs/ContactUs.jsx";
import Github, { githubInfoLoader } from "./components/Github/Github.jsx";

// const router=createBrowserRouter([
//   {
//     path:'/',
//     element:<Root />,
//     children:[
//       {
//         path:"",
//         element:<Home />
//       },
//       {
//         path:"about",
//         element:<About />
//       },
//       {
//         path:"contactus",
//         element:<ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contactus" element={<ContactUs />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
