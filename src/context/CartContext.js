import { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (product, quantity) => {
    let index = cart.findIndex(x=> x.product.id === product.id);
    if (index === -1 && quantity > 0) {
      console.log('+ Agrego productId:' + product.id + ' cantidad:' + quantity)
      const newItem = { product, quantity };
      setCart((prevState) => [...prevState, newItem]); //agrego el producto al carrito
    } 
    else if (quantity === 0) {
      console.log('- Elimino productId:' + product.id)
      setCart(cart.filter(item => item.product.id !== product.id)) //quito el elemento en posición product.id
    }
    else {
      //actualizo la cantidad del producto en el carrito
      console.log('+ Actualizo productId:' + product.id + ' cantidad:' + quantity)
      let tempArray = cart.slice();
      tempArray[index].quantity = quantity;
      setCart(tempArray);
    }
  };

  ///devuelve -1 si el productId no existe y la cantidad si existe 
  const existeItem = (productId) => {
    let index = cart.findIndex(x=> x.product.id === productId);
    if (index === -1) {
      return -1;
    } 
    else {
      return cart[index].quantity;
    }
  };

  return (
    <CartContext.Provider value={{ cart, addItem, existeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
