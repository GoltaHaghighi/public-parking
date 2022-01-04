import React, { useState } from 'react';
import Modal from 'react-modal';

//Styles
import styels from "./ModalExampleCloseIcon.module.css"

const ModalCom = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }
    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return (
        <div>
            <button  onClick={setModalIsOpenToTrue}>ثبت</button>
            <Modal
                isOpen={modalIsOpen}
                className={styels.modalPage}>
                {props.reserveIsDone ?
                    <p>
                        <p>
                            <h3 className={styels.submitHdr}>عملیات رزرو با موفقیت انجام شد</h3>
                            <hr></hr>
                            <br></br>
                            <p style={{ "direction": "rtl" }}>محل پارکی برای خوردو به شماره
                        (ایران{props.num3}){props.num2}{props.word}{props.num1}
                                &nbsp;برای ساعت {props.time}&nbsp;درنظر گرفته شد.
                            </p>
                            <p style={{ "direction": "rtl" }}>
                                محل دقیق پارک شما، P5 می&zwnj;باشد
                            </p>
                        </p>
                        
                        <button
                            className={styels.submitBtn}
                            onClick={setModalIsOpenToFalse}>فهمیدم</button>
                    </p>
                    :
                    <p>
                        <h3 className={styels.errorHdr}>خطا</h3>
                        <hr></hr>
                        <br></br>
                        <p>اطلاعات به درستی وارد نشده است</p>
                        <br /><button
                            className={styels.errorBtn}
                            onClick={setModalIsOpenToFalse}>بستن</button>
                    </p>
                }
            </Modal>
        </div>
    );
};

export default ModalCom;