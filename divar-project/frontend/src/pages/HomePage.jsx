import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "src/components/modules/Loader/Loader";
import Main from "src/components/templates/Main";
import Sidebar from "src/components/templates/Sidebar";
import { getCategory } from "src/services/admin";
import { getAllPosts } from "src/services/user";

const HomePage = () => {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categories"],
    getCategory
  );

  return (
    <>
      {categoryLoading || postLoading ? (
        <Loader />
      ) : (
        <div className="flex">
          <Sidebar categories={categories} />
          <Main posts={posts} />
        </div>
      )}
    </>
  );
};

export default HomePage;
