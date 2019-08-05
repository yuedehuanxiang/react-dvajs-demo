import React from "react";
import style from "./index.scss";

export default function index() {
  return (
    <div className={style.home}>
      <div className={style.background}>
        <h1>餐饮后台系统</h1>
        <h1>用于可以在这里下单</h1>
      </div>
    </div>
  );
}
