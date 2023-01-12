import React from "react";
import { i18n, withTranslation } from '../../../i18n'
import style from '../features.module.css'


const FeatureSecond = () => {
    return (
        <div className={style.MainContainer} id={style.Second}>
            <div className={style.MainContent}>
                <div className={style.LeftContainer}>
                    <h3>{i18n.t('features3-title')}</h3>
                    <p>{i18n.t('features3-text')}</p>
                </div>
                <div className={style.LeftContainer}>
                    <div className={style.Image2}>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation('common')(FeatureSecond);