import React, { useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import HomePage from "./src/components/HomePage.js";
import Footer from "./src/components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
//import About from "./src/components/About.js";
import Contacts from "./src/components/Contacts.js";
import ErrorPage from "./src/components/ErrorPage.js";
import MenuPage from "./src/components/MenuPage.js";
import { lazy, Suspense } from "react";
import UserContext from "./src/utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./src/utils/AppStore.js";
import CartPage from "./src/components/CartPage.js";


const About = lazy(() => import("./src/components/About.js"));

const App = () => {

  const [userName, setUserName] = useState(useContext(UserContext).userName);
  const [Auth, setAuth] = useState(true);

  useEffect(() => {
    if (!Auth) {
      setUserName("Lach!");
    }
  }, []);
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ userName: userName, setUserName }}>
      <div className="app">
        <Header></Header>
        <Outlet />
        <Footer></Footer>
      </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Lazy Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/restaurants/:id",
        element: <MenuPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
