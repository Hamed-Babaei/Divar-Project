import React from "react";
import "./Home.css";

export default function Main() {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header__wrapper">
            <div className="header__right">
              <a className="header__logo-link" href="#">
                <img
                  className="header__logo-img"
                  src="../images/header/logo.svg"
                  alt="logo"
                />
              </a>
              <button className="header__country">
                <i className="header__country-icon bi bi-geo-alt"></i>
                <span className="header__country-title">اصفهان</span>
              </button>
              <div className="header__category">
                <button className="header__category-btn">
                  <span className="header__category-btn-title">دسته ها</span>
                  <i className="header__category-btn-icon bi bi-chevron-down"></i>
                </button>
                <div className="header__category-menu">
                  <div className="header__category-menu-right">
                    <a className="header__category-menu-btn" href="#">
                      <i className="header__category-menu-btn-icon bi bi-arrow-right"></i>
                      همه آگهی ها
                    </a>
                    <ul className="haeder__category-menu-list">
                      <li className="header__category-menu-item">
                        <a className="header__category-menu-link" href="#">
                          <div className="header__category-menu-link-right">
                            <i className="header__category-menu-icon bi bi-house"></i>
                            املاک
                          </div>
                          <div className="header__category-menu-link-left">
                            <i className="header__category-menu-arrow-icon bi bi-chevron-left"></i>
                          </div>
                        </a>
                        <div className="header__category-dropdown">
                          <div className="row">
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header__category-menu-item">
                        <a className="header__category-menu-link" href="#">
                          <div className="header__category-menu-link-right">
                            <i className="header__category-menu-icon bi bi-house"></i>
                            املاک
                          </div>
                          <div className="header__category-menu-link-left">
                            <i className="header__category-menu-arrow-icon bi bi-chevron-left"></i>
                          </div>
                        </a>
                        <div className="header__category-dropdown">
                          <div className="row">
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="header__category-menu-item">
                        <a className="header__category-menu-link" href="#">
                          <div className="header__category-menu-link-right">
                            <i className="header__category-menu-icon bi bi-house"></i>
                            املاک
                          </div>
                          <div className="header__category-menu-link-left">
                            <i className="header__category-menu-arrow-icon bi bi-chevron-left"></i>
                          </div>
                        </a>
                        <div className="header__category-dropdown">
                          <div className="row">
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-4">
                              <ul className="header__category-dropdown-list">
                                <a
                                  className="header__category-dropdown-title"
                                  href="#"
                                >
                                  فروش مسکونی
                                </a>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                                <li className="header__category-dropdown-item">
                                  <a
                                    className="header__category-dropdown-link"
                                    href="#"
                                  >
                                    آپارتمان
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="header__searchbar">
                <form className="header__form">
                  <input
                    className="header__form-input"
                    type="text"
                    placeholder="جستجو در تمام آگهی ها..."
                  />
                </form>
                <i className="header__searchbar-icon bi bi-search"></i>
                <div className="header__searchbar-dropdown">
                  <span className="header__searchbar-dropdown-title">
                    بیشترین جستجوهای دیوار
                  </span>
                  <ul className="header__searchbar-dropdown-list">
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        خودروسواری
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        اپارتمان
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        موبایل
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        استخدام
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        تلویزیون
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        استخدام
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        تلویزیون
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        استخدام
                      </a>
                    </li>
                    <li className="header__searchbar-dropdown-item">
                      <a className="header__searchbar-dropdown-link" href="#">
                        تلویزیون
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="header__left">
              <a className="header__left-link" href="#">
                <i className="header__left-icon bi bi-person"></i>
                دیوار من
              </a>
              <div className="header__left-dropdown">
                <ul className="header__left-dropdown-list">
                  <li className="header__left-dropdown-item">
                    <a className="header__left-dropdown-link" href="#">
                      <i className="header__left-dropdown-icon bi bi-box-arrow-in-left"></i>
                      ورود
                    </a>
                  </li>
                  <li className="header__left-dropdown-item">
                    <a className="header__left-dropdown-link" href="#">
                      <i className="header__left-dropdown-icon bi bi-bookmark"></i>
                      نشان ها
                    </a>
                  </li>
                  <li className="header__left-dropdown-item">
                    <a className="header__left-dropdown-link" href="#">
                      <i className="header__left-dropdown-icon bi bi-journal"></i>
                      یادداشت ها
                    </a>
                  </li>
                  <li className="header__left-dropdown-item">
                    <a className="header__left-dropdown-link" href="#">
                      <i className="header__left-dropdown-icon bi bi-clock-history"></i>
                      بازدید های اخیر
                    </a>
                  </li>
                  <li className="header__left-dropdown-item">
                    <a className="header__left-dropdown-link" href="#">
                      <i className="header__left-dropdown-icon bi bi-shop"></i>
                      دیوار برای کسب و کارها
                    </a>
                  </li>
                </ul>
              </div>
              <a className="header__left-link" href="#">
                <i className="header__left-icon bi bi-chat"></i>
                چت
              </a>
              <a className="header__left-link" href="#">
                پشتیبانی
              </a>
              <button className="header__left-btn">ثبت آگهی</button>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
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
                        <label className="sidebar__filter-price-label">
                          حداقل
                        </label>
                        <div className="sidebar__filter-price-input">
                          <div className="sidebar__filter-price-right">
                            <span className="sidebar__filter-price-example">
                              مثلا 70,000,000
                            </span>
                          </div>
                          <div className="sidebar__filter-price-left">
                            <span className="sidebar__filter-price-text">
                              تومان
                            </span>
                            <i className="sidebar__filter-price-icon bi bi-chevron-down"></i>
                          </div>
                        </div>
                      </div>
                      <div className="sidebar__filter-price-wrapper">
                        <label className="sidebar__filter-price-label">
                          حداقل
                        </label>
                        <div className="sidebar__filter-price-input">
                          <div className="sidebar__filter-price-right">
                            <span className="sidebar__filter-price-example">
                              مثلا 70,000,000
                            </span>
                          </div>
                          <div className="sidebar__filter-price-left">
                            <span className="sidebar__filter-price-text">
                              تومان
                            </span>
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
            </div>
            <div className="col-9">
              <div className="row">
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="product-card">
                    <div className="product-card__right">
                      <div className="product-card__right-top">
                        <a className="product-card__link" href="#">
                          آموزش جی اس در 2 روز با مدحج جان
                        </a>
                      </div>
                      <div className="product-card__right-bottom">
                        <span className="product-card__condition">
                          در حد نو
                        </span>
                        <span className="product-card__price">
                          200,000 تومان
                        </span>
                        <span className="product-card__time">لحظاتی پیش</span>
                      </div>
                    </div>
                    <div className="product-card__left">
                      <i className="product-card__icon bi bi-chat"></i>
                      <img
                        className="product-card__img img-fluid"
                        src="../images/main/product_1.webp"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
