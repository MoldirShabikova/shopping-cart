import Main from "./Main";
import Aside from "./Aside";
import { products } from "../products";
import { useState } from "react";

export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(products);
  const [savedItems, setSavedItems] = useState([]);

  const handleItemRemoveFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
  };

  const handleSaveForLater = (id) => {
    const item = products.find((item) => item.id === id);
    const newSavedItems = savedItems.map((item) => {
      return { ...item };
    });

    newSavedItems.push(item);

    handleItemRemoveFromCart(id);
    setSavedItems(newSavedItems);
  };

  const handleItemRemoveFromSaved = (id) => {
    const newSavedItems = savedItems.filter((s) => s.id !== id);
    setSavedItems(newSavedItems);
  };

  const handleAddBackItem = (id) => {
    const newCartItems = cartItems.map((item) => ({ ...item }));
    const item = products.find((item) => item.id === id);
    newCartItems.push(item);
    setCartItems(newCartItems);
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  const handleItemCountIncDec = (id, action) => {
    console.log(id, action);
    const newCartItems = cartItems.map((item) => ({ ...item }));

    newCartItems.forEach((item) => {
      if (item.id === id && action === "increase") {
        item.count++;
      }

      if (item.id === id && action === "decrease") {
        if (item.count > 1) {
          item.count--;
        }
      }
    });
    setCartItems(newCartItems);
  };

  console.log(cartItems);
  return (
    <div>
      <h1>My Shopping Cart</h1>
      <div className="wrapper">
        <Main
          handleItemCountIncDec={handleItemCountIncDec}
          cartItems={cartItems}
          handleItemRemoveFromCart={handleItemRemoveFromCart}
          handleSaveForLater={handleSaveForLater}
        />
        <Aside
          handleItemRemoveFromSaved={handleItemRemoveFromSaved}
          savedItems={savedItems}
          cartItems={cartItems}
          handleAddBackItem={handleAddBackItem}
        />
      </div>
    </div>
  );
}
