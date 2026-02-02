import { useEffect, useState } from "react";
import Bottel from "../Bottle";
import "./Bottles.css";
import {
  addLocalStorageCart,
  getLocalStorageCart,
  removeLocalStorageCartItemByIndex,
} from "../../utilities/localStorage";
import Cart from "../Cart/Cart";

export default function Bottles() {
  const [bottles, setBottles] = useState([]);
  const [cart, setcart] = useState([]);

  useEffect(() => {
    fetch("bottes.json")
      .then((res) => res.json())
      .then((data) => setBottles(data))
      .catch((error) => console.error("api error :", error));
  }, []);

  // console.log("bottles",bottles)
  const handleSetCarts = (bottle) => {
    console.log("bottle added", bottle);
    const newAddToCart = [...cart, bottle];
    setcart(newAddToCart);
    addLocalStorageCart(bottle.id);
  };

  //handle remove from cart (remove only one occurrence by index)
  const handleRemoveFromCart = (index) => {
    const newCart = [...cart];
    // remove single item at the given index
    newCart.splice(index, 1);
    setcart(newCart);

    // remove the corresponding entry from localStorage by index
    removeLocalStorageCartItemByIndex(index);
  };
  console.log("bottles", bottles);

  // load cart from local storage

  useEffect(() => {
    if (bottles.length) {
      const storecart = getLocalStorageCart();
      console.log("sumon", storecart);
      const saveCart = [];
      for (const id of storecart) {
        const filterdBottle = bottles.find((bottle) => bottle.id === id);
        if (filterdBottle) {
          saveCart.push(filterdBottle);
        }
      }
      console.log("saveCart", saveCart);
      setcart(saveCart);
    }
  }, [bottles]);

  return (
    <div>
      <h2>Bottles here: {bottles.length} </h2>

      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart} />

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottel
            key={bottle.id}
            bottle={bottle}
            handleSetCarts={handleSetCarts}
          />
        ))}
      </div>
    </div>
  );
}
