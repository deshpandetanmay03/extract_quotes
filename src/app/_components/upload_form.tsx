"use client";

import { useState } from "react";
import { upload_form_action } from "./upload_form_action";

function onSubmit(e, setIsSubmitting) {
    console.log(setIsSubmitting);
    setIsSubmitting(true);
}

export default function UploadForm() {
    const [ isSubmitting, setIsSubmitting ] = useState(false);
    return (
        <form className="flex flex-col gap-4 border-solid border-2 border-highlight-high rounded-lg p-4 bg-surface" onSubmit={(e) => onSubmit(e, setIsSubmitting)} action={upload_form_action}>
            <label htmlFor="file" className="flex gap-2">
                <input
                    type="file"
                    name="file"
                    accept="application/pdf"
                    id="file"
                    className="border-2 border-base rounded-lg p-4 text-lg bg-overlay"
                />
            </label>
            <button type="submit" className="bg-overlay text-pine rounded-lg p-4 text-lg disabled:cursor-not-allowed disabled:bg-muted" disabled={isSubmitting}>
                Generate Quote
            </button>
        </form>
    );
}
