import React from "react";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
const Alert = () => {
  return (
    <div className='h-screen top-0 left-0 z-10 w-full fixed grid place-content-center transition-all ease-in duration-300'>
      <div className='h-[10rem] w-[20rem] bg-slate-900 opacity-80 rounded-sm relative'></div>
      <div className='h-full w-full text-white grid place-content-center text-lg absolute'>
        <div className='flex justify-center relative z-10'>
          <div className='flex justify-center absolute'>
            <BsCheckCircleFill size={50} className='text-teal-500' />
          </div>
          <BsCheckCircle size={50} className='text-white' />
        </div>

        <div>Sản phẩm đã được thêm giỏ hàng</div>
      </div>
    </div>
  );
};

export default Alert;
