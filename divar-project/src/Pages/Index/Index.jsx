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
    <link rel="stylesheet" href="./../css/index.css" />
  </head>

  <body>
    <!--!==========================================Wrapper==========================================!-->
    <section className="wrapper">
      <!--!==========================================Header==========================================!-->
      <header className="header">
        <img className="header__logo" src="../images/header/logo.svg" />
        <ul className="header__menu-list">
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">ثبت آگهی</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">درباره دیوار</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">دریافت برنامه</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">بلاگ</a>
          </li>
          <li className="header__menu-item">
            <a className="header__menu-link" href="#">پشتیبانی</a>
          </li>
        </ul>
      </header>
      <!--!==========================================End Header==========================================!-->

      <!--!==========================================Main==========================================!-->
      <main className="main">
        <span className="main__text-first"
          >دﯾﻮار، ﭘﺎﯾﮕﺎه ﺧﺮﯾﺪ و ﻓﺮوش ﺑﯽ‌واﺳﻄﻪ‌!</span
        >
        <span className="main__text-second"
          >اﮔﻪ دﻧﺒﺎل ﭼﯿﺰی ﻫﺴﺘﯽ، ﺷﻬﺮت رو اﻧﺘﺨﺎب ﮐﻦ و ﺗﻮ دﺳﺘﻪ‌ﺑﻨﺪی‌ﻫﺎ ﺑﻪ دﻧﺒﺎﻟﺶ
          ﺑﮕﺮد. اﮔﺮ ﻫﻢ ﻣﯽ‌ﺧﻮای ﭼﯿﺰی ﺑﻔﺮوﺷﯽ، ﭼﻨﺪ ﺗﺎ ﻋﮑﺲ ﺧﻮب ازش ﺑﮕﯿﺮ و آﮔﻬﯿﺖ رو
          ﺑﭽﺴﺒﻮن ﺑﻪ دﯾﻮار.</span
        >
        <form className="main__form">
          <i className="main__icon-input bi bi-search"></i>
          <input className="main__input" type="text" placeholder="جستجوی شهر" />

          <!-- add class active to show search result box -->
          <ul className="search-result-cities">
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
            <li>مشهد</li>
          </ul>
        </form>
        <div className="main__cities">
          <span className="main__cities-title">شهر های پر بازدید</span>
          <ul className="main__cities-list">
            <div className="row">
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
              <div className="col-2 d-flex justify-content-center">
                <li className="main__cities-item">
                  <a className="main__cities-link" href="#">تهران</a>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </main>
      <!--!==========================================End Main==========================================!-->

      <!--!==========================================Footer==========================================!-->
      <footer className="footer">
        <div className="footer__section-first">
          <div className="footer__imgs">
            <a className="footer__img-link" href="#">
              <img
                className="footer__img"
                src="../images/main/enamad.png"
                alt=""
              />
            </a>
            <a className="footer__img-link" href="#">
              <img
                className="footer__img"
                src="../images/main/etehadie.png"
                alt=""
              />
            </a>
            <a className="footer__img-link" href="#">
              <img
                className="footer__img"
                src="../images/main/neshan.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="footer__section-second">
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__link" href="#">
                <i className="footer__icon bi-instagram"></i>
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                <i className="footer__icon bi-twitter"></i>
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                <i className="footer__icon bi-linkedin"></i>
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="#">
                <i className="footer__icon bi-telegram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <!--!==========================================End Footer==========================================!-->
    </section>
    <!--!==========================================End Wrapper==========================================!-->
  </body>
</html>
