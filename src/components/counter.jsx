import React from "react";
const Counter = (props) => {
    const { value, id } = props;

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };
    const getBageClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const handleIncrement = (id) => {
        console.log("handle increment");
        props.onIcrement(id)
    };
    const handleDecrement = (id) => {
        console.log("handle decrement");
        props.onDecrement(id)
    };

    return (
        <div>
            <span> {props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => handleIncrement(id)}
            >
                +
            </button>
            <button
                className='btn btn-primary btn-sm m-2'
                onClick={() => handleDecrement(id)}
            >
                -
            </button>
            <button
                className='btn btn-danger btn-sm m-2'
                onClick={() => props.onDelete(props.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Counter;
