import React from "react";

export default function CountryModal() {
  return (
    <>
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
    </>
  );
}
