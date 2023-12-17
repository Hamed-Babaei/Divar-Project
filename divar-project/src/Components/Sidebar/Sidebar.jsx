import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar__category">
          <span className="sidebar__category-title">دسته ها</span>
          <ul className="sidebar__category-list">
            <li className="sidebar__category-item">
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-house"></i>
                املاک
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-car-front"></i>
                وسایل نقلیه
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-phone"></i>
                کالای دیجیتال
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-brush"></i>
                خانه و آشپزخانه
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-dice-2"></i>
                خدمات
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-person"></i>
                وسایل شخصی
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-dice-2"></i>
                سرگرمی و فراغت
              </a>
              <a className="sidebar__category-link" href="#">
                <i className="sidebar__category-icon bi bi-person"></i>
                اجتماعی
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__filters">
          <div className="sidebar__filter">
            <div className="sidebar__filter-title-wrapper">
              <i className="sidebar__filter-icon bi bi-chevron-down"></i>
              <span className="sidebar__filter-title">قیمت</span>
            </div>
            <div className="sidebar__filter-price sidebar__filter-item">
              <div className="sidebar__filter-price-wrapper">
                <label className="sidebar__filter-price-label">حداقل</label>
                <div className="sidebar__filter-price-input">
                  <div className="sidebar__filter-price-right">
                    <span className="sidebar__filter-price-example">
                      مثلا 70,000,000
                    </span>
                  </div>
                  <div className="sidebar__filter-price-left">
                    <span className="sidebar__filter-price-text">تومان</span>
                    <i className="sidebar__filter-price-icon bi bi-chevron-down"></i>
                  </div>
                </div>
              </div>
              <div className="sidebar__filter-price-wrapper">
                <label className="sidebar__filter-price-label">حداقل</label>
                <div className="sidebar__filter-price-input">
                  <div className="sidebar__filter-price-right">
                    <span className="sidebar__filter-price-example">
                      مثلا 70,000,000
                    </span>
                  </div>
                  <div className="sidebar__filter-price-left">
                    <span className="sidebar__filter-price-text">تومان</span>
                    <i className="sidebar__filter-price-icon bi bi-chevron-down"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar__filter">
            <div className="sidebar__filter-title-wrapper">
              <i className="sidebar__filter-icon bi bi-chevron-down"></i>
              <span className="sidebar__filter-title">وضعیت آگهی</span>
            </div>
            <div className="sidebar__filter-condition sidebar__filter-item">
              <div className="sidebar__filter-condition-wrapper">
                <div className="sidebar__filter-condition-right">
                  <label className="sidebar__filter-condition-label">
                    فقط عکس دار
                  </label>
                </div>
                <div className="sidebar__filter-condition-left">
                  <label className="sidebar__filter-condition-switch">
                    <input
                      className="sidebar__filter-condition-input"
                      type="checkbox"
                      checked
                    />
                    <span className="sidebar__filter-condition-slider"></span>
                  </label>
                </div>
              </div>
              <div className="sidebar__filter-condition-wrapper">
                <div className="sidebar__filter-condition-right">
                  <label className="sidebar__filter-condition-label">
                    فقط فوری ها
                  </label>
                </div>
                <div className="sidebar__filter-condition-left">
                  <label className="sidebar__filter-condition-switch">
                    <input
                      className="sidebar__filter-condition-input"
                      type="checkbox"
                      checked
                    />
                    <span className="sidebar__filter-condition-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar__links">
          <a className="sidebar__link" href="#">
            درباره دیوار
          </a>
          <a className="sidebar__link" href="#">
            دریافت برنامه
          </a>
          <a className="sidebar__link" href="#">
            بلاگ دیوار
          </a>
          <a className="sidebar__link" href="#">
            کسب و کارها
          </a>
          <a className="sidebar__link" href="#">
            پشتیبانی و قوانین
          </a>
        </div>
        <div className="sidebar__icons">
          <a className="sidebar__icon-link" href="#">
            <i className="sidebar__icon bi bi-twitter"></i>
          </a>
          <a className="sidebar__icon-link" href="#">
            <i className="sidebar__icon bi bi-instagram"></i>
          </a>
          <a className="sidebar__icon-link" href="#">
            <i className="sidebar__icon bi bi-linkedin"></i>
          </a>
        </div>
        <div className="sidebar__images">
          <div className="row">
            <div className="col-4">
              <a className="sidebar__image-link" href="#">
                <img
                  className="sidebar__image img-fluid"
                  src="../images/main/enamad.png"
                />
              </a>
            </div>
            <div className="col-4">
              <a className="sidebar__image-link" href="#">
                <img
                  className="sidebar__image img-fluid"
                  src="../images/main/etehadie.png"
                />
              </a>
            </div>
            <div className="col-4">
              <a className="sidebar__image-link" href="#">
                <img
                  className="sidebar__image img-fluid"
                  src="../images/main/neshan.png"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
