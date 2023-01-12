import React from "react";
import { i18n, withTranslation } from '../../i18n'
import style from './features.module.css'
import FeatureFirst from "./Feature/FeatureFirst";
import FeatureSecond from "./Feature/FeatureSecond";
import FeatureThird from "./Feature/FeatureThird";

const Features = () => {
    return (
        <><div>
            <FeatureFirst />
        </div>
            <FeatureSecond />
            <FeatureThird />
        </>
    );
}

export default withTranslation('common')(Features);