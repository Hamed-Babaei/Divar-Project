import React from "react";
import "./Contact_us.css";

export default function Contact_us() {
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
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <div className="container">
          <h1 className="main__title">ارتباط با ما</h1>
          <form className="form">
            <div className="row justify-content-center">
              <div className="col-6">
                <div className="form__name form__wrapper">
                  <label className="form__name-label form__label">نام</label>
                  <input
                    className="form__name-input form__input"
                    type="text"
                    placeholder="نام"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form__email form__wrapper">
                  <label className="form__email-label form__label">ایمیل</label>
                  <input
                    className="form__email-input form__input"
                    type="text"
                    placeholder="ایمیل"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form__phone form__wrapper">
                  <label className="form__phone-label form__label">
                    شماره تلفن
                  </label>
                  <input
                    className="form__phone-input form__input"
                    type="text"
                    placeholder="شماره تلفن"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form__message form__wrapper">
                  <label className="form__message-label form__label">
                    پیغام
                  </label>
                  <textarea
                    className="form__message-input form__textarea"
                    placeholder="پیغام"
                  ></textarea>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__right">
              <a className="footer__logo-link" href="#">
                <img className="footer__logo" src="../images/header/logo.svg" />
              </a>
              <div className="footer__links">
                <a className="footer__link" href="#">
                  درباره دیوار
                </a>
                <a className="footer__link" href="#">
                  پشتیبانی و قوانین
                </a>
                <a className="footer__link" href="#">
                  بلاگ دیوار
                </a>
              </div>
            </div>
            <div className="footer__left">
              <div className="footer__social-media">
                <a className="footer__social-media-link" href="#">
                  <i className="footer__social-media-icon bi bi-twitter"></i>
                </a>
                <a className="footer__social-media-link" href="#">
                  <i className="footer__social-media-icon bi bi-instagram"></i>
                </a>
                <a className="footer__social-media-link" href="#">
                  <i className="footer__social-media-icon bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
