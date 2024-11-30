import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
  const navigate = useNavigate();
  const moveBack = useMoveBack();
  return (
    <div className="flex justify-center pt-10 sm:max-w-sm">
      <div>
        <h1 className="mb-8 text-xl font-bold text-secondary-700">
          صفحه ای که دنبالش بودید، پیدا نشد
        </h1>
        <button onClick={moveBack} className="flex items-center gap-x-2">
          <HiArrowRight className="h-6 w-6 text-primary-900" />
          <span>بازگشت</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
