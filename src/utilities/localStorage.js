const getLocalStorageCart = () => {
  const getCartData = localStorage.getItem("cart");
  if (getCartData) {
    return JSON.parse(getCartData);
  }
  return [];
};

const addLocalStorageCart = (id) => {
  const cart = getLocalStorageCart();
  cart.push(id);
  saveCartToLocalStorage(cart);
};

const saveCartToLocalStorage = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const removeLocalStorageCartItem = (id) => {
  const cart = getLocalStorageCart();
  // Remove only the first occurrence of the provided id (use loose equality to match "1" with 1)
  const remainging = cart.filter((idItem) => idItem !== id);
  saveCartToLocalStorage(remainging);
};

const removeLocalStorageCartItemByIndex = (index) => {
  const cart = getLocalStorageCart();
  if (typeof index !== "number") return;
  if (index < 0 || index >= cart.length) return;
  // remove single entry at provided index
  cart.splice(index, 1);
  saveCartToLocalStorage(cart);
};
 
export {
  addLocalStorageCart,
  getLocalStorageCart,
  removeLocalStorageCartItem,
  removeLocalStorageCartItemByIndex,
};
