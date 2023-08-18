"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Alert from "@/../components/Alert";
import { closeModal } from "@/../store/modalSlice";

export default function Home() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        dispatch(closeModal());
      }, 900);
    }
  }, [isOpen]);
  return (
    <div className=''>
      {isOpen && <Alert />}
      <Container />
    </div>
  );
}
