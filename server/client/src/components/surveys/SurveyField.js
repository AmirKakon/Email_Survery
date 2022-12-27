import React, { Component } from "react";
import {reduxForm, Field} from 'redux-form';

export default ({input}) => {  // {input} == props.input
    return (
        <div>
            <input {...input} />
        </div>
    );
}