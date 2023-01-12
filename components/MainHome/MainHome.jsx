import React from "react";
import { withTranslation, i18n } from "../../i18n";
import style from './main.module.css'
import Link from "next/link";

const MainHome = () => {
    return (
        <div className={style.MainContainer}>
            <h2>{i18n.t('header1')}</h2>
            <h1 style={{whiteSpace: 'pre'}}>{i18n.t('header2')}</h1>
            <div>
                <button>
                    <Link href='/Contact'>
                        <a>{i18n.t('headerButton')}</a>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default withTranslation('common')(MainHome);