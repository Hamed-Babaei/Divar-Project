import React from "react";
import "./Panel.css";

export default function Panel() {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <div className="header__wrapper">
            <div className="header__right">
              <a className="header__logo-link" href="#">
                <img
                  className="header__logo-img"
                  src="../../images/header/logo.svg"
                  alt="logo"
                />
              </a>
              <button className="header__country">
                <i className="header__country-icon bi bi-geo-alt"></i>
                <span className="header__country-title">اصفهان</span>
              </button>
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
                {" "}
                پشتیبانی{" "}
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
                <div className="sidebar__user">
                  <div className="sidebar__user-right">
                    <i className="sidebar__user-icon bi bi-person"></i>
                  </div>
                  <div className="sidebar__user-left">
                    <div className="sidebar__user-text">کاربر دیوار</div>
                    <div className="sidebar__user-phone">
                      تلفن : 09023555555
                    </div>
                  </div>
                </div>
                <ul className="sidebar__menu-list">
                  <li className="sidebar__menu-item">
                    <a
                      className="sidebar__menu-link sidebar__menu-link--active"
                      href="#"
                    >
                      <i className="sidebar__menu-icon bi bi-patch-check"></i>
                      تایید هویت
                    </a>
                  </li>
                  <li className="sidebar__menu-item">
                    <a className="sidebar__menu-link" href="#">
                      <i className="sidebar__menu-icon bi bi-journal"></i>
                      آگهی های من
                    </a>
                  </li>
                  <li className="sidebar__menu-item">
                    <a className="sidebar__menu-link" href="#">
                      <i className="sidebar__menu-icon bi bi-bookmark"></i>
                      نشان ها
                    </a>
                  </li>
                  <li className="sidebar__menu-item">
                    <a className="sidebar__menu-link" href="#">
                      <i className="sidebar__menu-icon bi bi-cash"></i>
                      امکان بیعانه
                    </a>
                  </li>
                  <li className="sidebar__menu-item">
                    <a className="sidebar__menu-link" href="#">
                      <i className="sidebar__menu-icon bi bi-journal"></i>
                      یادداشت ها
                    </a>
                  </li>
                  <li className="sidebar__menu-item">
                    <a className="sidebar__menu-link" href="#">
                      <i className="sidebar__menu-icon bi bi-clock-history"></i>
                      بازدید های اخیر
                    </a>
                  </li>
                </ul>
                <a className="sidebar__business sidebar__link-item" href="#">
                  <i className="sidebar__business-icon sidebar__link-icon bi bi-shop"></i>
                  دیوار برای کسب و کارها
                </a>
                <a className="sidebar__logout sidebar__link-item" href="#">
                  <i className="sidebar__logout-icon sidebar__link-icon bi bi-box-arrow-right"></i>
                  خروج
                </a>
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
                <div className="sidebar__social">
                  <a className="sidebar__social-link" href="#">
                    <i className="sidebar__social-icon bi bi-twitter"></i>
                  </a>
                  <a className="sidebar__social-link" href="#">
                    <i className="sidebar__social-icon bi bi-instagram"></i>
                  </a>
                  <a className="sidebar__social-link" href="#">
                    <i className="sidebar__social-icon bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="verify">
                <div className="verify__notics">
                  <p className="verify__notic">
                    تأیید هویت برای افزایش اعتماد کاربران و سلامت تعاملات انجام
                    می‌شود. اطلاعات شناسایی شما در هیچ صفحه‌ای نمایش داده
                    نمی‌شود.
                  </p>
                  <p className="verify__notic">
                    حساب شما در دیوار با شمارهٔ 0902355555 فعال است.
                  </p>
                </div>
                <div className="verify__nationality">
                  <span className="verify__nationality-title">ملیت</span>
                  <span className="verify__nationality-subtitle">
                    ملیت خود را انتخاب کنید.
                  </span>
                  <div className="verify__nationality-select">
                    <div className="verify__nationality-select-wrapper">
                      <span className="verify__nationality-select-name">
                        ایرانی
                      </span>
                      <i className="verify__nationality-select-icon bi bi-chevron-down"></i>
                    </div>
                    <ul className="verify__nationality-dropdown">
                      <li className="verify__nationality-dropdown-item verify__nationality-dropdown-item--active">
                        ایرانی
                      </li>
                      <li className="verify__nationality-dropdown-item">
                        اتباع خارجی
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="verify__national-code">
                  <span className="verify__national-code-title">کد ملی</span>
                  <span className="verify__national-code-subtitle">
                    لطفا کد ملی خود را وارد کنید.
                  </span>
                  <form className="verify__national-code-form" action="#">
                    <input
                      className="verify__national-input"
                      type="text"
                      placeholder="مثال : 127777777"
                    />
                    <button className="verify__national-btn" type="button">
                      ثبت
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="country-modal">
        <div className="country-modal__header">
          <div className="country-modal__header-wrapper">
            <div className="country-modal__title-wrapper">
              <span className="country-modal__title">انتخاب شهر</span>
              <button className="country-modal__btn">حذف همه</button>
            </div>
            <div className="country-modal__selected">
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
              <div className="country-modal__selected-item">
                <span className="country-modal__selected-text">اصفهان</span>
                <button className="country-modal__selected-btn">
                  <i className="country-modal__selected-icon bi bi-x"></i>
                </button>
              </div>
            </div>
            <div className="country-modal__searchbar">
              <form className="country-modal__form">
                <input
                  className="country-modal__input"
                  type="text"
                  placeholder="جستجو در شهرها"
                />
                <i className="country-modal__icon bi bi-search"></i>
              </form>
            </div>
          </div>
        </div>
        <div className="country-modal__cities">
          <ul className="country-modal__cities-list">
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <i className="country-modal__cities-icon bi bi-chevron-left"></i>
            </li>
          </ul>
          <ul className="country-modal__cities-list">
            <li className="country-modal__cities-item">
              <i className="country-modal__cities-arrow-icon bi bi-arrow-right"></i>
              همه شهر ها
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
            <li className="country-modal__cities-item">
              اصفهان
              <input
                className="country-modal__cities-checkbox"
                type="checkbox"
              />
            </li>
          </ul>
        </div>
        <div className="country-modal__footer">
          <div className="country-modal__footer-wrapper">
            <button className="country-modal__btn-footer country-modal__close">
              انصراف
            </button>
            <button className="country-modal__btn-footer country-modal__accept--active">
              تایید
            </button>
          </div>
        </div>
      </section>

      <section className="overlay"></section>
    </>
  );
}
