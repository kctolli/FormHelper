import axios from 'axios';

export default class FormService {
    private baseUrl: string = "";

    constructor(baseUrl = "") {
        this.baseUrl = baseUrl;
    }

    public submitForm = async (path: string, formData: any) => {
        try {
            const { result } = await this.sendRequest(path, formData, 'post');
            return result || false;
        } catch (e) {
            console.error('Error submitting support form [submitSupportForm] -', e);
            return false;
        }
    };

    private sendRequest = async (
        path: string,
        body: any,
        method: string = 'get',
        options: any = { headers: { 'Content-Type': 'multipart/form-data' } }
    ) => {
        try {
            const link = `${this.baseUrl}${path}`;
            // @ts-ignore
            const { data } = await axios[method].apply(null, [link, body, options]);
            return data;
        } catch (e) {
            console.error(`Error sending support request for ${path} [sendRequest] -`, e);
            return false;
        }
    };

    /**
     * Convert form object to form data
     * 
     * Log form data in console
     * for (var [key, value] of formData.entries()) { 
     *     console.log({key, value});
     * }
     * 
     * @param formObj 
     * @returns FormData 
     */

    public static createFormData = ( formObj: Record<string, any> ) : FormData => {
        const formData = new FormData();
        Object.entries(formObj).forEach(([fieldName, fieldValue]) => {
            formData.append(fieldName, fieldValue);
        });

        return formData;
    }
}
