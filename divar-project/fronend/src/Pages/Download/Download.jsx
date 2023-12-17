import React from "react";
import "./Download.css";

export default function Download() {
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
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="intro">
                <h2 className="intro__subtitle">جستجو در میان هزاران آگهی</h2>
                <h1 className="intro__title">دریافت برنامهٔ دیوار</h1>
                <h2 className="intro__second-subtitle">
                  برنامه را در گوشی خود نصب کنید، کالای موردنظرتان را پیدا کنید
                  یا آگهی رایگان ثبت کنید.
                </h2>
                <p className="intro__second-paragraph">
                  با توجه به حذف ناگهانی و بدون اخطار شیپور از گوگل‌پلی به دلیل
                  تحریم در حمایت از دوستان‌مان، دیوار را به صورت موقت از حالت
                  انتشار خارج کردیم تا این کسب‌وکار تا حدی از آسیب‌های رقابتی
                  ناشی از عدم حضور در گوگل‌پلی دور بماند. به این صورت که
                  کاربرانی که دیوار را در گوشی خود نصب نداشته باشند آن را در
                  فروشگاه گوگل‌پلی نخواهند یافت. در این مسیر همراه دوستان‌مان در
                  شیپور هستیم.
                </p>
                <div className="intro__apps">
                  <div className="intro__icons">
                    <i className="intro__icon bi bi-android"></i>
                    <i className="intro__icon bi bi-apple"></i>
                  </div>
                  <div className="intro__apps-links">
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/bazar.svg"
                      />
                    </a>
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/google_play.svg"
                      />
                    </a>
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/sib_app.svg"
                      />
                    </a>
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/sibche.svg"
                      />
                    </a>
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/sib_irani.svg"
                      />
                    </a>
                    <a className="intro__apps-link" href="#">
                      <img
                        className="intro__apps-img"
                        src="../images/main/i_apps.svg"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-5">
              <div className="intro__left">
                <img
                  className="intro__left-img"
                  src="../images/main/mobile.svg"
                />
              </div>
            </div>
          </div>
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
