import React from 'react';
import { Link } from 'react-router-dom';

//Styles
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <header className={styles.header}>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li><Link to="/rules">قوانین</Link ></li>
                        <li><Link to="/aboutus">درباره ما</Link ></li>
                        <li><Link to="/reservation">رزرو جای پارک</Link ></li>
                        
                    </ul>
                    <h1 className={styles.title}><Link to="/">پارکینگ عمومی</Link></h1>
                </div>
            </header>
        </div>
    );
};

export default Navbar;