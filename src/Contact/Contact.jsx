import React, { useEffect, useState } from "react";
import axios from "axios";
import style from './contact.module.css'
import { withTranslation, i18n } from "../../i18n";
import Snackbar from '../../components/Snackbar/Snackbar'

const Contact = () => {
    const [countries, setCountries] = useState()
    const [alert, setAlert] = useState({ bgc: '', open: false, message: '' })

    const [data, setData] = useState([{ name: "", business: "", countryId: '15', phone: "", selectedCard: '1' }])
    const [cards, setCards] = useState([
        { name: 'Loyalty Card', id: 1 },
        { name: 'Digital Boarding Pass', id: 2 },
        { name: 'Assistance Card', id: 3 },
        { name: 'Voucher', id: 4 },
        { name: 'Event Ticket', id: 5 },
        { name: 'Stamp Card', id: 6 },
        { name: 'Guest Card', id: 7 },
        { name: 'Business Card', id: 8 },
        { name: 'Emergency Card', id: 9 },
        { name: 'Employee Id Card', id: 10 },
        { name: `${i18n.t('cardknow')}`, id: 11 },
    ])

    const handleData = (value, type) => {
        let updated = [...data]
        updated[0][type] = value
        setData(updated)

    }

    useEffect(() => {
        axios
            .get(`https://newecomapi.inloya.com/api/Country`)
            .then((response) => setCountries(response.data.result));

    }, [])

    const handleRequest = () => {
        console.log(data,'kontakt dataa')
        if (data[0].name  && data[0].business && data[0].phone && data[0].name.length  && data[0].business.length && data[0].phone.length) {
            console.log("truee")
            setAlert({
               
                bgc: '#64DD17',
                open: true,
                message: i18n.t('succesfull')
            });
        } else {
            console.log("falseee")
            setAlert({
                bgc: '#D50000',
                open: true,
                message: i18n.t('empty-fields')
            })
        }
    }

    return (
        <>
            {i18n && i18n.language && data ?
                <div className={style.MainContainer}>
                    <h1>{i18n.t('contact')}</h1>
                    <div className={style.Container}>
                        <div className={style.ContainerContent}>
                            <div className={style.InputContainer}>
                                <label>{i18n.t('name')}</label>
                                <input type="text" onChange={(event) => { handleData(event.target.value, "name") }} value={data[0].name}  />
                            </div>
                            <div className={style.InputContainer}>
                                <label>{i18n.t('business')}</label>
                                <input type="text" onChange={(event) => { handleData(event.target.value, "business") }} value={data[0].business}  />
                            </div>
                            <div className={style.InputContainer}>
                                <label htmlFor="phone">{i18n.t('cardType')}</label>

                                <select value={data[0].selectedCard} onChange={(e) => handleData(event.target.value, "selectedCard")}>
                                    {cards && cards.length > 0 && cards.map((item, i) => {
                                        return (
                                            <option value={item.id} key={item.id}>{item.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div className={style.InputContainer}>
                                <label htmlFor="phone">{i18n.t('phone')}</label>
                                <div className={style.PhonenumberContent}>
                                    <select value={data[0].countryId} onChange={(e) => handleData(event.target.value, "countryId")}>
                                        {countries && countries.length > 0 && countries.map((item, i) => {
                                            return (
                                                <option value={item.id} key={item.id}>{item.dialingCode}</option>
                                            )
                                        })}
                                    </select>
                                    <input type="number" onChange={(event) => { handleData(event.target.value, "phone") }} value={data[0].phone}/>

                                </div>
                            </div>
                            <div className={style.Button}>
                                <button onClick={() => { handleRequest() }}>{i18n.t('send-request')}</button>

                            </div>
                        </div>
                        <div className={style.ContainerContentRight}>
                            <img src="/images/contact.png"></img>
                        </div>
                        <Snackbar alert={alert} setAlert={setAlert} duration={5000} />
                    </div>

                </div >
                : null}
        </>
    );
}

export default withTranslation('common')(Contact);