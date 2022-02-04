import React from "react";
import Select from "react-select";

export default ({ onChange, options, value, className }) => {

    const defaultValue = (options, value) => {
        return options ? options.find(options => options.value === value) : ""
    }
    return (
        <div className={className}>
            <Select
                value={defaultValue(options, value)}
                onChange={value => onChange(value)}
                options={options}
                theme={(theme) => ({
                    ...theme,
                    borderRadius: 10,
                    colors: {
                        ...theme.colors,
                        primary25: 'lightpink',
                        primary: 'black',
                    },
                })}
            />
        </div>
    )
}