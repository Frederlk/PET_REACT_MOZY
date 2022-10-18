import React from "react";
import { Formik, Form as FormikForm, useField } from "formik";
import * as Yup from "yup";

const FormProductItem = ({ inputMask, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`info-contacts__item ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`}>
            {label ? <div className="info-contacts__label">{label}</div> : null}
            <input {...props} {...field} className="info-contacts__input input" />
            {meta.touched && meta.error ? <div className="info-contacts__error">{meta.error}</div> : null}
        </div>
    );
};

const FormProductTextarea = ({ label, ...props }) => {
    const [field, meta] = useField({ ...props, type: "textarea" });
    return (
        <div className={`info-contacts__item ${props.className || ""} ${meta.touched && meta.error ? "_error" : ""}`}>
            {label ? <div className="info-contacts__label">{label}</div> : null}
            <textarea {...props} {...field} className="info-contacts__input input"></textarea>
            {meta.touched && meta.error ? <div className="info-contacts__error">{meta.error}</div> : null}
        </div>
    );
};

const Form = () => {
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
            }}
            validationSchema={Yup.object({
                name: Yup.string().min(2, "At least 2 characters").required("Obligatory field!"),
                email: Yup.string().email("Incorrect email address").required("Obligatory field!"),
                subject: Yup.string().min(2, "At least 2 characters"),
                message: Yup.string().min(2, "At least 2 characters").required("Obligatory field!"),
            })}
            onSubmit={(values, { resetForm }) => {
                resetForm();
                console.log(JSON.stringify(values, null, 2));
            }}>
            <FormikForm className="info-contacts__form">
                <FormProductItem label="Name*" type="text" name="name" />
                <FormProductItem label="Email*" type="text" name="email" />
                <FormProductItem label="Subject" type="text" name="subject" />
                <FormProductTextarea label="Message*" type="text" name="message" />
                <button type="submit" className="info-contacts__button button">
                    Send
                </button>
            </FormikForm>
        </Formik>
    );
};

export default Form;
