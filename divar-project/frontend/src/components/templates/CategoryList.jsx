import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";

const CategoryList = () => {
  const { data, isLoading } = useQuery(["get-categories"], getCategory);
  console.log("data in list => ", data, isLoading);
  return <div>CategoryList</div>;
};

export default CategoryList;
