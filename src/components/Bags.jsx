import React from "react";
import BagSummary from "./BagSummary";
import BagItems from "./BagItems";
import { useSelector } from "react-redux";
import Emptycart from "./Emptycart";

const Bags = () => {
  const bagItem = useSelector((store) => store.cart);
  const item = useSelector((store) => store.items);

  const finalItem = item.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {Object.keys(finalItem).length == 0 && <Emptycart />}
            {finalItem.map((items) => (
              <BagItems item={items} key={items.id} />
            ))}
          </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bags;
