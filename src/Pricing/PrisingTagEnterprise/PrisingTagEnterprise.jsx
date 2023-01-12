import React, { useEffect, useState } from "react";
import style from '../PricingTag/pricing.module.css'
import { withTranslation, i18n } from "../../../i18n";
import { CgEditBlackPoint } from 'react-icons/cg'
import { AiFillCheckCircle } from 'react-icons/ai'
import Link from 'next/link';
const PrisingTagEnterprise = (props) => {
    const [monthly, setMonthly] = useState(true)
    
    return (
        <div className={style.Container}>
            <div className={style.Title}>
                <h1>{i18n.t(props.title)}</h1>
                <h2>{props.prices ? monthly ? props.prices.monthly  : props.prices.yearly : i18n.t('Free')}</h2>
                
            </div>
            <div className={style.ButtonContent}>
            <Link href='/Contact'>
                    <button>{i18n.t('send-request')}</button>
                                </Link>
               
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

export default withTranslation('common')(PrisingTagEnterprise);