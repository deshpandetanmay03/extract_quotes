"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";

export default function UploadForm() {
    return (
        <Formik
            initialValues={{
                file: "",
            }}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                <Form className="flex flex-col gap-4 border-solid border-2 border-highlight-high rounded-lg p-4 bg-surface">
                    <label htmlFor="file" className="flex gap-2">
                        <Field
                            type="file"
                            name="file"
                            id="file"
                            className="border-2 border-base rounded-lg p-4 text-lg bg-overlay"
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <ErrorMessage name="file" component="div" className="text-red-500" />
                    </label>
                    <button type="submit" className="bg-overlay text-pine rounded-lg p-4 text-lg" disabled={isSubmitting}>
                        Generate Quote
                    </button>
                </Form>
            )}
        </Formik>
    );
}
