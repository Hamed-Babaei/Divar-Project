import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ProductCard from "../../Components/ProductCard/ProductCard";

export default function Main() {
  return (
    <>
      <Header />

      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <Sidebar />
            </div>
            <div className="col-9">
              <div className="row">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
