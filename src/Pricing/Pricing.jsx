import React, { useEffect, useState } from "react";
import style from './pricing.module.css'
import { withTranslation, i18n } from "../../i18n";
import PricingTag from "./PricingTag/PricingTag";
import { CgEditBlackPoint } from 'react-icons/cg'
import QuestionToolTip from '../../components/QuestionTooltip/index'
import Modal from '../../components/Popup/popup'
import Item from "antd/lib/list/Item";
import { BiCheck, BiChevronDown } from 'react-icons/bi'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { HiOutlineInformationCircle } from 'react-icons/hi'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import PrisingTagEnterprise from "./PrisingTagEnterprise/PrisingTagEnterprise";

const Pricing = () => {
    const [monthly, setMonthly] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [marketing, setMarketing] = useState(false)
    const [campaign, setCampaign] = useState(false)
    const [promoCode, setPromocode] = useState('')
    const [selectedPrice, setSelectedPrice] = useState(0)
    const [fix,setFix]=useState(0)
    const [prices, setPrices] = useState([{ monthly: 0 + " AZN", yearly: 0+ "AZN" }, { monthly: 500 + "  AZN", yearly: 5000+ "  AZN" ,adding:i18n.t('Each additional card 0,08 AZN')}, { monthly:i18n.t('priceType')}])
    const [price, setPrice] = useState(199)
    const [freeText, setFreeText] = useState(["Up to 50 loyalty cards", "Google Pay and Apple Wallet", "Inloya POS", "Online form for collecting customer base", "InLink and QR code", "Limited Push notifications"])
    const [smartText, setSmartTexts] = useState(['Up to 1000 loyalty cards', 'Google Pay and Apple Wallet', 'Online form custom design', 'Loyalty card custom design', 'Inloya POS', 'Integration with popular CRM/POS', 'Online form for collecting customer base', 'InLink and QR code', 'Unlimited Push notifications', 'Statistics'])
    const [proText, setProText] = useState(['Up to 5000 loyalty cards', 'Online form custom design', 'Google Pay and Apple Wallet', 'Loyalty card custom design',  'Inloya POS', 'Integration with popular CRM/POS', 'Online form for collecting customer base', 'InLink and QR code', 'Unlimited Push notifications', 'Statistics', 'Campaign', 'Marketing', 'Feedback', 'Location Push Notifications for iOS'])
    const [enterpriseText, setenterpriseText] = useState(['Unlimited cards','Online form custom design', 'Google Pay and Apple Wallet', 'Loyalty card custom design',  'Inloya POS', 'Integration with popular CRM/POS', 'Online form for collecting customer base', 'InLink and QR code', 'Unlimited Push notifications', 'Statistics', 'Campaign', 'Marketing', 'Feedback', 'Location Push Notifications for iOS'])
    const [features, setFeatures] = useState([
        {
            name: 'Loyalty',
            list: [
                { name: 'CashBack', desc: 'text1-1' },
                { name: 'Discount', desc: 'text1-2' },
                { name: 'Bonus', desc: 'text1-3' },
                { name: 'Membership', desc: 'text1-4' },
                { name: 'Cashback Cumulative', desc: 'text1-5' },
                { name: 'Discount Cumulative', desc: 'text1-6' },
                { name: 'Bonus Cumulative', desc: 'text1-7' },
                { name: 'The generation of loyalty cards', desc: 'text1-8' },
                { name: 'Transactions', desc: 'text1-9' },
                { name: 'Create Groups', desc: 'text1-10' },
            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },

        {
            name: 'Clients',
            list: [
                { name: 'The Number of Customers', desc: 'text2-1', number: [1000, 10000, 50000, 'Unlimited'] },
                { name: 'Personal Success Manager', desc: 'text2-2' },
                { name: 'Client file', desc: 'text2-3' },
                { name: 'Upload customer list', desc: 'text2-4' },
                { name: 'Clients Base List', desc: 'text2-5' },
                { name: 'Sending notifications', desc: 'text2-6' },
                { name: 'Customer Groups', desc: 'text2-7' }
            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },

        {
            name: 'Promotions',
            list: [
                { name: 'Creating and launching promotions', desc: 'text3-1' },
                { name: 'SMS mailings', desc: 'text3-1' },
                { name: 'Sendername', desc: 'text3-2' },
                { name: 'Label', desc: 'text3-3' },
                { name: 'Facebook Post', desc: 'text3-4' },
                { name: 'Instagram Post', desc: 'text3-5' },
                { name: 'Email Newsletter', desc: 'text3-6' },
                { name: 'Autopilot', desc: 'text3-7' },
                { name: 'Cyclicity', desc: 'text3-8' },
                { name: 'Newsletter without action', desc: 'text3-9' },
                { name: 'Coupon Promotion', desc: 'text3-10' },
                { name: 'Voucher Promotion', desc: 'text3-11' },
                { name: 'Discount Promotion', desc: 'text3-12' },
                { name: 'Status of created promotions', desc: 'text3-13' },
                { name: 'Search for promotional codes', desc: 'text3-14' },
                { name: 'Templates', desc: 'text3-15' },

            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },

        {
            name: 'Marketing',
            list: [
                { name: 'Birthdays', desc: 'text4-1' },
                { name: 'Welcome Bonus', desc: 'text4-2' },
                { name: 'Completed Fields', desc: 'text4-3' },
                { name: '30 days of silence', desc: 'text4-4' },
                { name: 'Lost customers', desc: 'text4-5' },
                { name: 'Most loyal customers', desc: 'text4-6' },
                { name: 'Friends of my clients', desc: 'text4-7' },
                { name: 'New customers from the mobile application', desc: 'text4-8' },
            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },

        {
            name: 'Reports',
            list: [
                { name: 'Statistics', desc: 'text5-1' },
                { name: 'Detailed analysis', desc: 'text5-2' },
            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },


        {
            name: 'Feedback',
            list: [
                { name: 'Text', desc: 'text6-1' },
                { name: 'Photo', desc: 'text6-2' },
                { name: 'Video', desc: 'text6-3' },
                { name: 'Audio', desc: 'text6-4' },
                { name: 'Adding questions', desc: 'text6-5' },
                { name: 'Source', desc: 'text6-6' },

            ],
            beginChk: false, smartChk: true, proChk: true, enterpriseChk: true
        },
    ])

    const [showList, setShowList] = useState(true)
    const [selectedList, setSelectedList] = useState([])
    console.log(promoCode);

    useEffect(() => {
        if (monthly) {
            setPrice(199)
        } else {
            setPrice(1990)
        }
    }, [monthly])


    const handleList = (name) => {
        let upd = [...selectedList]
        if (selectedList && selectedList.length > 0) {
            selectedList.map((item) => {
                if (item != name) {
                    upd.push(name)
                    setSelectedList(upd)
                } else {
                    let filtered = selectedList.filter(li => li !== name);
                    setSelectedList(filtered)
                }
            })
        } else {
            upd.push(name)
            setSelectedList(upd)
        }
    }


    return (
        <div className={style.MainContainer}>
            <h1>{i18n.t('choose-your-plan')}</h1>
            <div className={style.PricingContainer}>
                <PricingTag
                    title={'Pricing0'}
                    setFix={setFix}
                   setSelectedPrice={(value) => setSelectedPrice(value)}
                    listText={freeText}
                    setShowModal={() => setShowModal(true)}
                />

                {/* <PricingTag
                    title={'Pricing1'}
                    prices={prices[0]}
                    listText={smartText}
                    setSelectedPrice={(value) => setSelectedPrice(value)}
                    setShowModal={() => setShowModal(true)}

                /> */}

                <PricingTag
                    title={'Pricing2'}
                    listText={proText}
                    prices={prices[1]}
                    setFix={setFix}
                    setSelectedPrice={(value) => setSelectedPrice(value)}
                    setShowModal={() => setShowModal(true)}

                />

                <PrisingTagEnterprise
                    title={'Pricing3'}
                    listText={enterpriseText}
                    prices={prices[2]}
                    selectedPrice={selectedPrice}
                    setSelectedPrice={(value) => setSelectedPrice(value)}
                    setShowModal={() => setShowModal(true)}

                />

            </div>
            {showModal ?
                <Modal closeModule={() => setShowModal(false)}>
                    <ClickAwayListener onClickAway={() => setShowModal(false)}>

                        <div className={style.ModalMain}>
                            <div className={style.FirstRow}>
                                <span>{i18n.t('all-features')}</span>
                                <span>{i18n.t('Pricing0')}</span>
                                {/* <span>{i18n.t('Pricing1')}</span> */}
                                <span>{i18n.t('Pricing2')}</span>
                                <span>{i18n.t('Pricing3')}</span>
                                <span> </span>

                            </div>

                            {features && features.length && features.map((feature, i) => {
                                return (
                                    <div>

                                        <div className={style.Row}>
                                            <span>{i18n.t(feature.name)}</span>
                                            <span className={feature.beginChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                            {/* <span className={feature.smartChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span> */}
                                            <span className={feature.proChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                            <span className={feature.enterpriseChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                            <span className={style.DownChevron} onClick={() => { handleList(feature.name) }}><AiOutlineCaretDown /></span>
                                        </div>

                                        <div>
                                            {selectedList.includes(feature.name) && showList && feature.list && feature.list.length && feature.list.map((item) => {
                                                return (
                                                    <div className={style.SubRow}>
                                                        <span>{i18n.t(item.name)} <QuestionToolTip text={i18n.t(item.desc)} /></span>
                                                        {item.number ?
                                                            <>
                                                                <span>{item.number[0]} </span>
                                                                <span>{item.number[1]} </span>
                                                                <span>{item.number[2]} </span>
                                                                <span>{item.number[3]} </span>
                                                            </>

                                                            :
                                                            <>
                                                                <span className={feature.beginChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                                                <span className={feature.smartChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                                                <span className={feature.proChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                                                <span className={feature.enterpriseChk ? style.SelectedChk : style.UnselectedChk}><BiCheck /></span>
                                                                <span> </span>
                                                            </>
                                                        }
                                                    </div>
                                                )
                                            })}
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                    </ClickAwayListener>
                </Modal>
                : null}
               <div className={style.TotalPrice}>

               <div className={style.Total}>
                <h1> {i18n.t('estimated-price')}:</h1>
                <h1> {parseInt(selectedPrice) + fix}  AZN</h1>
                <div className={style.Promocode}>
                    <input value={promoCode} onChange={(event) => { setPromocode(event.target.value) }} placeholder={i18n.t('promocode')} />
                    <button>{i18n.t('Apply')}</button>
                </div>
                <div className={style.ButtonContent}>
                    <button>{i18n.t('Buy Now')}</button>
                </div>
            </div>
            <div className={style.Setup}>
            <h1> {i18n.t('setup-price')}:</h1>
                <h1> 1000 AZN</h1>
            </div>
               </div>
        
            {/* 
            <div className={style.MarketingContainer}>
                <div className={style.MarketingContent}>
                    <h1>Marketing</h1>
                    <div>
                        <span>50</span>
                        <svg width="15" height="15" viewBox="0 0 384 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 32V66.65C314.8 81.9 384 160.9 384 256V416C384 433.7 369.7 448 352 448C334.3 448 320 433.7 320 416V256C320 196.4 279.2 146.2 224 132V416C224 433.7 209.7 448 192 448C174.3 448 160 433.7 160 416V132C104.8 146.2 64 196.4 64 256V416C64 433.7 49.67 448 32 448C14.33 448 0 433.7 0 416V256C0 160.9 69.19 81.9 160 66.65V32C160 14.33 174.3 0 192 0C209.7 0 224 14.33 224 32Z" fill="#aecae6" />
                        </svg>
                        <label className={style.switch}>
                            <input value={marketing} onChange={() => { setMarketing(!marketing) }} type="checkbox" />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                    <div>
                        <span>More</span>
                    </div>
                </div>

                <div className={style.MarketingContent}>
                    <h1>Marketing</h1>
                    <div>
                        <span>50</span>
                        <svg width="15" height="15" viewBox="0 0 384 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M224 32V66.65C314.8 81.9 384 160.9 384 256V416C384 433.7 369.7 448 352 448C334.3 448 320 433.7 320 416V256C320 196.4 279.2 146.2 224 132V416C224 433.7 209.7 448 192 448C174.3 448 160 433.7 160 416V132C104.8 146.2 64 196.4 64 256V416C64 433.7 49.67 448 32 448C14.33 448 0 433.7 0 416V256C0 160.9 69.19 81.9 160 66.65V32C160 14.33 174.3 0 192 0C209.7 0 224 14.33 224 32Z" fill="#aecae6" />
                        </svg>
                        <label className={style.switch}>
                            <input value={marketing} onChange={() => { setMarketing(!marketing) }} type="checkbox" />
                            <span className={style.slider}></span>
                        </label>
                    </div>
                    <div>
                        <span>More</span>
                    </div>
                </div>
            </div> */}


        </div >
    );
}

export default withTranslation('common')(Pricing);