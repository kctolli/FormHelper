import { useRef, memo } from 'react';

import { FileUploadType } from './formTypes';

const FileUpload = ({
    label,
    name,
    fileSizeLimit = 0,
    required = false,
    classes = '',
    disabled = false,
    onChange = null,
    value = '',
}: FileUploadType) => {
    const fileInputRef = useRef(null);

    const renderFileName = (val = '') => {
        let fileName = '';
        if (typeof val === 'object') {
            // @ts-ignore
            fileName = val?.name;
        } else if (typeof value === 'string') {
            fileName = val;
        }
        const nameArr = fileName.split('\\');
        return nameArr[nameArr.length - 1] || '';
    };

    const removeFile = (e: any) => {
        // @ts-ignore
        onChange('');
        e.preventDefault();
    };

    return (
        <div className={`y_v1 y_file-input${classes ? ` ${classes}` : ''}`}>
            <label htmlFor={name}>{label}</label>
            <div className="y_c-g2 y_fs-xs y_mtb-sm">
                <p> 
                    File types: .png, .jpg, .jpeg, .pdf, .gif
                </p>
            </div>
            <div className="y_mt-sm y_mb-md">
                <label
                    className={`y_b-1 y_c-b2 y_ta-c y_p-lg${disabled ? ' disabled' : ''}`}
                    htmlFor={name}
                    id={`${name}-label`}
                >
                    <button
                        // @ts-ignore
                        onClick={() => fileInputRef?.current?.click()}
                        disabled={!!value}
                        type="button"
                        className="blockbtn"
                        aria-label="Browse Files"
                    >
                        Browse Files
                    </button>
                    {value && (
                    <button onClick={(e) => removeFile(e)} type="button">
                        {renderFileName(value)}
                    </button>
                    )}
                </label>
                <input
                    accept=".png, .jpg, .jpeg, .pdf, .gif"
                    disabled={disabled || !!value}
                    // @ts-ignore
                    onChange={(e) => onChange(e.target.files?.[0])}
                    required={required}
                    ref={fileInputRef}
                    className="y_o-h"
                    max={`${fileSizeLimit || 5}MB`}
                    name={name}
                    type="file"
                    id={name}
                    hidden
                />
            </div>
        </div>
    );
};
  
export default memo(FileUpload);
