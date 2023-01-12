import React from "react";
import { i18n, withTranslation } from '../../../i18n'
import style from '../features.module.css'

const FeatureThird = () => {
    return (
        <div className={style.MainContainer}>
            <div className={style.MainContent}>
                <div className={style.LeftContainer}>
                    <h1>{i18n.t('features1-title')}</h1>\
                    <p>{i18n.t('features1-text')}</p>
                </div>
                <div className={style.LeftContainer}>

                </div>
            </div>
        </div>
    );
}

export default withTranslation('common')(FeatureThird);