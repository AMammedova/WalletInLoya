import React, { useEffect, useState } from "react";
import style from './layout.module.css'

const Layout = ({ children }) => {

    return (
        <div className={style.MainLayout}>
            <div className={style.MainLayoutContent}>{React.cloneElement(children, null)}</div>
        </div>
    );
};

export default Layout;
