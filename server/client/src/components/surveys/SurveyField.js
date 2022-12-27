import React from "react";

export default ({input, label}) => {  // {input} == props.input
    return (
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    );
}