import React from "react";

const ButtonLoader = ({ loading }: any) => {
  return (
    <span
      className={`text-center h-[24px] w-[24px] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] absolute right-0 left-0 mx-auto ${
        !loading ? "opacity-0" : ""
      }`}
      role="status"
    >
      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"></span>
    </span>
  );
};

export default ButtonLoader;
