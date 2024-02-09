import React, { useEffect } from "react";
import HomeItem from "../components/HomeItem";
import { useDispatch, useSelector } from "react-redux";
import { itmesActions } from "../store/itmeSlice";
import { fetchStatusAction } from "../store/fetchstatusSlice";

const Home = () => {
  const items = useSelector((store) => store.items);

  return (
    <>
      <main>
        <div className="items-container">
          {items.map((itemm) => (
            <HomeItem item={itemm} key={itemm.id} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Home;
