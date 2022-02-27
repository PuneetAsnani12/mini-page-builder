import React from 'react';
import styles from './input.module.scss';

const Input = ({ text, style, className, ...props }) => {
  return (<>
    <label style={style}>{text}</label>
    <input type="text" defaultValue={""} className={`${styles.Input} ${className}`} style={style} onChange={()=>{}} {...props} />
    </>
  );
};

export default Input;