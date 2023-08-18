"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "@/../store/productsSlice";
import ProductItem from "./ProductItem";

const Container = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getCartItems("random"));
  }, []);

  if (isLoading) {
    return (
      <div className='h-screen grid place-content-center'>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className='w-full flex flex-col items-center justify-start'>
      <div className='p-2 m-2'>
        <h1 className='text-2xl font-semibold'>Shoppig Reduxtoolkit</h1>
      </div>
      <div className='w-full grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 p-2 gap-2 bg-white mx-4'>
        {products.map((item) => {
          return <ProductItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Container;
