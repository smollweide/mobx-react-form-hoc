import React, { Component } from "react";
import { PropTypes } from "prop-types";
import MobxReactForm from "mobx-react-form";

const getDisplayName = WrappedComponent => {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
};

class MobxForm extends MobxReactForm {}

/**
 * Decorates an form with mobx-react-form.
 *
 * @param {ReactComponent} WrappedComponent
 * @param {Function} validate
 * @return {Component} Decorated Component
 */
export default function withForm(options, WrappedComponent) {
    class Form extends Component {
        constructor(props) {
            super(props);
            Object.keys(this.events).forEach(key => {
                this.events[key] = this.events[key].bind(null, props);
            });
            MobxForm.prototype = Object.assign(MobxForm.prototype, this.events);
            this.form = new MobxForm({ fields: this.fields }, { plugins: this.plugins });
        }

        get events() {
            return options.events || {};
        }

        get initialData() {
            return this.props.initialData || {};
        }

        get fields() {
            return options.fields || {};
        }

        get plugins() {
            return options.plugins || {};
        }

        mapInitialData() {
            Object.keys(this.initialData || {}).forEach(key => {
                const value = this.initialData[key];
                this.form.$(key).value = value;
            });
        }

        render() {
            this.mapInitialData();
            return <WrappedComponent {...this.props} form={this.form} />;
        }
    }
    Form.displayName = `withForm(${getDisplayName(WrappedComponent)})`;
	Form.propTypes = {
	    initialData: PropTypes.Object,
	};
    return Form;
}
