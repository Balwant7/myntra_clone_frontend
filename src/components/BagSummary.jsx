import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagItemsIds = useSelector((store) => store.cart);
  const item = useSelector((store) => store.items);

  const finalItem = item.filter((item) => {
    const itemIndex = bagItemsIds.indexOf(item.id);
    return itemIndex >= 0;
  });
  let convenienceFee = 0;

  let totalItem = bagItemsIds.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  // checkoutPayment: 3424,
  finalItem.forEach((product) => {
    totalMRP += product.original_price;
    totalDiscount += product.original_price - product.current_price;
  });
  if (totalMRP === 0) {
    convenienceFee = 0;
  } else {
    convenienceFee = 99;
  }
  let checkoutPayment = totalMRP - totalDiscount + convenienceFee;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({totalItem} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{checkoutPayment}</span>
        </div>
      </div>
      <button className="btn-place-order disabled css-xjhrni">
        PLACE ORDER
      </button>
    </div>
  );
};

export default BagSummary;
