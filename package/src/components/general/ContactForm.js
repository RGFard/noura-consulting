import * as React from "react";
import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { decrypt } from "../../utils/crypto";

import Button from "../general/Button";

export default function ContactForm() {
  // const [state, handleSubmit] = useForm(decrypt(process.env.GATSBY_FORMSPREE_FORM_ID_ENCRYPTED));
  const [state, formspreeSubmit] = useForm(
    decrypt(process.env.GATSBY_FORMSPREE_FORM_ID_ENCRYPTED)
  );

  useEffect(() => {
    if (window.grecaptcha) return;

    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=${process.env.GATSBY_RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleRecaptchaSubmit = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!window.grecaptcha?.enterprise) {
      console.error("reCAPTCHA Enterprise not loaded");
      return;
    }

    await new Promise((resolve) => {
      window.grecaptcha.enterprise.ready(async () => {
        await window.grecaptcha.enterprise.execute(
          process.env.GATSBY_RECAPTCHA_SITE_KEY,
          { action: "CONTACT_FORM" }
        );
        resolve();
      });
    });

    // ✅ Read values safely
    formspreeSubmit({
      name: form.elements["name"]?.value || "",
      email: form.elements["email"]?.value || "",
      message: form.elements["message"]?.value || "",
    });
  };

  if (state.succeeded) {
    return (
      <section className="template2__section--body">
        <p className="template2__section--form-result">Thank you for your submission!</p>
        <br />
        <Button specifiedClass="template2__section--button" wide={true} caption="Send another message" url="reload" />
        <br />
        <Button specifiedClass="template2__section--button" wide={true} caption="Go home" url="/" />
      </section>);
  }

  return (
    <section className="template2__section--body">
      <p className="template2__section--form-result">We will respond within 24 hours upon submittion of a successful message.</p>
      <br /><br /><br /><br />
      {/* <form className="template2__section--form" onSubmit={handleSubmit}> */}

      <form
        className="template2__section--form"
        onSubmit={handleRecaptchaSubmit}
      >
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" maxLength="50" className="template2__section--form-input" key="input-1" />

        <label htmlFor="email">Email <label htmlFor="asteric" className="template2__section--form-error">*</label></label>
        <div>
          <ValidationError prefix="This" field="email" errors={state.errors} className="template2__section--form-error" />
          <input type="text" name="email" id="email" maxLength="50" className="template2__section--form-input" required />
        </div>

        <label htmlFor="message">Message <label htmlFor="asteric" className="template2__section--form-error">*</label></label>
        <div>
          <textarea name="message" id="message" maxLength="550" className="template2__section--form-input template2__section--form-textarea" required />
        </div>
        <div>
          <ValidationError errors={state.errors} className="template2__section--form-error" />
          <Button specifiedClass="template2__section--button" caption="Submit" submit="submit" state={state} url="submit" />
        </div>
      </form>
    </section>
  );
}

