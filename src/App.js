import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import About from "./components/About";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocerry from "./components/Grocerry";

//lazy loading
const Grocerry = lazy(() => import("./components/Grocerry"));

const AppLayouut = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Outlet />
    </div>
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
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
