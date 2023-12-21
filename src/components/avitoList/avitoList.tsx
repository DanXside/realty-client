import React from "react";
import example from '../../assets/img/example.jpg';

import styles from './avito.module.scss';
import { avitoAPI } from "../../services/avitoApi";
import Slider from "../UI/slider/slider";

const AvitoList = () => {
    const {data, isLoading} = avitoAPI.useGetRealtiesQuery(undefined);

    return (
        <div className={styles.listWrap}>
            {
                isLoading
                ?
                <>
                    <h2>Loading...</h2>
                </>
                :
                data?.map((item, i) => (
                    <div key={item.id} className={styles.listItem}>
                        <Slider {...item} />
                        <article>
                            <a target="_blank" href={item.url}>{item.title}</a>
                            <h3 className={styles.listItem__price}>{item.price}р в месяц</h3>
                            <p className={styles.listItem__address}>{item.address}</p>
                            <p className={styles.listItem__geo}>{item.geo}</p>
                            <p className={styles.listItem__descr}>
                                {item.description}
                            </p>
                            <div className={styles.listItem__date}>
                                {item.offer_date}
                            </div>
                        </article>
                    </div>
                ))
            }
        </div>
    )
}

export default AvitoList;