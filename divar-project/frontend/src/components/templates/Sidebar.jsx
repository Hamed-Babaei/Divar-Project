import React from "react";

const Sidebar = ({ categories }) => {
  return (
    <div className="mt-8 w-[200px]">
      <h4>دسته بندی ها :</h4>
      <ul>
        {categories.data.map((category) => (
          <li key={category._id} className="flex my-5 mx-0 cursor-pointer">
            <img src={`${category.icon}.svg`} alt="" />
            <p className="font-extralight ms-3 text-gray-600">
              {category.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
