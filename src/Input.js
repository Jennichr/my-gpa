import React from "react";

function Input({ name, id, type, onChange, className, value, style }, ref) {
    return (
        <input
            name={name}
            id={id}
            type={type}
            onChange={onChange}
            className={className}
            value={value}
            style={style}
            ref={ref}
        />
    )
}

const forwarededInput = React.forwardRef(Input);

export default forwarededInput