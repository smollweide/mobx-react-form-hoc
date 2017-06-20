import React from "react";
import { observer } from "mobx-react";
import validatorjs from "validatorjs";
import withForm from "../../with-form";
import TextField from "../text-field/text-field";

const LoginForm = () => {
    return (
        <form>
            <fieldset>
                <TextField label="eMail" value="" errors={["error"]} />
                <TextField label="password" value="" errors={["error"]} />
            </fieldset>
        </form>
    );
};
LoginForm.displayName = "LoginForm";

const events = {
    onSuccess(props, form) {
        console.log(form.values());
    }
};

const fields = {
    email: {
        label: "eMail",
        placeholder: "Enter your eMail address",
        rules: "required|email|string|between:5,25"
    },
    password: {
        label: "Password",
        placeholder: "Enter your password",
        rules: "required|string|between:5,25"
    }
};
const plugins = {
    dvr: validatorjs
};

export default withForm({ fields, plugins, events }, observer(LoginForm));
