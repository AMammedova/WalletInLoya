import React from 'react';
import style from './index.module.css'
import { AiOutlineClose } from 'react-icons/ai'
const popup = (props) => {
    return (
        <div className={style.Popup}>
            <div className={style.ContentContainer}>
                <div className={`${style.Content} ${props.spinner && style.SpinnerContent}`}>
                    <i className={style.ModalCloseBtn} onClick={props.closeModule} >
                        <AiOutlineClose />
                    </i>
                    {props.children}
                </div>
            </div>

            <div onClick={props.closeModule} className={style.moduleBackground}>

            </div>
        </div>
    );
};

export default popup;