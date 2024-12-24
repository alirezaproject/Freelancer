import React from "react";
import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {

  const moveBack = useMoveBack();
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-secondary-100">
      <div>
        <h1 className="mb-8 text-xl text-center font-bold text-secondary-700">
          صفحه ای که دنبالش بودید، پیدا نشد
        </h1>
        <button onClick={moveBack} className="flex items-center gap-x-2">
          <HiArrowRight className="h-6 w-6 text-primary-900" />
          <span className="text-secondary-700">بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
