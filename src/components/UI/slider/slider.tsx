import React, { ChangeEvent, FC, useState } from "react";
import { IAvito } from "../../../models/IAvito";

import styles from './slider.module.scss';

const Slider: FC<IAvito> = (realty) => {
    const [slide, setSlide] = useState<number>(5);
    const images = realty.img.split(',');

    const imgChange = (i: number) => (e: ChangeEvent) => {
        console.log(e.target)
        if (slide === i) {
            e.target.classList.add('active');
            
        }
    };

    return (
        <div className={styles.sliderWrap}>
            <div className={styles.imgBlock}>
                {images?.map((item, i) => (
                    <div onChange={() => imgChange(i)} key={i}>
                        <img src={item} alt="slide" />
                    </div>
                ))}
            </div>
            <div className={styles.hvrBlock}>
                {images?.map((item, i) => <div key={i} className={styles.hvrItem}></div>)}
            </div>
        </div>
    )
};

export default Slider;