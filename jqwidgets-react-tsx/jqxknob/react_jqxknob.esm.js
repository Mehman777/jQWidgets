import * as jqxcore from '../../jqwidgets/jqxcore';
import * as jqxdraw from '../../jqwidgets/jqxdraw';
import * as jqxknob from '../../jqwidgets/jqxknob';
import { createElement, PureComponent } from 'react';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var JqxKnob = /** @class */ (function (_super) {
    __extends(JqxKnob, _super);
    function JqxKnob(props) {
        var _this = _super.call(this, props) || this;
        /* tslint:disable:variable-name */
        _this._jqx = JQXLite;
        _this._id = 'JqxKnob' + _this._jqx.generateID();
        _this._componentSelector = '#' + _this._id;
        _this.state = { lastProps: props };
        return _this;
    }
    JqxKnob.getDerivedStateFromProps = function (props, state) {
        var areEqual = Object.is(props, state.lastProps);
        if (!areEqual) {
            var newState = { lastProps: props };
            return newState;
        }
        return null;
    };
    JqxKnob.prototype.componentDidUpdate = function () {
        var widgetOptions = this._manageProps();
        this.setOptions(widgetOptions);
    };
    JqxKnob.prototype.componentDidMount = function () {
        if (this.props.autoCreate) {
            this._createComponent();
        }
    };
    JqxKnob.prototype.render = function () {
        return (createElement("div", { id: this._id, className: this.props.className, style: this.props.style }, this.props.children));
    };
    JqxKnob.prototype.createComponent = function (options) {
        if (!this.props.autoCreate) {
            this._createComponent(options);
        }
        else {
            /* tslint:disable:no-console */
            console.warn('Component is already created! If you want to use createComponent, please set "autoCreate" prop to "false".');
        }
    };
    JqxKnob.prototype.setOptions = function (options) {
        this._jqx(this._componentSelector).jqxKnob(options);
    };
    JqxKnob.prototype.getOptions = function (option) {
        return this._jqx(this._componentSelector).jqxKnob(option);
    };
    JqxKnob.prototype.addEventListener = function (name, callbackFn) {
        this._jqx(this._componentSelector).on(name, callbackFn);
    };
    JqxKnob.prototype.removeEventListener = function (name) {
        this._jqx(this._componentSelector).off(name);
    };
    JqxKnob.prototype.destroy = function () {
        this._jqx(this._componentSelector).jqxKnob('destroy');
    };
    JqxKnob.prototype.val = function (value) {
        return this._jqx(this._componentSelector).jqxKnob('val', value);
    };
    JqxKnob.prototype._createComponent = function (options) {
        var widgetOptions = options ? options : this._manageProps();
        this._jqx(this._componentSelector).jqxKnob(widgetOptions);
        this._wireEvents();
    };
    JqxKnob.prototype._manageProps = function () {
        var widgetProps = ['allowValueChangeOnClick', 'allowValueChangeOnDrag', 'allowValueChangeOnMouseWheel', 'changing', 'dragEndAngle', 'dragStartAngle', 'disabled', 'dial', 'endAngle', 'height', 'labels', 'marks', 'min', 'max', 'progressBar', 'pointer', 'pointerGrabAction', 'rotation', 'startAngle', 'spinner', 'styles', 'step', 'snapToStep', 'value', 'width'];
        var options = {};
        for (var prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                options[prop] = this.props[prop];
            }
        }
        return options;
    };
    JqxKnob.prototype._wireEvents = function () {
        for (var prop in this.props) {
            if (prop.indexOf('on') === 0) {
                var originalEventName = prop.slice(2);
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    };
    JqxKnob.defaultProps = {
        autoCreate: true
    };
    return JqxKnob;
}(PureComponent));
var jqx = window.jqx;
var JQXLite = window.JQXLite;
var jqwidgets = window.jqwidgets;

export default JqxKnob;
export { jqx, JQXLite, jqwidgets };
