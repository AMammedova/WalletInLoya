
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './slider.module.css'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 8000,
            autoplay: true,
            autoplaySpeed: 0,
            slidesToShow: 4,
            slidesToScroll: 1,
            cssEase: 'linear',
            centerMode: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 1150,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 4,
                    },
                }]
        };

        return (
            <div className={style.MainContainer}>
                <Slider {...settings}>
                    <div>
                        <img src="/cards/card1.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card2.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card3.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card4.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card5.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card6.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card7.png" alt="" />
                    </div>
                    <div>
                        <img src="/cards/card4.png" alt="" />
                    </div>
                </Slider>
            </div>
        );
    }
}

