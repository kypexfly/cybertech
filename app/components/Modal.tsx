"use client";

import ReactDom from "react-dom";

export default function Modal({ setIsOpen }) {
  return ReactDom.createPortal(
    <div className="fixed left-0 top-0 z-10 h-screen w-full">
      <div
        onClick={() => setIsOpen(false)}
        className="absolute inset-0 bg-slate-900/50"
      ></div>
      <div className="absolute right-0 top-0 h-full w-64 bg-white">Modal</div>
    </div>,
    document.getElementById("modal") as Element
  );
}
