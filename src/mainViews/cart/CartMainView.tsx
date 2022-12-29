import React from "react";
import { addToCartLocal } from "../../services/helpers/tokenService";
import { useRoot } from "../../shared/contexts/RootProvider";
import CartListView from "./views/CartList";
import EmptyCart from "./views/EmptyCart";

const CartMainView = () => {
  const { currentCartItem, setCurrentCartItem } = useRoot();

  const pressRemove = (productName: string) => {
    const newProductList = [...currentCartItem];
    const newProductListState = newProductList.filter(function (obj) {
      return obj.productName !== productName;
    });

    setCurrentCartItem(newProductListState);
    addToCartLocal(newProductListState)
  };

  return currentCartItem.length ? (
    <CartListView pressRemove={pressRemove} productList={currentCartItem} />
  ) : (
    <EmptyCart />
  );
};

export default CartMainView;
