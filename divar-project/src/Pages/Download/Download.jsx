<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Main</title>
    <link rel="stylesheet" href="../vendor/bootstrap/bootstrap.css" />
    <link rel="stylesheet" href="../vendor/bootstrap_icon/bootstraicon.css" />
    <link rel="stylesheet" href="./../css/share.css" />
    <link rel="stylesheet" href="./../css/download.css" />
  </head>

  <body>
    <!--!==========================================Header==========================================!-->
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
                    <i
                      className="header__left-dropdown-icon bi bi-box-arrow-in-left"
                    ></i>
                    ورود
                  </a>
                </li>
                <li className="header__left-dropdown-item">
                  <a className="header__left-dropdown-link" href="#">
                    <i
                      className="header__left-dropdown-icon bi bi-bookmark"
                    ></i>
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
                    <i
                      className="header__left-dropdown-icon bi bi-clock-history"
                    ></i>
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
            <a className="header__left-link" href="#"> پشتیبانی </a>
            <button className="header__left-btn">ثبت آگهی</button>
          </div>
        </div>
      </div>
    </header>
    <!--!==========================================End Header==========================================!-->

    <!--!===========================================Main==========================================!-->
    <main className="main">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="intro">
              <h2 className="intro__subtitle">جستجو در میان هزاران آگهی</h2>
              <h1 className="intro__title">دریافت برنامهٔ دیوار</h1>
              <h2 className="intro__second-subtitle">
                برنامه را در گوشی خود نصب کنید، کالای موردنظرتان را پیدا کنید یا
                آگهی رایگان ثبت کنید.
              </h2>
              <p className="intro__second-paragraph">
                با توجه به حذف ناگهانی و بدون اخطار شیپور از گوگل‌پلی به دلیل
                تحریم در حمایت از دوستان‌مان، دیوار را به صورت موقت از حالت
                انتشار خارج کردیم تا این کسب‌وکار تا حدی از آسیب‌های رقابتی ناشی
                از عدم حضور در گوگل‌پلی دور بماند. به این صورت که کاربرانی که
                دیوار را در گوشی خود نصب نداشته باشند آن را در فروشگاه گوگل‌پلی
                نخواهند یافت. در این مسیر همراه دوستان‌مان در شیپور هستیم.
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
    <!--!==========================================End Main==========================================!-->

    <!--!==========================================Footer==========================================!-->
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__right">
            <a className="footer__logo-link" href="#">
              <img className="footer__logo" src="../images/header/logo.svg" />
            </a>
            <div className="footer__links">
              <a className="footer__link" href="#">درباره دیوار</a>
              <a className="footer__link" href="#">پشتیبانی و قوانین</a>
              <a className="footer__link" href="#">بلاگ دیوار</a>
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
    <!--!==========================================End Footer==========================================!-->

    <!--!==========================================Country Modal==========================================!-->
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
        <!-- <ul className="country-modal__cities-list">
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
            </ul> -->
        <!-- <ul className="country-modal__cities-list">
                <li className="country-modal__cities-item">
                   <i className="country-modal__cities-arrow-icon bi bi-arrow-right"></i> 
                    همه شهر ها
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
                <li className="country-modal__cities-item">
                    اصفهان
                   <input className="country-modal__cities-checkbox" type="checkbox"></input>
                </li>
            </ul> -->
      </div>
      <div className="country-modal__footer">
        <div className="country-modal__footer-wrapper">
          <button className="country-modal__btn-footer country-modal__close">
            انصراف
          </button>
          <button
            className="country-modal__btn-footer country-modal__accept--active"
          >
            تایید
          </button>
        </div>
      </div>
    </section>
    <!--!==========================================End Country Modal==========================================!-->

    <!--!==========================================Login Modal==========================================!-->
    <section className="login-modal">
      <div className="login-modal__header">
        <div className="login-modal__header-wrapper">
          <span className="login-modal__title">ورود به حساب کاربری</span>
          <button className="login-modal__header-btn">
            <i className="login-modal__icon bi bi-x"></i>
          </button>
        </div>
      </div>
      <div className="login-modal__main">
        <span className="login-modal__main-title"
          >شماره موبایل خود را وارد کنید.</span
        >
        <p className="login-modal__main-notic">
          قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.
        </p>
        <p className="login-modal__main-notic">
          کد تأیید به این شماره پیامک می‌شود.
        </p>
        <div className="login-modal__form-wrapper">
          <form className="login-modal__form" action="#">
            <input
              className="login-modal__input"
              type="text"
              placeholder="شماره موبایل"
            />
          </form>
          <span className="login-modal__form-text">+98</span>
        </div>
        <div className="login-modal__condition">
          <a className="login-modal__condition-link" href="#"
            >شرایط استفاده از خدمات</a
          >
          <span className="login-modal__condition-text">و</span>
          <a className="login-modal__condition-link" href="#">حریم خصوصی</a>
          <span className="login-modal__condition-text">دیوار را میپذیرم.</span>
        </div>
      </div>
      <div className="login-modal__footer">
        <button className="login-modal__footer-btn">تایید</button>
      </div>
    </section>
    <!--!==========================================End Login Modal==========================================!-->

    <!--!==========================================Overlay Modal==========================================!-->
    <section className="overlay"></section>
    <!--!==========================================End Overlay Modal==========================================!-->

    <!--!==========================================Overlay Searchbar==========================================!-->
    <section className="overlay-header"></section>
    <!--!==========================================End Overlay Searchbar==========================================!-->
  </body>
</html>
