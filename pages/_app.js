import React, { useEffect, useState } from "react";
import App from 'next/app'

import style from "../styles/globals.css";
import { appWithTranslation } from '../i18n'

import Head from 'next/head';

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function MyApp({ Component, pageProps }) {

    return (
        <div className={style.MainPageContainer}>

            <Head>
                <title>InLoya Digital Wallet</title>
                <link rel="icon" type="image/x-icon" href="./images/fav.png"/>

            </Head>
            <Header />
            <div style={{ marginTop: "100px" }}>
                < Component {...pageProps} />
            </div>

            <Footer />
        </div>
    );
}
MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) })

export default appWithTranslation(MyApp)
