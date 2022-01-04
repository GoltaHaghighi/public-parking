import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <h5>
                <Link to="/aboutus">
                   &copy;
            تمامی حقوق برای "گلتا حقیقی - سارینا مویدی" محفوظ است
                </Link>
                </h5>
        </div>
    );
};

export default Footer;