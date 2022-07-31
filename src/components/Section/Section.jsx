import React from 'react';
import scss from './Section.module.scss';
import PropTypes from 'prop-types';

export default function Section({title, children}){
    return (
        <div className={scss.form_element}>
            <h3>{title}</h3>
            {children}
        </div>)
}

Section.propTypes={
    title: PropTypes.string.isRequired,    
    children: PropTypes.object.isRequired,
}