import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import HomePage from "./src/components/HomePage.js";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
//import About from "./src/components/About.js";
import Contacts from "./src/components/Contacts.js";
import ErrorPage from "./src/components/ErrorPage.js";
import MenuPage from "./src/components/MenuPage.js";
import { lazy, Suspense} from "react";

 const About = lazy(()=>import("./src/components/About.js"));
 const App = () => {
  return (
      <div className="app">
        <Header></Header>
        <Outlet/>
        <Footer></Footer> 
      </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
      },
      {
        path:"/about",
        element:<Suspense  fallback={<h1>Lazy Loading...</h1>}><About/></Suspense>
      },
      {
        path:"/contacts",
        element:<Contacts/>
      },
      {
        path:"/restaurants/:id",
        element:<MenuPage/>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

