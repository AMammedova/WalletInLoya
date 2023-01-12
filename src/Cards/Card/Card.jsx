import React from "react";
import style from './card.module.css'
import { withTranslation, i18n } from "../../../i18n";

const Card = (props) => {
    return (
        <div className={style.CardContent}>
            <div className={style.ImageContent}>
                <img src={props?.cardImage}></img>
            </div>
            <div className={style.TextContent}>
                <h2>{i18n.t(props?.cardTitle)}</h2>
                <p>{i18n.t(props?.cardText1)}</p>
                <p>{i18n.t(props?.cardText2)}</p>

            </div>
        </div>
    );
}

export default withTranslation('common')(Card);