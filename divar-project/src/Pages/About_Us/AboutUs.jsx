import React from 'react'

export default function about() {
  return (
    <>
       {/* !======================================Header====================================! */}
    <header className="header">
        <div className="container-fluid">
            <div className="header__wrapper">
                <div className="header__right">
                    <a className="header__logo-link" href="#">
                        <img className="header__logo-img" src="../images/header/logo.svg" alt="logo"/>
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
                        پشتیبانی
                    </a>
                    <button className="header__left-btn">ثبت آگهی</button>
                </div>
            </div>
        </div>
    </header>
    {/* <!--!==========================================End Header==========================================!--> */}

    {/* <!--!===========================================Main==========================================!--> */}
    <main className="main">
        <div className="container">
            <div className="intro">
                <div className="row">
                    <div className="col-6">
                        <h1 className="intro__title">درباره دیوار</h1>
                        <p className="intro__desc">دیوار از ۲۱ تیر ۱۳۹۱ با هدف خرید و فروش بدون واسطهٔ آنلاین آغاز به کار
                            کرد. امتیاز برند دیوار توسط شرکت «آگه پردازان هوشمند» (سهامی خاص) در تمامی مراجع قانونی ثبت
                            شده است.</p>
                    </div>
                    <div className="col-6">
                        <div className="intro__left"></div>
                    </div>
                </div>
            </div>
            <div className="partners">
                <h2 className="partners__title main__title">همکاران تجاری دیوار</h2>
                <div className="row justify-content-center">
                    <div className="col-5">
                        <div className="partners__item">
                            <img className="partners__image" src="../images/main/partners_1.svg"></img>
                            <span className="partners__item-title">کارنامه</span>
                            <p className="partners__item-paragraph">کارنامه با هدف خلق تجربه کاربری بهتر در خرید و فروش
                                خودرو و به عنوان یک سرویس مکمل دیوار، با ارائه سرویس‌های کارشناسی خودرو در محل و فروش
                                سفارشی آغاز به کار کرد. </p>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="partners__item">
                            <img className="partners__image" src="../images/main/partners_2.svg"></img>
                            <span className="partners__item-title">کارنامه</span>
                            <p className="partners__item-paragraph">کارنامه با هدف خلق تجربه کاربری بهتر در خرید و فروش
                                خودرو و به عنوان یک سرویس مکمل دیوار، با ارائه سرویس‌های کارشناسی خودرو در محل و فروش
                                سفارشی آغاز به کار کرد. </p>
                        </div>
                    </div>
                </div>
                <a className="partners__link main__link" href="#">بیشتر بخوانید</a>
            </div>
            <div className="job">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className="job__title main__title">فرصت‌های شغلی</h2>
                        <p className="job__paragraph  main__paragraph">اینجا دیوار است؛ جایی برای رشد، یادگیری و خلق
                            ایده‌های جدید. اینجا در
                            کنار هم برای چالش‌ها راه‌حل پیدا می‌کنیم، تجربه کسب می‌کنیم و بر سبک زندگی میلیون‌ها نفر
                            تاثیر‌گذاریم. برای پیوستن به دیوار، می‌توانید موقعیت شغلی متناسب با توانمندی‌های خود را در
                            این صفحه پیدا کرده و برای همکاری اقدام کنید.</p>
                        <a className="job__link main__link" href="#">همه فرصت های شغلی</a>
                    </div>
                </div>
            </div>
            <div className="contact">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <h2 className="contact__paragraph main__title">ارتباط با دیوار</h2>
                        <p className="contact__paragraph main__paragraph">مشکلات دیوار، انتقاد و پیشنهاد خود را با پشتیبانی
                            دیوار در میان بگذارید. همچنین در صورت ایجاد مزاحمت برای شما، اطلاعات تماس پلیس فتای محل
                            سکونت خود را از سایت پلیس فتا دریافت و موضوع را از آن راه پیگیری کنید. </p>
                        <a className="contact__tel contact__link" href="tel:+982179458000">
                            ارتباط با پشتیبانی
                            <i className="contact__tel-icon bi bi-chevron-left"></i>
                        </a>
                        <a className="contact__link" href="#">
                            سایت پلیس فتا
                            <i className="contact__tel-icon bi bi-chevron-left"></i>
                        </a>
                        <div className="contact__paragraphs">
                            <p className="contact__paragraph">
                                شمارهٔ تماس پشتیبانی: ۷۹۴۵۸۰۰۰-۰۲۱
                            </p>
                            <p className="contact__paragraph">
                                آدرس پستی: تهران، سعادت‌آباد، خیابان فرهنگ، کوچه پیوند ۲، پلاک ۸، طبقهٔ سوم
                            </p>
                            <p className="contact__paragraph">
                                صندوق پستی: ۴۸۳۱۱-۱۹۹۷۷
                            </p>
                        </div>
                        <p className="contact__notic">تیم‌های فنی ما در این آدرس اقامت دارند، ولی متأسفانه توان میزبانی
                            مراجعان حضوری را نداریم.</p>
                        <a className="contact__map" href="#">
                            <img className="contact__map-img" src="../images/main/map.png"/>
                        </a>
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
                        <img className="footer__logo" src="../images/header/logo.svg"/>
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
                        <input className="country-modal__input" type="text" placeholder="جستجو در شهرها"/>
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
            </ul> 
        </div>
        <div className="country-modal__footer">
            <div className="country-modal__footer-wrapper">
                <button className="country-modal__btn-footer country-modal__close">انصراف</button>
                <button className="country-modal__btn-footer country-modal__accept--active">تایید</button>
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
            <span className="login-modal__main-title">شماره موبایل خود را وارد کنید.</span>
            <p className="login-modal__main-notic">قبل از ثبت آگهی، لطفاً وارد حساب خود شوید.</p>
            <p className="login-modal__main-notic">کد تأیید به این شماره پیامک می‌شود.</p>
            <div className="login-modal__form-wrapper">
                <form className="login-modal__form" action="#">
                    <input className="login-modal__input" type="text" placeholder="شماره موبایل"/>
                </form>
                <span className="login-modal__form-text">+98</span>
            </div>
            <div className="login-modal__condition">
                <a className="login-modal__condition-link" href="#">شرایط استفاده از خدمات</a>
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
    </>
  )
}
