import React from 'react';
import style from "./Loading.module.css";

let Loading = () => {
    return <div className={style.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Loading;