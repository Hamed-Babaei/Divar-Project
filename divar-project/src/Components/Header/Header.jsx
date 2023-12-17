import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__right">
            <a className="header__logo-link" href="#">
              <img
                className="header__logo-img"
                src="../images/header/logo.svg"
                alt="logo"
              />
            </a>
            <hr className="header-hr" />
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
      </header>
    </>
  );
}
