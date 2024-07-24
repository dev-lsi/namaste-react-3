import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Main from "./src/components/Main";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./src/components/Home.js";
import About from "./src/components/About.js";
import Contacts from "./src/components/Contacts.js";
import ErrorPage from "./src/components/ErrorPage.js";
import Menu from "./src/components/Menu.js";


 const App = () => {
  return (
      <div>
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
        element:<Main/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contacts",
        element:<Contacts/>
      },
      {
        path:"/restaurants/:id",
        element:<Menu/>
      }
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

