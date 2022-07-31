import React from 'react';
import scss from './Section.module.scss';
export default function Section({title, children}){
    return (
        <div className={scss.form_element}>
            <h3>{title}</h3>
            {children}
        </div>)
}