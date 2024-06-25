import React from 'react';
import styles from "./developerItem.module.css"
import userPhoto from "../Assets/userMockPhoto/images.png";

const DeveloperItem = ({photo, name, position, email, phone}) => {

    const handleImageError = (event) => {
        event.target.src = userPhoto;
    };

    return (
        <div className={styles.cardWrapper}>
            <div className={styles.cardPhoto}>
                <img src={photo} alt="devPhoto" onError={handleImageError}/>
            </div>
            <p className={styles.developerName}>{name}</p>
            <div className={styles.cardInfo}>
                <p className={styles.developerInfo}>{position}</p>
                <p className={styles.developerInfo}>{email}</p>
                <p className={styles.developerInfo}>{phone}</p>
            </div>
        </div>
    );
};

export default DeveloperItem;