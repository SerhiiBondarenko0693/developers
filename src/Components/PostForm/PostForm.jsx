import React, {useContext, useState} from 'react';
import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import Input from "../InputFormik/InputFormik";
import styles from "./PostForm.module.css"
import Button from "../Button/Button";
import postUser from "../Utils/PostApi/postApi";
import ImageUploading from "react-images-uploading";
import {RefreshCard} from "../../App";


// Define validation schema
const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().matches(/^\+380\d{9}$/, 'Invalid phone number').required('Phone is required'),
    option: Yup.string().required('Option is required'),
});

const PostForm = () => {

    const [images, setImages] = useState([]);

    const {shuldRefresh, setShouldRefresh} = useContext(RefreshCard)


    const apiServerRegistration = async (values,resetForm) => {
        const candidate = {
            email: values.email,
            name: values.name,
            phone:values.phone,
            option:values.option,
            photo:images[images.length-1].file
        };

        const response = await postUser(candidate);

        if(response.status === 201){
            setShouldRefresh(true)
            resetForm()
            setImages([])
        }
        if(response.response.status === 409){
            alert("The user is already registered")
        }
        else {
            alert("Try again later")
        }

    };


    const onChange = (imageList) => {
        setImages(imageList);

    };



    return (
        <div className={styles.formWrapper}>
            <p className={styles.postSectionTitle}>Working with POST request</p>
            <div className={styles.formContent}>
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        phone:'',
                        option: "Frontend developer",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { resetForm }) => {
                        await apiServerRegistration(values,resetForm);

                    }}
                >
                    {({ errors, touched,isValid, dirty }) => (
                        <Form>
                            <Input
                                name="name"
                                placeholder="Name"
                                isError={errors.name && touched.name}
                                errorText={errors.name}
                                type={"text"}
                            />
                            <Input
                                name="email"
                                placeholder="Email"
                                isError={errors.email && touched.email}
                                errorText={errors.email}
                                type={"email"}
                            />
                            <Input
                                name="phone"
                                placeholder="Phone"
                                isError={errors.phone && touched.phone}
                                errorText={errors.phone}
                                type={"phone"}
                            />
                            <p className={styles.numberMask}>+38 (XXX) XXX - XX - XX</p>
                            <div className={styles.radioBtnSection}>
                                <p>Select your position</p>
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="Frontend developer"
                                        className={styles.customRadio}
                                    />
                                    Frontend developer
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="Backend developer"
                                        className={styles.customRadio}
                                    />
                                    Backend developer
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="Designer"
                                        className={styles.customRadio}
                                    />
                                    Designer
                                </label>
                                <label>
                                    <Field
                                        type="radio"
                                        name="option"
                                        value="QA"
                                        className={styles.customRadio}
                                    />
                                    QA
                                </label>

                                <div className={styles.filesBlock}>
                                        <ImageUploading
                                            multiple
                                            value={images}
                                            onChange={onChange}
                                            maxFileSize={500000}
                                            acceptType={["jpg"]}
                                            // maxNumber={100}
                                            dataURLKey="data_url"
                                        >
                                            {({

                                                  onImageUpload,
                                                  errors,
                                              }) => (

                                                <div className={styles.files} onClick={onImageUpload}>

                                                    {errors && <div>
                                                        {errors.acceptType &&
                                                            <span className={styles.filesBlockErr}>Your selected file type is not JPG</span>}
                                                        {errors.maxFileSize &&
                                                            <span className={styles.filesBlockErr} >Selected file size exceed 5 MB</span>}
                                                        {errors.resolution &&
                                                            <span className={styles.filesBlockErr}>Selected file is not match your desired resolution</span>}
                                                    </div>}
                                                </div>
                                            )}
                                        </ImageUploading>
                                    <div className={styles.faceInputWrapper}>
                                        <div className={styles.faceInputBtn}>Upload</div>
                                        <div className={styles.faceInput}>
                                            {images.length?
                                                <p className={styles.fileName}>{images[images.length-1].file.name}</p>
                                                :
                                                <p className={styles.fileName}>Upload your photo</p>}
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <Button
                                text={"Sign up"}
                                type={"submit"}
                                className={styles.postBtn}
                                disabled={!isValid || !dirty || !images}
                            />

                        </Form>
                    )}
                </Formik>
            </div>

        </div>
    );
};

export default PostForm;