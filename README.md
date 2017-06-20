# mobx-react-form-hoc

## Installation

mobx-react-form-hoc is available as an [npm package](https://www.npmjs.org/package/mobx-react-form-hoc).

```sh
npm install mobx-react-form-hoc
```

## Usage
```js
import React from "react";
import { observer } from "mobx-react";
import validatorjs from "validatorjs";
import withForm from "mobx-react-form-hoc";

const LoginForm = () => {
    return (
        <form>
            <fieldset>
                <TextField label="eMail" value="text" errors={["error"]} />
            </fieldset>
        </form>
    );
};

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
    }
};

const plugins = {
    dvr: validatorjs
};

export default withForm({ fields, plugins, events }, observer(LoginForm));
```

## Documentation
please have a look into the documentation of [mobx-react-form](https://github.com/foxhound87/mobx-react-form)

## License
MIT © [Simon Mollweide](https://github.com/smollweide)
