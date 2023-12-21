import React, { ChangeEvent, FC, useRef, useState } from "react";
import styles from './realties.module.scss';
import AvitoList from "../avitoList/avitoList";

const platforms = [
    'Авито',
    'Циан',
    'Фарпост'
];

const Realty: FC = () => {
    const [platform, setPlatform] = useState<string>('Авито');

    const handleChange = (e: React.MouseEvent) => {
        const value = (e.target as HTMLButtonElement)?.getAttribute('data-name');
        setPlatform(value as string);
    };

    return (
        <div>
            <h2 className={styles.title}>Объявления из {platform}</h2>
            <div className={styles.realtyButtons}>
                {platforms.map((item, i) => (
                    <button 
                        className={styles.itemBtn} 
                        data-name={item}
                        onClick={handleChange} 
                        key={i}>
                            {item}
                    </button>
                ))}
            </div>
            {
                platform === 'Авито'
                ?
                <AvitoList />
                :
                <>
                </>
            }
        </div>
    )
}

export default Realty;