import React from "react";

export default ({input, label, meta: {error, touched}}) => {  // {input} == props.input
    return (
        // {touched && error}  == if input was touched and there is an error, print the error
        <div>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </div>
    );
}