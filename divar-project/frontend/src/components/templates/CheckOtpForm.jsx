import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { getProfile } from "src/services/user";
import { setCookie } from "src/utils/cookie";
import styles from "./CheckOtpForm.module.css";
import toast from "react-hot-toast";

const CheckOtpForm = ({ code, setCode, mobile, setStep }) => {
  const navigate = useNavigate();
  const { refetch } = useQuery(["profile"], getProfile);
  const submitHandler = async (e) => {
    e.preventDefault();
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    if (response) {
      toast.success("ورود با موفقیت انجام شد");
      setCookie(response.data);
      navigate("/");
      refetch();
    }
    if (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <p>کد تایید ارسال شد</p>
      <span>کد تایید ارسال شده به شماره {mobile} را وارد کنید</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)} className={styles.backButton}>
        تغییر شماره موبایل
      </button>
    </form>
  );
};

export default CheckOtpForm;
