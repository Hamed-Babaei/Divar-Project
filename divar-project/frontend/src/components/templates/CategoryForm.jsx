import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { addCategory } from "src/services/admin";

const CategoryForm = () => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });
  const { mutate, isLoading, error, data } = useMutation(addCategory, {
    onSuccess: () => queryClient.invalidateQueries("get-categories"),
  });
  console.log({ isLoading, error, data });
  const changeHandler = (e) => {
    e.preventDefault();
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!form.name || !form.slug || !form.icon) {
      return;
    }

    mutate(form);
    toast.success("دسته بندی با موفقیت اضافه شد");
    console.log("form =>", form);
  };
  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3 className="mb-8 border-b-[3px] border-solid w-fit pb-[5px] border-[#a62626]">
        دسته بندی جدید
      </h3>
      {!!error && (
        <p className="bg-[#a62626] mb-5 text-white p-[5px] text-center rounded">
          مشکلی پیش آمده است!
        </p>
      )}
      <label htmlFor="name" className="block text-base mb-3">
        اسم دسته بندی :
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />

      <label htmlFor="slug" className="block text-base mb-3">
        اسلاگ :
      </label>
      <input
        type="text"
        name="slug"
        id="slug"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <label htmlFor="icon" className="block text-base mb-3">
        آیکون :
      </label>
      <input
        type="text"
        name="icon"
        id="icon"
        className="block w-[300px] p-[5px] border border-solid border-gray-200 rounded-md mb-8"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#a62626] text-white border-none px-[10px] py-[10px] rounded-md text-base cursor-pointer disabled:opacity-50 hover:opacity-85 duration-200"
      >
        ایجاد دسته بندی
      </button>
    </form>
  );
};

export default CategoryForm;
