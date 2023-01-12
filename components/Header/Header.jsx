import React, { useState, useEffect } from 'react'
import { withTranslation, i18n } from '../../i18n';
import style from './header.module.css'
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai'

const Header = () => {

    const [small, setSmall] = useState(false);
    const [width, setWindowWidth] = useState(0);
    const [showMobileMenu, setShowMobileMenu] = useState(false)


    useEffect(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("scroll", () =>
                setSmall(window.pageYOffset > 200)
            );
        }
    }, []);

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width > 900) {
            setShowMobileMenu(false)
        }
        setWindowWidth(width);
    };

    return (
        <div className={small ? style.MainContainerScroll : style.MainContainer} >
            <div className={style.HeaderContent}>
                <div className={style.LogoContainer}>
                    <Link href='/'>
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                </div>
                {width < 940 ?
                    <div className={style.MenuButton} onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        <AiOutlineMenu />
                    </div>

                    : null}
                <div className={showMobileMenu ? style.MenuContainerOpen : style.MenuContainer}>
                    <div className={style.MenuContent}>
                        <Link href='/'>
                            <a>{i18n.t('Home')}</a>
                        </Link>
                        <Link href='/Pricing'>
                            <a>{i18n.t('Pricing')}</a>
                        </Link>
                        <Link href='/Contact'>
                            <a className={style.button}>{i18n.t('send-request')}</a>
                        </Link>

                    </div>
                    {i18n && i18n.language ?
                        <div className={style.Languages}>
                            <span className={i18n.language == 'az' ? style.selected : style.unselected} onClick={() => { i18n.changeLanguage('az') }}>AZ</span>
                            <span className={i18n.language == 'ru' ? style.selected : style.unselected} onClick={() => { i18n.changeLanguage('ru') }}>RU</span>
                            <span className={i18n.language == 'en' ? style.selected : style.unselected} onClick={() => { i18n.changeLanguage('en') }}>EN</span>

                        </div>
                        : null
                    }
                </div>

            </div>
        </div >

    );
}

export default withTranslation('common')(Header);