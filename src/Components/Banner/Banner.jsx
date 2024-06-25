import React from 'react';
import styles from "./Banner.module.css"
import Button from "../Button/Button";
const Banner = () => {
    return (
        <div className={styles.bannerSection}>
            <div className={styles.bannerWrapper}>
                <div className={styles.bannerContent}>
                    <h1 className={styles.bannerTitle}>
                        Test assignment for front-end developer
                    </h1>
                    <p className={styles.bannerText}>What defines a good front-end developer is one
                        that has skilled knowledge of HTML, CSS, JS with
                        a vast understanding of User design thinking as they
                        'll be building web interfaces with accessibility in
                        mind. They should also be excited to learn, as the world
                        of Front-End Development keeps evolving.
                    </p>
                    <div className={styles.bannerBtnWrapper}>
                        <Button text={"Sign up"} className={styles.bannerBtn}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;