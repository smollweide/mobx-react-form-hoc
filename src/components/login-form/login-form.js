import React from "react";
import { observer } from "mobx-react";
import validatorjs from "validatorjs";
import withForm from "../../with-form";

const styles = {
    error: {
        color: "red"
    }
};

const LoginForm = ({ form }) => {
    return (
        <form onSubmit={form.onSubmit}>
            <fieldset>
                <div>
                    <label htmlFor={form.$("email").id}>
                        {form.$("email").label}
                    </label>
                    <br />
                    <input {...form.$("email").bind()} />
                    <p style={styles.error}>{form.$("email").error}</p>
                </div>
                <div>
                    <label htmlFor={form.$("password").id}>
                        {form.$("password").label}
                    </label>
                    <br />
                    <input {...form.$("password").bind()} />
                    <p style={styles.error}>{form.$("password").error}</p>
                </div>
            </fieldset>
            <fieldset>
                <p style={styles.error}>{form.error}</p>
                <button type="submit" onClick={form.onSubmit}>Submit</button>
                <button type="button" onClick={form.onClear}>Clear</button>
                <button type="button" onClick={form.onReset}>Reset</button>
            </fieldset>
        </form>
    );
};
LoginForm.displayName = "LoginForm";

const events = {
    onSuccess(props, form) {
        alert("Form is valid! Send the request here.");
        // get field values
        console.log("Form Values!", form.values());
    },
    onError(props, form) {
        // get all form errors
        console.log("All form errors", form.errors());
        // invalidate the form with a custom error message
        form.invalidate("This is a generic error message!");
    }
};

const fields = {
    email: {
        label: "eMail",
        placeholder: "Enter your eMail address",
        rules: "required|email|string|between:5,25"
    },
    password: {
        type: "password",
        label: "Password",
        placeholder: "Enter your password",
        rules: "required|string|between:5,25"
    }
};
const plugins = {
    dvr: validatorjs
};

export default withForm({ fields, plugins, events }, observer(LoginForm));
