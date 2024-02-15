import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCategory } from "src/services/admin";

const AddPost = () => {
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: null,
    city: "",
    category: "",
    image: null,
  });
  const { data } = useQuery(["get-categories"], getCategory);

  const changeHandler = (e) => {
    console.log("e => ", e);
    const name = e.target.name;
    if (name !== "image") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
    }
  };

  const addHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onChange={changeHandler}>
      <h3 className="mb-8 border-b-[3px] border-solid w-fit pb-[5px] border-[#a62626]">
        افزودن آگهی
      </h3>
      <label htmlFor="title" className="block text-base mb-3">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <label htmlFor="content" className="block text-base mb-3">
        توضیحات
      </label>
      <textarea
        type="text"
        name="content"
        id="content"
        className="block w-[300px] h-24 p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <label htmlFor="amount" className="block text-base mb-3">
        قیمت
      </label>
      <input
        type="text"
        name="amount"
        id="amount"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <label htmlFor="city" className="block text-base mb-3">
        شهر
      </label>
      <input
        type="text"
        name="city"
        id="city"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <label htmlFor="category" className="block text-base mb-3">
        دسته بندی :{" "}
      </label>
      <select
        name="category"
        id="category"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      >
        <option value="-1" defaultValue={true}>
          دسته بندی مورد نظر را انتخاب کنید
        </option>
        {data?.data.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <label htmlFor="image" className="block text-base mb-3">
        عکس
      </label>
      <input
        type="file"
        name="image"
        id="image"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <button
        onClick={addHandler}
        className="bg-[#a62626] text-white border-none px-[10px] py-[10px] rounded-md text-base cursor-pointer disabled:opacity-50 hover:opacity-85 duration-200"
      >
        افزودن آگهی
      </button>
    </form>
  );
};

export default AddPost;
