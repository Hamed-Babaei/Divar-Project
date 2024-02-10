import PageNotFound from "src/pages/404";
import AdminPage from "src/pages/AdminPage";
import AuthPage from "src/pages/AuthPage";
import DashboardPage from "src/pages/DashboardPage";
import HomePage from "src/pages/HomePage";
import { Routes, Route } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";

const Router = () => {
  const { data, isLoading, error } = useQuery(["profile"], getProfile);
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default Router;
