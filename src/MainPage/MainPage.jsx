import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './main.module.css'
import { BiMessageSquareDots } from 'react-icons/bi'
import { IoStatsChart, IoQrCode } from 'react-icons/io5'
import { FaMobileAlt } from 'react-icons/fa'

const MainPage = () => {
    return (
        <div className={style.MainContainer} id="Features">
            <div className={style.MainContent}>
                <h1>{i18n.t('Features')}</h1>
                <div className={style.FeaturesContainer}>
                    <div className={style.Content}>
                        <div className={style.FeaturesContent}>
                            <div>
                                <span className={style.icon}><BiMessageSquareDots /></span>
                                <h3>{i18n.t('featurehead1')}</h3>
                                <span>{i18n.t('feature1')}</span>
                            </div>
                        </div>

                        <div className={style.FeaturesContent}>
                            <div>
                                <span className={style.icon}><IoQrCode/></span>
                                <h3>{i18n.t('featurehead2')}</h3>
                                <span>{i18n.t('feature2')}</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.Content}>
                        <div className={style.FeaturesContent}>
                            <div>
                                <span className={style.icon}><FaMobileAlt /></span>
                                <h3>{i18n.t('featurehead3')}</h3>
                                <span>{i18n.t('feature3')}</span>
                            </div>
                        </div>

                        <div className={style.FeaturesContent}>
                            <div>
                                <span className={style.icon}><IoStatsChart /></span>
                                <h3>{i18n.t('featurehead4')}</h3>
                                <span>{i18n.t('feature4')}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default withTranslation('common')(MainPage);