import React from 'react'
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

const Input = ({ tag: Tag, name, maxLength, label }) => (

    // jeśli chce aby nazwa propsa była pisana w inny sposób np. wielką literą to wtedy
    // mogę użyć : , on mógł by się nazywać jakokolwiek i to też by działało np tag: Panda :)

    <div className={styles.formItem}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : styles.input}
            type="text"
            name={name}
            id={name}
            required
            maxLength={maxLength}
            placeholder=" "
        />
        <label className={styles.label} htmlFor={name}>
            {label}
        </label>
        <div className={styles.formItemBar} />
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}

Input.defaultProps = {
    tag: 'Input',
    maxLength: 200,
}

export default Input