import React from "react";
import Container from "./components/Container";

export function generateMetadata({ params }) {
  console.log(params);

  return {
    title: "Giỏ hàng của tôi",
    description: "create by Thi",
  };
}

const CartPage = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default CartPage;
