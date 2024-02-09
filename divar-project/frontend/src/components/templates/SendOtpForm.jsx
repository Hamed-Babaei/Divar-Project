import React from "react";
import { sendOtp } from "../../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SendOtpForm = ({ setStep, mobile, setMobile }) => {
  const submitHandler = async (e) => {
    e.preventDefault();
    const notify = () => toast("Error!");
    if (mobile.length !== 11) return;
    const { response, error } = await sendOtp(mobile);
    if (response) {
      notify();
      setStep(2);
    }
    if (error) {
      console.log("error =>", error.response.data.message);
      notify();
    }
  };
  return (
    <>
      <form onSubmit={submitHandler}>
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
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default SendOtpForm;
