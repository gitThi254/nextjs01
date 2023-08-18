"use client";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  return (
    <nav className='flex p-4 justify-between items-center bg-violet-300 z-100'>
      <span className='font-medium text-xl '>
        <Link href='/' className='hover:text-slate-600'>
          Reduxtoolkit_13.4.16
        </Link>
      </span>
      <div className='space-x-6 hidden sm:flex'>
        <Link href='/' className='font-medium hover:text-slate-600'>
          Home
        </Link>
        <Link href='/cart' className='font-medium hover:text-slate-600'>
          Cart
        </Link>
        <span>Cart Items : {carts.length}</span>
      </div>
    </nav>
  );
};

export default Navbar;
