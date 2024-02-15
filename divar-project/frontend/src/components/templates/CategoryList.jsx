import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteCategory, getCategory } from "src/services/admin";
import Loader from "../modules/Loader/Loader";

const CategoryList = () => {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  const { mutate, error } = useMutation(deleteCategory, {
    onSuccess: () => queryClient.invalidateQueries("delete-category"),
  });

  const deleteHandler = (categoryID) => {
    event.preventDefault();
    console.log(categoryID);
    mutate(categoryID);
  }; //   console.log("data in list => ", data.data);
  console.log("data =>", data);
  return (
    <div className="">
      <h1 className="my-5">لیست کتگوری ها :</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
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
                    onClick={() => deleteHandler(item._id)}
                    y
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryList;
