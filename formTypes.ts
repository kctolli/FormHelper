export type InputType = {
    label: string;
    type: string;
    name: string;
    required?: boolean;
    classes?: string;
    onChange?: any;
    value?: string;
};

export type SelectType = {
    label: string;
    name: string;
    children: any;
    emptyOption?: string;
    disabled?: boolean;
    required?: boolean;
    classes?: string;
    onChange?: any;
    value?: string;
};

export type SubmitButtonType = {
    labels?: Record<string, string>; 
    submitting?: boolean;
};

export type OptionType = {
    label: string;
};

export type ObjOptionType = {
    obj: Record<string, string>;
};

export type ArrOptionType = {
    arr: string[];
};

export type FileUploadType = {
    label: string;
    name: string;
    fileSizeLimit?: number;
    required?: boolean;
    classes?: string;
    disabled?: boolean;
    onChange?: any;
    value?: string;
};
