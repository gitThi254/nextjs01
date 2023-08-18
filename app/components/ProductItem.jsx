import { add } from "@/../store/cartSlice";
import { closeModal, openModal } from "@/../store/modalSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className='w-full h-[18rem] p-2 flex flex-col justify-between items-center'>
      <div className='w-full h-[10rem] overflow-hidden'>
        <img
          src={item.image}
          className='w-full h-full object-contain hover:scale-105'
        />
      </div>
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h5 className='text-xs text-slate-800 font-medium line-clamp-2 pt-3'>
            {item.title}
          </h5>
          <h4 className='text-xs font-bold text-slate-600'>$ {item.price}</h4>
        </div>

        <button
          className='px-3 py-2 my-3 bg-violet-500 hover:bg-violet-800 text-white text-xs font-semibold rounded-full self-center transition-all duration-300 ease-in-out'
          onClick={() => {
            dispatch(openModal());
            dispatch(add(item));
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
