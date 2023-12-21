import { Link } from 'react-router-dom';
import React, { FC } from 'react';
import styles from './header.module.scss';
import Fav from '../../../assets/icons/fav.svg';

const Header: FC = () => {
    return (
        <header>
            <div className={styles.header}>
                <Link to='/'>REALM</Link>
                <button>
                    <Fav width={40} height={32}/>
                </button>
            </div>
        </header>
    )
};

export default Header;