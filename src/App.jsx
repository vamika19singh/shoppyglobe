import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";


const ProductList = lazy(() => import("./components/ProductList"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
