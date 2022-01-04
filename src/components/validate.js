export const validate = (data, type) => {
    const errors = {};
    
    if (data.word.length !== 1) {
        errors.word = "حرف پلاک خودرو را صحیح وارد کنید";
    }
    if (!data.num1 || data.num1.length !== 2){
        errors.num1 = "قسمت اول پلاک خودرو را صحیح وارد کنید";
    }
     else {
        delete errors.num1;
    }
    if (!data.num2 || data.num2.length !== 3){
        errors.num2 = "قسمت دوم پلاک خودرو را صحیح وارد کنید";
    }
     else {
        delete errors.num1;
    }
    if (!data.num3 || data.num3.length !== 2){
        errors.num3 = "قسمت سوم پلاک خودرو را صحیح وارد کنید";
    }
     else {
        delete errors.num1;
    }
    if (data.time==="") {
        errors.time = "ساعت ورود خود را صحیح وارد کنید";
    }
    else {
        delete errors.time;
    }
   
    if (type === "Reserv") {

        if (data.isAccepted) {  //if checkbox is checked
            delete errors.isAccepted;
        } else {
            errors.isAccepted = " برای ادامه لطفا قوانین را قبول کنید";
        }
    }
    return errors;

}