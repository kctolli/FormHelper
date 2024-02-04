# FormHelper

Package that makes building a react form easier. This package has different components and other helper functions to help build a form in react. 

Install using `npm i --save @kctolli/formhelper`. Then you can import it with `import FormHelper from @kctolli/formhelper;` into your React file. 

## Modules

- FormComponents -> React Components used to build the form 
    - FileUpload -> Part of Form Components used to build a File Upload Component
    - Input -> Both a basic and textarea field 
    - Select -> Create a select dropdown 
    - SubmitBtn -> Button with type submit with default submit and processing labels
    - ObjOption -> Give it an object and it builds multiple options from the obj data
    - ArrOption -> Give it an array and it builds multiple options from the array data
- FormService -> Axios helper to push FormData into the backend (constructor needs a baseurl, defaults to a the current url)
    - submitForm -> Submit form helper function params needed are path and formData
    - createFormData -> Converts a given obj to the JS FormData Object

### Package Exports

- Axios -> https://www.npmjs.com/package/axios
- React -> https://www.npmjs.com/package/react
    - memo
    - useRef
    - useState
    - useEffect
- React Recaptcha -> https://www.npmjs.com/package/react-google-recaptcha
