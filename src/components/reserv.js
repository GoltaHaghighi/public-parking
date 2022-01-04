import React from 'react';
import { Link } from 'react-router-dom';

//styles
import styles from "./Reservation.module.css";

const Reservation = () => {
    return (

        <div className={styles.container}>
            <form className={styles.formContainer}>

                <div className={styles.formFields}>
                    <label className={styles.label}>شماره پلاک خودرو را وارد نمایید</label>
                    <div className={styles.carNumber}>
                        <input type="number" min="11" max="99" placeholder='11' style={{"width":"35px"}}/>
                        <select >
                            <option value="الف">
                                الف</option>
                            <option value="ب">
                                ب</option>
                            <option value="پ">
                                پ</option>
                            <option value="ت" >
                                ت</option>
                            <option value="ث" >
                                ث</option>
                            <option value="ج" >
                                ج</option>
                            <option value="ز" >
                                ز</option>
                            <option value="ژ" >
                                ژ</option>
                            <option value="س" >
                                س</option>
                            <option value="ش" >
                                ش</option>
                            <option value="ص" >
                                ص</option>
                            <option value="ط">
                                ط</option>
                            <option value="ع">
                                ع</option>
                            <option value="ف">
                                ف</option>
                            <option value="ق">
                                ق</option>
                            <option value="ک">
                                ک</option>
                            <option value="گ">
                                گ</option>
                                <option value="ل">
                                ل</option>
                            <option value="م">
                                م</option>
                            <option value="ن">
                                ن</option>
                            <option value="و">
                                و</option>
                            <option value="ه">
                                ه</option>
                            <option value="ی">
                                ی</option>
                        </select>
                        <input type="number" min="111" max="999" placeholder='111' style={{"width":"40px"}} />
                        <input type="number" min="10" max="99" placeholder='11' style={{"width":"35px"}} />
                        <span>ایران</span>
                    </div>
                </div>
                <div className={styles.formFields}>
                    <label className={styles.label}>ساعت ورود خود را وارد نمایید</label>
                    <input className={styles.formInput}
                        type="time"/>
                </div>
                <div className={styles.formButton}>
                    <button type="submit">ثبت</button>
                </div>
                <div className={styles.formFields}>
                    <div className={styles.checkBoxContainer}>
                        <label className={styles.label}>
                            <Link to="/rules">قوانین</Link>
                             <span> را مطالعه کرده و میپذیرم </span>
                        </label>
                        <input
                            type="checkbox"
                            name="isAccepted"/>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Reservation;