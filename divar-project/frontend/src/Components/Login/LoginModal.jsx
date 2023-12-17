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
    <span className="login-modal__main-title">
      شماره موبایل خود را وارد کنید.
    </span>
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
      <a className="login-modal__condition-link" href="#">
        شرایط استفاده از خدمات
      </a>
      <span className="login-modal__condition-text">و</span>
      <a className="login-modal__condition-link" href="#">
        حریم خصوصی
      </a>
      <span className="login-modal__condition-text">دیوار را میپذیرم.</span>
    </div>
  </div>
  <div className="login-modal__footer">
    <button className="login-modal__footer-btn">تایید</button>
  </div>
</section>;
