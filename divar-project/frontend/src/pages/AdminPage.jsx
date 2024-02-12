import React from "react";
import CategoryForm from "src/components/templates/CategoryForm";
import CategoryList from "src/components/templates/CategoryList";

const AdminPage = () => {
  return (
    <div>
      <CategoryForm />
      <CategoryList />
    </div>
  );
};

export default AdminPage;
