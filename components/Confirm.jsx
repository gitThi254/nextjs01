"use client";
import { clearCart } from "@/../store/cartSlice";
import { closeModal } from "@/../store/conFirmSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Confirm = () => {
  const { totalCheck } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='h-screen top-0 left-0 z-10 w-full fixed grid place-content-center transition-all ease-in duration-300'>
      <div className='w-[30rem] h-[10rem] bg-white shadow-xl p-2 rounded-md'>
        <div className='text-xl text-center text-slate-700 mt-7 mb-4'>
          <h3>Bạn có bỏ {totalCheck} sản phẩm </h3>
        </div>
        <div className='flex justify-around gap-10 p-2'>
          <button
            className='flex-1 btn bg-white hover:bg-slate-300 border-slate-300 text-slate-600 border-[1px] font-medium text-lg py-2 rounded-lg'
            onClick={() => dispatch(closeModal())}
          >
            Trở lại
          </button>
          <button
            className='flex-1 btn bg-orange-500 hover:bg-orange-400 border-slate-300 text-white border-[1px] font-medium text-lg py-2 rounded-lg'
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
          >
            có
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
