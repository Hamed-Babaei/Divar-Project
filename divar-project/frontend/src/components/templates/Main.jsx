import React from "react";

const Main = ({ posts }) => {
  console.log("posts => ", posts.data.posts);
  return (
    <div className="flex flex-wrap justify-between mt-5 w-[calc(100% - 200px)]">
      {posts.data.posts.map((post) => (
        <div
          key={post._id}
          className="w-[330px] flex justify-between border border-solid border-[#eaeaea] m-[10px] p-[15px] rounded-sm"
        >
          <div className="flex flex-col justify-between">
            <p>{post?.options.title}</p>
            <div className="text-gray-600 text-base">
              <p>{post.amount.toLocaleString()} تومان</p>
              {/* <span>{post.options.city}</span> */}
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
            alt=""
            className="w-[150px] h-[130px] rounded-sm"
          />
        </div>
      ))}
    </div>
  );
};

export default Main;
