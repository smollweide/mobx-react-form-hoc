# mobx-react-form-hoc [![Build Status](https://img.shields.io/travis/smollweide/mobx-react-form-hoc/master.svg)](https://travis-ci.org/smollweide/mobx-react-form-hoc)

> Simplify mobx-react-form by using a higher order component

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
        <label htmlFor={form.$("email").id}>
          {form.$("email").label}
        </label>
        <input {...form.$("email").bind()} />
        <p>{form.$("email").error}</p>
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

## Related
- [mobx-react-form](https://github.com/foxhound87/mobx-react-form)

## Contributing
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Getting started

1. Fork the mobx-react-form-hoc repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/mobx-react-form-hoc.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes and add tests for them, lint, test then push to to github with `git push --set-upstream origin my-topic-branch`.
5. Visit github and make your pull request.

### Scripts
- Install `npm install` or `yarn install`
- Start developing `npm start` or `yarn start`
- Test `npm test` or `yarn test`
- Build `npm run build` or `yarn build`
- Publish `npm run publish` or `yarn publish`

## License
MIT © [Simon Mollweide](https://github.com/smollweide)
