import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";
import Loader from "../modules/Loader/Loader";

const CategoryList = () => {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);

  const deleteHandler = (slug) => {
    // e.preventDefault();
    console.log(slug);
  }; //   console.log("data in list => ", data.data);
  console.log("is loading =>", isLoading);
  return (
    <div className="">
      <h1 className="my-5">لیست کتگوری ها :</h1>
      {isLoading ? (
        <Loader />
      ) : (
        data.data.map((item, index) => (
          <table
            key={index}
            className="min-w-full bg-white border border-gray-300"
          >
            <thead>
              <tr>
                <th className="py-2 text-start px-4 border-b">نام کتگوری</th>
                <th className="py-2 text-start px-4 border-b">اسلاگ</th>
                <th className="py-2 text-start px-4 border-b">آیکون</th>
                <th className="py-2 text-start px-4 border-b"> </th>
              </tr>
            </thead>
            <tbody>
              {data.data.map((item, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b">{item.name}</td>
                  <td className="py-2 px-4 border-b">{item.slug}</td>
                  <td className="py-2 px-4 border-b">
                    <img src={`${item.icon}.svg`} />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button
                      className="bg-[#a62626] text-white border-none px-[8px] py-[5px] rounded-md text-sm cursor-pointer disabled:opacity-50 hover:opacity-85 duration-200"
                      onClick={() => deleteHandler(item.slug)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            s
          </table>
        ))
      )}
    </div>
  );
};

export default CategoryList;
