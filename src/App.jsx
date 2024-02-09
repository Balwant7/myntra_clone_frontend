import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import FetchStatus from "./components/FetchStatus";
import { useSelector } from "react-redux";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Header />
      <FetchStatus />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}

      <Footer />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Bags />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
