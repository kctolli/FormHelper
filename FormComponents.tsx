import React, { memo } from 'react';

import * as FormTypes from './FormTypes';
import FileUpload from './FileUpload';

export default class FormComponents {
    public static FileUpload = memo(FileUpload);

    public static Input = ({ 
        label, 
        type, 
        name, 
        required = false, 
        classes = '', 
        onChange = null, 
        value = '', 
    }: FormTypes.InputType) => (
        <div className={classes}>
            <label htmlFor={name}>{label}</label>
            {type === 'textarea' ? (
            <textarea id={name} required={required} onChange={onChange} value={value} />
            ) : (
            <input type={type} id={name} name={name} onChange={onChange} value={value} required={required} />
            )}
        </div>
    );
  
    public static Select = ({
        label,
        name,
        children,
        emptyOption = '',
        disabled = false,
        required = false,
        classes = '',
        onChange = null,
        value = '',
    }: FormTypes.SelectType) => (
      <div className={classes}>
        <label htmlFor={name}>{label}</label>
        <select
          disabled={disabled}
          required={required}
          className={`y_s1 ${disabled ? 'disabled' : ''}`}
          onChange={onChange}
          value={value}
        >
          {emptyOption && <FormComponents.EmptyOption label={emptyOption} />}
          {children}
        </select>
      </div>
    );
  
    public static SubmitBtn = ({ 
        labels = { submit: 'Submit', processing: 'Processing...' },
        submitting = false, 
    }: FormTypes.SubmitButtonType) => (
      <button disabled={submitting} type="submit">
        {submitting ? labels.processing : labels.submit}
      </button>
    );
  
    private static EmptyOption = ({ 
        label = 'Select ...' 
    } : FormTypes.OptionType) => (
        <option value="">{label}</option>
    );
  
    public static ObjOption = ({ obj }: FormTypes.ObjOptionType) => (
        Object.entries(obj).map(([key, value], i) => (
            <option key={i} value={key}>
                {value}
            </option>
        ))
    );
  
    public static ArrOption = ({ arr }: FormTypes.ArrOptionType) => (
        arr.map((value, i) => (
            <option key={i} value={value}>
                {value}
            </option>
        ))
    );
}
