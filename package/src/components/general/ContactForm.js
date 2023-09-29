import * as React from "react";
import { useForm, ValidationError } from "@formspree/react";

import Button from "../general/Button";


export default function ContactForm() {
    const [state, handleSubmit] = useForm(process.env.FORMSPREE_FORM_ID);

    if (state.succeeded) {
        return (
            <section className="template2__section--body">
                <p className="template2__section--form-result">Thank you for your submission!</p>
                <br />
                <Button specifiedClass="services-button" wide={true} caption="Send another message" url="reload" />
                <br />
                <Button specifiedClass="services-button" wide={true} caption="Go home" url="/" />
            </section>);
    }

    return (
        <section className="template2__section--body">
            <p className="template2__section--form-result">We will respond within 24 hours, upon submittion of a successful message.</p>
            <br /><br /><br /><br />
            <form className="template2__section--form" onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" maxLength="50" className="template2__section--form-input" key="input-1" />

                <label htmlFor="email">Email <label className="template2__section--form-error">*</label></label>
                <div>
                    <ValidationError prefix="This" field="email" errors={state.errors} className="template2__section--form-error" />
                    <input type="text" name="email" id="email" maxLength="50" className="template2__section--form-input" required />
                </div>

                <label htmlFor="message">Message <label className="template2__section--form-error">*</label></label>
                <div>
                    <ValidationError prefix="This" field="message" errors={state.errors} className="template2__section--form-error" />
                    <textarea name="message" id="message" maxLength="550" className="template2__section--form-input template2__section--form-textarea" required />
                </div>
                <div>
                    <ValidationError errors={state.errors} className="template2__section--form-error" />
                    <Button specifiedClass="services-button" caption="Submit" submit="submit" state={state} url="submit" />
                </div>
            </form>
        </section>
    );
}