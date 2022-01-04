import React from 'react';
import { useNavigate } from 'react-router-dom';

//Styles
import styles from "./NotFound.module.css";


//Images
import errorPic from "../image/Error-yellow.png";

const NotFound = () => {
    const navigate = useNavigate();
    // navigate('/'); // act like push
    navigate(-1); // act like replace
    return (
        <div>
            <img className={styles.image} src={errorPic} alt="Errorpicture" />
        </div>
    );
};

export default NotFound;