import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocerry from "./components/Grocerry";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

//lazy loading
const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayouut = () => {
  const [userName, setUserName] = useState();

  //forming an example for authentication (getting name as output)
  useEffect(() => {
    const data = {
      name: "Mufazzal",
    };
    setUserName(data.name);
  }, []);

  return (
    //binding store to App
    <Provider store={appStore}>
      {/* //over riding previous default value by wrapping under  UserContext.Provider */}

      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          {/* we can separately over ride the value of any component by wrapping it separately also */}
          {/* <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}> */}
          <Header />
          {/* </UserContext.Provider> */}
          {/* <Body /> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppLayouut />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

//provided children to avoid misplacement of header component while going to any link
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayouut />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      ,
      {
        path: "/grocerry",
        element: (
          <Suspense fallback={<h1>Loading..............</h1>}>
            <Grocerry />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />, //dynamic rendering part
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
