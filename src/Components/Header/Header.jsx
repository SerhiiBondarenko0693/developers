import React from 'react';
import styles from "./Header.module.css";
import { ReactComponent as LogoSVG } from '../Assets/Logo/logo.svg';
import Button from "../Button/Button";

const Header = () => {
    return (
        <div>
            <div className={styles.headerWrapper}>
                <div>
                    <LogoSVG/>
                </div>
                <div className={styles.btnWrapper}>
                    <Button text={"Users"} className={styles.btnHeader}/>
                    <Button text={"Sing up"} className={styles.btnHeader}/>
                </div>
            </div>
        </div>
    );
};

export default Header;