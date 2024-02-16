import React from "react";
import { sendOtp } from "services/auth";

import styles from "./SendOtpForm.module.css";
const SendOtpForm = ({ setStep, mobile, setMobile }) => {
  const submitHandler = async (e) => {
    e.preventDefault();

    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) {
      setStep(2);
    }
    if (error) {
      console.log("error =>", error.response.data.message);
    }
  };
  return (
    <>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>ورود به حساب کاربری</p>
        <span>
          برای استفاده از امکانات دیوار، مطفا شماره موبایل هود را وارد کنید. کد
          تایید به این شماره موبایل ارسال خواهد شد.
        </span>
        <label htmlFor="input"></label>
        <input
          type="text"
          id="input"
          placeholder="شماره موبایل"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </>
  );
};

export default SendOtpForm;
