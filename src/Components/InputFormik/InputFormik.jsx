import React from "react";
import {Field} from "formik";
import style from "./InputFormik.module.css";



const Input = ({name="",
                   placeholder="",
                   isError=false,
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
            />
            {isError ? (<p className={style.errorText}>{`*${errorText}`}</p>) : null}
            {isErrorMessageServer ? (<p className={style.errorText}>{`*${errorMessageOther}`}</p>) : null}

        </div>
    );
};



export default Input;





