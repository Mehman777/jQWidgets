/*
jQWidgets v7.0.0 (2019-Jan)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

import '../jqwidgets/styles/jqx.base.css';
import '../jqwidgets/jqxcore.js';
import '../jqwidgets/jqxdata.js';
import '../jqwidgets/jqxbuttons.js';
import '../jqwidgets/jqxscrollbar.js';
import '../jqwidgets/jqxlistbox.js';
import '../jqwidgets/jqxdropdownlist.js';
import '../jqwidgets/jqxdropdownbutton.js';
import '../jqwidgets/jqxwindow.js';
import '../jqwidgets/jqxeditor.js';
import '../jqwidgets/jqxcheckbox.js';
import '../jqwidgets/jqxtooltip.js';
import '../jqwidgets/jqxcolorpicker.js';

import React from 'react';

const JQXLite = window.JQXLite;

export const jqx = window.jqx;

export default class JqxEditor extends React.Component {
    constructor(props) {
        super(props);
        const widgetId = 'jqxEditor' + JQXLite.generateID();
        this.componentSelector = '#' + widgetId;
        this.state = { id: widgetId };
    };
    componentDidMount() {
        const options = this.manageAttributes();
        this.createComponent(options);
    };
    manageAttributes() {
        const properties = ['createCommand','disabled','editable','height','lineBreak','localization','pasteMode','rtl','stylesheets','theme','toolbarPosition','tools','width'];
        let options = {};
        for(let item in this.props) {
            if(item === 'settings') {
                for(let itemTwo in this.props[item]) {
                    options[itemTwo] = this.props[item][itemTwo];
                }
            } else {
                if(properties.indexOf(item) !== -1) {
                      options[item] = this.props[item];
                }
            }
        }
        return options;
    };
    createComponent(options) {
        if(!this.style) {
            for (let style in this.props.style) {
                JQXLite(this.componentSelector).css(style, this.props.style[style]);
            }
        }
        if(this.props.className !== undefined) {
            const classes = this.props.className.split(' ');
            for (let i = 0; i < classes.length; i++ ) {
                JQXLite(this.componentSelector).addClass(classes[i]);
            }
        }
        if(!this.template) {
            JQXLite(this.componentSelector).html(this.props.template);
        }
        JQXLite(this.componentSelector).jqxEditor(options);
    };
    setOptions(options) {
        JQXLite(this.componentSelector).jqxEditor('setOptions', options);
    };
    getOptions() {
        if(arguments.length === 0) {
            throw Error('At least one argument expected in getOptions()!');
        }
        let resultToReturn = {};
        for(let i = 0; i < arguments.length; i++) {
            resultToReturn[arguments[i]] = JQXLite(this.componentSelector).jqxEditor(arguments[i]);
        }
        return resultToReturn;
    };
    on(name,callbackFn) {
        JQXLite(this.componentSelector).on(name,callbackFn);
    };
    off(name) {
        JQXLite(this.componentSelector).off(name);
    };
    createCommand(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('createCommand', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('createCommand');
        }
    };
    disabled(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('disabled', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('disabled');
        }
    };
    editable(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('editable', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('editable');
        }
    };
    height(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('height', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('height');
        }
    };
    lineBreak(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('lineBreak', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('lineBreak');
        }
    };
    localization(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('localization', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('localization');
        }
    };
    pasteMode(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('pasteMode', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('pasteMode');
        }
    };
    rtl(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('rtl', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('rtl');
        }
    };
    stylesheets(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('stylesheets', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('stylesheets');
        }
    };
    theme(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('theme', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('theme');
        }
    };
    toolbarPosition(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('toolbarPosition', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('toolbarPosition');
        }
    };
    tools(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('tools', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('tools');
        }
    };
    width(arg) {
        if (arg !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('width', arg)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('width');
        }
    };
    destroy() {
        JQXLite(this.componentSelector).jqxEditor('destroy');  
    };
    focus() {
        JQXLite(this.componentSelector).jqxEditor('focus');  
    };
    print() {
        JQXLite(this.componentSelector).jqxEditor('print');  
    };
    setMode(mode) {
        JQXLite(this.componentSelector).jqxEditor('setMode', mode);  
    };
    val(value) {
        if (value !== undefined) {
            JQXLite(this.componentSelector).jqxEditor('val',  value)
        } else {
            return JQXLite(this.componentSelector).jqxEditor('val');
        }
    };

    render() {
        return (
            <div id={this.state.id}>{this.props.value}{this.props.children}</div>
        )
    };
};

