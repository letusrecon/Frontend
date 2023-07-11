import React from "react";
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center h-70 items-center fixed left-0 top-0 bg-black bg-opacity-50 w-[100%] h-[100vh] z-10 ">
      <Oval
        height={40}
        width={40}
        color="#61c1d1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#fff"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
}
