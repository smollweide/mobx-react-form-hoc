import React from "react";
import { PropTypes } from "prop-types";

const LoginForm = ({ label, type, value, placeholder, errors }) => {
    return (
        <div>
            {label && <label>{label}: </label>}
            <input type={type} value={value} placeholder={placeholder} />
            {errors.length > 0 &&
                <ul>
                    {errors.map(error => <li>{error}</li>)}
                </ul>}
        </div>
    );
};

LoginForm.displayName = "LoginForm";
LoginForm.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.arrayOf(PropTypes.string)
};
LoginForm.defaultProps = {
    type: "text",
    errors: []
};

export default LoginForm;
