import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './footer.module.css'
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className={style.MainContainer}>
            <div className={style.FooterContainer}>
                <div className={style.FooterContent}>
                    <Link href='https://inloya.com/'>
                        <img src='./images/LoginLogo.png'></img>
                    </Link>
                    <p>{i18n.t('header2')}</p>
                    <Link href='/Contact'>
                    <button>{i18n.t('send-request')}</button>
                                </Link>
                   
                </div>
                <div className={style.Mobile}>
                    <div className={style.FooterContent}>
                        <h3>{i18n.t('Digital Wallet')}</h3>
                        <ul>
                            {/* <li>
                            <Link href='/'>
                            <a>{i18n.t('About')}</a>
                            </Link>
                        </li> */}
                            <li>
                                <Link href='/Contact'>
                                    <a>{i18n.t('Contact')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/Pricing'>
                                    <a>{i18n.t('Pricing')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/Features'>
                                    <a>{i18n.t('Features')}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={style.FooterContent}>
                        <h3>{i18n.t('Company')}</h3>
                        <ul>
                            <li>
                                <Link href='https://inloya.com/loyalty'>
                                    <a target='_blank'>{i18n.t('Loyalty')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/marketing'>
                                    <a target='_blank'>{i18n.t('MarketingAutomation')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/businessdictionary'>
                                    <a target='_blank'>{i18n.t('BusinessDictionary')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/feedback'>
                                    <a target='_blank'>{i18n.t('FeedBack')}</a>
                                </Link>

                            </li>

                        </ul>
                    </div>
                </div>

                <div className={style.Mobile}>
                    <div className={style.FooterContent}>
                        <h3>{i18n.t('Platform')}</h3>
                        <ul>
                            <li>
                                <Link href='https://inloya.com/howitworks'>
                                    <a target='_blank'>{i18n.t('howitworks')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/faq'>
                                    <a target='_blank'>{i18n.t('faq')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/whatyouget'>
                                    <a target='_blank'>{i18n.t('whatyouget')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/termsofuse'>
                                    <a target='_blank'>{i18n.t('termsofuse')}</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://inloya.com/press'>
                                    <a target='_blank'>{i18n.t('press')}</a>
                                </Link>
                            </li>

                        </ul>
                    </div>


                    <div className={style.FooterContent}>
                        <h3>{i18n.t('Contact')}</h3>
                        <Link href="mailto: AZ@inloya.com">
                            <a target='_blank'>AZ@inloya.com</a>
                        </Link>
                        <div>
                            <span><FaInstagram /></span>
                            <span><FaFacebook /></span>
                            <span><FaLinkedinIn /></span>
                        </div>
                        <img className={style.netty} src='images/netty.png'></img>
                        <span>Copyright 2022</span>


                    </div>
                </div>

            </div>
        </div >

    );
}

export default withTranslation('common')(Footer);