import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getPosts } from "src/services/user";
import Loader from "../modules/Loader/Loader";

const PostList = () => {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  console.log(data);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3 className="my-8 border-b-[3px] border-solid w-fit pb-[5px] border-[#a62626]">
            آگهی های شما
          </h3>
          {data?.data.posts.map((post) => (
            <div
              key={post._id}
              className="flex items-center border-2 border-solid border-[#eaeaea] rounded-sm my-[10px] mx-0 p-[5px] text-center"
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
                alt="post image"
                className="w-full h-[70px] rounded-sm ms-8"
              />
              <div className="w-full">
                <p className="text-base">{post.options.title}</p>
                <span className="text-base text-gray-600">
                  {post.options.content}
                </span>
              </div>
              <div className=" text-center">
                <p className="text-base">
                  {new Date(post.createdAt).toLocaleDateString("fa-IR")}
                </p>
                <span className="text-base text-gray-600">
                  {post.amount.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PostList;
