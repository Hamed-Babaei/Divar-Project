import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-10 mb-5 border-solid border-b-2 border-[rgb(234,234,234)] w-full h-16">
      <div className="flex">
        <Link to="/">
          <img src="divar.svg" alt="" className="w-11 " />
        </Link>
        <span className="flex items-center text-gray-400 h-[50px] ms-10 hover:bg-gray-50 p-3 transition-all duration-200 rounded-sm">
          <img src="location.svg" alt="" />
          <p className="ms-[5px] text-base">تهران</p>
        </span>
      </div>
      <div className="flex items-center">
        <Link
          to="/auth"
          className=" hover:bg-gray-50 px-4 py-2  text-gray-400 hover:text-black duration-200"
        >
          <span className="flex items-center gap-2">
            <img src="profile.svg" alt="" />
            <p className="text-base">دیوار من</p>
          </span>
        </Link>
        <Link
          to="/dashboard"
          className="bg-[#a62626] text-white h-10 w-20 leading-10 text-center rounded-[5px] mr-10"
        >
          ثبت اگهی
        </Link>
      </div>
    </header>
  );
};

export default Header;
