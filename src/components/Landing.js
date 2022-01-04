import React from 'react';

//Styles
import styles from "./Landing.module.css";


//Images
import LandingPic from "../image/Parking-yellow.png";
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <div>
            <div className={styles.banner}>
                <img className={styles.image} src={LandingPic} alt="LandingPic" />
                <div className={styles.welcome}>
                    <h1 >برای رزرو محل پارک کلیک کنید</h1>
                    <button className="btn">
                        <Link to="/reservation">رزرو جای پارک</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Landing;