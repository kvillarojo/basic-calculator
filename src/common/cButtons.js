import React from 'react';
import classNames from './classNames';

export const CButton = ({value, status = 'primary', btnClick}) => {
    // const btnClassNames = classNames({
    //     'button': true,
    //     'is-medium': true,
    //     'is-danger': 'danger' === status,
    //     'is-primary': 'primary' === status,
    //     'is-success': 'success' === status,
    //     'is-outlined': true,
    //     'is-fullwidth': true
    // })
    const buttonStatus = status;
    return (
        // <button className={btnClassNames} onClick={btnClick}> {value} </button>
        <button className={`button is-medium is-fullwidth is-${buttonStatus} is-outlined`} onClick={btnClick}> {value} </button>
    )
}
