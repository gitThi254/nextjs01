"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { calculatorTotals, clearCart } from "@/../store/cartSlice";
import Confirm from "@/../components/Confirm";
import { openModal } from "@/../store/conFirmSlice";

const Container = () => {
  const { isOpen } = useSelector((state) => state.confirm);
  const {
    cartItems: carts,
    total,
    totalCheck,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculatorTotals());
  }, [carts]);
  return (
    <div>
      {isOpen && <Confirm />}
      <div className='w-5/6 h-screen overflow-auto-x mx-auto shadow-lg p-4 my-4'>
        <form>
          {carts.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </form>
      </div>
      <div className='w-full h-[5rem] flex justify-around items-center shadow-inner sticky bottom-0 '>
        <button
          className='font-medium text-xs md:text-base'
          onClick={() => dispatch(openModal())}
          disabled={carts.length === 0}
        >
          Xóa tất cả sản phẩm
        </button>
        <span className='text-sm md:text-lg'>
          Tổng thanh toán ({totalCheck} Sản phẩm) :{" "}
          <span className='font-medium text-red-500'>$ {total.toFixed(2)}</span>
        </span>

        <button className='btn  bg-orange-600 hover:bg-orange-500 text-white font-medium text-xs md:text-base px-8 md:px-16 py-2 rounded-md'>
          Mua hàng
        </button>
      </div>
    </div>
  );
};

export default Container;
