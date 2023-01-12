import React, { useState, useEffect } from "react";
import style from './card.module.css'
import { withTranslation, i18n } from "../../i18n";
import Card from "./Card/Card";

const Cards = () => {

    return (
        <div className={style.Main}>
            <div className={style.MainContainer}>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/loyaltyCard.png'
                        cardTitle='Loyalty Card'
                        cardText1='LoyaltyCard-text'
                        cardText2='LoyaltyCard-text2' />
                </div>

                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/boardingPass.png'
                        cardTitle='DigitalCard'
                        cardText1='DigitalCard-text'
                        cardText2='DigitalCard-text2' />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/assistance.png'
                        cardTitle='Assistance Card'
                        cardText1='AssistanceCard-text'
                        cardText2='AssistanceCard-text2'

                    />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/voucher.png'
                        cardTitle='Voucher'
                        cardText1='Voucher-text'
                        cardText2='Voucher-text2'
                    />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/eventTicket.png'
                        cardTitle='Event Ticket'
                        cardText1='EventTicket-text'
                        cardText2='EventTicket-text2'

                    />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/stampCard.png'
                        cardTitle='Stamp Card'
                        cardText1='StampCard-text'
                        cardText2='StampCard-text2'
                    />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/guestCard.png'
                        cardTitle='Guest Card'
                        cardText1='GuestCard-text'
                        cardText2='GuestCard-text2'
                    />
                </div>
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/businessCard.png'
                        cardTitle='Business Card'
                        cardText1='BusinessCard-text'
                        cardText2='BusinessCard-text2'
                    />
                </div>
                {/* <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/emergencyCard.png'
                        cardTitle='EmergencyCard'
                        cardText1='EmergencyCard-text'
                        cardText2='EmergencyCard-text2'
                    />
                </div> */}
                <div className={style.CardContainer}>
                    <Card
                        cardImage='/cardinfo/employeeCard.png'
                        cardTitle='Employee Id Card'
                        cardText1='EmployeeCard-text'
                        cardText2='EmployeeCard-text2'
                    />
                </div>
            </div>


        </div>
    );
}

export default withTranslation('common')(Cards);