import React from "react";
import PostList from "src/components/templates/PostList";
import AddPost from "src/components/templates/addPost";

const DashboardPage = () => {
  return (
    <div>
      <AddPost />
      <PostList />
    </div>
  );
};

export default DashboardPage;
