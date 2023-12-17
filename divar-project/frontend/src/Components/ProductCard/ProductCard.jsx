import React from "react";
import "./ProductCard.css";
export default function ProductCard() {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 col-xl-4 ">
        <div className="product-card">
          <div className="product-card__right">
            <div className="product-card__right-top">
              <a className="product-card__link" href="#">
                آموزش جی اس در 2 روز با مدحج جان
              </a>
            </div>
            <div className="product-card__right-bottom">
              <span className="product-card__condition">در حد نو</span>
              <span className="product-card__price">200,000 تومان</span>
              <span className="product-card__time">لحظاتی پیش</span>
            </div>
          </div>

          <i className="product-card__icon bi bi-chat"></i>
          <img
            className="product-card__img img-fluid"
            src="../images/main/product_1.webp"
          ></img>
        </div>
      </div>
    </>
  );
}
