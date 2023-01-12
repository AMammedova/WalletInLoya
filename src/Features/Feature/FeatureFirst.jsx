import React from "react";
import { i18n, withTranslation } from '../../../i18n'
import style from '../features.module.css'

const FeatureFirst = () => {
    return (
        <div className={style.MainContainer} id={style.First} >
            <div className={style.MainContent}>
                <div className={style.LeftContainer}>
                    <h1>{i18n.t('features1-title')}</h1>
                    <p>{i18n.t('features1-text')}</p>
                </div>
                <div className={style.LeftContainer}>
                    <div className={style.ImageContent}>
                        <div className={style.Image1}>
                            <div className={style.Textbox1}>
                            </div>
                            <div className={style.Textbox2}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withTranslation('common')(FeatureFirst);