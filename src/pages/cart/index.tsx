import React from "react";

import PublicLayout from "../../layouts/public/PublicLayout";
import CartMainView from "../../mainViews/cart/CartMainView";

const CartPage = () => {
  return (
    <PublicLayout>
      <div>Cart</div>
      <CartMainView />
    </PublicLayout>
  );
};

export default CartPage;
