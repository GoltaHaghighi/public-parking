import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

//Components
import { validate } from './validate';

//Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Styles
import styles from "./Reservation.module.css";
import ModalCom from './ModalCom';


const Reservation = () => {
    const [data, setData] = useState({
        num1: "",
        word: "",
        num2: "",
        num3: "",
        time:"",
        isAccepted: false
    });

    const word = [
        { value: "حرف پلاک", label: "حرف پلاک",isdisabled: true },
        { value: "الف", label: "الف" },
        { value: "ب", label: "ب" },
        { value: "پ", label: "پ" },
        { value: "ت", label: "ت" },
        { value: "ث", label: "ث" },
        { value: "ج", label: "ج" },
        { value: "ز", label: "ز" },
        { value: "ژ", label: "ژ" },
        { value: "س", label: "س" },
        { value: "ش", label: "ش" },
        { value: "ص", label: "ص" },
        { value: "ط", label: "ط" },
        { value: "ع", label: "ع" },
        { value: "ف", label: "ف" },
        { value: "ق", label: "ق" },
        { value: "ک", label: "ک" },
        { value: "گ", label: "گ" },
        { value: "ل", label: "ل" },
        { value: "م", label: "م" },
        { value: "ن", label: "ن" },
        { value: "و", label: "و" },
        { value: "ه", label: "ه" },
        { value: "ی", label: "ی" }
        

    ];
    const [reserveIsDone, setreserveIsDone] = useState(false);

    const [selectedWord, setselectedWord] = useState("حرف پلاک");
        
    const [errors, setErrors] = useState({});
    const [touch, setTouch] = useState({});
    
    //we need validation after each setState => use useEffect
    useEffect(() => {
        setErrors(validate(data, "Reserv"))
        // console.log(data.num1.includes(0))
    }, [data, touch]);

    const changeHandler = (event) => {
        // console.log(event.target);
        if (event.target.name === "isAccepted") {
            setData({ ...data, [event.target.name]: event.target.checked })
        } else {
            setData({ ...data, [event.target.name]: event.target.value })
        }
        //  console.log(event.target.value);
    }
    const handler = (event) => {
        setselectedWord(event.value)
    }
    const focusHandler = (event) => {
        // console.log(event);
        setTouch({ ...touch, [event.target.name]: true });
    }
    const submitHandler = (event) => {
        console.log(data.num1);
        console.log(selectedWord);
        console.log(data.num2);
        console.log(data.num3);
        console.log(reserveIsDone);
        event.preventDefault(); //to stop reloading
        if (Object.keys(errors).length === 0) {
            // notify("جای پارک برای شما با موفقیت رزرو شد", "success");
            setreserveIsDone(true);            
            setTouch({
                num1: false, word: false,
                num2: false, num3: false,
                time: false, isAccepted: false
            });
            // وقتی دیتا رو پاک کنیم اطلاعات نهایی نشون داده نمیشه
            // setData({
            //     num1: "", word: "",
            //     num2: "", num3: "",
            //     time: "", isAccepted: false
            // });
            //SHOW PLACE
        } else {
            // notify("اطلاعات به درسی وارد نشده است","error");
            setTouch({
                num1: true,
                word:true,
                num2: true,
                num3: true,
                time:true,
                isAccepted: true
            })
        }
    }
    return (
        <div>
            <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formContainer}>
                <div className={styles.formFields}>
                    <label className={styles.label}>شماره پلاک خودرو را وارد نمایید</label>
                    <div className={styles.carNumber}>
                        <input
                            className={(errors.num1 && touch.num1) ? styles.uncompleted : styles.formInput}
                            type="text"
                            style={{ "width": "45px" }}
                            name="num1"
                            value={data.num1}
                            onChange={changeHandler}
                            onFocus={focusHandler}/>
                        
                        <Select
                            className={styles.selectStyle}
                            placeholder="Select Option"
                            value={word.find(obj => obj.value === selectedWord)} // set selected value
                            options={word} // set list of the data
                            onChange={handler} // assign onChange function
                            isOptionDisabled={(option) => option.isdisabled}
                        />
                        
                        <input
                            className={(errors.num2 && touch.num2) ? styles.uncompleted : styles.formInput}
                            type="text"
                            style={{ "width": "45px" }}
                            name="num2"
                            value={data.num2}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <input
                            className={(errors.num3 && touch.num3) ? styles.uncompleted : styles.formInput}
                            type="text"
                            style={{ "width": "40px" }}
                            name="num3"
                            value={data.num3}
                            onChange={changeHandler}
                            onFocus={focusHandler}
                        />
                        <span>ایران</span>
                    </div>

                    {(errors.num1 && touch.num1) ? <span className={styles.errorSpan}>{errors.num1}</span> : <p></p>}
                    {(errors.word && touch.word) ? <span className={styles.errorSpan}>{errors.word}</span> : <p></p>}
                    {(errors.num2 && touch.num2) ? <span className={styles.errorSpan}>{errors.num2}</span> : <p></p>}
                    {(errors.num3 && touch.num3) ? <span className={styles.errorSpan}>{errors.num3}</span> : <p></p>}
                </div>

                <div className={styles.time} style={{"marginTop":"70px"}}>
                    <div className={styles.formFields}>
                        <label className={styles.label}>ساعت ورود خود را وارد نمایید</label>
                        <input className={styles.formInput}
                            type="time"
                            name="time"
                            value={data.time}
                            onChange={changeHandler}
                            onFocus={focusHandler} />
                    </div>
                    {(errors.time && touch.time) ? <span className={styles.errorSpan}>{errors.time}</span> : <p></p>}
                </div>
               
                <div className={styles.formFields}>
                    <div className={styles.checkBoxContainer}>
                        <label className={styles.label}>
                            <Link to="/rules">قوانین</Link>
                             <span > را مطالعه کرده و می پذیرم </span>
                        </label>
                        <input
                            type="checkbox"
                            name="isAccepted"
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onFocus={focusHandler} />
                    </div>
                    {errors.isAccepted && touch.isAccepted && <span className={styles.errorSpan}>{errors.isAccepted }</span>}
                </div>
                <div className={styles.formButton}>
                        {/* <button
                            type="submit"
                            style={{ "fontWeight": "bolder" }}
                        > */}{/* </button> */}
                        
                        {/* <ModalExampleCloseIcon
                            type="submit"
                            num1={data.num1}
                            word={selectedWord}
                            num2={data.num2}
                            num3={data.num3}
                            time={data.time}
                            reserveIsDone={reserveIsDone}
                            /> */}
                        
                        <ModalCom
                            type="submit"
                            num1={data.num1}
                            word={selectedWord}
                            num2={data.num2}
                            num3={data.num3}
                            time={data.time}
                            reserveIsDone={reserveIsDone}
                        />
                </div>
            </form>
            <ToastContainer />
            </div>
        </div>
        
    );
};

export default Reservation;