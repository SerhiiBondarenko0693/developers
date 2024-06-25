import React from "react";
import {Field} from "formik";
import style from "./InputFormik.module.css";



const Input = ({name="",
                   placeholder="",
                   isError=false,
                   onBlur,
                   errorText="",
                   type="submit",
                   errorMessageOther="",
                   isErrorMessageServer=""}) => {

    return (
        <div className={style.container}>
            <Field
                type={type}
                className={style.input}
                name={name}
                placeholder={placeholder}
                autoComplete={name}



            />
            {isError ? (<p className={style.errorText}>{`*${errorText}`}</p>) : null}
            {isErrorMessageServer ? (<p className={style.errorText}>{`*${errorMessageOther}`}</p>) : null}

        </div>
    );
};



export default Input;





