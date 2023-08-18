"use client";
import { descrease, inscrease, isChecked, remove } from "@/../store/cartSlice";
import React, { useEffect } from "react";
import { AiOutlineDelete, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className='flex justify-between border-2 bg-red-100/25 border-slate-300 gap-2 px-4 py-2 mt-3 rounded-md'>
        <div className='flex items-center justify-between w-1/3 md:w-1/5'>
          <input
            type='checkbox'
            name={item.id}
            checked={item.isChecked ? "checked" : ""}
            className='h-5 w-5 accent-orange-600/10'
            onClick={(e) =>
              dispatch(isChecked({ id: item.id, checked: e.target.checked }))
            }
          />

          <img src={item.image} alt='' className='h-[5rem] object-contain' />
          <div className='flex space-x-4 items-center'>
            <div
              onClick={() => {
                if (item.amount < 2) {
                  dispatch(remove(item.id));
                } else {
                  dispatch(descrease(item.id));
                }
              }}
              className='cursor-pointer'
            >
              <AiOutlineMinus />
            </div>
            <span>{item.amount}</span>
            <div
              onClick={() => dispatch(inscrease(item.id))}
              className='cursor-pointer'
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>
        <div className='text-end'>
          <h4 className='text-md sm:text-xs font-medium text-slate-500'>
            {item.title}
          </h4>
          <h5 className='text-sm font-semibold'>$ {item.price}</h5>
          <button>
            <AiOutlineDelete
              size={30}
              className='text-red-900 hover:text-red-700 transition-all duration-300 ease-in'
              onClick={() => dispatch(remove(item.id))}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
