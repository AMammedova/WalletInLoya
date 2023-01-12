import React from 'react'
import { AiFillQuestionCircle } from "react-icons/ai";
import style from './index.module.css'
import { HiOutlineInformationCircle } from 'react-icons/hi'


function index({ text }) {
    return (
        <div className={style.tooltip}>
            <i className={style.toolTipIcon}> <HiOutlineInformationCircle /></i>
            {text && <p className={style.tooltiptext}>{text}
                <div className={`${style.arrow} ${style.arrowBottom}`}></div>
            </p>}
        </div>
    )
}

export default index
