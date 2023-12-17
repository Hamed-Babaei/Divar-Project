import React from "react";
import "./Product.css";

export default function Product() {
  return (
    <>
      <main className="main">
        <div className="container">
          <ul className="main__breadcrumb">
            <li className="main__breadcrumb-item">
              <a className="main__breadcrumb-link" href="#">
                خانه و آشپزخانه
                <i className="main__breadcrumb-icon bi bi-chevron-left"></i>
              </a>
            </li>
            <li className="main__breadcrumb-item">
              <a className="main__breadcrumb-link" href="#">
                صنایع چوب
                <i className="main__breadcrumb-icon bi bi-chevron-left"></i>
              </a>
            </li>
            <li className="main__breadcrumb-item">
              <a className="main__breadcrumb-link" href="#">
                صندلی
                <i className="main__breadcrumb-icon bi bi-chevron-left"></i>
              </a>
            </li>
            <li className="main__breadcrumb-item">
              <a className="main__breadcrumb-link" href="#">
                صندلی
              </a>
            </li>
          </ul>
          <div className="row">
            <div className="col-6">
              <div className="product">
                <h1 className="product__name">مبل سبزلرن</h1>
                <span className="product__location">
                  3 روز پیش در اصفهان،مرداویج
                </span>
                <div className="product__verify">
                  <img
                    className="product__verify-img"
                    src="../images/main/verify.pn/g"
                  />
                  <span className="product__verify-text">
                    عضو دیوار فروشگاه ها
                  </span>
                </div>
                <div className="product__btns">
                  <div className="product__btns-right">
                    <button className="product__btn-tel">اطلاعات تماس</button>
                    <button className="product__btn-chat">چت</button>
                  </div>
                  <div className="product__btns-left">
                    <button className="product__btn-save product__btn">
                      <i className="product__btn-icon bi bi-save"></i>
                    </button>
                    <button className="product__btn-share product__btn">
                      <i className="product__btn-icon bi bi-share"></i>
                    </button>
                  </div>
                </div>
                <div className="product__infos">
                  <ul className="product__info-list">
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                    <li className="product__info-item">
                      <span className="product__info-key">نوع مبل</span>
                      <span className="product__info-value">راحتی</span>
                    </li>
                  </ul>
                </div>
                <div className="product__intro">
                  <h2 className="product__intro-title">توضیحات</h2>
                  <p className="product__intro-desc">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div className="product__feedback">
                  <div className="product__feedback-right">
                    <i className="product__feedback-icon bi bi-exclamation-octagon"></i>
                    <span className="product__feedback-text">
                      کمک به بهبود قیمت و اطلاعات آگهی
                    </span>
                  </div>
                  <div className="product__feedback-left">
                    <i className="product__feedback-second-icon bi bi-chevron-left"></i>
                  </div>
                </div>
                <div className="product__tags">
                  <a className="product__tag" href="#">
                    مبلمان خانگی و میز عسلی
                  </a>
                  <a className="product__tag" href="#">
                    مبلمان خانگی و میز عسلی در شهرک ولیعصر
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="product-preview">
                <div className="swiper product__preview-slider">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <img
                        src="../images/main/product_1.jfif"
                        className="product-preview__slider-img"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="../images/main/product_1.jfif"
                        className="product-preview__slider-img"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="../images/main/product_1.jfif"
                        className="product-preview__slider-img"
                      />
                    </div>
                    <div className="swiper-slide">
                      <img
                        src="../images/main/product_1.jfif"
                        className="product-preview__slider-img"
                      />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
                <textarea
                  className="product-preview__input"
                  placeholder="یادداشت شما..."
                ></textarea>
                <span className="product-preview__input-notics">
                  یادداشت تنها برای شما قابل دیدن است و پس از حذف آگهی، پاک
                  خواهد شد.
                </span>
                <div className="product-preview__map">
                  <img
                    className="product-preview__map-img"
                    src="../images/main/ma/p.png"
                  ></img>
                </div>
                <a className="product-preview__shop" href="#">
                  <div className="product-preview__shop-right">
                    <div className="product-preview__shop-right-right">
                      <img
                        className="product-preview__shop-img"
                        src="../images/main/sho/p.jfif"
                      />
                    </div>
                    <div className="product-preview__shop-right-left">
                      <span className="product-preview__shop-title">
                        فروشگاه مبلمان سبزلرن
                      </span>
                      <span className="product-preview__shop-text">
                        مشاهده همه آگهی ها
                      </span>
                    </div>
                  </div>
                  <div className="product-preview__shop-left">
                    <i className="product-preview__shop-icon bi bi-chevron-left"></i>
                  </div>
                </a>
                <div className="product-preview__send">
                  <span className="product-preview__send-title">
                    نحوه خرید از فروشگاه
                  </span>
                  <div className="product-preview__send-item">
                    <i className="product-preview__send-icon bi bi-truck"></i>
                    <span className="product-preview__send-text">
                      امکان ارسال به سراسر ایران
                    </span>
                  </div>
                  <div className="product-preview__send-item">
                    <i className="product-preview__send-icon bi bi-geo-alt"></i>
                    <span className="product-preview__send-text">
                      امکان ارسال به سراسر ایران
                    </span>
                  </div>
                  <p className="product-preview__location">
                    آدرس: شهرک ولیعصر میدان ایثارگران دقیقا دور میدان چسبیده به
                    بستنی فروشی انیل مبلمان مجلل
                  </p>
                </div>
                <div className="product-preview__help">
                  <a className="product-preview__help-item" href="#">
                    <i className="product-preview__help-icon bi bi-question-circle"></i>
                    راهنمای خرید امن
                  </a>
                  <a className="product-preview__help-item" href="#">
                    <i className="product-preview__help-icon bi bi-exclamation-octagon"></i>
                    ثبت تخلف و مشکل آگهی
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="main__slider">
            <div className="main__slider-title">
              کالاهای مشابه در دیوارِ فروشگاه‌ها
            </div>
            <div className="swiper main__slider-wrapper">
              <div className="swiper-wrapper">
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
                <div className="swiper-slide main__slider-item">
                  <img
                    src="../images/main/product_1.jfif"
                    className="main__slider-img"
                  />
                  <a className="main__slider-link" href="#">
                    مبل مدل سبزلرن
                  </a>
                  <span className="main__slider-price">100,000 تومان</span>
                </div>
              </div>
              <div className="swiper-pagination"></div>
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
