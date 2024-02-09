import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const value = useSelector((store) => store.cart);
  const elementfound = value.indexOf(item.id) >= 0;

  const handleAddtoCart = () => {
    dispatch(bagActions.addtoCart(item.id));
  };
  const handleRemove = () => {
    dispatch(bagActions.removetoCart(item.id));
  };
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">{item.discount_percentage}% OFF</span>
        </div>

        {elementfound ? (
          <button
            type="button"
            className=" btn-add-bag btn btn-danger"
            onClick={handleRemove}
          >
            Remove
          </button>
        ) : (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleAddtoCart}
          >
            Add to Bag
          </button>
        )}
      </div>
    </>
  );
};

export default HomeItem;
