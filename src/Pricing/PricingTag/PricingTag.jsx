import React, { useEffect, useState } from "react";
import style from './pricing.module.css'
import { withTranslation, i18n } from "../../../i18n";
import { CgEditBlackPoint } from 'react-icons/cg'
import { AiFillCheckCircle } from 'react-icons/ai'

const PricingTag = (props) => {
    const [monthly, setMonthly] = useState(true)
    
    return (
        <div className={style.Container}>
            <div className={style.Title}>
                <h1>{i18n.t(props.title)}</h1>
                <h2>{props.prices ? monthly ? props.prices.monthly  : props.prices.yearly : i18n.t('Free')}</h2>
                <h2>{props.prices ? props.prices.adding ?  props.prices.adding : ''  : ''}</h2>
                {props.prices ?
                    <div className={style.switchContainer}>
                        <label className={style.switch}>
                            <input value={monthly} onChange={(event) => { setMonthly(!monthly) }} type="checkbox" />
                            <span className={style.slider}></span>
                        </label>

                        <span>/ {monthly ? i18n.t('Month') : i18n.t('Year')}</span>
                    </div>

                    : null}
            </div>
            <div className={style.ButtonContent}>
                <button onClick={() => {props.prices ? props.setSelectedPrice(monthly ? props.prices.monthly : props.prices.yearly): props.setSelectedPrice(monthly ? 0:0);
                    props.prices ? props.setFix(monthly ? 1000 : 1000): props.setFix(monthly ? 0:0)} }>{i18n.t('Select')}</button>
            </div>

            <div className={style.Content}>
                {props.listText && props.listText.length ? props.listText.map((item) => {
                    return (
                        <div className={style.Row}>
                            <span className={style.Last}><CgEditBlackPoint /></span>
                            <span>{i18n.t(item)}</span>
                        </div>

                    )
                })
                    : <div>
                        {i18n.t('Full-functionality')}
                    </div>}

            </div>
            <div className={style.ButtonContent}>
                <button onClick={props.setShowModal}>{i18n.t('See all features')}</button>
            </div>

        </div>


    );
}

export default withTranslation('common')(PricingTag);